"use client"

import { useState } from "react"

import { getLottieBasePath } from "@/lib/basepath"
import { AgentVisualizer, Button, ValuePicker, type Item } from "agora-agent-uikit"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const states = [
  "not-joined",
  "joining",
  "ambient",
  "listening",
  "analyzing",
  "talking",
  "disconnected",
] as const

const sizeItems: Item[] = [
  { id: "sm", name: "Small" },
  { id: "md", name: "Medium" },
  { id: "lg", name: "Large" },
]

export default function AgentVisualizerDemo() {
  const [selectedState, setSelectedState] =
    useState<(typeof states)[number]>("listening")
  const [selectedSize, setSelectedSize] = useState<"sm" | "md" | "lg">("md")
  const lottieBasePath = getLottieBasePath()

  return (
    <div className="w-full max-w-4xl space-y-6">
      <Tabs defaultValue="interactive" className="w-full">
        <div className="mb-4 flex items-center border-b pb-2">
          <TabsList>
            <TabsTrigger value="interactive">Interactive</TabsTrigger>
            <TabsTrigger value="all-states">All States</TabsTrigger>
            <TabsTrigger value="sizes">Sizes</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="interactive" className="space-y-4">
          <div className="space-y-4 rounded-lg border p-4">
            <div className="bg-muted flex items-center justify-center rounded-lg p-8">
              <AgentVisualizer
                state={selectedState}
                size={selectedSize}
                lottieBasePath={lottieBasePath}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-3">
              <label className="text-sm font-medium">Agent State</label>
              <div className="flex gap-1">
                {states.map((state) => (
                  <Button
                    key={state}
                    onClick={() => setSelectedState(state)}
                    variant={selectedState === state ? "default" : "secondary"}
                    className="flex-1 px-3 py-1 text-xs whitespace-nowrap"
                  >
                    {state
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </Button>
                ))}
              </div>
            </div>

            <ValuePicker
              label="Size"
              items={sizeItems}
              value={selectedSize}
              onValueChange={(value) =>
                setSelectedSize(value as "sm" | "md" | "lg")
              }
            />
          </div>
        </TabsContent>

        <TabsContent value="all-states" className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {states.map((state) => (
              <div
                key={state}
                className="bg-muted flex min-w-0 flex-col items-center gap-3 overflow-hidden rounded-lg border p-4"
              >
                <AgentVisualizer
                  state={state}
                  size="md"
                  lottieBasePath={lottieBasePath}
                />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sizes" className="space-y-4">
          <div className="flex flex-wrap items-end justify-center gap-8 overflow-hidden rounded-lg border p-6">
            {(["sm", "md", "lg"] as const).map((size) => (
              <div key={size} className="flex min-w-0 flex-col items-center gap-2">
                <AgentVisualizer
                  state="listening"
                  size={size}
                  lottieBasePath={lottieBasePath}
                />
                <span className="text-muted-foreground text-xs capitalize">{size === "sm" ? "Small" : size === "md" ? "Medium" : "Large"}</span>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
