"use client";

import { useState, useCallback, useEffect } from "react";
import { useRTMSubscription } from "./use-rtm-subscription";
import type { RTMEventSource } from "./use-rtm-subscription";

interface ThymiaState {
  biomarkers: Record<string, number | null>;
  wellness: Record<string, number | null>;
  clinical: Record<string, number | null>;
  safety: Record<string, unknown>;
  progress: Record<
    string,
    {
      speech_seconds: number;
      trigger_seconds: number;
      processing: boolean;
    }
  >;
}

/**
 * Hook for Thymia voice biomarker data.
 *
 * Subscribes to `thymia.biomarkers` and `thymia.progress` RTM messages
 * and maintains state for all biomarker categories.
 *
 * @param rtmSource - Event source that emits "message" events (null = not ready)
 * @param enabled - Whether to listen for Thymia messages (default: true)
 * @returns Current Thymia biomarker state
 */
export function useThymia(
  rtmSource: RTMEventSource | null,
  enabled: boolean = true,
): ThymiaState {
  const [biomarkers, setBiomarkers] = useState<Record<string, number | null>>(
    {},
  );
  const [wellness, setWellness] = useState<Record<string, number | null>>({});
  const [clinical, setClinical] = useState<Record<string, number | null>>({});
  const [safety, setSafety] = useState<Record<string, unknown>>({});
  const [progress, setProgress] = useState<ThymiaState["progress"]>({});

  const handleBiomarkers = useCallback((msg: Record<string, unknown>) => {
    if (msg.biomarkers)
      setBiomarkers(msg.biomarkers as Record<string, number | null>);
    if (msg.wellness)
      setWellness(msg.wellness as Record<string, number | null>);
    if (msg.clinical)
      setClinical(msg.clinical as Record<string, number | null>);
    if (msg.safety) setSafety(msg.safety as Record<string, unknown>);

    const keys = Object.keys(
      (msg.biomarkers || {}) as Record<string, unknown>,
    ).filter((k) => {
      const v = (msg.biomarkers as Record<string, number | null>)[k];
      return (
        v !== null &&
        v !== undefined &&
        Number.isFinite(v) &&
        Math.abs(v) >= 0.001
      );
    });
    if (keys.length > 0) {
      const serverTs = msg._server_ts as number | undefined;
      const lag = serverTs ? `lag=${Date.now() - serverTs}ms` : "no_server_ts";
      console.log(
        `[RTM_RECV] t=${Date.now()} biomarkers ${lag} keys=[${keys.join(",")}]`,
      );
    }
  }, []);

  const handleProgress = useCallback((msg: Record<string, unknown>) => {
    if (msg.progress) {
      const p = msg.progress as ThymiaState["progress"];
      setProgress(p);
      const summary = Object.entries(p)
        .map(
          ([k, v]) =>
            `${k}:${v.speech_seconds.toFixed(1)}/${v.trigger_seconds}s${v.processing ? "*" : ""}`,
        )
        .join(" ");
      const serverTs = msg._server_ts as number | undefined;
      const lag = serverTs ? `lag=${Date.now() - serverTs}ms` : "no_server_ts";
      console.log(`[RTM_RECV] t=${Date.now()} progress ${lag} ${summary}`);
    }
  }, []);

  // Reset all state when disabled (e.g. call ended)
  useEffect(() => {
    if (!enabled) {
      setBiomarkers({});
      setWellness({});
      setClinical({});
      setSafety({});
      setProgress({});
    }
  }, [enabled]);

  useRTMSubscription(rtmSource, "thymia.biomarkers", handleBiomarkers, enabled);
  useRTMSubscription(rtmSource, "thymia.progress", handleProgress, enabled);

  return { biomarkers, wellness, clinical, safety, progress };
}
