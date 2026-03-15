// Voice Components
export { AgentVisualizer } from "./components/voice/agent-visualizer";
export type {
  AgentVisualizerProps,
  AgentVisualizerSize,
  AgentVisualizerState,
} from "./components/voice/agent-visualizer";

export type { MicButtonState } from "./components/voice/mic-button";

// Chat Components
export {
  Conversation,
  ConversationContent,
} from "./components/chat/conversation";
export type {
  ConversationProps,
  ConversationContentProps,
} from "./components/chat/conversation";

export { Message, MessageContent } from "./components/chat/message";
export type {
  MessageProps,
  MessageContentProps,
} from "./components/chat/message";

export { Response } from "./components/chat/response";
export type { ResponseProps } from "./components/chat/response";

// Video Components
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

// Settings
export { SettingsDialog } from "./components/settings/settings-dialog";
export type { SettingsDialogProps } from "./components/settings/settings-dialog";

// Branding
export { AgoraLogo } from "./components/branding/agora-logo";
export type { AgoraLogoProps } from "./components/branding/agora-logo";

// Thymia Components
export { ThymiaPanel } from "./components/thymia/thymia-panel";
export type { ThymiaPanelProps } from "./components/thymia/thymia-panel";

// RTM & Thymia Hooks
export type { RTMEventSource } from "./hooks/use-rtm-subscription";
export { useThymia } from "./hooks/use-thymia";

// Utilities
export { cn } from "./lib/utils";
