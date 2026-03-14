"use client"

import { useState } from "react"

import { SettingsDialog, Button, type Item } from "agora-agent-uikit"

export default function SettingsDialogDemo() {
  const [open, setOpen] = useState(false)
  const [enableAivad, setEnableAivad] = useState(true)
  const [language, setLanguage] = useState("en-US")
  const [prompt, setPrompt] = useState("You are a helpful assistant.")
  const [greeting, setGreeting] = useState("Hello! How can I help you?")

  return (
    <div className="w-full max-w-lg space-y-6">
      <div className="space-y-4 rounded-lg border p-4">
        <p className="text-sm font-medium">Settings Dialog</p>
        <Button onClick={() => setOpen(true)}>Open Settings</Button>

        <SettingsDialog
          open={open}
          onOpenChange={setOpen}
          enableAivad={enableAivad}
          onEnableAivadChange={setEnableAivad}
          language={language}
          onLanguageChange={setLanguage}
          prompt={prompt}
          onPromptChange={setPrompt}
          greeting={greeting}
          onGreetingChange={setGreeting}
        />
      </div>

      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Current Settings</p>
        <pre className="bg-muted overflow-auto rounded p-4 text-xs">
          {JSON.stringify({ enableAivad, language, prompt, greeting }, null, 2)}
        </pre>
      </div>

      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Props</p>
        <div className="text-muted-foreground space-y-2 text-xs">
          <div><strong>open:</strong> boolean - Dialog open state</div>
          <div><strong>onOpenChange:</strong> (open: boolean) =&gt; void</div>
          <div><strong>enableAivad:</strong> boolean - AI VAD toggle</div>
          <div><strong>language:</strong> string - Selected language code</div>
          <div><strong>prompt?:</strong> string - System prompt text</div>
          <div><strong>greeting?:</strong> string - Greeting message</div>
        </div>
      </div>
    </div>
  )
}
