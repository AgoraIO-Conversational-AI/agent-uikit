// RTC-connected components and hooks.
// Import from "agora-agent-uikit/rtc" — requires agora-rtc-react at runtime.
// If you don't need microphone enumeration or the visualizer button,
// import the rest of the library from "agora-agent-uikit" without this entry.

export { MicButtonWithVisualizer } from "../components/voice/mic-button-with-visualizer";
export type { MicButtonWithVisualizerProps } from "../components/voice/mic-button-with-visualizer";

export { MicSelector } from "../components/voice/mic-selector";
export type { MicSelectorProps } from "../components/voice/mic-selector";

export { useAudioDevices } from "../hooks/use-audio-devices";
export type {
  AudioDevice,
  UseAudioDevicesReturn,
} from "../hooks/use-audio-devices";
