/**
 * Tests for SessionChatInput component
 */

import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";

const {
  mockInterrupt,
  mockSendMessage,
  mockUseConversationalAIContext,
} = vi.hoisted(() => {
  const mockSendMessage = vi.fn();
  const mockInterrupt = vi.fn();
  const mockUseConversationalAIContext = vi.fn(() => ({
    interrupt: mockInterrupt,
    sendMessage: mockSendMessage,
    instance: null,
  }));

  return {
    mockInterrupt,
    mockSendMessage,
    mockUseConversationalAIContext,
  };
});

// Mock the toolkit react package — provides the context hook
vi.mock("agora-agent-client-toolkit-react", () => ({
  useConversationalAIContext: mockUseConversationalAIContext,
}));

import { SessionChatInput } from "../session-chat-input";

describe("SessionChatInput", () => {
  beforeEach(() => {
    mockSendMessage.mockReset().mockResolvedValue(undefined);
    mockInterrupt.mockReset().mockResolvedValue(undefined);
    mockUseConversationalAIContext.mockReset().mockReturnValue({
      interrupt: mockInterrupt,
      sendMessage: mockSendMessage,
      instance: null,
    });
  });

  it("renders without crashing", () => {
    const { container } = render(<SessionChatInput agentUid="agent-1" />);
    expect(container).toBeInTheDocument();
  });

  it("renders a text input and send button", () => {
    const { getByRole, getByPlaceholderText } = render(
      <SessionChatInput agentUid="agent-1" placeholder="Type here" />,
    );
    expect(getByPlaceholderText("Type here")).toBeInTheDocument();
    expect(getByRole("button", { name: /send/i })).toBeInTheDocument();
  });

  it("send button is disabled when input is empty", () => {
    const { getByRole } = render(<SessionChatInput agentUid="agent-1" />);
    const sendBtn = getByRole("button", { name: /send/i });
    expect(sendBtn).toBeDisabled();
  });

  it("send button is enabled when input has text", () => {
    const { getByRole } = render(<SessionChatInput agentUid="agent-1" />);
    const input = getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Hello" } });
    const sendBtn = getByRole("button", { name: /send/i });
    expect(sendBtn).not.toBeDisabled();
  });

  it("calls sendMessage with agentUid and text on button click", async () => {
    const { getByRole } = render(<SessionChatInput agentUid="agent-1" />);
    const input = getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Hello agent" } });
    fireEvent.click(getByRole("button", { name: /send/i }));

    await waitFor(() => {
      expect(mockSendMessage).toHaveBeenCalledWith("agent-1", "Hello agent");
    });
  });

  it("clears the input after successful send", async () => {
    const { getByRole } = render(<SessionChatInput agentUid="agent-1" />);
    const input = getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Hello" } });
    fireEvent.click(getByRole("button", { name: /send/i }));

    await waitFor(() => {
      expect(input.value).toBe("");
    });
  });

  it("sends on Enter key press", async () => {
    const { getByRole } = render(<SessionChatInput agentUid="agent-1" />);
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "Enter test" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    await waitFor(() => {
      expect(mockSendMessage).toHaveBeenCalledWith("agent-1", "Enter test");
    });
  });

  it("does not send on Shift+Enter", () => {
    const { getByRole } = render(<SessionChatInput agentUid="agent-1" />);
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "Multiline" } });
    fireEvent.keyDown(input, { key: "Enter", shiftKey: true });
    expect(mockSendMessage).not.toHaveBeenCalled();
  });

  it("does not render interrupt button by default", () => {
    const { queryByRole } = render(<SessionChatInput agentUid="agent-1" />);
    expect(queryByRole("button", { name: /interrupt/i })).not.toBeInTheDocument();
  });

  it("renders interrupt button when showInterrupt is true", () => {
    const { getByText } = render(
      <SessionChatInput agentUid="agent-1" showInterrupt />,
    );
    expect(getByText("Stop")).toBeInTheDocument();
  });

  it("does not render the interrupt button when no interrupt handler is available", () => {
    mockUseConversationalAIContext.mockReturnValue({
      interrupt: undefined,
      sendMessage: mockSendMessage,
      instance: null,
    });

    const { queryByText } = render(
      <SessionChatInput agentUid="agent-1" showInterrupt />,
    );
    expect(queryByText("Stop")).not.toBeInTheDocument();
  });

  it("calls interrupt with agentUid when Stop button is clicked", async () => {
    const { getByText } = render(
      <SessionChatInput agentUid="agent-1" showInterrupt />,
    );
    fireEvent.click(getByText("Stop"));

    await waitFor(() => {
      expect(mockInterrupt).toHaveBeenCalledWith("agent-1");
    });
  });

  it("calls onRTMError when sendMessage throws", async () => {
    mockSendMessage.mockRejectedValue(new Error("RTM not configured"));
    const onRTMError = vi.fn();

    const { getByRole } = render(
      <SessionChatInput agentUid="agent-1" onRTMError={onRTMError} />,
    );
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "Test" } });
    fireEvent.click(getByRole("button", { name: /send/i }));

    await waitFor(() => {
      expect(onRTMError).toHaveBeenCalledWith(expect.any(Error));
    });
  });

  it("calls useConversationalAIContext from the provider", async () => {
    const { useConversationalAIContext } = await import("agora-agent-client-toolkit-react");
    render(<SessionChatInput agentUid="agent-1" />);
    expect(useConversationalAIContext).toHaveBeenCalled();
  });

  it("logs a dev warning when instance is null (no provider)", async () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    render(<SessionChatInput agentUid="agent-1" />);
    await waitFor(() => {
      expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining("ConversationalAIProvider"));
    });
    warnSpy.mockRestore();
  });

  it("accepts numeric agentUid", async () => {
    const { getByRole } = render(<SessionChatInput agentUid={42} />);
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "Hello" } });
    fireEvent.click(getByRole("button", { name: /send/i }));

    await waitFor(() => {
      expect(mockSendMessage).toHaveBeenCalledWith("42", "Hello");
    });
  });

  it("disables send when no provider or sendMessage override is available", () => {
    mockUseConversationalAIContext.mockReturnValue({
      interrupt: undefined,
      sendMessage: undefined,
      instance: null,
    });

    const { getByRole } = render(<SessionChatInput agentUid="agent-1" />);
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "Hello" } });

    expect(getByRole("button", { name: /send/i })).toBeDisabled();
  });
});
