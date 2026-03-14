"use client"

import { useState } from "react"

import { LiveWaveform } from "agora-agent-uikit"

export default function LiveWaveformDemo() {
  const [active, setActive] = useState(true)

  return (
    <div className="w-full max-w-2xl space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-medium">Animation State</p>
        <label className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 rounded px-2 py-1 text-sm transition-colors">
          <input type="checkbox" checked={active} onChange={(e) => setActive(e.target.checked)} className="h-4 w-4" />
          <span>Active</span>
        </label>
      </div>

      <div className="space-y-3 rounded-lg border p-4">
        <p className="text-sm font-medium">Default</p>
        <div className="bg-muted flex items-center justify-center rounded-lg p-6">
          <LiveWaveform active={active} />
        </div>
      </div>

      <div className="space-y-3 rounded-lg border p-4">
        <p className="text-sm font-medium">Custom Blue (Larger)</p>
        <div className="bg-muted flex items-center justify-center rounded-lg p-6">
          <LiveWaveform active={active} barWidth={6} barGap={3} barColor="#2563eb" height={120} />
        </div>
      </div>

      <div className="space-y-3 rounded-lg border p-4">
        <p className="text-sm font-medium">Purple Vibrant</p>
        <div className="bg-muted flex items-center justify-center rounded-lg p-6">
          <LiveWaveform active={active} barWidth={5} barGap={2} barColor="#a855f7" height={90} fadeEdges={false} />
        </div>
      </div>

      <div className="space-y-3 rounded-lg border p-4">
        <p className="text-sm font-medium">Compact</p>
        <div className="bg-muted flex items-center justify-center rounded-lg p-6">
          <LiveWaveform active={active} barWidth={3} barGap={1} barColor="#06b6d4" height={60} />
        </div>
      </div>
    </div>
  )
}
