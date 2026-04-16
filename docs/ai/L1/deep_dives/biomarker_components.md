# Biomarker Components

> **When to Read This:** Use this document when editing Thymia RTM-driven features or Shen-based vitals UI.

## Scope

This repo has two adjacent but different health/measurement UI areas:

- Thymia biomarker UI in the `/thymia` entry
- Shen vitals UI in the base entry

They should not be conflated.

## Main Files

| Component Or Hook | File |
| --- | --- |
| `ThymiaPanel` | `packages/uikit/src/components/thymia/thymia-panel.tsx` |
| `useThymia` | `packages/uikit/src/hooks/use-thymia.ts` |
| `useRTMSubscription` | `packages/uikit/src/hooks/use-rtm-subscription.ts` |
| `ShenPanel` | `packages/uikit/src/components/shen/shen-panel.tsx` |

## ThymiaPanel (Thymia entry)

Voice biomarker analysis panel that receives data via RTM messages.

### Data Pipeline

```
Agora RTM → useRTMSubscription("thymia.biomarkers" | "thymia.progress")
  → useThymia() (state reducer)
    → ThymiaPanel (visualization)
```

### Biomarker Categories

| Category   | Key Examples                                                       |
| ---------- | ------------------------------------------------------------------ |
| Emotions   | anger, contempt, disgust, fear, happiness, sadness, surprise, neutral |
| Wellness   | depression, anxiety, stress, fatigue, pain                         |
| Clinical   | everything else (Apollo clinical biomarkers)                       |

### Score Display

- Values 0-100 with color coding:
  - Green (`< 30%`): normal range
  - Amber (`30-60%`): elevated
  - Red (`> 60%`): high
- 2-column layout for emotions and clinical, 1-column for wellness

### Safety Analysis

```typescript
interface SafetyData {
  level?: number | null;
  alert?: string | boolean;
  concerns?: string[];
  recommended_actions?: {
    for_agent?: string;
    for_human_reviewer?: string;
    urgency?: string;
  };
}
```

Alert levels:
- `none` — no concerns
- `monitor` — watch for escalation
- `professional_referral` — recommend professional help
- `crisis` — immediate attention needed

### Progress Tracking

Each biomarker model has progress data:

```typescript
interface ProgressItem {
  speech_seconds: number;    // seconds of speech analyzed
  trigger_seconds: number;   // seconds needed to trigger analysis
  processing: boolean;       // currently computing
}
```

Rendered as progress bars with pulsing animation during processing.

### useThymia Hook

```typescript
function useThymia(
  rtmSource: RTMEventSource | null,
  enabled?: boolean
): ThymiaState

interface ThymiaState {
  biomarkers: Record<string, number | null>;
  wellness: Record<string, number | null>;
  clinical: Record<string, number | null>;
  safety: Record<string, unknown>;
  progress: Record<string, ProgressItem>;
}
```

- Subscribes to RTM messages via `useRTMSubscription`
- Validates and extracts numeric values
- Resets all state when `enabled` becomes `false`

### useRTMSubscription Hook

```typescript
function useRTMSubscription(
  rtmSource: RTMEventSource | null,
  messageType: string,
  onMessage: (message: RTMMessage) => void,
  enabled?: boolean
): void
```

- Filters RTM messages by `object` field matching `messageType`
- Handles both `string` and `Uint8Array` message formats
- Uses callback ref pattern to avoid re-subscription on handler changes

---

## ShenPanel (Base entry)

Camera-based vitals measurement using Shen.AI SDK. No Agora dependency — renders state provided by the consumer.

### Vital Measurements

| Metric         | Unit   | Warning Threshold       |
| -------------- | ------ | ----------------------- |
| Heart Rate     | bpm    | > 100 or < 50           |
| HRV (SDNN)     | ms     | < 20                    |
| Stress Index   | index  | > 50                    |
| Breathing Rate | bpm    | > 20 or < 12            |
| Blood Pressure | mmHg   | systolic > 140 or diastolic > 90 |
| Signal Quality | %      | < 50%                   |
| Cardiac Work   | units  | (no threshold)          |

### Display Modes

1. **Disconnected**: "Connect to start camera vitals"
2. **Loading**: spinner while Shen.AI SDK loads
3. **Measuring**: real-time vitals + progress bar (0-100%)
4. **Results**: final measurement results with estimated age

### Heart Rate Priority

1. Use `heartRate` (processed/smoothed value) if available
2. Fall back to `realtimeHr` (raw SDK value) if processed unavailable

### Props

```typescript
interface ShenPanelProps {
  shenState: ShenState;
  isConnected: boolean;
  canvasId?: string;   // unused, kept for backward compat
  className?: string;
}

interface ShenState {
  sdkLoaded: boolean;
  initialized: boolean;
  faceState: string;
  measurementState: string;
  progress: number;
  heartRate: number | null;
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
```

## High-Risk Changes

- loosening RTM payload checks until malformed messages become rendering failures
- blurring the distinction between data collection logic and display logic
- moving Shen logic behind an unnecessary optional SDK boundary

## Related Files

- [06_interfaces.md](../06_interfaces.md)
- [08_security.md](../08_security.md)
- [realtime_integrations.md](realtime_integrations.md)
