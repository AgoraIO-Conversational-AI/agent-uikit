"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";

import { useIsMobile } from "../../hooks/use-is-mobile";
import { EMessageStatus, IMessageListItem } from "../../lib/message-types";
import { cn, renderMarkdownToHtml } from "../../lib/utils";

export { EMessageStatus } from "../../lib/message-types";
export type { IMessageListItem } from "../../lib/message-types";

export interface ConvoTextStreamProps {
  messageList: IMessageListItem[];
  currentInProgressMessage?: IMessageListItem | null;
  agentUID: string | undefined;
  className?: string;
}

export function ConvoTextStream({
  messageList,
  currentInProgressMessage = null,
  agentUID,
  className = "",
}: ConvoTextStreamProps) {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);
  const [hasNewMessages, setHasNewMessages] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const prevMessageLengthRef = useRef(messageList.length);
  const prevMessageTextRef = useRef("");
  const hasSeenFirstMessageRef = useRef(false);

  //  Helper to check if we should show streaming message
  const shouldShowStreamingMessage = useCallback(() => {
    return (
      currentInProgressMessage !== null &&
      currentInProgressMessage.status === EMessageStatus.IN_PROGRESS &&
      currentInProgressMessage.text.trim().length > 0
    );
  }, [currentInProgressMessage]);

  // Scroll to bottom — stable ref to avoid effect churn
  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollHeight, scrollTop, clientHeight } = scrollRef.current;
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShouldAutoScroll(isAtBottom);
    }
  };

  // Check if streaming content has significantly changed — stable ref
  const hasContentChanged = useCallback(() => {
    if (!currentInProgressMessage) return false;

    const currentText = currentInProgressMessage.text || "";
    const textLengthDiff =
      currentText.length - prevMessageTextRef.current.length;

    // Consider significant change if more than 20 new characters
    const hasSignificantChange = textLengthDiff > 20;

    // Update reference
    if (hasSignificantChange) {
      prevMessageTextRef.current = currentText;
    }

    return hasSignificantChange;
  }, [currentInProgressMessage]);

  // Effect for auto-opening chat when first streaming message arrives

  useEffect(() => {
    // Check if this is the first message and chat should be opened
    const hasNewMessage = messageList.length > 0;
    const hasInProgressMessage =
      shouldShowStreamingMessage() && currentInProgressMessage !== null;

    // Auto-open on first message (both desktop and mobile)
    if (
      (hasNewMessage || hasInProgressMessage) &&
      !hasSeenFirstMessageRef.current
    ) {
      setIsOpen(true);
      setHasNewMessages(true);
      hasSeenFirstMessageRef.current = true;
    }
  }, [
    messageList,
    currentInProgressMessage,
    isMobile,
    shouldShowStreamingMessage,
  ]);

  useEffect(() => {
    // Auto-scroll in these cases:
    // 1. New complete message arrived
    // 2. User is already at bottom
    // 3. Streaming content has changed significantly
    const hasNewMessage = messageList.length > prevMessageLengthRef.current;
    const hasStreamingChange = hasContentChanged();

    if (
      (hasNewMessage || shouldAutoScroll || hasStreamingChange) &&
      scrollRef.current
    ) {
      // Use direct scroll to bottom for more reliable scrolling
      scrollToBottom();
    }

    prevMessageLengthRef.current = messageList.length;
  }, [
    messageList,
    currentInProgressMessage?.text,
    shouldAutoScroll,
    hasContentChanged,
    scrollToBottom,
  ]);

  // Extra safety: ensure scroll happens after content renders during active streaming
  useEffect(() => {
    if (
      currentInProgressMessage?.status === EMessageStatus.IN_PROGRESS &&
      shouldAutoScroll
    ) {
      const timer = setTimeout(scrollToBottom, 100);
      return () => clearTimeout(timer);
    }
  }, [
    currentInProgressMessage?.text,
    currentInProgressMessage?.status,
    shouldAutoScroll,
    scrollToBottom,
  ]);

  // Toggle chat open/closed
  const toggleChat = () => {
    setIsOpen(!isOpen);
    // If opening the chat, consider it as having seen the first message
    if (!isOpen) {
      hasSeenFirstMessageRef.current = true;
      setHasNewMessages(false); // Clear pulse indicator when opened
    }
  };

  // Helper to determine if message is from AI
  const isAIMessage = (message: IMessageListItem) => {
    // The AI should be uid=0 (agent) OR matching the agentUID if provided
    return (
      message.uid === 0 || (agentUID && message.uid.toString() === agentUID)
    );
  };

  // Combine complete messages with in-progress message for rendering
  const allMessages = [...messageList];
  if (shouldShowStreamingMessage() && currentInProgressMessage) {
    allMessages.push(currentInProgressMessage);
  }

  return (
    <div
      id="chatbox"
      className={cn(
        "fixed z-50",
        isOpen
          ? "right-4 bottom-32 left-4 md:right-8 md:bottom-24 md:left-auto"
          : "right-4 bottom-6 md:right-8 md:bottom-8",
        className,
      )}
    >
      {isOpen ? (
        <div
          className="chatbox expanded mx-auto flex max-w-96 min-w-96 max-h-[600px] flex-col rounded-[15px] shadow-lg md:mx-0"
          style={{ backgroundColor: "var(--background, #171717)" }}
        >
          <div className="flex shrink-0 items-center justify-end p-2">
            <h3 className="mr-auto ml-2 font-semibold">Transcription</h3>
            <button
              onClick={toggleChat}
              className="inline-flex items-center justify-center rounded-md p-2 transition-colors hover:bg-white/10"
              aria-label="Close transcription"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div
            className="flex-1 overflow-auto"
            ref={scrollRef}
            onScroll={handleScroll}
          >
            <div className="space-y-4 p-4">
              {allMessages.map((message, index) => (
                <div
                  key={`${message.turn_id}-${message.uid}-${message.status}`}
                  ref={index === allMessages.length - 1 ? lastMessageRef : null}
                  className={cn(
                    "flex w-full items-start gap-2",
                    isAIMessage(message) ? "flex-row" : "flex-row-reverse",
                  )}
                >
                  {/* Avatar */}
                  <div
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: isAIMessage(message)
                        ? "var(--primary, #A0FAFF)"
                        : "var(--card_layer_1, #333333)",
                      color: isAIMessage(message)
                        ? "var(--font-high, #000000)"
                        : "var(--foreground, #ffffff)",
                    }}
                  >
                    {isAIMessage(message) ? "AI" : "U"}
                  </div>

                  {/* Message content */}
                  <div
                    className={cn(
                      "flex",
                      isAIMessage(message)
                        ? "flex-col items-start"
                        : "flex-col items-end",
                    )}
                  >
                    <div
                      className={cn(
                        "rounded-[15px] px-3 py-2",
                        isAIMessage(message) ? "text-left" : "text-right",
                        message.status === EMessageStatus.IN_PROGRESS &&
                          "animate-pulse",
                      )}
                      style={{
                        backgroundColor: isAIMessage(message)
                          ? "transparent"
                          : "var(--card_layer_1, #333333)",
                        color: isAIMessage(message)
                          ? "var(--primary, #A0FAFF)"
                          : "var(--foreground, #ffffff)",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: renderMarkdownToHtml(message.text),
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className={cn(
            "group mr-2 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 ease-in-out hover:scale-110 active:scale-110",
            "border-white bg-[#333333] hover:bg-white active:bg-white",
            hasNewMessages && "animate-chat-pulse",
          )}
          aria-label="Open transcription"
          aria-expanded={false}
        >
          <MessageCircle className="h-6 w-6 text-white transition-colors duration-300 ease-in-out group-hover:text-black group-active:text-black" />
        </button>
      )}
    </div>
  );
}
