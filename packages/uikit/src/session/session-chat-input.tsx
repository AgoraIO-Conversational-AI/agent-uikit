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
  /** Optional override for plain-text send. Defaults to the nearest ConversationalAIProvider context. */
  sendMessage?: (agentUserId: string, text: string) => Promise<void>;
  /** Optional override for interrupt. Defaults to the nearest ConversationalAIProvider context. */
  interrupt?: (agentUserId: string) => Promise<void>;
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
 * Uses the nearest ConversationalAIProvider by default, but can also be wired
 * directly via sendMessage/interrupt props.
 *
 * @example
 * ```tsx
 * import { useConversationalAI } from 'agora-agent-client-toolkit-react'
 * import { SessionChatInput } from 'agora-agent-uikit/session'
 *
 * function Chat({ config }) {
 *   const { sendMessage, interrupt } = useConversationalAI(config);
 *   return (
 *     <SessionChatInput
 *       agentUid={agentUid}
 *       sendMessage={sendMessage}
 *       interrupt={interrupt}
 *       showInterrupt
 *       placeholder="Type a message..."
 *     />
 *   );
 * }
 * ```
 */
export function SessionChatInput({
  agentUid,
  sendMessage,
  interrupt,
  placeholder = "Type a message…",
  showInterrupt = false,
  interruptLabel = "Interrupt agent",
  onRTMError,
  className,
}: SessionChatInputProps) {
  const { sendMessage: contextSendMessage, interrupt: contextInterrupt, instance } =
    useConversationalAIContext();
  const [text, setText] = React.useState("");
  const [inFlight, setInFlight] = React.useState(false);
  const inFlightRef = React.useRef(false);
  const hasWarnedMissingProviderRef = React.useRef(false);

  const sendMessageFn = sendMessage ?? contextSendMessage;
  const interruptFn = interrupt ?? contextInterrupt;
  const canSend = Boolean(sendMessageFn);
  const canInterrupt = Boolean(interruptFn);

  React.useEffect(() => {
    if (
      process.env.NODE_ENV !== "production" &&
      !sendMessage &&
      !interrupt &&
      !instance &&
      !hasWarnedMissingProviderRef.current
    ) {
      hasWarnedMissingProviderRef.current = true;
      console.warn(
        "[agora-agent-uikit] SessionChatInput expected to run inside a ConversationalAIProvider or receive sendMessage/interrupt props.",
      );
    }
  }, [instance, interrupt, sendMessage]);

  const handleSend = React.useCallback(async () => {
    const trimmed = text.trim();
    if (!sendMessageFn || !trimmed || inFlightRef.current) return;

    inFlightRef.current = true;
    setInFlight(true);
    try {
      await sendMessageFn(String(agentUid), trimmed);
      setText("");
    } catch (err) {
      onRTMError?.(err instanceof Error ? err : new Error(String(err)));
    } finally {
      inFlightRef.current = false;
      setInFlight(false);
    }
  }, [text, agentUid, sendMessageFn, onRTMError]);

  const handleInterrupt = React.useCallback(async () => {
    if (!interruptFn || inFlightRef.current) return;
    inFlightRef.current = true;
    setInFlight(true);
    try {
      await interruptFn(String(agentUid));
    } catch (err) {
      onRTMError?.(err instanceof Error ? err : new Error(String(err)));
    } finally {
      inFlightRef.current = false;
      setInFlight(false);
    }
  }, [agentUid, interruptFn, onRTMError]);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend],
  );

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
        disabled={!canSend || !text.trim() || inFlight}
        aria-label="Send message"
        shape="round"
        variant="filled"
        size="sm"
      >
        <Send className="size-4" />
      </IconButton>
      {showInterrupt && canInterrupt && (
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
