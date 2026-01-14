"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
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
          </DialogHeader>
          <AgentSettings {...agentSettingsProps} />
        </DialogContent>
      </Dialog>
    );
  },
);

SettingsDialog.displayName = "SettingsDialog";
