import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const {
  mockInterrupt,
  mockSendMessage,
  mockUseConversationalAIContext,
} = vi.hoisted(() => {
  const mockSendMessage = vi.fn(async () => undefined);
  const mockInterrupt = vi.fn(async () => undefined);
  const mockUseConversationalAIContext = vi.fn(() => ({
    interrupt: mockInterrupt,
    sendMessage: mockSendMessage,
    instance: { id: "provider-instance" },
  }));

  return {
    mockInterrupt,
    mockSendMessage,
    mockUseConversationalAIContext,
  };
});

vi.mock("agora-agent-client-toolkit-react", () => ({
  useConversationalAIContext: mockUseConversationalAIContext,
  useAgentError: vi.fn(() => null),
  useAgentState: vi.fn(() => "idle"),
  useTranscript: vi.fn(() => []),
}));

import { AgentSettings } from "../index";
import { MicSelector } from "../rtc/index";
import { SessionChatInput } from "../session/index";
import { ThymiaPanel } from "../thymia/index";

describe("entrypoint contract", () => {
  beforeEach(() => {
    mockSendMessage.mockClear();
    mockInterrupt.mockClear();
    mockUseConversationalAIContext.mockReset().mockReturnValue({
      interrupt: mockInterrupt,
      sendMessage: mockSendMessage,
      instance: { id: "provider-instance" },
    });
  });

  it("lets the base entry render settings UI without mic controls", () => {
    render(
      <AgentSettings
        enableAivad={true}
        onEnableAivadChange={() => {}}
        language="en-US"
        onLanguageChange={() => {}}
      />,
    );

    expect(
      screen.queryByRole("button", { name: /microphone/i }),
    ).not.toBeInTheDocument();
    expect(screen.getByText("Speech Recognition Language")).toBeInTheDocument();
  });

  it("lets the session entry use direct action overrides outside provider context", async () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const directSend = vi.fn(async () => undefined);
    const directInterrupt = vi.fn(async () => undefined);

    mockUseConversationalAIContext.mockReturnValue({
      interrupt: undefined,
      sendMessage: undefined,
      instance: null,
    });

    render(
      <SessionChatInput
        agentUid="agent-42"
        sendMessage={directSend}
        interrupt={directInterrupt}
        showInterrupt
      />,
    );

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "hello from props" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(directSend).toHaveBeenCalledWith("agent-42", "hello from props");
    });

    fireEvent.click(screen.getByRole("button", { name: /interrupt agent/i }));

    await waitFor(() => {
      expect(directInterrupt).toHaveBeenCalledWith("agent-42");
    });
    expect(warnSpy).not.toHaveBeenCalled();

    warnSpy.mockRestore();
  });

  it("lets the session entry use provider-backed actions when context is present", async () => {
    render(<SessionChatInput agentUid="agent-99" showInterrupt />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "hello from provider" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(mockSendMessage).toHaveBeenCalledWith(
        "agent-99",
        "hello from provider",
      );
    });

    fireEvent.click(screen.getByRole("button", { name: /interrupt agent/i }));

    await waitFor(() => {
      expect(mockInterrupt).toHaveBeenCalledWith("agent-99");
    });
  });

  it("lets the rtc entry render microphone controls as a distinct integration surface", () => {
    render(<MicSelector value="" onValueChange={() => {}} />);

    expect(
      screen.getByLabelText(/select microphone device/i),
    ).toBeInTheDocument();
  });

  it("lets the thymia entry render disconnected state without RTM wiring", () => {
    render(
      <ThymiaPanel
        biomarkers={{}}
        wellness={{}}
        clinical={{}}
        progress={{}}
        safety={{}}
        isConnected={false}
      />,
    );

    expect(screen.getByText(/connect to start voice analysis/i)).toBeInTheDocument();
  });
});
