"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"

import { cn } from "@/lib/utils"

interface CodeExample {
  label: string
  code: string
}

interface ComponentDemoProps {
  title: string
  description?: string
  demo: React.ReactNode
  code?: string | CodeExample[]
  className?: string
}

export function ComponentDemo({
  title,
  description,
  demo,
  code,
  className,
}: ComponentDemoProps) {
  const [copied, setCopied] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState(0)

  const codeExamples = Array.isArray(code)
    ? code
    : code
      ? [{ label: "Code", code }]
      : []
  const hasMultipleTabs = Array.isArray(code) && code.length > 1

  const copyToClipboard = async () => {
    if (codeExamples.length === 0) return

    try {
      await navigator.clipboard.writeText(codeExamples[activeTab].code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy code: ", err)
    }
  }

  return (
    <section className={cn("space-y-4", className)}>
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        {description && (
          <p className="text-muted-foreground mt-1 text-sm">{description}</p>
        )}
      </div>

      {/* Side-by-side layout */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Left: Rendered Component */}
        <div className="rounded-lg border p-6">
          <div className="flex min-h-[200px] items-start justify-center">
            {demo}
          </div>
        </div>

        {/* Right: Code Example */}
        {codeExamples.length > 0 && (
          <div className="bg-muted/50 relative flex flex-col rounded-lg border">
            <div className="bg-muted/20 flex items-center justify-between border-b px-4 py-2">
              <div className="flex items-center gap-2">
                {hasMultipleTabs ? (
                  <div className="flex gap-1">
                    {codeExamples.map((example, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={cn(
                          "rounded px-2 py-1 text-xs font-medium transition-colors",
                          activeTab === index
                            ? "bg-muted text-foreground"
                            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                        )}
                      >
                        {example.label}
                      </button>
                    ))}
                  </div>
                ) : (
                  <span className="text-muted-foreground text-xs font-medium">
                    {codeExamples[0].label}
                  </span>
                )}
              </div>
              <button
                onClick={copyToClipboard}
                className="text-muted-foreground hover:bg-muted hover:text-foreground flex items-center gap-1 rounded px-2 py-1 text-xs font-medium transition-colors"
                title={copied ? "Copied!" : "Copy code"}
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    Copy
                  </>
                )}
              </button>
            </div>
            <pre className="flex-1 overflow-x-auto p-4 text-xs">
              <code className="text-foreground">
                {codeExamples[activeTab].code}
              </code>
            </pre>
          </div>
        )}
      </div>
    </section>
  )
}
