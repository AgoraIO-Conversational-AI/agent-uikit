"use client"

import { useState } from "react"
import { Phone, X } from "lucide-react"

import { Card, CardTitle, CardContent, Chip, Button, ValuePicker, type Item } from "agora-agent-uikit"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const items: Item[] = [
  { id: "option-1", name: "Option 1" },
  { id: "option-2", name: "Option 2" },
  { id: "option-3", name: "Option 3" },
  { id: "option-4", name: "Option 4" },
  { id: "option-5", name: "Option 5" },
]

export default function PrimitivesDemo() {
  const [pickerOpen, setPickerOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<string | undefined>("option-1")

  return (
    <div className="w-full space-y-6">
      <Tabs defaultValue="card" className="w-full">
        <div className="mb-4 flex items-center border-b pb-2">
          <TabsList>
            <TabsTrigger value="card">Card</TabsTrigger>
            <TabsTrigger value="chip">Chip</TabsTrigger>
            <TabsTrigger value="value-picker">Value Picker</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="card" className="space-y-4">
          <div className="mx-auto flex max-w-lg flex-col gap-4">
            <Card className="w-full" />
            <Card className="w-full"><CardTitle>Basic Card</CardTitle></Card>
            <Card className="w-full">
              <CardTitle>Full Card</CardTitle>
              <CardContent>
                <p className="text-sm">Cards are flexible containers for grouping content and actions.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="chip" className="space-y-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <Chip>
              <Button><Phone className="size-4" /></Button>
              <Button><X className="size-4" /></Button>
            </Chip>
          </div>
        </TabsContent>

        <TabsContent value="value-picker" className="space-y-4">
         <div className={`mx-auto max-w-lg space-y-4 ${pickerOpen ? "pb-40" : ""}`}>
            <ValuePicker label="Select a value" items={items} value={selectedValue} onValueChange={setSelectedValue} placeholder="Choose an option..." maxHeight="150px" onOpenChange={setPickerOpen}/>
            {selectedValue && (
             <div className={`rounded-lg border p-4 ${pickerOpen ? "mt-40" : ""}`}>
                <p className="text-sm font-medium">Selected: {items.find((i) => i.id === selectedValue)?.name}</p>
                <p className="text-muted-foreground mt-1 text-sm">ID: {selectedValue}</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
