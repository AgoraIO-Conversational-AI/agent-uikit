"use client"

import { useState } from "react"

import { SessionPanel, Button } from "agora-agent-uikit"

const samplePayload = {
  channel_name: "test-channel-123",
  uid: 1001,
  token: "006...truncated",
  agent_config: {
    model: "gpt-4o",
    language: "en-US",
    greeting: "Hello! How can I help?",
  },
}

export default function SessionPanelDemo() {
  const [agentId, setAgentId] = useState<string | null>("agent-abc-123")
  const [payload, setPayload] = useState<object | null>(samplePayload)

  return (
    <div className="w-full max-w-lg space-y-6">
      <div className="space-y-4 rounded-lg border p-4">
        <p className="text-sm font-medium">Session Panel</p>
        <SessionPanel agentId={agentId} payload={payload} />
      </div>

      <div className="space-y-3 rounded-lg border p-4">
        <p className="text-sm font-medium">Controls</p>
        <div className="flex gap-2">
          <Button onClick={() => setAgentId(agentId ? null : "agent-abc-123")}
            variant="secondary" className="text-xs">
            Toggle Agent ID
          </Button>
          <Button onClick={() => setPayload(payload ? null : samplePayload)}
            variant="secondary" className="text-xs">
            Toggle Payload
          </Button>
        </div>
      </div>

      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Props</p>
        <div className="text-muted-foreground space-y-2 text-xs">
          <div><strong>agentId:</strong> string | null - Agent identifier</div>
          <div><strong>payload:</strong> object | null - Session configuration payload</div>
        </div>
      </div>
    </div>
  )
}
