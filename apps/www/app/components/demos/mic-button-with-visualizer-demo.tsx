"use client"

import { useEffect, useRef, useState } from "react"

import { Button } from "agora-agent-uikit"

const colorSchemePresets = [
  { name: "Default", enabled: "#A0FAFF", disabled: "#DE344A" },
  { name: "Ocean Blue", enabled: "#3b82f6", disabled: "#ef4444" },
  { name: "Purple", enabled: "#a855f7", disabled: "#f43f5e" },
  { name: "Emerald", enabled: "#10b981", disabled: "#f59e0b" },
]

function MicButtonVisualizerDemo({
  micEnabled,
  selectedScheme,
  micStream,
  onToggleMic,
}: {
  micEnabled: boolean
  selectedScheme: (typeof colorSchemePresets)[number]
  micStream: MediaStream | undefined
  onToggleMic: () => void
}) {
  const [audioData, setAudioData] = useState(Array(5).fill({ height: 0 }))
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (micStream && micEnabled) setupAudioAnalyser()
    else cleanupAudioAnalyser()
    return () => cleanupAudioAnalyser()
  }, [micStream, micEnabled])

  const setupAudioAnalyser = async () => {
    if (!micStream) return
    try {
      audioContextRef.current = new AudioContext()
      analyserRef.current = audioContextRef.current.createAnalyser()
      analyserRef.current.fftSize = 64
      analyserRef.current.smoothingTimeConstant = 0.5
      const source = audioContextRef.current.createMediaStreamSource(micStream)
      source.connect(analyserRef.current)
      updateAudioData()
    } catch (error) {
      console.error("Error setting up audio analyser:", error)
    }
  }

  const cleanupAudioAnalyser = () => {
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    if (audioContextRef.current) { audioContextRef.current.close(); audioContextRef.current = null }
    setAudioData(Array(5).fill({ height: 0 }))
  }

  const updateAudioData = () => {
    if (!analyserRef.current) return
    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount)
    analyserRef.current.getByteFrequencyData(dataArray)
    const segmentSize = Math.floor(dataArray.length / 5)
    const newAudioData = Array(5).fill(0).map((_, index) => {
      const start = index * segmentSize
      const segment = dataArray.slice(start, start + segmentSize)
      const average = segment.reduce((a, b) => a + b, 0) / segment.length
      const scaledHeight = Math.min(60, (average / 255) * 100 * 1.2)
      return { height: Math.pow(scaledHeight / 60, 0.7) * 60 }
    })
    setAudioData(newAudioData)
    animationFrameRef.current = requestAnimationFrame(updateAudioData)
  }

  return (
    <button
      onClick={onToggleMic}
      className="group relative flex h-16 w-16 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"
    >
      <div className="absolute inset-0 flex items-center justify-center gap-1">
        {audioData.map((bar, index) => (
          <div
            key={index}
            className="w-1 rounded-full transition-all duration-100"
            style={{
              height: `${bar.height}%`,
              transform: `scaleY(${Math.max(0.1, bar.height / 100)})`,
              transformOrigin: "center",
              backgroundColor: micEnabled ? selectedScheme.enabled : selectedScheme.disabled,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 transition-colors duration-300">
        {micEnabled ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={selectedScheme.enabled} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" x2="12" y1="19" y2="22" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={selectedScheme.disabled} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="2" x2="22" y1="2" y2="22" />
            <path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
            <path d="M5 10v2a7 7 0 0 0 12 5" />
            <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
            <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
            <line x1="12" x2="12" y1="19" y2="22" />
          </svg>
        )}
      </div>
    </button>
  )
}

export default function MicButtonWithVisualizerDemo() {
  const [micStream, setMicStream] = useState<MediaStream | undefined>(undefined)
  const [micEnabled, setMicEnabled] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedScheme, setSelectedScheme] = useState(colorSchemePresets[0])
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
      setError("Unable to access microphone.")
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
    return () => { if (micStream) micStream.getTracks().forEach((track) => track.stop()) }
  }, [micStream])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) setDropdownOpen(false)
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dropdownOpen])

  return (
    <div className="w-full space-y-6">
      <div className="space-y-4 rounded-lg border p-4">
        <p className="text-sm font-medium">Live Demo</p>
        <div className="bg-muted flex items-center justify-center rounded-lg p-6">
          <MicButtonVisualizerDemo
            micEnabled={micEnabled}
            selectedScheme={selectedScheme}
            micStream={micStream}
            onToggleMic={() => micEnabled ? stopMicrophone() : startMicrophone()}
          />
        </div>
        {micEnabled ? (
          <p className="text-sm text-green-500">● Microphone Active</p>
        ) : (
          <p className="text-muted-foreground text-center text-xs">Click the button to toggle mic.</p>
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
          </div>
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="border-input bg-background hover:bg-accent flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors">
              <div className="flex gap-1">
                <span className="h-4 w-4 rounded-full border" style={{ backgroundColor: selectedScheme.enabled }} />
                <span className="h-4 w-4 rounded-full border" style={{ backgroundColor: selectedScheme.disabled }} />
              </div>
              <span className="hidden sm:inline">{selectedScheme.name}</span>
            </button>
            {dropdownOpen && (
              <div className="bg-background border-input absolute top-full right-0 z-10 mt-1 w-56 rounded-md border shadow-lg">
                {colorSchemePresets.map((scheme) => (
                  <button key={scheme.name} onClick={() => { setSelectedScheme(scheme); setDropdownOpen(false) }}
                    className={`hover:bg-accent flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors ${selectedScheme.name === scheme.name ? "bg-accent" : ""}`}>
                    <div className="flex gap-1">
                      <span className="h-4 w-4 rounded-full border" style={{ backgroundColor: scheme.enabled }} />
                      <span className="h-4 w-4 rounded-full border" style={{ backgroundColor: scheme.disabled }} />
                    </div>
                    <span>{scheme.name}</span>
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
