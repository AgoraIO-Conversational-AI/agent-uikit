"use client"

import { useState } from "react"
import { User, Video, VideoOff } from "lucide-react"

import { AvatarVideoDisplay, LocalVideoPreview, Avatar, Button } from "agora-agent-uikit"

export default function VideoDisplayDemo() {
  const [avatarState, setAvatarState] = useState<"connected" | "loading" | "disconnected">("disconnected")

  return (
    <div className="w-full max-w-3xl space-y-8">
      <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
        <p className="mb-2 text-sm font-medium text-blue-400">Video Track Required</p>
        <p className="text-muted-foreground text-xs">
          These components require an Agora video track or MediaStream. This demo shows placeholder states.
        </p>
      </div>

      {/* AvatarVideoDisplay */}
      <div className="space-y-3">
        <p className="text-sm font-medium">AvatarVideoDisplay</p>
        <div className="flex gap-2 mb-3">
          {(["disconnected", "loading", "connected"] as const).map((s) => (
            <Button key={s} onClick={() => setAvatarState(s)}
              variant={avatarState === s ? "default" : "secondary"} className="text-xs capitalize">
              {s}
            </Button>
          ))}
        </div>
        <div className="bg-muted flex items-center justify-center rounded-lg p-6">
          <AvatarVideoDisplay
            state={avatarState}
            showStatus
            placeholder={
              <Avatar size="lg" icon={<Video className="h-6 w-6" />} bgColor="bg-gradient-to-br from-blue-500 to-blue-600" />
            }
            className="h-64 w-80 rounded-lg"
          />
        </div>
      </div>

      {/* LocalVideoPreview */}
      <div className="space-y-3">
        <p className="text-sm font-medium">LocalVideoPreview</p>
        <div className="bg-muted flex items-center justify-center rounded-lg p-6">
          <LocalVideoPreview
            showLabel
            label="You"
            isVideoMuted
            placeholder={
              <div className="flex flex-col items-center gap-2">
                <Avatar size="lg" icon={<User className="h-6 w-6" />} bgColor="bg-gradient-to-br from-green-500 to-green-600" />
                <span className="text-muted-foreground text-xs">Camera off</span>
              </div>
            }
            className="h-48 w-64 rounded-lg"
          />
        </div>
      </div>

      {/* Props Reference */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Props</p>
        <div className="text-muted-foreground space-y-2 text-xs">
          <div><strong>videoTrack?:</strong> PlayableVideoTrack | null - Video track to display</div>
          <div><strong>state?:</strong> &quot;connected&quot; | &quot;loading&quot; | &quot;disconnected&quot; - Connection state</div>
          <div><strong>showStatus?:</strong> boolean - Show status indicator</div>
          <div><strong>placeholder?:</strong> ReactNode - Shown when no video track</div>
          <div><strong>objectFit?:</strong> &quot;cover&quot; | &quot;contain&quot; | &quot;fill&quot; - Video fit mode</div>
        </div>
      </div>
    </div>
  )
}
