/**
 * Tests for useIsMobile hook
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";

import { useIsMobile } from "../use-is-mobile";

describe("useIsMobile", () => {
  let changeHandler: (() => void) | null = null;
  const removeEventListener = vi.fn();
  const addEventListener = vi.fn((event: string, handler: () => void) => {
    if (event === "change") changeHandler = handler;
  });

  beforeEach(() => {
    changeHandler = null;
    addEventListener.mockClear();
    removeEventListener.mockClear();

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockReturnValue({
        matches: false,
        addEventListener,
        removeEventListener,
      }),
    });
  });

  function setWidth(width: number) {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: width,
    });
  }

  it("returns false when window.innerWidth >= 768", () => {
    setWidth(1024);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it("returns true when window.innerWidth < 768", () => {
    setWidth(500);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it("updates when matchMedia fires change event", () => {
    setWidth(1024);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);

    // Simulate resize to mobile
    setWidth(500);
    act(() => {
      changeHandler?.();
    });

    expect(result.current).toBe(true);
  });

  it("cleans up listener on unmount", () => {
    setWidth(1024);
    const { unmount } = renderHook(() => useIsMobile());

    unmount();

    expect(removeEventListener).toHaveBeenCalledWith("change", expect.any(Function));
  });
});
