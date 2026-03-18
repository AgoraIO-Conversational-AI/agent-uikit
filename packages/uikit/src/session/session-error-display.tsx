"use client";

import * as React from "react";
import { X } from "lucide-react";
import { useAgentError } from "agora-agent-client-toolkit-react";
import type { AgentErrorEvent } from "agora-agent-client-toolkit-react";

import { cn } from "../lib/utils";

export interface SessionErrorDisplayProps {
  className?: string;
  /**
   * Custom render function for the error. Receives the current error and a
   * function to dismiss it. Return null to suppress rendering for specific errors.
   */
  children?: (error: AgentErrorEvent, clearError: () => void) => React.ReactNode;
}

function defaultErrorMessage(error: AgentErrorEvent): string {
  if (error.source === "agent") {
    return `Agent error (${error.error.type}): ${error.error.message}`;
  }
  return `Message error: ${error.error.message}`;
}

/**
 * Session-connected error display.
 * Renders a dismissible error banner when the toolkit emits an agent or message error.
 * Returns null when there is no active error.
 * Must be used inside a ConversationalAIProvider.
 *
 * @example
 * ```tsx
 * import { ConversationalAIProvider } from 'agora-agent-client-toolkit-react'
 * import { SessionErrorDisplay } from 'agora-agent-uikit/session'
 *
 * <ConversationalAIProvider config={{ channel: 'my-channel' }}>
 *   <SessionErrorDisplay />
 * </ConversationalAIProvider>
 * ```
 *
 * @example Custom render
 * ```tsx
 * <SessionErrorDisplay>
 *   {(error, clearError) => (
 *     <MyToast message={error.error.message} onClose={clearError} />
 *   )}
 * </SessionErrorDisplay>
 * ```
 */
export function SessionErrorDisplay({ className, children }: SessionErrorDisplayProps) {
  const { error, clearError } = useAgentError();

  if (!error) return null;

  if (children) {
    return <>{children(error, clearError)}</>;
  }

  return (
    <div
      role="alert"
      className={cn(
        "flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive",
        className,
      )}
    >
      <span className="flex-1">{defaultErrorMessage(error)}</span>
      <button
        type="button"
        onClick={clearError}
        aria-label="Dismiss error"
        className="shrink-0 opacity-70 hover:opacity-100"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}
