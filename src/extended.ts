// Voice Components
export { MicButton } from "./components/voice/mic-button";
export type { MicButtonProps } from "./components/voice/mic-button";

export { AudioVisualizer } from "./components/voice/audio-visualizer";
export type { AudioVisualizerProps } from "./components/voice/audio-visualizer";

export { SimpleVisualizer } from "./components/voice/simple-visualizer";
export type { SimpleVisualizerProps } from "./components/voice/simple-visualizer";

export { LiveWaveform } from "./components/voice/live-waveform";
export type { LiveWaveformProps } from "./components/voice/live-waveform";

export { MicButtonWithVisualizer } from "./components/voice/mic-button-with-visualizer";
export type { MicButtonWithVisualizerProps } from "./components/voice/mic-button-with-visualizer";

export { MicSelector } from "./components/voice/mic-selector";
export type { MicSelectorProps } from "./components/voice/mic-selector";

// Chat Components
export { ConvoTextStream } from "./components/chat/convo-text-stream";
export type { ConvoTextStreamProps } from "./components/chat/convo-text-stream";

// Video Components
export { Avatar } from "./components/video/avatar";
export type { AvatarProps, AvatarSize } from "./components/video/avatar";

export { CameraSelector } from "./components/video/camera-selector";
export type {
  CameraSelectorProps,
  CameraDevice,
} from "./components/video/camera-selector";

// Layout Components
export { VideoGridWithControls } from "./components/layout/video-grid";

// UI Primitives
export { Button } from "./components/primitives/button";
export type { ButtonProps } from "./components/primitives/button";

export { Card } from "./components/primitives/card";
export type { CardProps } from "./components/primitives/card";

export { Chip } from "./components/primitives/chip";
export type { ChipProps } from "./components/primitives/chip";

export { ValuePicker } from "./components/primitives/value-picker";
export type { ValuePickerProps } from "./components/primitives/value-picker";

export { DropdownMenu } from "./components/primitives/dropdown-menu";
export { Command } from "./components/primitives/command";
export { Popover } from "./components/primitives/popover";

// Settings
export { AgentSettings } from "./components/settings/agent-settings";
export type { AgentSettingsProps } from "./components/settings/agent-settings";

export { SessionPanel } from "./components/session/session-panel";
export type { SessionPanelProps } from "./components/session/session-panel";

// Demo
export { HelloWorld } from "./components/primitives/hello-world";
export type { HelloWorldProps } from "./components/primitives/hello-world";

// Hooks
export { useRTMSubscription } from "./hooks/use-rtm-subscription";

// Utilities
export { renderMarkdownToHtml, decodeStreamMessage } from "./lib/utils";
export type { IMessageListItem, EMessageStatus } from "./lib/message-engine";
export { MessageEngine } from "./lib/message-engine";
