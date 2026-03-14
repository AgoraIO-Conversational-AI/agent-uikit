"use client";

import * as React from "react";
import { Send, StopCircle } from "lucide-react";
import { useConversationalAIContext } from "agora-agent-client-toolkit-react";

import { cn } from "../lib/utils";
import { Button } from "../components/primitives/button";
import { IconButton } from "../components/primitives/icon-button";

export interface SessionChatInputProps {
  /** UID of the agent to send messages to */
  agentUid: string | number;
  /** Placeholder text for the input field */
  placeholder?: string;
  /** Whether to show the interrupt button alongside send */
  showInterrupt?: boolean;
  /** Label for the interrupt button (accessible name) */
  interruptLabel?: string;
  /** Called when send or interrupt fails due to missing RTM config or network error */
  onRTMError?: (error: Error) => void;
  className?: string;
}

/**
 * Session-connected chat input for sending messages to the agent and interrupting it.
 * Must be used inside a ConversationalAIProvider.
 *
 * @example
 * ```tsx
 * import { ConversationalAIProvider } from 'agora-agent-client-toolkit-react'
 * import { SessionChatInput } from 'agora-agent-uikit/session'
 *
 * <ConversationalAIProvider config={config}>
 *   <SessionChatInput agentUid={agentUid} showInterrupt placeholder="Type a message..." />
 * </ConversationalAIProvider>
 * ```
 */
export function SessionChatInput({
  agentUid,
  placeholder = "Type a message…",
  showInterrupt = false,
  interruptLabel = "Interrupt agent",
  onRTMError,
  className,
}: SessionChatInputProps) {
  const [text, setText] = React.useState("");
  const [inFlight, setInFlight] = React.useState(false);
  const inFlightRef = React.useRef(false);

  const { sendMessage, interrupt } = useConversationalAIContext();

  const handleSend = async () => {
    const trimmed = text.trim();
    if (!trimmed || inFlightRef.current) return;

    inFlightRef.current = true;
    setInFlight(true);
    try {
      await sendMessage(String(agentUid), trimmed);
      setText("");
    } catch (err) {
      onRTMError?.(err instanceof Error ? err : new Error(String(err)));
    } finally {
      inFlightRef.current = false;
      setInFlight(false);
    }
  };

  const handleInterrupt = async () => {
    if (inFlightRef.current) return;
    inFlightRef.current = true;
    setInFlight(true);
    try {
      await interrupt(String(agentUid));
    } catch (err) {
      onRTMError?.(err instanceof Error ? err : new Error(String(err)));
    } finally {
      inFlightRef.current = false;
      setInFlight(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={inFlight}
        className={cn(
          "flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm",
          "placeholder:text-muted-foreground",
          "focus:outline-none focus:ring-2 focus:ring-ring",
          "disabled:opacity-50"
        )}
      />
      <IconButton
        onClick={handleSend}
        disabled={!text.trim() || inFlight}
        aria-label="Send message"
        shape="round"
        variant="filled"
        size="sm"
      >
        <Send className="size-4" />
      </IconButton>
      {showInterrupt && (
        <Button
          onClick={handleInterrupt}
          disabled={inFlight}
          variant="secondary"
          aria-label={interruptLabel}
        >
          <StopCircle className="size-4 mr-1" />
          Stop
        </Button>
      )}
    </div>
  );
}
