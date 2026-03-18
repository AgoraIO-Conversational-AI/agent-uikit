"use client"

import { Copy, Heart, Search, Settings, Share2, Trash2 } from "lucide-react"

import { IconButton } from "agora-agent-uikit"

export function IconButtonDemo() {
  return (
    <div className="w-full space-y-6">
      <div className="space-y-4 rounded-lg border p-4">
        <p className="text-sm font-medium">Interactive Demo</p>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="text-center">
              <div className="text-muted-foreground mb-2 text-xs">Filled</div>
              <div className="flex gap-2">
                <IconButton shape="round" variant="filled"><Copy className="size-5" /></IconButton>
                <IconButton shape="square" variant="filled"><Settings className="size-5" /></IconButton>
              </div>
            </div>
            <div className="text-center">
              <div className="text-muted-foreground mb-2 text-xs">Outlined</div>
              <div className="flex gap-2">
                <IconButton shape="round" variant="outlined"><Search className="size-5" /></IconButton>
                <IconButton shape="square" variant="outlined"><Heart className="size-5" /></IconButton>
              </div>
            </div>
            <div className="text-center">
              <div className="text-muted-foreground mb-2 text-xs">Standard</div>
              <div className="flex gap-2">
                <IconButton shape="round" variant="standard"><Share2 className="size-5" /></IconButton>
                <IconButton shape="square" variant="standard"><Trash2 className="size-5" /></IconButton>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-muted-foreground mb-2 text-xs">Disabled</div>
            <div className="flex justify-center gap-2">
              <IconButton shape="round" variant="filled" disabled><Copy className="size-5" /></IconButton>
              <IconButton shape="round" variant="outlined" disabled><Search className="size-5" /></IconButton>
              <IconButton shape="round" variant="standard" disabled><Settings className="size-5" /></IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IconButtonDemo
