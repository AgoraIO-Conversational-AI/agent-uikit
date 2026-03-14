"use client"

import { useState } from "react"
import { MessageCircle, Mic, User, Video } from "lucide-react"

import { VideoGrid, VideoGridWithControls, Avatar, Button, IconButton } from "agora-agent-uikit"

export default function VideoGridDemo() {
  const [showControls, setShowControls] = useState(false)

  const GridComponent = showControls ? VideoGridWithControls : VideoGrid

  return (
    <div className="w-full max-w-4xl space-y-6">
      <div className="flex gap-2">
        <Button onClick={() => setShowControls(false)} variant={!showControls ? "default" : "secondary"} className="text-xs">
          VideoGrid
        </Button>
        <Button onClick={() => setShowControls(true)} variant={showControls ? "default" : "secondary"} className="text-xs">
          VideoGridWithControls
        </Button>
      </div>

      <div className="rounded-lg border p-4">
        <GridComponent
          avatar={
            <div className="bg-video-tile flex h-full items-center justify-center rounded-lg">
              <Avatar size="lg" icon={<Video className="h-8 w-8" />} bgColor="bg-gradient-to-br from-blue-500 to-blue-600" />
            </div>
          }
          chat={
            <div className="bg-card-layer-1 flex h-full flex-col items-center justify-center rounded-lg p-4">
              <MessageCircle className="text-muted-foreground mb-2 h-8 w-8" />
              <span className="text-muted-foreground text-xs">Chat Area</span>
            </div>
          }
          localVideo={
            <div className="bg-video-tile flex h-full items-center justify-center rounded-lg">
              <Avatar size="md" icon={<User className="h-6 w-6" />} bgColor="bg-gradient-to-br from-green-500 to-green-600" />
            </div>
          }
          controls={
            showControls ? (
              <div className="flex h-full items-center justify-center gap-2 rounded-lg border p-4">
                <IconButton shape="round" variant="filled"><Mic className="size-5" /></IconButton>
                <IconButton shape="round" variant="filled"><Video className="size-5" /></IconButton>
              </div>
            ) : undefined
          }
          className="h-96"
        />
      </div>

      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Props</p>
        <div className="text-muted-foreground space-y-2 text-xs">
          <div><strong>avatar?:</strong> ReactNode - Top-right (largest area)</div>
          <div><strong>chat?:</strong> ReactNode - Top-left area</div>
          <div><strong>localVideo?:</strong> ReactNode - Bottom-left area</div>
          <div><strong>controls?:</strong> ReactNode - Bottom-right area (VideoGridWithControls only)</div>
        </div>
      </div>
    </div>
  )
}
