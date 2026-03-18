"use client"

import { useEffect, useRef, useState } from "react"

import { MicButton, type MicButtonState } from "agora-agent-uikit"

export default function MicButtonDemo() {
  const [state, setState] = useState<MicButtonState>("idle")
  const [micStream, setMicStream] = useState<MediaStream | undefined>(undefined)
  const [audioLevel, setAudioLevel] = useState(0)
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)

  const startMicrophone = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      setMicStream(stream)
      setState("listening")

      audioContextRef.current = new AudioContext()
      analyserRef.current = audioContextRef.current.createAnalyser()
      analyserRef.current.fftSize = 64
      analyserRef.current.smoothingTimeConstant = 0.5

      const source = audioContextRef.current.createMediaStreamSource(stream)
      source.connect(analyserRef.current)
      updateAudioLevel()
    } catch (err) {
      console.error("Error accessing microphone:", err)
      setState("error")
    }
  }

  const stopMicrophone = () => {
    if (micStream) {
      micStream.getTracks().forEach((track) => track.stop())
      setMicStream(undefined)
    }
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    if (audioContextRef.current) {
      audioContextRef.current.close()
      audioContextRef.current = null
    }
    setState("idle")
    setAudioLevel(0)
  }

  const updateAudioLevel = () => {
    if (!analyserRef.current) return
    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount)
    analyserRef.current.getByteFrequencyData(dataArray)
    const average = dataArray.reduce((a, b) => a + b, 0) / dataArray.length
    const normalizedLevel = Math.min(average / 128, 1)
    setAudioLevel(normalizedLevel)
    animationFrameRef.current = requestAnimationFrame(updateAudioLevel)
  }

  useEffect(() => {
    return () => {
      if (micStream) micStream.getTracks().forEach((track) => track.stop())
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
      if (audioContextRef.current) audioContextRef.current.close()
    }
  }, [micStream])

  return (
    <div className="w-full max-w-lg space-y-6">
      <div className="space-y-3 rounded-lg border p-4">
        <p className="text-sm font-medium">Microphone Control</p>
        <div className="flex items-center gap-3">
          {!micStream ? (
            <button onClick={startMicrophone} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Enable Microphone
            </button>
          ) : (
            <button onClick={stopMicrophone} className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
              Disable Microphone
            </button>
          )}
          {micStream && <span className="text-sm text-green-500">● Microphone Active</span>}
        </div>
      </div>

      <div className="space-y-4 rounded-lg border p-4">
        <p className="text-sm font-medium">Live Demo</p>
        <div className="bg-muted flex items-center justify-center rounded-lg p-6">
          <MicButton state={state} />
        </div>
        <p className="text-muted-foreground text-xs">
          Current state: <strong className="capitalize">{state}</strong>
        </p>
      </div>

      <div className="space-y-3 rounded-lg border p-4">
        <p className="text-sm font-medium">Manual State Control</p>
        <div className="space-y-2">
          {(["idle", "listening", "processing", "error"] as const).map((s) => (
            <label key={s} className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 rounded px-2 py-1 text-sm transition-colors">
              <input type="radio" name="state" value={s} checked={state === s}
                onChange={(e) => !micStream && setState(e.target.value as MicButtonState)}
                disabled={!!micStream} className="h-4 w-4" />
              <span className="capitalize">{s}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-lg border p-4">
        <p className="mb-4 text-sm font-medium">State Examples</p>
        <div className="space-y-3">
          {(["idle", "listening", "processing", "error"] as const).map((s) => (
            <div key={s} className="flex items-center gap-2">
              <MicButton state={s} />
              <span className="text-muted-foreground text-xs">{s}</span>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <MicButton state="error" showErrorBadge={true} />
            <span className="text-muted-foreground text-xs">error with badge</span>
          </div>
        </div>
      </div>
    </div>
  )
}
