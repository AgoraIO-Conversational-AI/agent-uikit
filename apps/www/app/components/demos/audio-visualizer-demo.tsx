"use client"

import { useEffect, useRef, useState } from "react"

import { AudioVisualizer, Button } from "agora-agent-uikit"

const gradientPresets = [
  { name: "Default", colors: ["#A0FAFF", "#FCF9F8", "#C46FFB"] },
  { name: "Ocean Blue", colors: ["#3b82f6", "#60a5fa", "#93c5fd"] },
  { name: "Purple Sunset", colors: ["#a855f7", "#ec4899", "#f472b6"] },
  { name: "Emerald", colors: ["#10b981", "#34d399", "#6ee7b7"] },
]

export default function AudioVisualizerDemo() {
  const [micStream, setMicStream] = useState<MediaStream | undefined>(undefined)
  const [micEnabled, setMicEnabled] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedPreset, setSelectedPreset] = useState(gradientPresets[0])
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const startMicrophone = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      setMicStream(stream)
      setMicEnabled(true)
      setError(null)
    } catch (err) {
      console.error("Error accessing microphone:", err)
      setError("Unable to access microphone. Please grant microphone permissions.")
      setMicEnabled(false)
    }
  }

  const stopMicrophone = () => {
    if (micStream) {
      micStream.getTracks().forEach((track) => track.stop())
      setMicStream(undefined)
      setMicEnabled(false)
    }
  }

  useEffect(() => {
    return () => {
      if (micStream) {
        micStream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [micStream])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dropdownOpen])

  return (
    <div className="w-full space-y-6">
      <div className="space-y-4 rounded-lg border p-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium">Live Visualization</p>
          <span className="text-muted-foreground text-xs">Active: {selectedPreset.name}</span>
        </div>
        <div className="bg-muted rounded-lg p-6">
          <AudioVisualizer track={micStream} gradientColors={selectedPreset.colors} />
        </div>
        {!micEnabled && (
          <p className="text-muted-foreground text-xs">
            Enable microphone below to see live visualization.
          </p>
        )}
      </div>

      <div className="space-y-3 rounded-lg border p-4">
        <p className="text-sm font-medium">Demo Controls</p>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {!micEnabled ? (
              <Button onClick={startMicrophone}>Enable Microphone</Button>
            ) : (
              <Button variant="destructive" onClick={stopMicrophone}>Disable Microphone</Button>
            )}
            {micEnabled && <span className="text-sm text-green-500">● Microphone Active</span>}
          </div>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="border-input bg-background hover:bg-accent flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors"
            >
              <span
                className="h-6 w-6 flex-shrink-0 rounded-full border"
                style={{ background: `linear-gradient(135deg, ${selectedPreset.colors.join(", ")})` }}
              />
              <span className="hidden sm:inline">{selectedPreset.name}</span>
            </button>
            {dropdownOpen && (
              <div className="bg-background border-input absolute top-full right-0 z-10 mt-1 w-64 rounded-md border shadow-lg">
                {gradientPresets.map((preset) => (
                  <button
                    key={preset.name}
                    type="button"
                    onClick={() => { setSelectedPreset(preset); setDropdownOpen(false) }}
                    className={`hover:bg-accent flex w-full items-center gap-3 px-3 py-2 text-left transition-all ${selectedPreset.name === preset.name ? "bg-accent" : ""}`}
                  >
                    <span
                      className="h-8 w-8 flex-shrink-0 rounded-full border"
                      style={{ background: `linear-gradient(135deg, ${preset.colors.join(", ")})` }}
                    />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{preset.name}</p>
                      <p className="text-muted-foreground text-xs">{preset.colors.join(" • ")}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    </div>
  )
}
