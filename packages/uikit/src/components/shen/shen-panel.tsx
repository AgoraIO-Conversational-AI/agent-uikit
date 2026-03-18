"use client";

import { cn } from "../../lib/utils";

export interface ShenMeasurementResults {
  heart_rate_bpm: number | null;
  hrv_sdnn_ms: number | null;
  stress_index: number | null;
  breathing_rate_bpm: number | null;
  systolic_bp: number | null;
  diastolic_bp: number | null;
  cardiac_workload: number | null;
  signal_quality: number | null;
  age_years: number | null;
}

export interface ShenState {
  sdkLoaded: boolean;
  initialized: boolean;
  faceState: string;
  measurementState: string;
  progress: number;
  heartRate: number | null;
  hrvSdnn: number | null;
  stressIndex: number | null;
  breathingRate: number | null;
  systolicBP: number | null;
  diastolicBP: number | null;
  cardiacWorkload: number | null;
  signalQuality: number | null;
  realtimeHr: number | null;
  results: ShenMeasurementResults | null;
}

/**
 * RTM publish function type — caller provides this so the hook can push
 * vitals to the server without depending on a specific RTM implementation.
 */
export type RTMPublish = (message: string) => Promise<boolean>;

export interface ShenPanelProps {
  shenState: ShenState;
  canvasId?: string;
  isConnected: boolean;
}

function formatValue(
  value: number | null,
  unit: string,
  decimals = 0,
): string {
  if (value === null || !Number.isFinite(value)) return "\u2014";
  const v = decimals > 0 ? value.toFixed(decimals) : Math.round(value);
  return unit ? `${v} ${unit}` : `${v}`;
}

function VitalRow({
  label,
  value,
  unit,
  decimals,
  warn,
}: {
  label: string;
  value: number | null;
  unit: string;
  decimals?: number;
  warn?: (v: number) => boolean;
}) {
  const valid = value !== null && Number.isFinite(value);
  const isWarn = valid && warn?.(value!);
  return (
    <div className="flex items-center justify-between py-0.5">
      <span className="text-sm text-muted-foreground">
        {label}
      </span>
      <span
        className={cn(
          "text-sm font-bold tabular-nums ml-2 shrink-0",
          valid
            ? isWarn
              ? "text-amber-600 dark:text-amber-400"
              : "text-green-600 dark:text-green-400"
            : "text-muted-foreground",
        )}
      >
        {formatValue(value, unit, decimals)}
      </span>
    </div>
  );
}

function VitalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
        {title}
      </h3>
      <div className="rounded border bg-background px-3 py-1.5">
        {children}
      </div>
    </div>
  );
}

function ProgressBar({ progress }: { progress: number }) {
  const pct = Math.min(100, Math.max(0, Math.round(progress)));
  return (
    <div className="rounded border bg-background px-3 py-2">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          Measurement Progress
        </span>
        <span className="text-sm font-bold tabular-nums text-foreground">
          {pct}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-teal-500 transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export function ShenPanel({ shenState, isConnected }: ShenPanelProps) {
  if (!isConnected) {
    return (
      <div className="flex h-full items-center justify-center p-6">
        <div className="text-center">
          <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-muted flex items-center justify-center">
            <svg
              className="h-6 w-6 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <p className="text-sm text-muted-foreground">
            Connect to start camera vitals
          </p>
        </div>
      </div>
    );
  }

  if (!shenState.sdkLoaded) {
    return (
      <div className="flex h-full flex-col overflow-auto p-4 gap-3">
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-2 h-8 w-8 rounded-full bg-muted flex items-center justify-center">
              <div className="h-3 w-3 rounded-full border-2 border-muted-foreground border-t-transparent animate-spin" />
            </div>
            <p className="text-sm text-muted-foreground">
              Loading Shen.AI SDK...
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              This may take a moment
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col overflow-auto p-4 gap-3">
      {shenState.progress > 0 && (
        <ProgressBar progress={shenState.progress} />
      )}

      <VitalSection title="Realtime Vitals">
        <VitalRow label="Heart Rate" value={shenState.heartRate ?? shenState.realtimeHr} unit="bpm" warn={(v) => v > 100 || v < 50} />
        <VitalRow label="HRV (SDNN)" value={shenState.hrvSdnn} unit="ms" warn={(v) => v < 20} />
        <VitalRow label="Stress Index" value={shenState.stressIndex} unit="" warn={(v) => v > 50} />
        <VitalRow label="Breathing Rate" value={shenState.breathingRate} unit="bpm" warn={(v) => v > 20 || v < 12} />
      </VitalSection>

      <VitalSection title="Measurement Results">
        <VitalRow label="Estimated Age" value={shenState.results?.age_years ?? null} unit="yrs" />
        <VitalRow label="Heart Rate" value={shenState.results?.heart_rate_bpm ?? null} unit="bpm" warn={(v) => v > 100 || v < 50} />
        <VitalRow label="HRV (SDNN)" value={shenState.results?.hrv_sdnn_ms ?? null} unit="ms" warn={(v) => v < 20} />
        <VitalRow label="Stress Index" value={shenState.results?.stress_index ?? null} unit="" warn={(v) => v > 50} />
        <VitalRow label="Breathing Rate" value={shenState.results?.breathing_rate_bpm ?? null} unit="bpm" warn={(v) => v > 20 || v < 12} />
        <VitalRow label="Systolic BP" value={shenState.results?.systolic_bp ?? null} unit="mmHg" warn={(v) => v > 140} />
        <VitalRow label="Diastolic BP" value={shenState.results?.diastolic_bp ?? null} unit="mmHg" warn={(v) => v > 90} />
        <VitalRow label="Cardiac Workload" value={shenState.results?.cardiac_workload ?? null} unit="" />
        <VitalRow
          label="Signal Quality"
          value={shenState.results?.signal_quality != null ? shenState.results.signal_quality * 100 : null}
          unit="%"
          warn={(v) => v < 50}
        />
      </VitalSection>
    </div>
  );
}
