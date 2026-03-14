"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"
import { ConvoTextStream, EMessageStatus, Button, type IMessageListItem } from "agora-agent-uikit"

export default function ConvoTextStreamDemo() {
  const [messageList] = useState<IMessageListItem[]>([
    { uid: 0, turn_id: 1, text: "Hello! How can I assist you today?", status: EMessageStatus.END },
    { uid: 1, turn_id: 2, text: "I need help with my Agora integration", status: EMessageStatus.END },
    { uid: 0, turn_id: 3, text: "I'd be happy to help! What specific aspect of the integration are you working on?", status: EMessageStatus.END },
    { uid: 1, turn_id: 4, text: "I'm trying to implement **real-time transcription** with the conversational AI", status: EMessageStatus.END },
    { uid: 0, turn_id: 5, text: "Great! For real-time transcription, you'll need to:\n\n1. Initialize the MessageEngine\n2. Subscribe to RTC or RTM messages\n3. Pass messages to the ConvoTextStream component\n\nCheck out the [documentation](https://docs.agora.io) for more details.", status: EMessageStatus.END },
  ])

  const [currentMessage] = useState<IMessageListItem>({
    uid: 0, turn_id: 6,
    text: "The component supports both RTC datastream and Signaling/RTM...",
    status: EMessageStatus.IN_PROGRESS,
  })

  const [viewMode, setViewMode] = useState<"inline" | "popout">("inline")
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (viewMode !== "inline" || !chatContainerRef.current) return
    const scrollToBottom = () => {
      const scrollContainer = chatContainerRef.current?.querySelector(".flex-1.overflow-auto") as HTMLElement
      if (scrollContainer) scrollContainer.scrollTop = scrollContainer.scrollHeight
    }
    setTimeout(scrollToBottom, 100)
    const observer = new MutationObserver(() => setTimeout(scrollToBottom, 50))
    observer.observe(chatContainerRef.current, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [viewMode, messageList, currentMessage])

  return (
    <div className="w-full space-y-6">
      <div className="space-y-3 rounded-lg border p-4">
        <p className="text-sm font-medium">View Mode</p>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => setViewMode("inline")} variant={viewMode === "inline" ? "default" : "secondary"}>Inline Preview</Button>
          <Button onClick={() => setViewMode("popout")} variant={viewMode === "popout" ? "default" : "secondary"}>Pop-out Mode</Button>
        </div>
        <p className="text-muted-foreground text-xs">
          {viewMode === "inline" ? "Transcript is shown open in the preview area below" : "Transcript appears as a floating widget (click the button in bottom-right)"}
        </p>
      </div>

      <div className="space-y-3 rounded-lg border p-4">
        <p className="text-sm font-medium">Interactive Demo</p>
        <div className={cn("bg-muted rounded-lg p-6", viewMode === "popout" && "relative")}
          style={viewMode === "popout" ? { height: 500 } : { minHeight: 650 }}>
          {viewMode === "popout" ? (
            <>
              <div className="text-muted-foreground flex h-full items-center justify-center text-center">
                <div>
                  <p className="text-sm font-medium">Check the bottom-right corner</p>
                  <p className="mt-2 text-xs">The transcript appears as a floating widget with a toggle button</p>
                </div>
              </div>
              <ConvoTextStream messageList={messageList} currentInProgressMessage={currentMessage} agentUID="0" />
            </>
          ) : (
            <div ref={chatContainerRef} className="relative mx-auto flex max-w-96 items-end justify-center" style={{ height: 600 }}>
              <ConvoTextStream messageList={messageList} currentInProgressMessage={currentMessage} agentUID="0"
                className="pointer-events-auto !relative !inset-auto !top-auto !right-auto !bottom-auto !left-auto !mx-0 !my-0 [&>div.chatbox]:!max-h-[600px]" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
