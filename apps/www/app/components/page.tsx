"use client"

import * as React from "react"
import { Check, Copy, Terminal } from "lucide-react"

import { getBasePath } from "@/lib/basepath"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import AgentVisualizerDemo from "./demos/agent-visualizer-demo"
import AudioVisualizerDemo from "./demos/audio-visualizer-demo"
import AvatarDemo from "./demos/avatar-demo"
import ButtonDemo from "./demos/button-demo"
import CameraSelectorDemo from "./demos/camera-selector-demo"
import ConversationDemo from "./demos/conversation-demo"
import ConvoTextStreamDemo from "./demos/convo-text-stream-demo"
import IconButtonDemo from "./demos/icon-button-demo"
import LiveWaveformDemo from "./demos/live-waveform-demo"
import MicButtonDemo from "./demos/mic-button-demo"
import MicButtonWithVisualizerDemo from "./demos/mic-button-with-visualizer-demo"
import MicSelectorDemo from "./demos/mic-selector-demo"
import MobileTabsDemo from "./demos/mobile-tabs-demo"
import PrimitivesDemo from "./demos/primitives-demo"
import SessionPanelDemo from "./demos/session-panel-demo"
import SettingsDialogDemo from "./demos/settings-dialog-demo"
import ThemeDemo from "./demos/theme-demo"
import VideoDisplayDemo from "./demos/video-display-demo"
import VideoGridDemo from "./demos/video-grid-demo"

import { codeExamples } from "./code-examples"
import { ComponentDemo } from "./component-demo"

function InstallCTA() {
  const [copied, setCopied] = React.useState(false)
  const installCommand = "npm install agora-agent-uikit"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(installCommand)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy install command: ", err)
    }
  }

  return (
    <div>
      <div className="bg-card flex items-center gap-3 rounded-lg border p-4 shadow-sm">
        <Terminal className="text-muted-foreground h-5 w-5" />
        <code className="text-muted-foreground flex-1 font-mono text-xs">
          {installCommand}
        </code>
        <button
          onClick={copyToClipboard}
          className="text-muted-foreground hover:bg-muted hover:text-foreground flex h-6 w-6 items-center justify-center rounded transition-colors"
          title={copied ? "Copied!" : "Copy install command"}
        >
          {copied ? (
            <Check className="h-3 w-3" />
          ) : (
            <Copy className="h-3 w-3" />
          )}
        </button>
      </div>
    </div>
  )
}

