"use client"

import { useState } from "react"
import { MessageCircle, Mic, Settings, Video } from "lucide-react"

import { MobileTabs, type Tab, Button } from "agora-agent-uikit"

const demoTabs: Tab[] = [
  {
    id: "chat",
    label: "Chat",
    icon: <MessageCircle className="h-4 w-4" />,
    content: (
      <div className="flex h-48 items-center justify-center rounded-lg border">
        <p className="text-muted-foreground text-sm">Chat content area</p>
      </div>
    ),
  },
  {
    id: "video",
    label: "Video",
    icon: <Video className="h-4 w-4" />,
    content: (
      <div className="flex h-48 items-center justify-center rounded-lg border">
        <p className="text-muted-foreground text-sm">Video content area</p>
      </div>
    ),
  },
  {
    id: "audio",
    label: "Audio",
    icon: <Mic className="h-4 w-4" />,
    content: (
      <div className="flex h-48 items-center justify-center rounded-lg border">
        <p className="text-muted-foreground text-sm">Audio content area</p>
      </div>
    ),
  },
  {
    id: "settings",
    label: "Settings",
    icon: <Settings className="h-4 w-4" />,
    content: (
      <div className="flex h-48 items-center justify-center rounded-lg border">
        <p className="text-muted-foreground text-sm">Settings content area</p>
      </div>
    ),
  },
]

export default function MobileTabsDemo() {
  const [activeTab, setActiveTab] = useState("chat")
  const [tabPosition, setTabPosition] = useState<"top" | "bottom">("top")

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="flex gap-2">
        <Button onClick={() => setTabPosition("top")} variant={tabPosition === "top" ? "default" : "secondary"} className="text-xs">
          Tabs on Top
        </Button>
        <Button onClick={() => setTabPosition("bottom")} variant={tabPosition === "bottom" ? "default" : "secondary"} className="text-xs">
          Tabs on Bottom
        </Button>
      </div>

      <div className="rounded-lg border p-2">
        <MobileTabs
          tabs={demoTabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          tabPosition={tabPosition}
        />
      </div>

      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Props</p>
        <div className="text-muted-foreground space-y-2 text-xs">
          <div><strong>tabs:</strong> Tab[] - Array of tab definitions</div>
          <div><strong>activeTab?:</strong> string - Currently active tab ID</div>
          <div><strong>onTabChange?:</strong> (tabId: string) =&gt; void</div>
          <div><strong>tabPosition?:</strong> &quot;top&quot; | &quot;bottom&quot; (default: &quot;top&quot;)</div>
        </div>
      </div>
    </div>
  )
}
