"use client";

import * as React from "react";
import { useTranscript } from "agora-agent-client-toolkit-react";

import { Conversation, ConversationContent } from "../components/chat/conversation";
import { Message, MessageContent } from "../components/chat/message";

export interface SessionTranscriptProps {
  /** UID of the agent — used to distinguish agent vs user messages */
  agentUid: string | number;
  /** Display name for the agent */
  agentName?: string;
  /** Display name for the local user */
  userName?: string;
  /** Height of the conversation container */
  height?: string;
  className?: string;
}

/**
 * Session-connected transcript display.
 * Wraps the base Conversation component with useTranscript() from the toolkit.
 * Must be used inside a ConversationalAIProvider.
 *
 * @example
 * ```tsx
 * import { ConversationalAIProvider } from 'agora-agent-client-toolkit-react'
 * import { SessionTranscript } from 'agora-agent-uikit/session'
 *
 * <ConversationalAIProvider config={{ channel: 'my-channel' }}>
 *   <SessionTranscript agentUid={agentUid} agentName="Agent" userName="You" />
 * </ConversationalAIProvider>
 * ```
 */
export function SessionTranscript({
  agentUid,
  agentName = "Agent",
  userName = "You",
  height,
  className,
}: SessionTranscriptProps) {
  const transcript = useTranscript() ?? [];

  return (
    <Conversation
      agentName={agentName}
      userName={userName}
      height={height}
      className={className}
    >
      <ConversationContent>
        {transcript.map((item) => {
          const isAgent = String(item.uid) === String(agentUid);
          return (
            <Message key={`${item.turn_id}-${item.uid}`} from={isAgent ? "assistant" : "user"}>
              <MessageContent>
                <span className="px-2 py-1 text-sm">{item.text}</span>
              </MessageContent>
            </Message>
          );
        })}
      </ConversationContent>
    </Conversation>
  );
}