export default function ComponentsPage() {
  const basePath = getBasePath()

  return (
    <main className="bg-background min-h-screen p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <div className="mb-4 flex items-end gap-4">
              <h1 className="text-4xl font-bold tracking-tight">
                AI Agent UIKit
              </h1>
            </div>
            <p className="text-muted-foreground text-lg">
              React components for building AI agents with real-time voice and
              video
            </p>
          </div>
          <div className="md:w-90">
            <InstallCTA />
          </div>
        </div>

        {/* Tabbed Layout */}
        <Tabs defaultValue="agent-visualizer" className="w-full">
          <div className="bg-background border-b pb-4">
            <TabsList className="flex flex-wrap gap-1">
              <TabsTrigger value="agent-visualizer" className="text-xs">
                Agent Visualizer
              </TabsTrigger>
              <TabsTrigger value="audio-visualizer" className="text-xs">
                Audio Visualizer
              </TabsTrigger>
              <TabsTrigger value="mic-button" className="text-xs">
                Mic Button
              </TabsTrigger>
              <TabsTrigger value="mic-button-visualizer" className="text-xs">
                Mic + Visualizer
              </TabsTrigger>
              <TabsTrigger value="live-waveform" className="text-xs">
                Live Waveform
              </TabsTrigger>
              <TabsTrigger value="mic-selector" className="text-xs">
                Mic Selector
              </TabsTrigger>
              <TabsTrigger value="convo-text-stream" className="text-xs">
                Transcript
              </TabsTrigger>
              <TabsTrigger value="conversation" className="text-xs">
                Conversation
              </TabsTrigger>
              <TabsTrigger value="avatar" className="text-xs">
                Avatar
              </TabsTrigger>
              <TabsTrigger value="video-display" className="text-xs">
                Video Display
              </TabsTrigger>
              <TabsTrigger value="camera-selector" className="text-xs">
                Camera Selector
              </TabsTrigger>
              <TabsTrigger value="video-grid" className="text-xs">
                Video Grid
              </TabsTrigger>
              <TabsTrigger value="mobile-tabs" className="text-xs">
                Mobile Tabs
              </TabsTrigger>
              <TabsTrigger value="settings-dialog" className="text-xs">
                Settings
              </TabsTrigger>
              <TabsTrigger value="session-panel" className="text-xs">
                Session Panel
              </TabsTrigger>
              <TabsTrigger value="button" className="text-xs">
                Button
              </TabsTrigger>
              <TabsTrigger value="icon-button" className="text-xs">
                Icon Button
              </TabsTrigger>
              <TabsTrigger value="primitives" className="text-xs">
                Primitives
              </TabsTrigger>
              <TabsTrigger value="theme" className="text-xs">
                Theme
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Voice Components */}
          <TabsContent value="agent-visualizer" className="pt-8">
            <ComponentDemo
              title="Agent Visualizer"
              description="An animated agent visualizer component that displays Lottie animations for different agent states"
              demo={<AgentVisualizerDemo />}
              code={codeExamples.agentVisualizer}
            />
          </TabsContent>

          <TabsContent value="audio-visualizer" className="pt-8">
            <ComponentDemo
              title="Audio Visualizer"
              description="Real-time audio frequency visualizer with 9 bars and configurable gradient colors. Supports Agora audio tracks and MediaStream."
              demo={<AudioVisualizerDemo />}
              code={codeExamples.audioVisualizer}
            />
          </TabsContent>

          <TabsContent value="mic-button" className="pt-8">
            <ComponentDemo
              title="Mic Button"
              description="A microphone button with state-based visual feedback. Shows different animations for idle, listening, processing, and error states."
              demo={<MicButtonDemo />}
              code={codeExamples.micButton}
            />
          </TabsContent>

          <TabsContent value="mic-button-visualizer" className="pt-8">
            <ComponentDemo
              title="Mic Button with Visualizer"
              description="Microphone toggle button with integrated 5-bar audio visualizer. Requires Agora RTC context for publish/unpublish functionality."
              demo={<MicButtonWithVisualizerDemo />}
              code={codeExamples.micButtonWithVisualizer}
            />
          </TabsContent>

          <TabsContent value="live-waveform" className="pt-8">
            <ComponentDemo
              title="Live Waveform"
              description="Animated waveform bars with configurable appearance. Can be driven by live audio data or display ambient animation."
              demo={<LiveWaveformDemo />}
              code={codeExamples.liveWaveform}
            />
          </TabsContent>

          <TabsContent value="mic-selector" className="pt-8">
            <ComponentDemo
              title="Mic Selector"
              description="A microphone selector component with automatic device detection, mute toggle, and waveform preview using Web Audio API"
              demo={<MicSelectorDemo />}
              code={codeExamples.micSelector}
            />
          </TabsContent>

          {/* Chat Components */}
          <TabsContent value="convo-text-stream" className="pt-8">
            <ComponentDemo
              title="Convo Text Stream"
              description="Collapsible chat interface for displaying streaming conversation transcripts. Supports markdown rendering, auto-scrolling, and both RTC/RTM message sources."
              demo={<ConvoTextStreamDemo />}
              code={codeExamples.convoTextStream}
            />
          </TabsContent>

          <TabsContent value="conversation" className="pt-8">
            <ComponentDemo
              title="Conversation"
              description="Scrollable conversation component with auto-scroll, streaming responses, avatar integration, and empty state handling."
              demo={<ConversationDemo />}
              code={codeExamples.conversation}
            />
          </TabsContent>

          {/* Video Components */}
          <TabsContent value="avatar" className="pt-8">
            <ComponentDemo
              title="Avatar"
              description="Flexible avatar component displaying images, icons, or initials with configurable sizes and colors."
              demo={<AvatarDemo />}
              code={codeExamples.avatar}
            />
          </TabsContent>

          <TabsContent value="video-display" className="pt-8">
            <ComponentDemo
              title="Video Display"
              description="AvatarVideoDisplay and LocalVideoPreview components for rendering video tracks with placeholder states."
              demo={<VideoDisplayDemo />}
              code={codeExamples.videoDisplay}
            />
          </TabsContent>

          <TabsContent value="camera-selector" className="pt-8">
            <ComponentDemo
              title="Camera Selector"
              description="Camera device selector with device list, disabled state, and error state support."
              demo={<CameraSelectorDemo />}
              code={codeExamples.cameraSelector}
            />
          </TabsContent>

          {/* Layout Components */}
          <TabsContent value="video-grid" className="pt-8">
            <ComponentDemo
              title="Video Grid"
              description="2x2 grid layout for video calls with slots for avatar, chat, local video, and controls."
              demo={<VideoGridDemo />}
              code={codeExamples.videoGrid}
            />
          </TabsContent>

          <TabsContent value="mobile-tabs" className="pt-8">
            <ComponentDemo
              title="Mobile Tabs"
              description="Tab navigation component with top/bottom positioning, icon support, and content switching."
              demo={<MobileTabsDemo />}
              code={codeExamples.mobileTabs}
            />
          </TabsContent>

          {/* Settings & Session */}
          <TabsContent value="settings-dialog" className="pt-8">
            <ComponentDemo
              title="Settings Dialog"
              description="Modal dialog with AgentSettings controls including mic selection, AI VAD, language, prompt, and greeting."
              demo={<SettingsDialogDemo />}
              code={codeExamples.settingsDialog}
            />
          </TabsContent>

          <TabsContent value="session-panel" className="pt-8">
            <ComponentDemo
              title="Session Panel"
              description="Displays agent session information including agent ID and JSON payload with copy functionality."
              demo={<SessionPanelDemo />}
              code={codeExamples.sessionPanel}
            />
          </TabsContent>

          {/* Primitives */}
          <TabsContent value="button" className="pt-8">
            <ComponentDemo
              title="Button"
              description="A versatile button component with multiple variants, sizes, and optional label support."
              demo={<ButtonDemo />}
              code={codeExamples.button}
            />
          </TabsContent>

          <TabsContent value="icon-button" className="pt-8">
            <ComponentDemo
              title="Icon Button"
              description="A compact icon button component with shape variants (round, square) and style variants (filled, outlined, standard)."
              demo={<IconButtonDemo />}
              code={codeExamples.iconButton}
            />
          </TabsContent>

          <TabsContent value="primitives" className="pt-8">
            <ComponentDemo
              title="Card / Chip / Value Picker"
              description="Core primitive components: Card containers, Chip wrappers, and ValuePicker dropdown selects."
              demo={<PrimitivesDemo />}
              code={codeExamples.primitives}
            />
          </TabsContent>

          {/* Theme */}
          <TabsContent value="theme" className="pt-8">
            <ComponentDemo
              title="Theme"
              description="Dynamic theme system using applyCustomTheme() to set CSS variables. All components automatically update."
              demo={<ThemeDemo />}
              code={codeExamples.theme}
            />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
