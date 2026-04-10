"use client"

import { useEffect, useState } from "react"
import { MessageCircle, User } from "lucide-react"

import {
  Avatar,
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
  Message,
  MessageContent,
  Response,
} from "agora-agent-uikit"

const allMessages = [
  { id: "1", role: "user" as const, text: "Hey, I need help with my order" },
  {
    id: "2", role: "assistant" as const,
    tokens: ["Hi!", " I'd", " be", " happy", " to", " help", " you", " with", " your", " order.", " Could", " you", " please", " provide", " your", " order", " number?"],
    text: "Hi! I'd be happy to help you with your order. Could you please provide your order number?",
  },
  { id: "3", role: "user" as const, text: "It's ORDER-12345" },
  {
    id: "4", role: "assistant" as const,
    tokens: ["Thank", " you!", " Let", " me", " pull", " up", " your", " order", " details.", " I", " can", " see", " that", " your", " order", " was", " placed", " on", " March", " 15th", " and", " is", " currently", " being", " processed.", " It", " should", " ship", " within", " the", " next", " 1-2", " business", " days."],
    text: "Thank you! Let me pull up your order details. I can see that your order was placed on March 15th and is currently being processed. It should ship within the next 1-2 business days.",
  },
  { id: "5", role: "user" as const, text: "Can I change the shipping address?" },
  {
    id: "6", role: "assistant" as const,
    tokens: ["Absolutely!", " Since", " the", " order", " hasn't", " shipped", " yet,", " I", " can", " update", " the", " shipping", " address", " for", " you.", " What", " would", " you", " like", " the", " new", " address", " to", " be?"],
    text: "Absolutely! Since the order hasn't shipped yet, I can update the shipping address for you. What would you like the new address to be?",
  },
]

export default function ConversationDemo() {
  const [messages, setMessages] = useState<typeof allMessages>([])
  const [streamingMessageIndex, setStreamingMessageIndex] = useState<number | null>(null)
  const [streamingContent, setStreamingContent] = useState("")

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = []
    const intervals: NodeJS.Timeout[] = []
    let currentMessageIndex = 0

    const addNextMessage = () => {
      if (currentMessageIndex >= allMessages.length) return
      const message = allMessages[currentMessageIndex]

      if (message.role === "assistant" && "tokens" in message && message.tokens) {
        setStreamingMessageIndex(currentMessageIndex)
        setStreamingContent("")
        let currentContent = ""
        let tokenIndex = 0

        const streamInterval = setInterval(() => {
          if (tokenIndex < message.tokens.length) {
            currentContent += message.tokens[tokenIndex]
            setStreamingContent(currentContent)
            tokenIndex++
          } else {
            clearInterval(streamInterval)
            setMessages((prev) => [...prev, message])
            setStreamingMessageIndex(null)
            setStreamingContent("")
            currentMessageIndex++
            timeouts.push(setTimeout(addNextMessage, 500))
          }
        }, 100)
        intervals.push(streamInterval)
      } else {
        setMessages((prev) => [...prev, message])
        currentMessageIndex++
        timeouts.push(setTimeout(addNextMessage, 800))
      }
    }

    timeouts.push(setTimeout(addNextMessage, 1000))

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout))
      intervals.forEach((interval) => clearInterval(interval))
    }
  }, [])

  return (
    <div className="w-full space-y-4">
      <Conversation className="rounded-lg border">
        <ConversationContent>
          {messages.length === 0 && streamingMessageIndex === null ? (
            <ConversationEmptyState title="Start a conversation" description="This is a simulated conversation with streaming responses" />
          ) : (
            <>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && (
                    <Avatar size="md" icon={<MessageCircle className="h-5 w-5" />} bgColor="bg-gradient-to-br from-blue-500 to-blue-600" />
                  )}
                  <Message from={message.role}>
                    <MessageContent><Response>{message.text}</Response></MessageContent>
                  </Message>
                  {message.role === "user" && (
                    <Avatar size="md" icon={<User className="h-5 w-5" />} bgColor="bg-gradient-to-br from-green-500 to-green-600" />
                  )}
                </div>
              ))}
              {streamingMessageIndex !== null && (
                <div
                  key={`streaming-${streamingMessageIndex}`}
                  className={`flex items-start gap-3 ${allMessages[streamingMessageIndex].role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {allMessages[streamingMessageIndex].role === "assistant" && (
                    <Avatar size="md" icon={<MessageCircle className="h-5 w-5" />} bgColor="bg-gradient-to-br from-blue-500 to-blue-600" />
                  )}
                  <Message from={allMessages[streamingMessageIndex].role}>
                    <MessageContent><Response>{streamingContent || "\u200B"}</Response></MessageContent>
                  </Message>
                  {allMessages[streamingMessageIndex].role === "user" && (
                    <Avatar size="md" icon={<User className="h-5 w-5" />} bgColor="bg-gradient-to-br from-green-500 to-green-600" />
                  )}
                </div>
              )}
            </>
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>
    </div>
  )
}
