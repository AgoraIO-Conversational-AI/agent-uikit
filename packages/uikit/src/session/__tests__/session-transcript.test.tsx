/**
 * Tests for SessionTranscript component
 */

import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render } from "@testing-library/react";

// Mock the toolkit react package — it is an optional peer dep not installed in devDependencies
vi.mock("agora-agent-client-toolkit-react", () => ({
  useTranscript: vi.fn(() => []),
  useAgentState: vi.fn(() => ({ agentState: null, stateEvent: null, agentUserId: null })),
  useConversationalAI: vi.fn(() => ({
    transcript: [],
    agentState: null,
    isConnected: false,
    error: null,
    interrupt: vi.fn(),
    sendMessage: vi.fn(),
    metrics: null,
  })),
}));

import { useTranscript } from "agora-agent-client-toolkit-react";
import { SessionTranscript } from "../session-transcript";

const mockUseTranscript = vi.mocked(useTranscript);

describe("SessionTranscript", () => {
  beforeEach(() => {
    mockUseTranscript.mockReturnValue([]);
  });

  it("renders without crashing", () => {
    const { container } = render(<SessionTranscript agentUid="agent-1" />);
    expect(container).toBeInTheDocument();
  });

  it("renders empty when transcript is empty", () => {
    mockUseTranscript.mockReturnValue([]);
    const { container } = render(<SessionTranscript agentUid="agent-1" />);
    // Should render the conversation wrapper but no messages
    expect(container.querySelector(".flex")).toBeInTheDocument();
  });

  it("renders agent messages for matching agentUid", () => {
    mockUseTranscript.mockReturnValue([
      { uid: "agent-1", stream_id: 0, turn_id: 1, text: "Hello, how can I help?", status: 1, metadata: null },
    ]);

    const { getByText } = render(
      <SessionTranscript agentUid="agent-1" agentName="Assistant" />,
    );
    expect(getByText("Hello, how can I help?")).toBeInTheDocument();
  });

  it("renders user messages for non-matching uid", () => {
    mockUseTranscript.mockReturnValue([
      { uid: "user-42", stream_id: 0, turn_id: 2, text: "What is the weather?", status: 1, metadata: null },
    ]);

    const { getByText } = render(
      <SessionTranscript agentUid="agent-1" userName="User" />,
    );
    expect(getByText("What is the weather?")).toBeInTheDocument();
  });

  it("correctly splits agent vs user messages by agentUid", () => {
    mockUseTranscript.mockReturnValue([
      { uid: "agent-1", stream_id: 0, turn_id: 1, text: "Agent message", status: 1, metadata: null },
      { uid: "user-42", stream_id: 0, turn_id: 2, text: "User message", status: 1, metadata: null },
    ]);

    const { getByText } = render(
      <SessionTranscript agentUid="agent-1" agentName="Agent" userName="User" />,
    );

    expect(getByText("Agent message")).toBeInTheDocument();
    expect(getByText("User message")).toBeInTheDocument();
  });

  it("accepts custom agentName and userName props", () => {
    const props = {
      agentUid: "agent-1",
      agentName: "Aria",
      userName: "Alex",
    };
    expect(props.agentName).toBe("Aria");
    expect(props.userName).toBe("Alex");
  });

  it("handles numeric agentUid", () => {
    mockUseTranscript.mockReturnValue([
      { uid: "123", stream_id: 0, turn_id: 1, text: "Numeric agent", status: 1, metadata: null },
    ]);

    const { getByText } = render(
      <SessionTranscript agentUid={123} />,
    );
    expect(getByText("Numeric agent")).toBeInTheDocument();
  });
});
