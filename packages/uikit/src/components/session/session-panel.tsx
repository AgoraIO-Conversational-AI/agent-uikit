"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

/**
 * Props for the SessionPanel component.
 */
export interface SessionPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The agent ID returned by the ConvoAI API */
  agentId: string | null;
  /** The join request payload (API keys should be pre-redacted) */
  payload: object | null;
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clear pending timeout on unmount to avoid state update on unmounted component
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    };
  }, []);

  const scheduleClear = () => {
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCopied(false);
      timeoutRef.current = null;
    }, 2000);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      scheduleClear();
    } catch {
      // Fallback for non-secure contexts (http://)
      try {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        setCopied(true);
        scheduleClear();
      } catch {
        // Copy not supported in this context
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="ml-2 shrink-0 rounded px-2 py-0.5 text-xs text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

/**
 * SessionPanel displays the active agent session info: agent ID and the
 * redacted join-request body. Intended to be slotted into SettingsDialog
 * as children during an active call.
 *
 * @example
 * ```tsx
 * <SettingsDialog open={open} onOpenChange={setOpen} {...settings}>
 *   {isConnected && (
 *     <SessionPanel agentId={agentId} payload={redactedPayload} />
 *   )}
 * </SettingsDialog>
 * ```
 */
export const SessionPanel = React.forwardRef<HTMLDivElement, SessionPanelProps>(
  ({ agentId, payload, className, ...props }, ref) => {
    if (!agentId) return null;

    const payloadJson = payload ? JSON.stringify(payload, null, 2) : "";

    return (
      <div
        ref={ref}
        className={cn("space-y-4 border-t pt-4 mt-4", className)}
        {...props}
      >
        <div>
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-muted-foreground">
              Agent ID
            </label>
            <CopyButton text={agentId} />
          </div>
          <code className="mt-1 block rounded-md bg-muted px-3 py-2 text-xs font-mono break-all">
            {agentId}
          </code>
        </div>

        {payload && (
          <div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-muted-foreground">
                Join Request Body
              </label>
              <CopyButton text={payloadJson} />
            </div>
            <pre className="mt-1 max-h-64 overflow-auto rounded-md bg-muted px-3 py-2 text-xs font-mono whitespace-pre-wrap break-all">
              {payloadJson}
            </pre>
          </div>
        )}
      </div>
    );
  },
);

SessionPanel.displayName = "SessionPanel";
