"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../primitives/dialog";
import { AgentSettings, type AgentSettingsProps } from "./agent-settings";

export interface SettingsDialogProps extends Omit<
  AgentSettingsProps,
  "className"
> {
  /**
   * Whether the dialog is open
   */
  open: boolean;
  /**
   * Callback when the dialog open state changes
   */
  onOpenChange: (open: boolean) => void;
  /**
   * Dialog title
   * @default "Agent Settings"
   */
  title?: string;
  /**
   * Dialog description
   */
  description?: string;
  /**
   * Optional content rendered after AgentSettings (e.g. SessionPanel)
   */
  children?: React.ReactNode;
}

/**
 * SettingsDialog provides a modal dialog for configuring Agora Conversational AI agent settings.
 *
 * @example
 * ```tsx
 * const [isOpen, setIsOpen] = useState(false)
 * const [enableAivad, setEnableAivad] = useState(true)
 * const [language, setLanguage] = useState("en-US")
 *
 * <SettingsDialog
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   enableAivad={enableAivad}
 *   onEnableAivadChange={setEnableAivad}
 *   language={language}
 *   onLanguageChange={setLanguage}
 *   disabled={isConnected}
 * />
 * ```
 */
export const SettingsDialog = React.forwardRef<
  HTMLDivElement,
  SettingsDialogProps
>(
  (
    {
      open,
      onOpenChange,
      title = "Agent Settings",
      description,
      children,
      ...agentSettingsProps
    },
    ref,
  ) => {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent ref={ref}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
            <DialogClose className="cursor-pointer absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogHeader>
          <AgentSettings {...agentSettingsProps} />
          {children}
        </DialogContent>
      </Dialog>
    );
  },
);

SettingsDialog.displayName = "SettingsDialog";
