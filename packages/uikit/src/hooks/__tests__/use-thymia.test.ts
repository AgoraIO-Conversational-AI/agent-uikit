/**
 * Tests for useThymia hook
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";

// Mock useRTMSubscription to capture its arguments
vi.mock("../use-rtm-subscription", () => ({
  useRTMSubscription: vi.fn(),
}));

import { useRTMSubscription } from "../use-rtm-subscription";
import { useThymia } from "../use-thymia";
import type { RTMEventSource } from "../use-rtm-subscription";

const mockUseRTMSubscription = vi.mocked(useRTMSubscription);

function createMockRTMSource(): RTMEventSource {
  return { on: vi.fn(), off: vi.fn() };
}

describe("useThymia", () => {
  beforeEach(() => {
    mockUseRTMSubscription.mockClear();
  });

  it("returns initial empty state", () => {
    const source = createMockRTMSource();
    const { result } = renderHook(() => useThymia(source));

    expect(result.current.biomarkers).toEqual({});
    expect(result.current.wellness).toEqual({});
    expect(result.current.clinical).toEqual({});
    expect(result.current.safety).toEqual({});
    expect(result.current.progress).toEqual({});
  });

  it("subscribes to correct message types", () => {
    const source = createMockRTMSource();
    renderHook(() => useThymia(source));

    // Should subscribe to both thymia.biomarkers and thymia.progress
    const messageTypes = mockUseRTMSubscription.mock.calls.map((call) => call[1]);
    expect(messageTypes).toContain("thymia.biomarkers");
    expect(messageTypes).toContain("thymia.progress");
  });

  it("passes enabled flag to subscriptions", () => {
    const source = createMockRTMSource();
    renderHook(() => useThymia(source, false));

    // Both subscriptions should receive enabled=false
    for (const call of mockUseRTMSubscription.mock.calls) {
      expect(call[3]).toBe(false);
    }
  });

  it("updates biomarkers when biomarkers message arrives", () => {
    const source = createMockRTMSource();
    const { result } = renderHook(() => useThymia(source));

    // Find the biomarkers subscription callback
    const biomarkersCall = mockUseRTMSubscription.mock.calls.find(
      (call) => call[1] === "thymia.biomarkers",
    );
    expect(biomarkersCall).toBeDefined();
    const handleBiomarkers = biomarkersCall![2];

    act(() => {
      handleBiomarkers({
        object: "thymia.biomarkers",
        biomarkers: { depression: 0.3 },
        wellness: { energy: 0.8 },
        clinical: { phq9: 0.2 },
        safety: { flagged: false },
      });
    });

    expect(result.current.biomarkers).toEqual({ depression: 0.3 });
    expect(result.current.wellness).toEqual({ energy: 0.8 });
    expect(result.current.clinical).toEqual({ phq9: 0.2 });
    expect(result.current.safety).toEqual({ flagged: false });
  });

  it("updates progress when progress message arrives", () => {
    const source = createMockRTMSource();
    const { result } = renderHook(() => useThymia(source));

    // Find the progress subscription callback
    const progressCall = mockUseRTMSubscription.mock.calls.find(
      (call) => call[1] === "thymia.progress",
    );
    expect(progressCall).toBeDefined();
    const handleProgress = progressCall![2];

    act(() => {
      handleProgress({
        object: "thymia.progress",
        progress: {
          task1: { speech_seconds: 10, trigger_seconds: 30, processing: true },
        },
      });
    });

    expect(result.current.progress).toEqual({
      task1: { speech_seconds: 10, trigger_seconds: 30, processing: true },
    });
  });

  it("resets state when disabled", () => {
    const source = createMockRTMSource();
    const { result, rerender } = renderHook(
      ({ enabled }) => useThymia(source, enabled),
      { initialProps: { enabled: true } },
    );

    // Simulate receiving biomarkers data
    const biomarkersCall = mockUseRTMSubscription.mock.calls.find(
      (call) => call[1] === "thymia.biomarkers",
    );
    const handleBiomarkers = biomarkersCall![2];

    act(() => {
      handleBiomarkers({
        object: "thymia.biomarkers",
        biomarkers: { depression: 0.3 },
      });
    });

    expect(result.current.biomarkers).toEqual({ depression: 0.3 });

    // Disable — state should reset
    rerender({ enabled: false });

    expect(result.current.biomarkers).toEqual({});
    expect(result.current.wellness).toEqual({});
    expect(result.current.clinical).toEqual({});
    expect(result.current.safety).toEqual({});
    expect(result.current.progress).toEqual({});
  });
});
