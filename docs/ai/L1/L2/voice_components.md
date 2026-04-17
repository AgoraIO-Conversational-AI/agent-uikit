# Voice Components

> **When to Read This:** Use this document when changing agent animations, microphone controls, or any component that visualizes live audio.

## Main Files

| Component Or Hook | File |
| --- | --- |
| `AgentVisualizer` | `packages/uikit/src/components/voice/agent-visualizer.tsx` |
| `MicButton` | `packages/uikit/src/components/voice/mic-button.tsx` |
| `AudioVisualizer` | `packages/uikit/src/components/voice/audio-visualizer.tsx` |
| `SimpleVisualizer` | `packages/uikit/src/components/voice/simple-visualizer.tsx` |
| `LiveWaveform` | `packages/uikit/src/components/voice/live-waveform.tsx` |
| `MicButtonWithVisualizer` | `packages/uikit/src/components/voice/mic-button-with-visualizer.tsx` |
| `MicSelector` | `packages/uikit/src/components/voice/mic-selector.tsx` |

## AgentVisualizer

Lottie-based animation component with 7 states.

### States & Animations

| State          | Animation                | Description                  |
| -------------- | ------------------------ | ---------------------------- |
| `not-joined`   | bundled `.lottie` data   | idle / pre-connection        |
| `joining`      | bundled `.lottie` data   | connecting spinner           |
| `ambient`      | bundled `.lottie` data   | connected but idle           |
| `listening`    | bundled `.lottie` data   | actively receiving audio     |
| `analyzing`    | bundled `.lottie` data   | processing user input        |
| `talking`      | bundled `.lottie` data   | agent is speaking            |
| `disconnected` | bundled `.lottie` data   | session ended                |

### Sizes

| Size | Container | Text  |
| ---- | --------- | ----- |
| sm   | 32px      | 16px  |
| md   | 48px      | 16px  |
| lg   | 64px      | 18px  |

### Props

```typescript
interface AgentVisualizerProps {
  state: AgentVisualizerState;        // required
  size?: AgentVisualizerSize;          // default: "md"
  lottiePaths?: Partial<Record<AgentVisualizerState, string>>;  // CDN overrides
  className?: string;
}
```

The component uses bundled state-specific `.lottie` files by default. `lottiePaths` is a partial override map, so consumers can replace only selected states and fall back to bundled animations for the rest.

Customization guidance:

- use bundled defaults when you want the stock Agora visual language
- pass `lottiePaths` when you want branded animations for one or more states
- wrap `AgentVisualizer` in an app-local component if you want the same override set reused everywhere without repeating the prop

---

## MicButton

State-driven microphone toggle button.

### State Behaviors

| State        | Icon     | Border  | Disabled | Badge            |
| ------------ | -------- | ------- | -------- | ---------------- |
| `idle`       | Mic      | default | no       | none             |
| `listening`  | Mic      | cyan    | no       | none             |
| `processing` | Mic      | amber   | no       | none             |
| `error`      | MicOff   | red     | yes      | amber "!" circle |

### Props

```typescript
interface MicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state?: MicButtonState;       // default: "idle"
  icon?: React.ReactNode;       // override default Mic icon
  showErrorBadge?: boolean;     // default: false
  audioData?: number[];         // normalized 0-1 frequency data → SimpleVisualizer
}
```

---

## AudioVisualizer

Real-time frequency bar visualizer using Web Audio API.

### Audio Pipeline

1. Accepts Agora `ILocalAudioTrack` / `IRemoteAudioTrack` or native `MediaStream`
2. Calls `track.getMediaStreamTrack()` for Agora tracks
3. Creates `AudioContext` + `AnalyserNode` (FFT size 64)
4. `requestAnimationFrame` loop reads frequency data
5. 9 bars mapped from frequency bins with scaling multipliers
6. Symmetric layout: bars mirror around center

### Frequency Bin Mapping

```
Bar index:  0    1    2    3    4    5    6    7    8
Bin range:  24-31 16-23 8-15 4-7  0-3  4-7  8-15 16-23 24-31
Multiplier: 1.0  1.2  1.5  2.0  2.5  2.0  1.5  1.2  1.0
```

