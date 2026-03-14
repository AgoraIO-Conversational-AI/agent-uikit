"use client";

import { useState, useCallback, useEffect } from "react";
import { useRTMSubscription } from "./use-rtm-subscription";
import type { RTMEventSource } from "./use-rtm-subscription";

function isNumberRecord(val: unknown): val is Record<string, number | null> {
  if (typeof val !== "object" || val === null || Array.isArray(val)) return false;
  return Object.values(val as Record<string, unknown>).every(
    (v) => typeof v === "number" || v === null,
  );
}

function isPlainObject(val: unknown): val is Record<string, unknown> {
  return typeof val === "object" && val !== null && !Array.isArray(val);
}

export interface ThymiaState {
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
    if (isNumberRecord(msg.biomarkers)) setBiomarkers(msg.biomarkers);
    if (isNumberRecord(msg.wellness)) setWellness(msg.wellness);
    if (isNumberRecord(msg.clinical)) setClinical(msg.clinical);
    if (isPlainObject(msg.safety)) setSafety(msg.safety);
  }, []);

  const handleProgress = useCallback((msg: Record<string, unknown>) => {
    if (isPlainObject(msg.progress)) {
      setProgress(msg.progress as ThymiaState["progress"]);
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
