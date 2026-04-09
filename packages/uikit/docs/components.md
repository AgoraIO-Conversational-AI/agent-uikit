# Component Reference

Props, usage examples, and behaviour notes for every component in `agora-agent-uikit`.

---

## Table of Contents

- [Voice Components](#voice-components)
  - [MicButton](#micbutton)
  - [AgentVisualizer](#agentvisualizer)
  - [AudioVisualizer](#audiovisualizer)
  - [SimpleVisualizer](#simplevisualizer)
  - [LiveWaveform](#livewaveform)
  - [MicButtonWithVisualizer](#micbuttonwithvisualizer) *(rtc entry)*
  - [MicSelector](#micselector) *(rtc entry)*
- [Chat Components](#chat-components)
  - [Conversation](#conversation)
  - [Message](#message)
  - [Response](#response)
  - [ConvoTextStream](#convotextstream)
- [Video Components](#video-components)
  - [LocalVideoPreview](#localvideopreview)
  - [AvatarVideoDisplay](#avatarvideodisplay)
  - [Avatar](#avatar)
  - [CameraSelector](#cameraselector)
- [Settings Components](#settings-components)
  - [AgentSettings](#agentsettings)
  - [SettingsDialog](#settingsdialog)
- [Layout Components](#layout-components)
  - [VideoGrid](#videogrid)
  - [MobileTabs](#mobiletabs)
- [Session Components](#session-components)
  - [AgentStateVisualizer](#agentstatevisualizer)
  - [SessionTranscript](#sessiontranscript)
  - [SessionChatInput](#sessionchatinput)
- [UI Primitives](#ui-primitives)
  - [Button](#button)
  - [IconButton](#iconbutton)
  - [Card](#card)
  - [Chip](#chip)
  - [ValuePicker](#valuepicker)
- [Types](#types)

---

## Voice Components

### MicButton

Microphone toggle button with state-driven styling and an optional audio visualizer.

```typescript
type MicButtonState = "idle" | "listening" | "processing" | "error";

interface MicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state?: MicButtonState;    // default: "idle"
  icon?: React.ReactNode;    // defaults to Mic icon
  showErrorBadge?: boolean;  // orange badge when state="error"; default: false
  audioData?: number[];      // 0-1 normalised frequency values for the visualizer
}
```

```tsx
import { MicButton } from "agora-agent-uikit";

<MicButton
  state={isMuted ? "idle" : "listening"}
  audioData={frequencyData}
  onClick={toggleMute}
/>
```

**States:**
- `idle` — default, inactive
- `listening` — actively recording
- `processing` — processing audio
- `error` — permission denied or device error; pair with `showErrorBadge` to surface this visually

---

### AgentVisualizer

Lottie-based animated visualizer reflecting the agent's current state. Animations are bundled with the library — no external files or CDN required.

```typescript
type AgentVisualizerState =
  | "not-joined"    // before connecting
  | "joining"       // connecting
  | "ambient"       // connected, agent idle
  | "listening"     // agent listening to user
  | "analyzing"     // agent processing input
  | "talking"       // agent speaking
  | "disconnected"; // session ended

interface AgentVisualizerProps extends React.HTMLAttributes<HTMLDivElement> {
  state: AgentVisualizerState;
  size?: "sm" | "md" | "lg";  // 128px / 192px / 256px; default: "md"
  lottiePaths?: Partial<Record<AgentVisualizerState, string>>; // per-state URL overrides
}
```

```tsx
import { AgentVisualizer } from "agora-agent-uikit";

// Standard usage — animations load from the bundle
<AgentVisualizer state={agentState} size="md" />

// Override one state's animation with a custom URL
<AgentVisualizer state={agentState} lottiePaths={{ talking: "/custom/talking.lottie" }} />
```

---

### AudioVisualizer

Frequency bar visualizer that accepts a raw audio track. Handles `AudioContext` setup, animation, and cleanup internally.

```typescript
type ILocalAudioTrack  = { getMediaStreamTrack: () => MediaStreamTrack };
type IRemoteAudioTrack = { getMediaStreamTrack: () => MediaStreamTrack };

interface AudioVisualizerProps {
  track: ILocalAudioTrack | IRemoteAudioTrack | MediaStream | undefined;
  gradientColors?: string[];  // default: ["#A0FAFF", "#FCF9F8", "#C46FFB"]
  className?: string;
}
```

```tsx
import { AudioVisualizer } from "agora-agent-uikit";

<AudioVisualizer track={remoteAudioTrack} />

<AudioVisualizer
  track={localAudioTrack}
  gradientColors={["#00c6ff", "#ffffff", "#a855f7"]}
/>
```

Renders 9 symmetric frequency bars. Unlike `SimpleVisualizer`, this component handles the Web Audio API itself — pass a track, not an array.

---

### SimpleVisualizer

Compact horizontal bar visualizer for embedding in buttons or tight layouts. Accepts pre-processed frequency data.

```typescript
interface SimpleVisualizerProps {
  data: number[];
  activeColor?: string;   // default: "#374151"
  inactiveColor?: string; // default: "#d1d5db"
  barWidth?: number;      // pixels; default: 3
  barHeight?: number;     // pixels; default: 16
  barGap?: number;        // pixels; default: 2
  className?: string;
}
```

```tsx
import { SimpleVisualizer } from "agora-agent-uikit";

<SimpleVisualizer data={frequencyData} activeColor="#A0FAFF" barWidth={4} />
```

Use `AudioVisualizer` when you want the component to manage the Web Audio API. Use `SimpleVisualizer` when you already have a processed frequency array.

---

### LiveWaveform

Full-featured waveform visualizer. Can capture audio from a microphone device directly, or render an externally supplied data array.

```typescript
interface LiveWaveformProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  data?: number[];       // external data array; if omitted, captures from deviceId
  deviceId?: string;     // mic device ID for self-driven mode
  fftSize?: number;
  smoothingTimeConstant?: number;
  sensitivity?: number;
  barWidth?: number;
  barGap?: number;
  barRadius?: number;
  barColor?: string;
  fadeEdges?: boolean;
  fadeWidth?: number;
  height?: string | number;
  minAlpha?: number | null;  // minimum bar opacity (0-1); default: null
  alphaRange?: number;       // additional opacity range; default: 1.0
  onError?: (error: Error) => void;
}
```

```tsx
import { LiveWaveform } from "agora-agent-uikit";

// Self-driven from mic
<LiveWaveform active={isRecording} deviceId={selectedMicId} height={80} />

// External data
<LiveWaveform active={isPlaying} data={waveformData} barColor="#10b981" />
```

Uses a `ResizeObserver` for canvas scaling. Frequency data is mirrored for a symmetric centre-aligned display.

---

### MicButtonWithVisualizer

> **RTC entry** — import from `agora-agent-uikit/rtc`. Requires `agora-rtc-react`.

Combined microphone button with an integrated frequency visualizer. When given an Agora track, handles `publish`/`unpublish` automatically on toggle.

```typescript
interface MicButtonWithVisualizerProps {
  isEnabled: boolean;
  setIsEnabled: (enabled: boolean) => void;
  /** Agora microphone track or native MediaStream. */
  track: IMicrophoneAudioTrack | MediaStream | null;
  enabledColor?: string;  // default: "#A0FAFF"
  disabledColor?: string; // default: "#DE344A"
  /** Custom toggle handler. When provided, bypasses the built-in Agora publish/unpublish logic. */
  onToggle?: () => void | Promise<void>;
  className?: string;
  /** @deprecated Use `track` instead. */
  localMicrophoneTrack?: IMicrophoneAudioTrack | null;
}
```

```tsx
import { useState } from "react";
import type { IMicrophoneAudioTrack } from "agora-rtc-react";
import { MicButtonWithVisualizer } from "agora-agent-uikit/rtc";

function MicControl() {
  const [isMicOn, setIsMicOn] = useState(true);
  const [track] = useState<IMicrophoneAudioTrack | null>(null);

  return (
    <MicButtonWithVisualizer
      isEnabled={isMicOn}
      setIsEnabled={setIsMicOn}
      track={track}
    />
  );
}
```

---

### MicSelector

> **RTC entry** — import from `agora-agent-uikit/rtc`. Requires `agora-rtc-react`.

Microphone device picker with integrated mute toggle and state indicator. Enumerates available microphones via `AgoraRTC.getMicrophones()`.

```typescript
interface MicSelectorProps {
  value?: string;
  onValueChange?: (deviceId: string) => void;
  muted?: boolean;
  onMutedChange?: (muted: boolean) => void;
  disabled?: boolean;
  state?: "idle" | "listening" | "processing" | "error";  // default: "idle"
  className?: string;
}
```

```tsx
import { useState } from "react";
import { MicSelector } from "agora-agent-uikit/rtc";

function MicPicker() {
  const [selectedMicId, setSelectedMicId] = useState("");
  const [isMuted, setIsMuted] = useState(false);

  return (
    <MicSelector
      value={selectedMicId}
      onValueChange={setSelectedMicId}
      muted={isMuted}
      onMutedChange={setIsMuted}
    />
  );
}
```

---

## Chat Components

### Conversation

Scrollable conversation container. Auto-scrolls to the bottom when new messages are added and shows a jump-to-bottom button when the user has scrolled up.

```typescript
interface ConversationProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: string;     // Tailwind height class; default: "h-[400px]"
  agentName?: string;  // default: "Agent"
  userName?: string;   // default: "User"
}

interface ConversationContentProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: string;  // default: "p-4"
}

interface ConversationEmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title?: string;        // default: "No messages yet"
  description?: string;  // default: "Start a conversation to see messages here"
}
```

```tsx
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  Message,
  MessageContent,
  Response,
} from "agora-agent-uikit";

<Conversation height="h-[500px]" agentName="Assistant" userName="You">
  <ConversationContent>
    {transcript.length === 0 && <ConversationEmptyState />}
    {transcript.map((msg) => (
      <Message key={msg.turn_id} from={msg.uid === 0 ? "assistant" : "user"}>
        <MessageContent>
          <Response>{msg.text}</Response>
        </MessageContent>
      </Message>
    ))}
  </ConversationContent>
</Conversation>
```

Auto-scroll is driven by a `MutationObserver` on the content element.

---

### Message

Individual message bubble. Left-aligned for `assistant`, right-aligned for `user`.

```typescript
interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  from: "user" | "assistant";
  name?: string;  // overrides agentName/userName from the parent Conversation
}

type MessageContentProps = React.HTMLAttributes<HTMLDivElement>;
```

```tsx
import { Message, MessageContent, Response } from "agora-agent-uikit";

<Message from="assistant">
  <MessageContent>
    <Response>Hello! How can I help you?</Response>
  </MessageContent>
</Message>
```

---

### Response

Styled text wrapper for message content. Preserves whitespace and line breaks.

```typescript
type ResponseProps = React.HTMLAttributes<HTMLDivElement>;
```

```tsx
<Response>Message text goes here.</Response>
```

---

### ConvoTextStream

Fixed-position floating chat panel that renders a live message transcript, including a streaming in-progress message. Auto-opens on first message and shows a pulsing badge when new messages arrive while collapsed. Renders markdown via an internal utility.

```typescript
interface ConvoTextStreamProps {
  messageList: IMessageListItem[];
  currentInProgressMessage?: IMessageListItem | null;
  agentUID: string | undefined;
  className?: string;
}
```

```tsx
import { ConvoTextStream, EMessageStatus } from "agora-agent-uikit";
import type { IMessageListItem } from "agora-agent-uikit";

const messages: IMessageListItem[] = [
  { turn_id: 1, uid: 0, text: "Hello!", status: EMessageStatus.END },
  { turn_id: 2, uid: 1, text: "Hi there.", status: EMessageStatus.END },
];

const streaming: IMessageListItem = {
  turn_id: 3,
  uid: 0,
  text: "I'm still typing thi",
  status: EMessageStatus.IN_PROGRESS,
};

<ConvoTextStream
  messageList={messages}
  currentInProgressMessage={streaming}
  agentUID="0"
/>
```

See [Types](#types) for `IMessageListItem` and `EMessageStatus`.

---

## Video Components

### LocalVideoPreview

Displays a local camera video track with optional mirroring, label overlay, and hover mute control.

```typescript
interface LocalVideoPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  videoTrack?: ICameraVideoTrack | null;
  isMirrored?: boolean;      // default: true
  showLabel?: boolean;       // default: false
  label?: string;            // default: "You"
  placeholder?: React.ReactNode;
  useMediaStream?: boolean;  // default: false
  isVideoMuted?: boolean;    // default: false
  onToggleMute?: () => void;
  showMuteControl?: boolean; // hover overlay with mute button; default: false
}
```

```tsx
import { LocalVideoPreview } from "agora-agent-uikit";

<LocalVideoPreview videoTrack={localCameraTrack} showLabel />

{/* Multiple instances — MediaStream mode avoids track conflicts */}
<LocalVideoPreview videoTrack={localCameraTrack} useMediaStream />
```

**Rendering modes:**
- `useMediaStream={false}` (default) — calls Agora's `track.play()`. Use for a single instance.
- `useMediaStream={true}` — wraps the track in a `MediaStream` and drives a native `<video>` element. Use when the same track renders in multiple places, such as a responsive layout with separate desktop and mobile views.

---

### AvatarVideoDisplay

Displays a remote agent video track with connection state indicator and placeholder.

```typescript
type AvatarVideoState = "connected" | "loading" | "disconnected";

interface AvatarVideoDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  videoTrack?: IRemoteVideoTrack | null;
  state?: AvatarVideoState;  // default: "disconnected"
  showStatus?: boolean;      // animated live indicator badge; default: false
  placeholder?: React.ReactNode;
  useMediaStream?: boolean;  // default: false
}
```

```tsx
import { AvatarVideoDisplay } from "agora-agent-uikit";

<AvatarVideoDisplay
  videoTrack={remoteVideoTrack}
  state={remoteVideoTrack ? "connected" : "disconnected"}
  showStatus
/>
```

`useMediaStream` behaves identically to `LocalVideoPreview`.

---

### Avatar

User or agent avatar with image, icon, or auto-generated initials fallback.

```typescript
interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  icon?: React.ReactNode;
  initials?: string;
  name?: string;    // generates initials from first letters of each word
  size?: "sm" | "md" | "lg";  // 32px / 40px / 48px; default: "md"
  bgColor?: string; // Tailwind bg classes; default: "bg-gradient-to-br from-blue-500 to-blue-600"
  alt?: string;
}
```

```tsx
import { Avatar } from "agora-agent-uikit";

<Avatar src="/agent.png" alt="Agent" size="sm" />
<Avatar name="John Smith" size="md" />   {/* renders "JS" */}
<Avatar initials="AI" bgColor="bg-purple-600" />
```

---

### CameraSelector

Camera device picker with enable/disable toggle.

```typescript
interface CameraDevice {
  deviceId: string;
  label: string;
  groupId?: string;
}

interface CameraSelectorProps {
  devices?: CameraDevice[];
  value?: string;
  onValueChange?: (deviceId: string) => void;
  disabled?: boolean;
  onDisabledChange?: (disabled: boolean) => void;
  hasError?: boolean;
  className?: string;
}
```

```tsx
import { CameraSelector } from "agora-agent-uikit";

<CameraSelector
  devices={cameraDevices}
  value={selectedCameraId}
  onValueChange={setSelectedCameraId}
  disabled={isCameraOff}
  onDisabledChange={setIsCameraOff}
/>
```

---

## Settings Components

### AgentSettings

Pre-session configuration panel for Agora Conversational AI agent parameters.

```typescript
interface AgentSettingsProps {
  enableAivad: boolean;
  onEnableAivadChange: (enabled: boolean) => void;
  language: string;                         // STT language code, e.g. "en-US"
  onLanguageChange: (language: string) => void;
  prompt?: string;
  onPromptChange?: (prompt: string) => void;       // renders a textarea when provided
  greeting?: string;
  onGreetingChange?: (greeting: string) => void;   // renders an input when provided
  languages?: Array<{ id: string; name: string }>; // custom language list
  disabled?: boolean;  // set true when the session is active
  className?: string;
}
```

```tsx
import { AgentSettings } from "agora-agent-uikit";

<AgentSettings
  enableAivad={enableAivad}
  onEnableAivadChange={setEnableAivad}
  language={language}
  onLanguageChange={setLanguage}
  prompt={prompt}
  onPromptChange={setPrompt}
  greeting={greeting}
  onGreetingChange={setGreeting}
  disabled={isConnected}
/>
```

**Default languages:** en-US, en-GB, es-ES, es-MX, fr-FR, de-DE, it-IT, pt-BR, ja-JP, ko-KR, zh-CN, zh-TW.

**Backend mapping:**

| Prop | Agora REST API field |
|---|---|
| `enableAivad` | `properties.advanced_features.enable_aivad` |
| `language` | `properties.asr.language` |
| `prompt` | `properties.chat.context.content` |
| `greeting` | `properties.chat.greeting_message` |

---

### SettingsDialog

Modal wrapper for `AgentSettings`.

```typescript
interface SettingsDialogProps extends Omit<AgentSettingsProps, "className"> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;        // default: "Agent Settings"
  description?: string;
}
```

```tsx
import { SettingsDialog } from "agora-agent-uikit";

<SettingsDialog
  open={isOpen}
  onOpenChange={setIsOpen}
  enableAivad={enableAivad}
  onEnableAivadChange={setEnableAivad}
  language={language}
  onLanguageChange={setLanguage}
  disabled={isConnected}
/>
```

---

## Layout Components

### VideoGrid

Two-column desktop grid with named slots for avatar, chat, local video, and controls.

```typescript
interface VideoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  avatar?: React.ReactNode;
  chat?: React.ReactNode;
  localVideo?: React.ReactNode;
  controls?: React.ReactNode;
}
```

```
┌─────────────┬─────────────┐
│ chat  (40%) │ avatar (60%)│
├─────────────┼─────────────┤
│ localVideo  │ controls    │
│       (40%) │       (60%) │
└─────────────┴─────────────┘
```

```tsx
import { VideoGrid } from "agora-agent-uikit";

<VideoGrid
  avatar={<AvatarVideoDisplay videoTrack={remoteTrack} state="connected" />}
  chat={<Conversation>...</Conversation>}
  localVideo={<LocalVideoPreview videoTrack={localTrack} />}
  controls={<div>...</div>}
/>
```

---

### MobileTabs

Tab switcher for mobile layouts with icon support and configurable position.

```typescript
interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

interface MobileTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: Tab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  tabPosition?: "top" | "bottom";  // default: "bottom"
}
```

```tsx
import { MobileTabs } from "agora-agent-uikit";
import { Video, MessageSquare } from "lucide-react";

<MobileTabs
  tabs={[
    { id: "video", label: "Video", icon: <Video />,         content: <div>...</div> },
    { id: "chat",  label: "Chat",  icon: <MessageSquare />, content: <Conversation>...</Conversation> },
  ]}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  tabPosition="bottom"
/>
```

---

## Session Components

Session components read from `ConversationalAIProvider` context via toolkit hooks by default. Import from `agora-agent-uikit/session`.

### AgentStateVisualizer

`AgentVisualizer` pre-wired to `useAgentState()`. Maps toolkit agent states to visualizer states automatically.

```typescript
interface AgentStateVisualizerProps {
  /**
   * Overrides the state read from context. Use for lifecycle states the toolkit
   * doesn't emit: "not-joined" before connecting, "joining" while connecting,
   * "disconnected" after the session ends.
   */
  overrideState?: AgentVisualizerState;
  size?: "sm" | "md" | "lg";
  className?: string;
  lottieBasePath?: string;
  lottiePaths?: Partial<Record<AgentVisualizerState, string>>;
}
```

```tsx
import { AgentStateVisualizer } from "agora-agent-uikit/session";

// State is driven automatically from context
<AgentStateVisualizer size="md" />

// Control pre/post session appearance manually
<AgentStateVisualizer
  size="md"
  overrideState={isConnected ? undefined : "not-joined"}
/>
```

---

### SessionTranscript

Renders the live session transcript from `ConversationalAIProvider` context.

```typescript
interface SessionTranscriptProps {
  agentUid: string | number;
  agentName?: string;  // default: "Agent"
  userName?: string;   // default: "User"
  height?: string;
  className?: string;
}
```

```tsx
import { SessionTranscript } from "agora-agent-uikit/session";

<SessionTranscript
  agentUid={agentUid}
  agentName="Assistant"
  userName="You"
  height="h-[400px]"
/>
```

Messages are attributed to the agent when `item.uid` matches `agentUid` (compared as strings) or when `item.uid === 0`.

---

### SessionChatInput

Text input and optional interrupt button wired to `sendMessage` and `interrupt` from `ConversationalAIProvider` context by default. You can also pass `sendMessage` and `interrupt` props directly.

```typescript
interface SessionChatInputProps {
  agentUid: string | number;
  sendMessage?: (agentUserId: string, text: string) => Promise<void>;
  interrupt?: (agentUserId: string) => Promise<void>;
  placeholder?: string;       // default: "Type a message…"
  showInterrupt?: boolean;    // default: false
  interruptLabel?: string;    // accessible label for interrupt button; default: "Interrupt agent"
  onRTMError?: (error: Error) => void;  // called when send or interrupt throws
  className?: string;
}
```

```tsx
import { SessionChatInput } from "agora-agent-uikit/session";

<SessionChatInput
  agentUid={agentUid}
  showInterrupt
  placeholder="Ask a question…"
  onRTMError={(err) => console.error("RTM error:", err)}
/>
```

Submit with Enter or the send button. Shift+Enter does not submit. Numeric `agentUid` values are coerced to string before toolkit calls. If neither provider context nor direct action props are available, send stays disabled and the interrupt button is not rendered.

---

## UI Primitives

### Button

```typescript
interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "default" | "destructive" | "secondary" | "ghost";
  size?: "default" | "icon";
  asChild?: boolean;
  label?: string;
  labelClassName?: string;
}
```

```tsx
import { Button } from "agora-agent-uikit";

<Button variant="default" onClick={handleStart}>Start</Button>
<Button variant="destructive">End Call</Button>
```

---

### IconButton

```typescript
interface IconButtonProps extends React.ComponentProps<"button"> {
  shape?: "round" | "square";
  variant?: "filled" | "outlined" | "standard";
  size?: "default" | "sm" | "md" | "lg" | "xl";
}
```

```tsx
import { IconButton } from "agora-agent-uikit";
import { Settings } from "lucide-react";

<IconButton shape="round" variant="outlined" size="md" onClick={openSettings}>
  <Settings className="size-4" />
</IconButton>
```

---

### Card

Container with card styling. Accepts `CardTitle` and `CardContent` sub-components.

```tsx
import { Card, CardTitle, CardContent } from "agora-agent-uikit";

<Card className="p-6">
  <CardTitle>Settings</CardTitle>
  <CardContent>...</CardContent>
</Card>
```

---

### Chip

Small label tag for status indicators. Styled via `className`.

```tsx
import { Chip } from "agora-agent-uikit";

<Chip>Active</Chip>
<Chip className="bg-red-900/30 text-red-400">Offline</Chip>
```

---

### ValuePicker

Dropdown selector for a list of labelled items.

```typescript
interface Item {
  id: string;
  name: string;
}

interface ValuePickerProps {
  items: Item[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  maxHeight?: string;
}
```

```tsx
import { ValuePicker } from "agora-agent-uikit";

<ValuePicker
  label="Language"
  items={[
    { id: "en-US", name: "English (US)" },
    { id: "ja-JP", name: "Japanese" },
  ]}
  value={language}
  onValueChange={setLanguage}
/>
```

---

## Types

Exported from the base entry (`agora-agent-uikit`). Required when using `ConvoTextStream`.

```typescript
import { EMessageStatus } from "agora-agent-uikit";
import type { IMessageListItem } from "agora-agent-uikit";

enum EMessageStatus {
  IN_PROGRESS = 0,  // message is still streaming
  END         = 1,  // message is complete
  INTERRUPTED = 2,  // message was cut off before completion
}

interface IMessageListItem {
  turn_id: number;
  uid: number;    // 0 = agent; any other value = user
  text: string;   // may contain markdown
  status: EMessageStatus;
}
```
