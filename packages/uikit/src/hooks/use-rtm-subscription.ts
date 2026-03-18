"use client";

import { useEffect, useRef } from "react";

import { debug } from "../lib/debug";

export interface RTMMessage {
  object: string;
  [key: string]: unknown;
}

export interface RTMEventSource {
  on(
    event: string,
    handler: (event: { message: string | Uint8Array }) => void,
  ): void;
  off(
    event: string,
    handler: (event: { message: string | Uint8Array }) => void,
  ): void;
}

/**
 * Generic hook for subscribing to RTM messages by object type.
 *
 * Accepts an RTMEventSource (e.g. an adapter around RTMHelper) that emits
 * "message" events. This hook filters messages by their `object` field and
 * calls the provided callback when a match is found.
 *
 * @param rtmSource - Event source that emits "message" events (null = not ready)
 * @param messageType - The `object` field to filter for (e.g., "thymia.biomarkers")
 * @param onMessage - Callback fired when a matching message arrives
 * @param enabled - Whether the subscription is active (default: true)
 *
 * @example
 * // Create an adapter around RTMHelper:
 * const rtmSource = useMemo(() => {
 *   const h = RTMHelper.getInstance();
 *   return { on: (e, fn) => h.on(e, fn), off: (e, fn) => h.off(e, fn) };
 * }, []);
 *
 * useRTMSubscription(rtmSource, "thymia.biomarkers", (msg) => {
 *   setBiomarkers(msg.biomarkers)
 * })
 */
export function useRTMSubscription(
  rtmSource: RTMEventSource | null,
  messageType: string,
  onMessage: (message: RTMMessage) => void,
  enabled: boolean = true,
) {
  // Ref pattern: keeps the callback fresh without re-subscribing the effect.
  // callbackRef.current is updated on every render (before commit), so when
  // the RTM handler fires it always invokes the latest onMessage closure.
  const callbackRef = useRef(onMessage);
  callbackRef.current = onMessage;

  useEffect(() => {
    if (!enabled || !rtmSource) return;

    const handler = (event: { message: string | Uint8Array }) => {
      try {
        const messageData = event.message;
        let msgStr: string;
        if (typeof messageData === "string") {
          msgStr = messageData;
        } else if (messageData instanceof Uint8Array) {
          msgStr = new TextDecoder("utf-8").decode(messageData);
        } else {
          return;
        }

        const parsed = JSON.parse(msgStr) as RTMMessage;
        if (parsed.object === messageType) {
          callbackRef.current(parsed);
        }
      } catch (error) {
        debug.warn(`useRTMSubscription [${messageType}]: failed to parse message`, error);
      }
    };

    rtmSource.on("message", handler);
    return () => {
      rtmSource.off("message", handler);
    };
  }, [rtmSource, messageType, enabled]);
}
