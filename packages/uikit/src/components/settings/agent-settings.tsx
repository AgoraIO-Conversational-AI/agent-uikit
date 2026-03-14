"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { ValuePicker, type Item } from "../primitives/value-picker";
import { useAudioDevices } from "../../hooks/use-audio-devices";
import { cn } from "../../lib/utils";

export interface AgentSettingsProps {
  /**
   * Selected microphone device ID (empty string = system default)
   */
  selectedMicId?: string;
  /**
   * Callback when microphone selection changes
   */
  onMicChange?: (deviceId: string) => void;
  /**
   * Whether AIVAD (AI Voice Activity Detection / TURN) is enabled
   */
  enableAivad: boolean;
  /**
   * Callback when AIVAD setting changes
   */
  onEnableAivadChange: (enabled: boolean) => void;
  /**
   * Current STT language code (e.g., "en-US")
   */
  language: string;
  /**
   * Callback when language changes
   */
  onLanguageChange: (language: string) => void;
  /**
   * System prompt for the agent
   */
  prompt?: string;
  /**
   * Callback when prompt changes
   */
  onPromptChange?: (prompt: string) => void;
  /**
   * Greeting message the agent sends when joining
   */
  greeting?: string;
  /**
   * Callback when greeting changes
   */
  onGreetingChange?: (greeting: string) => void;
  /**
   * Available language options. If not provided, defaults to common languages.
   */
  languages?: Item[];
  /**
   * Whether settings are disabled (e.g., when already connected)
   */
  disabled?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

const DEFAULT_LANGUAGES: Item[] = [
  { id: "en-US", name: "English (US)" },
  { id: "en-GB", name: "English (UK)" },
  { id: "es-ES", name: "Spanish (Spain)" },
  { id: "es-MX", name: "Spanish (Mexico)" },
  { id: "fr-FR", name: "French" },
  { id: "de-DE", name: "German" },
  { id: "it-IT", name: "Italian" },
  { id: "pt-BR", name: "Portuguese (Brazil)" },
  { id: "ja-JP", name: "Japanese" },
  { id: "ko-KR", name: "Korean" },
  { id: "zh-CN", name: "Chinese (Simplified)" },
  { id: "zh-TW", name: "Chinese (Traditional)" },
];

/**
 * AgentSettings provides UI controls for configuring Agora Conversational AI agent settings
 * before starting a conversation.
 *
 * @example
 * ```tsx
 * const [enableAivad, setEnableAivad] = useState(true)
 * const [language, setLanguage] = useState("en-US")
 *
 * <AgentSettings
 *   enableAivad={enableAivad}
 *   onEnableAivadChange={setEnableAivad}
 *   language={language}
 *   onLanguageChange={setLanguage}
 *   disabled={isConnected}
 * />
 * ```
 */
export const AgentSettings = React.forwardRef<
  HTMLDivElement,
  AgentSettingsProps
>(
  (
    {
      selectedMicId,
      onMicChange,
      enableAivad,
      onEnableAivadChange,
      language,
      onLanguageChange,
      prompt,
      onPromptChange,
      greeting,
      onGreetingChange,
      languages = DEFAULT_LANGUAGES,
      disabled = false,
      className,
    },
    ref,
  ) => {
    const { devices: audioDevices } = useAudioDevices();

    const SYSTEM_DEFAULT_MIC = "system-default";

    const micItems: Item[] = [
      { id: SYSTEM_DEFAULT_MIC, name: "System Default" },
      ...audioDevices.map((d) => ({ id: d.deviceId, name: d.label })),
    ];

    const handleMicValueChange = (value: string) => {
      onMicChange?.(value === SYSTEM_DEFAULT_MIC ? "" : value);
    };

    return (
      <div ref={ref} className={cn("flex flex-col gap-6", className)}>
        {/* Microphone Picker */}
        {onMicChange && (
          <ValuePicker
            label="Microphone"
            items={micItems}
            value={selectedMicId || SYSTEM_DEFAULT_MIC}
            onValueChange={handleMicValueChange}
            placeholder="Select a microphone..."
            maxHeight="200px"
          />
        )}

        {/* Language Picker */}
        <ValuePicker
          label="Speech Recognition Language"
          items={languages}
          value={language}
          onValueChange={onLanguageChange}
          placeholder="Select a language..."
          disabled={disabled}
          maxHeight="300px"
        />

        {/* AIVAD Toggle */}
        <div className="flex items-center justify-between bg-input-field-bg border rounded-md p-3 pr-4">
          <span className="text-sm font-medium">AI Turn Detection</span>
          <SwitchPrimitives.Root
            checked={enableAivad}
            onCheckedChange={onEnableAivadChange}
            disabled={disabled}
            style={{ width: "44px", height: "24px", padding: "2px" }}
            className={cn(
              "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors",
              "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              "disabled:cursor-not-allowed disabled:opacity-50",
              enableAivad ? "bg-primary" : "bg-input",
            )}
          >
            <SwitchPrimitives.Thumb
              style={{
                transform: enableAivad ? "translateX(20px)" : "translateX(0)",
              }}
              className={cn(
                "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform",
              )}
            />
          </SwitchPrimitives.Root>
        </div>

        {/* System Prompt */}
        {onPromptChange && (
          <div className="flex flex-col gap-3">
            <label htmlFor="agent-prompt" className="text-small font-medium">
              System Prompt
            </label>
            <textarea
              id="agent-prompt"
              value={prompt || ""}
              onChange={(e) => onPromptChange(e.target.value)}
              disabled={disabled}
              placeholder="You are a helpful AI assistant..."
              rows={6}
              className={cn(
                "w-full rounded-md border border-input bg-input-field-bg px-3 py-2 text-sm",
                "focus:outline-none focus:ring-2 focus:ring-ring",
                "disabled:cursor-not-allowed disabled:opacity-50",
                "resize-none",
              )}
            />
          </div>
        )}

        {/* Greeting Message */}
        {onGreetingChange && (
          <div className="flex flex-col gap-3">
            <label htmlFor="agent-greeting" className="text-small font-medium">
              Greeting Message
            </label>
            <input
              id="agent-greeting"
              type="text"
              value={greeting || ""}
              onChange={(e) => onGreetingChange(e.target.value)}
              disabled={disabled}
              placeholder="Hello! How can I help you today?"
              className={cn(
                "w-full rounded-md border border-input bg-input-field-bg px-3 py-2 text-sm",
                "focus:outline-none focus:ring-2 focus:ring-ring",
                "disabled:cursor-not-allowed disabled:opacity-50",
              )}
            />
          </div>
        )}
      </div>
    );
  },
);

AgentSettings.displayName = "AgentSettings";
