/**
 * Tests for useRTMSubscription hook
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";

import { debug } from "../../lib/debug";
import { useRTMSubscription, type RTMEventSource } from "../use-rtm-subscription";

function createMockRTMSource(): RTMEventSource & { on: ReturnType<typeof vi.fn>; off: ReturnType<typeof vi.fn> } {
  return {
    on: vi.fn(),
    off: vi.fn(),
  };
}

/** Capture the handler passed to rtmSource.on("message", handler) */
function captureHandler(source: ReturnType<typeof createMockRTMSource>) {
  const call = source.on.mock.calls.find(([event]) => event === "message");
  return call?.[1] as ((event: { message: string | Uint8Array }) => void) | undefined;
}

describe("useRTMSubscription", () => {
  let rtmSource: ReturnType<typeof createMockRTMSource>;

  beforeEach(() => {
    rtmSource = createMockRTMSource();
    vi.spyOn(debug, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("calls onMessage when a matching string message arrives", () => {
    const onMessage = vi.fn();
    renderHook(() => useRTMSubscription(rtmSource, "test.type", onMessage));

    const handler = captureHandler(rtmSource);
    expect(handler).toBeDefined();

    handler!({ message: JSON.stringify({ object: "test.type", data: 42 }) });
    expect(onMessage).toHaveBeenCalledWith({ object: "test.type", data: 42 });
  });

  it("calls onMessage when a matching Uint8Array message arrives", () => {
    const onMessage = vi.fn();
    renderHook(() => useRTMSubscription(rtmSource, "test.type", onMessage));

    const handler = captureHandler(rtmSource);
    const jsonStr = JSON.stringify({ object: "test.type", value: "hello" });
    const encoded = new Uint8Array(Buffer.from(jsonStr, "utf-8"));
    handler!({ message: encoded });

    expect(onMessage).toHaveBeenCalledWith({ object: "test.type", value: "hello" });
  });

  it("does NOT call onMessage for non-matching messageType", () => {
    const onMessage = vi.fn();
    renderHook(() => useRTMSubscription(rtmSource, "test.type", onMessage));

    const handler = captureHandler(rtmSource);
    handler!({ message: JSON.stringify({ object: "other.type", data: 1 }) });

    expect(onMessage).not.toHaveBeenCalled();
  });

  it("does not subscribe when enabled=false", () => {
    const onMessage = vi.fn();
    renderHook(() => useRTMSubscription(rtmSource, "test.type", onMessage, false));

    expect(rtmSource.on).not.toHaveBeenCalled();
  });

  it("does not subscribe when rtmSource is null", () => {
    const onMessage = vi.fn();
    renderHook(() => useRTMSubscription(null, "test.type", onMessage));

    // Nothing to assert on source — just verify no error thrown
    expect(onMessage).not.toHaveBeenCalled();
  });

  it("unsubscribes on unmount (calls off)", () => {
    const onMessage = vi.fn();
    const { unmount } = renderHook(() => useRTMSubscription(rtmSource, "test.type", onMessage));

    const handler = captureHandler(rtmSource);
    unmount();

    expect(rtmSource.off).toHaveBeenCalledWith("message", handler);
  });

  it("handles malformed JSON gracefully (no throw)", () => {
    const onMessage = vi.fn();
    const warnSpy = vi.spyOn(debug, "warn").mockImplementation(() => {});
    renderHook(() => useRTMSubscription(rtmSource, "test.type", onMessage));

    const handler = captureHandler(rtmSource);

    // Should not throw
    expect(() => handler!({ message: "not valid json{{{" })).not.toThrow();
    expect(onMessage).not.toHaveBeenCalled();
    expect(warnSpy).toHaveBeenCalled();
    warnSpy.mockRestore();
  });

  it("re-subscribes when messageType changes", () => {
    const onMessage = vi.fn();
    const { rerender } = renderHook(
      ({ msgType }) => useRTMSubscription(rtmSource, msgType, onMessage),
      { initialProps: { msgType: "type.a" } },
    );

    expect(rtmSource.on).toHaveBeenCalledTimes(1);
    const firstHandler = captureHandler(rtmSource);

    rerender({ msgType: "type.b" });

    // Should have unsubscribed the old handler and subscribed a new one
    expect(rtmSource.off).toHaveBeenCalledWith("message", firstHandler);
    expect(rtmSource.on).toHaveBeenCalledTimes(2);
  });

  it("uses latest callback without re-subscribing", () => {
    const onMessage1 = vi.fn();
    const onMessage2 = vi.fn();

    const { rerender } = renderHook(
      ({ cb }) => useRTMSubscription(rtmSource, "test.type", cb),
      { initialProps: { cb: onMessage1 } },
    );

    // Only one subscription
    expect(rtmSource.on).toHaveBeenCalledTimes(1);

    // Change callback — should NOT re-subscribe (callback is not in deps)
    rerender({ cb: onMessage2 });
    expect(rtmSource.on).toHaveBeenCalledTimes(1);

    // Fire a message — should call the LATEST callback
    const handler = captureHandler(rtmSource);
    handler!({ message: JSON.stringify({ object: "test.type" }) });

    expect(onMessage1).not.toHaveBeenCalled();
    expect(onMessage2).toHaveBeenCalledTimes(1);
  });
});