### Props

```typescript
interface AudioVisualizerProps {
  track: ILocalAudioTrack | IRemoteAudioTrack | MediaStream | undefined;
  gradientColors?: string[];    // default: ["#A0FAFF", "#FCF9F8", "#C46FFB"]
  className?: string;
}
```

---

## LiveWaveform

Canvas-based waveform with built-in microphone capture or external data input.

### Dual Mode

- **Internal capture**: set `active={true}` + optional `deviceId` — requests `getUserMedia`
- **External data**: provide `data={number[]}` — skips capture, renders directly

### Idle Animation

When `active={false}` and no `data` provided, renders a gentle sine wave using `performance.now()`.

### Canvas Rendering

- Uses `window.devicePixelRatio` for retina scaling
- `ResizeObserver` tracks container size
- Bars drawn centered with optional edge fading (linear gradient alpha)
- Frequency data mirrored from center outward

### Props

```typescript
interface LiveWaveformProps {
  active?: boolean;
  data?: number[];
  deviceId?: string;
  fftSize?: number;                // default: 256
  smoothingTimeConstant?: number;  // default: 0.8
  sensitivity?: number;            // default: 1
  barWidth?: number;               // default: 3
  barGap?: number;                 // default: 1
  barRadius?: number;              // default: 1.5
  barColor?: string;               // inherits computed style
  fadeEdges?: boolean;             // default: true
  fadeWidth?: number;              // default: 24
  height?: string | number;        // default: 64
  minAlpha?: number | null;        // default: null
  alphaRange?: number;             // default: 1.0
  onError?: (error: Error) => void;
  className?: string;
}
```

---

## MicButtonWithVisualizer (RTC entry)

Combined microphone button with 5 built-in frequency bars. Requires `agora-rtc-react`.

### Auto-Publish Behavior

When `onToggle` is **not** provided:
1. Toggle on → `client.publish(track)`
2. Toggle off → `client.unpublish(track)`

Provide `onToggle` to override this behavior.

### Props

```typescript
interface MicButtonWithVisualizerProps {
  isEnabled: boolean;
  setIsEnabled: (enabled: boolean) => void;
  track: IMicrophoneAudioTrack | MediaStream | null;
  enabledColor?: string;        // default: "#A0FAFF"
  disabledColor?: string;       // default: "#DE344A"
  onToggle?: () => void | Promise<void>;
  className?: string;
}
```

---

## MicSelector (RTC entry)

Microphone device picker with waveform preview. Requires `agora-rtc-react`.

### Layout

```
┌──────────────────────────────────────────────────┐
│ [Mute] [LiveWaveform 20px] [Device ▾ dropdown]   │
└──────────────────────────────────────────────────┘
```

### Props

```typescript
interface MicSelectorProps {
  value?: string;
  onValueChange?: (deviceId: string) => void;
  muted?: boolean;
  onMutedChange?: (muted: boolean) => void;
  disabled?: boolean;
  state?: MicButtonState;
  className?: string;
}
```

---

## SimpleVisualizer

Stateless horizontal bar renderer for pre-computed frequency data.

### Props

```typescript
interface SimpleVisualizerProps {
  data: number[];               // normalized 0-1 values
  activeColor?: string;         // default: "#374151"
  inactiveColor?: string;       // default: "#d1d5db"
  barWidth?: number;            // default: 3
  barHeight?: number;           // default: 16
  barGap?: number;              // default: 2
  className?: string;
}
```

Renders `data.length` bars with 75ms CSS transitions. Zero-value bars use `inactiveColor`.

## High-Risk Changes

- changing audio-analysis lifecycles without checking cleanup
- moving RTC-linked components into the base entry
- changing `.lottie` bundling without checking tests and bundle output
- adding more browser-only logic without SSR guards

## Related Files

- [02_architecture.md](../02_architecture.md)
- [06_interfaces.md](../06_interfaces.md)
- [07_gotchas.md](../07_gotchas.md)
- [realtime_integrations.md](realtime_integrations.md)
