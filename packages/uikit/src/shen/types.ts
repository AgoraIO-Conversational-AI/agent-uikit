/**
 * Shen.AI type definitions.
 * Shared between the ShenPanel component and any hooks that produce Shen data.
 */

export interface ShenMeasurementResults {
  heart_rate_bpm: number | null;
  hrv_sdnn_ms: number | null;
  stress_index: number | null;
  breathing_rate_bpm: number | null;
  systolic_bp: number | null;
  diastolic_bp: number | null;
  cardiac_workload: number | null;
  /** Raw signal quality in 0–1 range. Multiply by 100 to display as a percentage. */
  signal_quality: number | null;
  age_years: number | null;
}

export interface ShenState {
  sdkLoaded: boolean;
  initialized: boolean;
  faceState: string;
  measurementState: string;
  progress: number;
  /** Processed heart rate. Falls back to realtimeHr when null. */
  heartRate: number | null;
  /** Raw realtime heart rate from the SDK. Use heartRate in preference to this field. */
  realtimeHr: number | null;
  hrvSdnn: number | null;
  stressIndex: number | null;
  breathingRate: number | null;
  systolicBP: number | null;
  diastolicBP: number | null;
  cardiacWorkload: number | null;
  signalQuality: number | null;
  results: ShenMeasurementResults | null;
}

/**
 * RTM publish callback type.
 * Passed to a Shen hook so it can push vitals to the server without
 * depending on a specific RTM implementation.
 */
export type RTMPublish = (message: string) => Promise<boolean>;
