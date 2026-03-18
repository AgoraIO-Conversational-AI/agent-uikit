// Voice Components
export { AgentVisualizer } from "./components/voice/agent-visualizer";
export type {
  AgentVisualizerProps,
  AgentVisualizerSize,
  AgentVisualizerState,
} from "./components/voice/agent-visualizer";

export { MicButton } from "./components/voice/mic-button";
export type {
  MicButtonProps,
  MicButtonState,
} from "./components/voice/mic-button";

export { AudioVisualizer } from "./components/voice/audio-visualizer";
export type { AudioVisualizerProps } from "./components/voice/audio-visualizer";

export { SimpleVisualizer } from "./components/voice/simple-visualizer";
export type { SimpleVisualizerProps } from "./components/voice/simple-visualizer";

export { LiveWaveform } from "./components/voice/live-waveform";
export type { LiveWaveformProps } from "./components/voice/live-waveform";

// MicButtonWithVisualizer, MicSelector, and useAudioDevices require agora-rtc-react
// at runtime. Import them from "agora-agent-uikit/rtc" instead.

// Chat Components
export {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "./components/chat/conversation";
export type {
  ConversationProps,
  ConversationContentProps,
  ConversationEmptyStateProps,
  ConversationScrollButtonProps,
} from "./components/chat/conversation";

export { Message, MessageContent } from "./components/chat/message";
export type {
  MessageProps,
  MessageContentProps,
} from "./components/chat/message";

export { Response } from "./components/chat/response";
export type { ResponseProps } from "./components/chat/response";

export { ConvoTextStream, EMessageStatus } from "./components/chat/convo-text-stream";
export type { ConvoTextStreamProps, IMessageListItem } from "./components/chat/convo-text-stream";
export { transcriptToMessageList } from "./lib/message-types";

// Video Components
export type { PlayableVideoTrack } from "./hooks/use-video-playback";

export { Avatar } from "./components/video/avatar";
export type { AvatarProps, AvatarSize } from "./components/video/avatar";

export { AvatarVideoDisplay } from "./components/video/avatar-video-display";
export type {
  AvatarVideoDisplayProps,
  AvatarVideoState,
} from "./components/video/avatar-video-display";

export { LocalVideoPreview } from "./components/video/local-video-preview";
export type { LocalVideoPreviewProps } from "./components/video/local-video-preview";

// Layout Components
export { VideoGrid } from "./components/layout/video-grid";
export type { VideoGridProps } from "./components/layout/video-grid";

export { MobileTabs } from "./components/layout/mobile-tabs";
export type { MobileTabsProps, Tab } from "./components/layout/mobile-tabs";

// UI Primitives
export { IconButton } from "./components/primitives/icon-button";
export type { IconButtonProps } from "./components/primitives/icon-button";

export { Card, CardTitle, CardContent } from "./components/primitives/card";
export type { CardProps } from "./components/primitives/card";

export { Chip } from "./components/primitives/chip";
export type { ChipProps } from "./components/primitives/chip";

export { ValuePicker } from "./components/primitives/value-picker";
export type { ValuePickerProps, Item } from "./components/primitives/value-picker";

export { DropdownMenu } from "./components/primitives/dropdown-menu";
export { Command } from "./components/primitives/command";
export { Popover } from "./components/primitives/popover";

// Settings
export { SettingsDialog } from "./components/settings/settings-dialog";
export type { SettingsDialogProps } from "./components/settings/settings-dialog";

// Branding
export { AgoraLogo } from "./components/branding/agora-logo";
export type { AgoraLogoProps } from "./components/branding/agora-logo";

// ThymiaPanel, useThymia, and useRTMSubscription require agora-rtm-sdk
// at runtime. Import them from "agora-agent-uikit/thymia" instead.

// Shen.AI Components (no SDK dependency — just renders state)
export { ShenPanel } from "./components/shen/shen-panel";
export type {
  ShenPanelProps,
  ShenState,
  ShenMeasurementResults,
  RTMPublish,
} from "./components/shen/shen-panel";

// Utilities
export { cn, renderMarkdownToHtml, decodeStreamMessage } from "./lib/utils";

// Theme
export { applyCustomTheme, getCurrentTheme, hexToRgbString } from "./lib/theme/apply-theme";
export type { RemoteThemeConfig } from "./lib/theme/apply-theme";
