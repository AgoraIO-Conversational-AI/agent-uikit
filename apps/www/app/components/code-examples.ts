export const codeExamples = {
  agentVisualizer: `import { AgentVisualizer } from "agora-agent-uikit"

export function MyComponent() {
  return (
    <AgentVisualizer
      state="listening"
      size="md"
    />
  )
}

// Available states:
// - not-joined, joining, ambient
// - listening, analyzing, talking
// - disconnected

// Available sizes:
// - sm (128px), md (192px), lg (256px)`,

  audioVisualizer: [
    {
      label: "Agora",
      code: `import { AudioVisualizer } from "agora-agent-uikit"
import { useLocalMicrophoneTrack } from "agora-rtc-react"

export function MyComponent() {
  const { localMicrophoneTrack } = useLocalMicrophoneTrack()

  return (
    <AudioVisualizer
      track={localMicrophoneTrack}
      gradientColors={["#A0FAFF", "#FCF9F8", "#C46FFB"]}
    />
  )
}

// Features:
// - 9-bar frequency visualization
// - Configurable gradient colors
// - Supports Agora audio tracks`,
    },
    {
      label: "WebRTC",
      code: `import { AudioVisualizer } from "agora-agent-uikit"
import { useState, useEffect } from "react"

export function MyComponent() {
  const [micStream, setMicStream] = useState<MediaStream>()

  const startMic = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true
    })
    setMicStream(stream)
  }

  useEffect(() => {
    return () => {
      micStream?.getTracks().forEach(track => track.stop())
    }
  }, [micStream])

  return (
    <>
      <button onClick={startMic}>Enable Microphone</button>
      <AudioVisualizer
        track={micStream}
        gradientColors={["#3b82f6", "#60a5fa", "#93c5fd"]}
      />
    </>
  )
}

// Works with standard MediaStream objects`,
    },
  ],

  micButton: `import { MicButton } from "agora-agent-uikit"
import { useState } from "react"

export function MyComponent() {
  const [state, setState] = useState<
    "idle" | "listening" | "processing" | "error"
  >("idle")

  return (
    <MicButton
      state={state}
      showErrorBadge={state === "error"}
    />
  )
}

// States:
// - idle: Mic icon + chevron
// - listening: Mic + animated blue waveform
// - processing: Mic + static gray waveform
// - error: Mic-off icon in red`,

  micButtonWithVisualizer: [
    {
      label: "Agora",
      code: `import { MicButtonWithVisualizer } from "agora-agent-uikit/rtc"
import { AgoraRTCProvider, useLocalMicrophoneTrack } from "agora-rtc-react"
import AgoraRTC from "agora-rtc-sdk-ng"
import { useState } from "react"

const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" })

export function MyComponent() {
  const [micEnabled, setMicEnabled] = useState(false)
  const { localMicrophoneTrack } = useLocalMicrophoneTrack()

  return (
    <AgoraRTCProvider client={client}>
      <MicButtonWithVisualizer
        isEnabled={micEnabled}
        setIsEnabled={setMicEnabled}
        track={localMicrophoneTrack}
        enabledColor="#A0FAFF"
        disabledColor="#DE344A"
      />
    </AgoraRTCProvider>
  )
}`,
    },
    {
      label: "WebRTC",
      code: `import { MicButtonWithVisualizer } from "agora-agent-uikit/rtc"
import { useState, useEffect } from "react"

export function MyComponent() {
  const [micEnabled, setMicEnabled] = useState(false)
  const [micStream, setMicStream] = useState<MediaStream>()

  const toggleMic = async () => {
    if (micEnabled && micStream) {
      micStream.getTracks().forEach(track => track.stop())
      setMicStream(undefined)
      setMicEnabled(false)
    } else {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true
      })
      setMicStream(stream)
      setMicEnabled(true)
    }
  }

  return (
    <MicButtonWithVisualizer
      isEnabled={micEnabled}
      setIsEnabled={setMicEnabled}
      track={micStream || null}
      enabledColor="#3b82f6"
      disabledColor="#ef4444"
      onToggle={toggleMic}
    />
  )
}`,
    },
  ],

  liveWaveform: `import { LiveWaveform } from "agora-agent-uikit"

export function MyComponent() {
  return (
    <LiveWaveform
      active={true}
      barWidth={4}
      barGap={2}
      barColor="#3b82f6"
      height={100}
      fadeEdges={true}
    />
  )
}

// Props:
// - active: Enable/disable animation
// - barWidth, barGap: Bar dimensions
// - barColor: Color (hex/rgb/name)
// - height: Waveform height (px)
// - fadeEdges: Fade left/right edges`,

  micSelector: `import { MicSelector } from "agora-agent-uikit/rtc"
import { useState } from "react"

export function MyComponent() {
  const [device, setDevice] = useState<string>()
  const [muted, setMuted] = useState(false)

  return (
    <MicSelector
      value={device}
      onValueChange={setDevice}
      muted={muted}
      onMutedChange={setMuted}
    />
  )
}

// Features:
// - Auto-detects audio devices
// - Mute/unmute toggle
// - Waveform preview`,

  convoTextStream: [
    {
      label: "RTC",
      code: `import {
  ConvoTextStream,
  EMessageStatus,
  type IMessageListItem
} from "agora-agent-uikit"
import { useState, useEffect } from "react"

export function MyComponent() {
  const [messages, setMessages] = useState<IMessageListItem[]>([])
  const [inProgressMsg, setInProgressMsg] =
    useState<IMessageListItem | null>(null)

  return (
    <ConvoTextStream
      messageList={messages}
      currentInProgressMessage={inProgressMsg}
      agentUID="0"
    />
  )
}`,
    },
    {
      label: "RTM",
      code: `import {
  ConvoTextStream,
  EMessageStatus,
  type IMessageListItem
} from "agora-agent-uikit"
import { useState } from "react"

export function MyComponent() {
  const [messages, setMessages] = useState<IMessageListItem[]>([])
  const [inProgressMsg, setInProgressMsg] =
    useState<IMessageListItem | null>(null)

  return (
    <ConvoTextStream
      messageList={messages}
      currentInProgressMessage={inProgressMsg}
      agentUID="0"
    />
  )
}`,
    },
  ],

  conversation: `import {
  Avatar,
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
  Message,
  MessageContent,
  Response,
} from "agora-agent-uikit"
import { MessageCircle, User } from "lucide-react"

export function MyComponent() {
  return (
    <Conversation>
      <ConversationContent>
        <div className="flex items-start gap-3">
          <Avatar icon={<MessageCircle />} />
          <Message from="assistant">
            <MessageContent>
              <Response>Hello! How can I help?</Response>
            </MessageContent>
          </Message>
        </div>
        <div className="flex items-start justify-end gap-3">
          <Message from="user">
            <MessageContent>
              <Response>I need help with...</Response>
            </MessageContent>
          </Message>
          <Avatar icon={<User />} />
        </div>
      </ConversationContent>
      <ConversationScrollButton />
    </Conversation>
  )
}`,

  avatar: `import { Avatar } from "agora-agent-uikit"
import { User } from "lucide-react"

export function MyComponent() {
  return (
    <>
      {/* With initials */}
      <Avatar size="md" initials="JD" />

      {/* With icon */}
      <Avatar
        size="md"
        icon={<User className="h-5 w-5" />}
        bgColor="bg-gradient-to-br from-blue-500 to-blue-600"
      />

      {/* Auto from name */}
      <Avatar name="John Doe" />

      {/* With image */}
      <Avatar src="/avatar.jpg" alt="User" />
    </>
  )
}

// Priority: Image > Icon > Initials > Default
// Sizes: sm (32px), md (40px), lg (48px)`,

  videoDisplay: `import {
  AvatarVideoDisplay,
  LocalVideoPreview
} from "agora-agent-uikit"

export function MyComponent({ videoTrack }) {
  return (
    <>
      <AvatarVideoDisplay
        videoTrack={videoTrack}
        state="connected"
        showStatus
        placeholder={<div>No video</div>}
      />

      <LocalVideoPreview
        videoTrack={videoTrack}
        isMirrored
        showLabel
        label="You"
      />
    </>
  )
}`,

  cameraSelector: `import { CameraSelector } from "agora-agent-uikit"
import { useState } from "react"

export function MyComponent({ devices }) {
  const [selected, setSelected] = useState<string>()

  return (
    <CameraSelector
      devices={devices}
      value={selected}
      onValueChange={setSelected}
    />
  )
}`,

  videoGrid: `import {
  VideoGrid,
  VideoGridWithControls
} from "agora-agent-uikit"

export function MyComponent() {
  return (
    <VideoGridWithControls
      avatar={<RemoteVideo />}
      chat={<ChatPanel />}
      localVideo={<LocalVideo />}
      controls={<ControlBar />}
    />
  )
}

// Layout: 2x2 grid
// - Top-left: chat (40% width)
// - Top-right: avatar (60% width)
// - Bottom-left: localVideo
// - Bottom-right: controls`,

  mobileTabs: `import { MobileTabs, type Tab } from "agora-agent-uikit"
import { useState } from "react"

const tabs: Tab[] = [
  { id: "chat", label: "Chat", content: <Chat /> },
  { id: "video", label: "Video", content: <Video /> },
]

export function MyComponent() {
  const [activeTab, setActiveTab] = useState("chat")

  return (
    <MobileTabs
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      tabPosition="bottom"
    />
  )
}`,

  settingsDialog: `import { SettingsDialog } from "agora-agent-uikit"
import { useState } from "react"

export function MyComponent() {
  const [open, setOpen] = useState(false)
  const [enableAivad, setEnableAivad] = useState(true)
  const [language, setLanguage] = useState("en-US")

  return (
    <SettingsDialog
      open={open}
      onOpenChange={setOpen}
      enableAivad={enableAivad}
      onEnableAivadChange={setEnableAivad}
      language={language}
      onLanguageChange={setLanguage}
      prompt="You are a helpful assistant."
      onPromptChange={console.log}
    />
  )
}`,

  sessionPanel: `import { SessionPanel } from "agora-agent-uikit"

export function MyComponent() {
  return (
    <SessionPanel
      agentId="agent-abc-123"
      payload={{
        channel_name: "test-channel",
        uid: 1001,
        agent_config: {
          model: "gpt-4o",
          language: "en-US",
        },
      }}
    />
  )
}`,

  theme: `import { applyCustomTheme } from "agora-agent-uikit"

// Apply a custom theme on app init
applyCustomTheme({
  PRIMARY_ACTION_BRAND_COLOR: "#E62079",
  BACKGROUND_COLOR: "#111111",
  SEMANTIC_SUCCESS: "#36b37e",
})

// All components automatically update
// No manual re-renders needed`,

  iconButton: `import { IconButton } from "agora-agent-uikit"
import { Copy } from "lucide-react"

export function MyComponent() {
  return (
    <>
      {/* Filled variant (default) */}
      <IconButton shape="round" variant="filled">
        <Copy className="size-5" />
      </IconButton>

      {/* Outlined variant */}
      <IconButton shape="square" variant="outlined">
        <Copy className="size-5" />
      </IconButton>

      {/* Standard variant */}
      <IconButton variant="standard">
        <Copy className="size-5" />
      </IconButton>
    </>
  )
}`,

  button: `import { Button } from "agora-agent-uikit"
import { Mic } from "lucide-react"

export function MyComponent() {
  return (
    <>
      {/* Variants */}
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Delete</Button>

      {/* With Icon */}
      <Button>
        <Mic className="size-4" />
        Record
      </Button>

      {/* With Label */}
      <Button label="Click to submit">
        Submit
      </Button>
    </>
  )
}`,

  primitives: `import { Card, CardTitle, CardContent } from "agora-agent-uikit"
import { Chip, Button } from "agora-agent-uikit"
import { ValuePicker } from "agora-agent-uikit"

// Card
<Card>
  <CardTitle>Title</CardTitle>
  <CardContent>Content here</CardContent>
</Card>

// Chip
<Chip>
  <Button>Action 1</Button>
  <Button>Action 2</Button>
</Chip>

// ValuePicker
<ValuePicker
  items={[{ id: "1", name: "Option 1" }]}
  value={selected}
  onValueChange={setSelected}
/>`,
}
