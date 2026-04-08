# 06 — Interfaces

Purpose: document the public contracts at the edges of the package, including subpath exports, optional peers, theme inputs, and RTM message expectations.

## Package Exports

| Entry point                  | Import path                  | Components / Hooks                                              | Extra runtime dep |
| ---------------------------- | ---------------------------- | --------------------------------------------------------------- | ----------------- |
| Base                         | `agora-agent-uikit`         | 50+ components, utilities, types                                | none beyond React |
| RTC                          | `agora-agent-uikit/rtc`     | `MicButtonWithVisualizer`, `MicSelector`, `useAudioDevices`     | `agora-rtc-react` |
| Session                      | `agora-agent-uikit/session` | `SessionTranscript`, `AgentStateVisualizer`, `SessionChatInput`, `SessionErrorDisplay` | `agora-agent-client-toolkit`, `agora-agent-client-toolkit-react` |
| Thymia                       | `agora-agent-uikit/thymia`  | `ThymiaPanel`, `useRTMSubscription`, `useThymia`                | `agora-rtm-sdk` |

## Base Entry Families

| Family            | Representative Exports                                                      |
| ----------------- | --------------------------------------------------------------------------- |
| Voice             | `AgentVisualizer`, `MicButton`, `AudioVisualizer`, `LiveWaveform`, `SimpleVisualizer` |
| Chat              | `Conversation`, `Message`, `Response`, `ConvoTextStream`, `transcriptToMessageList` |
| Video             | `Avatar`, `AvatarVideoDisplay`, `LocalVideoPreview`, `CameraSelector`       |
| Layout            | `VideoGrid`, `MobileTabs`                                                   |
| Settings          | `SettingsDialog`, `AgentSettings`, `SessionPanel`                           |
| Branding/utils    | `AgoraLogo`, `cn`, `renderMarkdownToHtml`, theme helpers                    |

## Key Type Contracts

### Message Types

```typescript
enum EMessageStatus {
  IN_PROGRESS = 0,  // streaming
  END = 1,          // complete
  INTERRUPTED = 2,  // cut off
}

interface IMessageListItem {
  turn_id: number;
  uid: number;       // 0 = agent
  text: string;
  status: EMessageStatus;
  createdAt?: number;
}
```

### Agent Visualizer States

```typescript
type AgentVisualizerState =
  | "not-joined" | "joining" | "ambient"
  | "listening" | "analyzing" | "talking" | "disconnected";

type AgentVisualizerSize = "sm" | "md" | "lg";
```

### Mic Button States

```typescript
type MicButtonState = "idle" | "listening" | "processing" | "error";
```

### Theme Configuration

```typescript
type RemoteThemeConfig = {
  PRIMARY_COLOR?: string;
  PRIMARY_ACTION_BRAND_COLOR?: string;
  FONT_COLOR?: string;
  BACKGROUND_COLOR?: string;
  CARD_LAYER_1_COLOR?: string;  // through CARD_LAYER_5_COLOR
  // ... 20+ optional color fields
};
```

### Video Playback

```typescript
interface PlayableVideoTrack {
  play(element: HTMLElement): void;
  stop(): void;
  getMediaStreamTrack(): MediaStreamTrack;
}
```

### RTM Subscription

```typescript
interface RTMEventSource {
  on(event: string, handler: (event: { message: string | Uint8Array }) => void): void;
  off(event: string, handler: (event: { message: string | Uint8Array }) => void): void;
}
```

## Toolkit Integration Boundary

Session components depend on hooks from `agora-agent-client-toolkit-react`:

| Hook                         | Used by                  | Returns                        |
| ---------------------------- | ------------------------ | ------------------------------ |
| `useTranscript()`            | SessionTranscript        | `TranscriptHelperItem[]`       |
| `useAgentState()`            | AgentStateVisualizer     | toolkit agent state string     |
| `useAgentError()`            | SessionErrorDisplay      | `AgentErrorEvent \| null`      |
| `useConversationalAIContext()`| SessionChatInput        | `sendMessage()`, `interrupt()` |

State mapping from toolkit → visualizer:

| Toolkit state | Visualizer state |
| ------------- | ---------------- |
| `idle`        | `ambient`        |
| `listening`   | `listening`      |
| `thinking`    | `analyzing`      |
| `speaking`    | `talking`        |
| `silent`      | `ambient`        |
| `null`        | `ambient`        |

## RTM/Thymia Boundary

- `useRTMSubscription` expects an object with `on("message", handler)` and `off("message", handler)`.
- RTM payloads are filtered by an `object` field.
- `useThymia` currently listens for `thymia.biomarkers` and `thymia.progress`.

## Content Rendering Contract

- `renderMarkdownToHtml(text)` returns sanitized HTML in the browser.
- Server/test fallback returns a tag-stripped string, not rich HTML.
- Consumers should not assume full CommonMark support; this is a constrained transcript formatter.

## Utility Functions

| Function                    | Signature                                    | Purpose                              |
| --------------------------- | -------------------------------------------- | ------------------------------------ |
| `cn()`                      | `(...inputs: ClassValue[]) → string`         | merge Tailwind classes               |
| `renderMarkdownToHtml()`    | `(text: string) → string`                    | limited markdown → sanitized HTML    |
| `decodeStreamMessage()`     | `(stream: Uint8Array) → string`              | UTF-8 decode                         |
| `applyCustomTheme()`        | `(config: RemoteThemeConfig) → void`         | set CSS variables from API config    |
| `getCurrentTheme()`         | `() → Record<string, string>`               | read computed CSS variable values    |
| `transcriptToMessageList()` | `(items: TranscriptHelperItem[]) → IMessageListItem[]` | bridge toolkit → ConvoTextStream |

## Interfaces That Do Not Exist Here

- No backend HTTP API is implemented in this repo.
- No database schema lives in this repo.
- No secret issuance or auth server contract lives in this repo.
- External service contracts are consumed through peer SDKs rather than directly defined here.

## Related Deep Dives

- [Entry Points And Optional Dependencies](deep_dives/entry_points_and_optional_dependencies.md)
- [Realtime Integrations](deep_dives/realtime_integrations.md)
- [Chat Components](deep_dives/chat_components.md)
- [Voice Components](deep_dives/voice_components.md)
- [Video Components](deep_dives/video_components.md)
- [Session Integration](deep_dives/session_integration.md)
- [Theming](deep_dives/theming.md)
- [Biomarker Components](deep_dives/biomarker_components.md)
