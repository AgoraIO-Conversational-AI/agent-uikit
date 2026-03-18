"use client";

import { useState, useCallback, useEffect } from "react";
import { useRTMSubscription } from "./use-rtm-subscription";
import type { RTMEventSource } from "./use-rtm-subscription";
import { debug } from "../lib/debug";

/**
 * Extract only numeric (or null) entries from a plain object.
 * Returns null if the input isn't an object or has no numeric values.
 */
function extractNumberRecord(
  val: unknown,
): Record<string, number | null> | null {
  if (typeof val !== "object" || val === null || Array.isArray(val)) return null;
  const result: Record<string, number | null> = {};
  let count = 0;
  for (const [k, v] of Object.entries(val as Record<string, unknown>)) {
    if (typeof v === "number" || v === null) {
      result[k] = v as number | null;
      count++;
    }
  }
  return count > 0 ? result : null;
}

function isPlainObject(val: unknown): val is Record<string, unknown> {
  return typeof val === "object" && val !== null && !Array.isArray(val);
}

function isProgressRecord(val: unknown): val is ThymiaState["progress"] {
  if (!isPlainObject(val)) return false;
  return Object.values(val).every(
    (v) =>
      isPlainObject(v) &&
      typeof v.speech_seconds === "number" &&
      typeof v.trigger_seconds === "number" &&
      typeof v.processing === "boolean",
  );
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
    const bio = extractNumberRecord(msg.biomarkers);
    debug.log(`useThymia: biomarkers received, extracted ${bio ? Object.keys(bio).length : 0} scores`);
    if (bio) setBiomarkers(bio);
    const well = extractNumberRecord(msg.wellness);
    if (well) setWellness(well);
    const clin = extractNumberRecord(msg.clinical);
    if (clin) setClinical(clin);
    if (isPlainObject(msg.safety)) setSafety(msg.safety);
  }, []);

  const handleProgress = useCallback((msg: Record<string, unknown>) => {
    if (isProgressRecord(msg.progress)) {
      setProgress(msg.progress);
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
