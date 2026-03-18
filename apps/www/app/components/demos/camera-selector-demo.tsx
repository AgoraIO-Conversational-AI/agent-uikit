"use client"

import { useState } from "react"

import { CameraSelector, type CameraDevice } from "agora-agent-uikit"

const mockDevices: CameraDevice[] = [
  { deviceId: "device-1", label: "FaceTime HD Camera" },
  { deviceId: "device-2", label: "USB Webcam (Logitech C920)" },
  { deviceId: "device-3", label: "OBS Virtual Camera" },
]

export default function CameraSelectorDemo() {
  const [selectedDevice, setSelectedDevice] = useState<string>("device-1")
  const [disabled, setDisabled] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <div className="w-full max-w-2xl space-y-6">
      {/* Demo */}
      <div className="space-y-4 rounded-lg border p-4">
        <p className="text-sm font-medium">Camera Selector</p>
        <CameraSelector
          devices={mockDevices}
          value={selectedDevice}
          onValueChange={setSelectedDevice}
          disabled={disabled}
          hasError={hasError}
        />
        <p className="text-muted-foreground mt-3 text-sm">
          Selected: <strong>{mockDevices.find(d => d.deviceId === selectedDevice)?.label}</strong>
        </p>
      </div>

      {/* Controls */}
      <div className="space-y-3 rounded-lg border p-4">
        <p className="text-sm font-medium">Controls</p>
        <div className="flex gap-4">
          <label className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm">
            <input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} className="h-4 w-4" />
            Disabled
          </label>
          <label className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm">
            <input type="checkbox" checked={hasError} onChange={(e) => setHasError(e.target.checked)} className="h-4 w-4" />
            Error State
          </label>
        </div>
      </div>

      {/* Props */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Props</p>
        <div className="text-muted-foreground space-y-2 text-xs">
          <div><strong>devices?:</strong> CameraDevice[] - List of camera devices</div>
          <div><strong>value?:</strong> string - Selected device ID</div>
          <div><strong>onValueChange?:</strong> (deviceId: string) =&gt; void</div>
          <div><strong>disabled?:</strong> boolean</div>
          <div><strong>hasError?:</strong> boolean - Show error state</div>
        </div>
      </div>
    </div>
  )
}
