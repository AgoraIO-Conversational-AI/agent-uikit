"use client"

import { Copy, Mic, Trash2 } from "lucide-react"

import { Button } from "agora-agent-uikit"

export default function ButtonDemo() {
  return (
    <div className="w-full space-y-6">
      <div className="space-y-4 rounded-lg border p-4">
        <p className="text-sm font-medium">Interactive Demo</p>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="default"><Mic className="size-4" /> Record</Button>
            <Button variant="secondary"><Copy className="size-4" /> Copy</Button>
            <Button variant="destructive"><Trash2 className="size-4" /> Delete</Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Button label="Click me">Default</Button>
            <Button variant="secondary" label="Submit form"><Mic className="size-4" /> Submit</Button>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Button disabled>Disabled</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
