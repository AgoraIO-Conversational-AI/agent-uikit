# Video Components

> **When to Read This:** Use this document when changing local/remote video rendering, avatar fallback logic, or camera-selection behavior.

## Main Files

| Component Or Hook | File |
| --- | --- |
| `useVideoPlayback` | `packages/uikit/src/hooks/use-video-playback.ts` |
| `LocalVideoPreview` | `packages/uikit/src/components/video/local-video-preview.tsx` |
| `AvatarVideoDisplay` | `packages/uikit/src/components/video/avatar-video-display.tsx` |
| `Avatar` | `packages/uikit/src/components/video/avatar.tsx` |
| `CameraSelector` | `packages/uikit/src/components/video/camera-selector.tsx` |

## Dual-Mode Video Playback

Both `LocalVideoPreview` and `AvatarVideoDisplay` support two rendering modes via the `useVideoPlayback` hook.

### Mode 1: Agora play() (default)

```typescript
// useMediaStream={false} (default)
videoTrack.play(containerRef.current);  // Agora manages DOM
videoTrack.stop();                       // cleanup
```

- Agora SDK creates and manages its own `<video>` element inside the container div
- Only one `play()` target per track at a time
- Best for standard single-view rendering

### Mode 2: MediaStream (native video)

```typescript
// useMediaStream={true}
const stream = new MediaStream([videoTrack.getMediaStreamTrack()]);
videoElement.srcObject = stream;
videoElement.play();  // handles AbortError on interrupted play
```

- Uses native `<video>` element with `srcObject`
- Allows multiple DOM elements to render the same track
- Required when one track needs to appear in multiple locations simultaneously

### useVideoPlayback Hook

```typescript
interface UseVideoPlaybackOptions {
  videoTrack: PlayableVideoTrack | null;
  useMediaStream: boolean;
  videoContainerRef: React.RefObject<HTMLDivElement>;
  videoElementRef: React.RefObject<HTMLVideoElement>;
  debugLabel?: string;
}

// Returns
{ isPlaying: boolean }
```

---

## LocalVideoPreview

Local camera feed with mirroring and mute controls.

### Features

- Mirror mode (default on) — `transform: scaleX(-1)` for selfie view
- Hover mute control — shows camera toggle button on hover
- Bottom-left label overlay — "You" or custom label
- Placeholder state — camera-off icon when no track or muted

### Props

```typescript
interface LocalVideoPreviewProps {
  videoTrack?: PlayableVideoTrack | null;
  isMirrored?: boolean;         // default: true
  showLabel?: boolean;           // default: false
  label?: string;                // default: "You"
  placeholder?: React.ReactNode;
  useMediaStream?: boolean;      // default: false
  isVideoMuted?: boolean;        // default: false
  onToggleMute?: () => void;
  showMuteControl?: boolean;     // default: false
  objectFit?: "cover" | "contain" | "fill";  // default: "cover"
  className?: string;
}
```

---

## AvatarVideoDisplay

Remote agent video with connection state indicators.

### State Rendering

| State          | Display                                    |
| -------------- | ------------------------------------------ |
| `connected`    | video feed, optional "Live" badge          |
| `loading`      | placeholder with "Connecting..." spinner   |
| `disconnected` | placeholder with avatar icon               |

### Props

```typescript
interface AvatarVideoDisplayProps {
  videoTrack?: PlayableVideoTrack | null;
  state?: "connected" | "loading" | "disconnected";  // default: "disconnected"
  showStatus?: boolean;      // default: false
  placeholder?: React.ReactNode;
  useMediaStream?: boolean;  // default: false
  objectFit?: "cover" | "contain" | "fill";  // default: "cover"
  className?: string;
}
```

---

## Avatar

User/agent avatar with fallback chain.

### Fallback Priority

1. `src` image URL (with error recovery to step 2)
2. `icon` React node
3. `initials` string
4. Auto-generated initials from `name` (first letter of first 2 words)
5. `"?"` default

### Props

```typescript
interface AvatarProps {
  src?: string;
  icon?: React.ReactNode;
  initials?: string;
  name?: string;
  size?: "sm" | "md" | "lg";  // h-8/h-10/h-12
  bgColor?: string;            // default: gradient blue
  alt?: string;                // default: "avatar"
  className?: string;
}
```

---

## CameraSelector

Camera device picker with enable/disable toggle.

### Layout

```
┌──────────────────────────────────────────┐
│ [Video/VideoOff toggle] Device Name [▾]  │
└──────────────────────────────────────────┘
```

### Props

```typescript
interface CameraSelectorProps {
  devices?: CameraDevice[];
  value?: string;
  onValueChange?: (deviceId: string) => void;
  disabled?: boolean;
  onDisabledChange?: (disabled: boolean) => void;
  hasError?: boolean;
  className?: string;
}

interface CameraDevice {
  deviceId: string;
  label: string;
  groupId?: string;
}
```

## High-Risk Changes

- changing playback mode semantics without checking multi-render use cases
- forgetting cleanup around `srcObject` or `videoTrack.stop()`
- making camera selection responsible for device enumeration without reviewing entry-point boundaries

## Related Files

- [03_code_map.md](../03_code_map.md)
- [06_interfaces.md](../06_interfaces.md)
- [07_gotchas.md](../07_gotchas.md)
- [realtime_integrations.md](realtime_integrations.md)
