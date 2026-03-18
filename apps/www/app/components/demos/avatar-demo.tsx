"use client"

import { MessageCircle, Mic, User } from "lucide-react"

import { Avatar } from "agora-agent-uikit"

export default function AvatarDemo() {
  return (
    <div className="w-full max-w-2xl space-y-8">
      {/* Sizes */}
      <div className="space-y-3">
        <p className="text-sm font-medium">Sizes</p>
        <div className="flex items-center gap-4">
          <Avatar size="sm" initials="JD" />
          <Avatar size="md" initials="JD" />
          <Avatar size="lg" initials="JD" />
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-3">
        <p className="text-sm font-medium">With Icons</p>
        <div className="flex items-center gap-4">
          <Avatar size="md" icon={<Mic className="h-5 w-5" />} bgColor="bg-gradient-to-br from-blue-500 to-blue-600" />
          <Avatar size="md" icon={<MessageCircle className="h-5 w-5" />} bgColor="bg-gradient-to-br from-purple-500 to-purple-600" />
          <Avatar size="md" icon={<User className="h-5 w-5" />} bgColor="bg-gradient-to-br from-green-500 to-green-600" />
        </div>
      </div>

      {/* With Initials */}
      <div className="space-y-3">
        <p className="text-sm font-medium">With Initials</p>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Avatar initials="JD" bgColor="bg-gradient-to-br from-blue-500 to-blue-600" />
            <span className="text-muted-foreground text-xs">JD</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar initials="AB" bgColor="bg-gradient-to-br from-pink-500 to-pink-600" />
            <span className="text-muted-foreground text-xs">AB</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar initials="XY" bgColor="bg-gradient-to-br from-orange-500 to-orange-600" />
            <span className="text-muted-foreground text-xs">XY</span>
          </div>
        </div>
      </div>

      {/* Auto-generate from Name */}
      <div className="space-y-3">
        <p className="text-sm font-medium">Auto-generated from Name</p>
        <div className="flex flex-wrap items-center gap-4">
          {[
            { name: "John Doe", color: "from-blue-500 to-blue-600" },
            { name: "Alice Brown", color: "from-pink-500 to-pink-600" },
            { name: "Xavier Young", color: "from-orange-500 to-orange-600" },
          ].map(({ name, color }) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <Avatar name={name} bgColor={`bg-gradient-to-br ${color}`} />
              <span className="text-muted-foreground text-xs">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Fallback Behavior */}
      <div className="space-y-3">
        <p className="text-sm font-medium">Priority Order (Image {">"} Icon {">"} Initials)</p>
        <div className="space-y-2">
          <div className="text-muted-foreground flex items-center gap-2 text-xs">
            <Avatar icon={<Mic className="h-5 w-5" />} initials="JD" bgColor="bg-gradient-to-br from-blue-500 to-blue-600" />
            <span>Icon wins (shows icon)</span>
          </div>
          <div className="text-muted-foreground flex items-center gap-2 text-xs">
            <Avatar initials="JD" bgColor="bg-gradient-to-br from-blue-500 to-blue-600" />
            <span>Shows initials (fallback)</span>
          </div>
        </div>
      </div>
    </div>
  )
}
