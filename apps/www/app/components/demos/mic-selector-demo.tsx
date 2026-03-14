"use client"

import { useState } from "react"

export default function MicSelectorDemo() {
  return (
    <div className="w-full max-w-2xl space-y-6">
      <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
        <p className="mb-2 text-sm font-medium text-blue-400">SDK Dependency Required</p>
        <p className="text-muted-foreground text-xs">
          The MicSelector component requires the Agora RTC SDK (<code>agora-rtc-react</code>) and
          is imported from <code>agora-agent-uikit/rtc</code>. This demo shows a preview of
          the component&apos;s appearance and behavior.
        </p>
      </div>

      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Features</p>
        <div className="text-muted-foreground space-y-1.5 text-xs">
          <div>• Auto-detects audio input devices</div>
          <div>• Live waveform preview using Web Audio API</div>
          <div>• Mute/unmute toggle with visual indicator</div>
          <div>• Dropdown device selector</div>
          <div>• Permission handling with error states</div>
          <div>• Auto-selects first available device</div>
        </div>
      </div>

      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Usage</p>
        <pre className="bg-muted overflow-auto rounded p-4 text-xs">
          <code>{`import { MicSelector } from "agora-agent-uikit/rtc"
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
}`}</code>
        </pre>
      </div>
    </div>
  )
}
