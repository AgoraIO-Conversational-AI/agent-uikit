/**
 * Tests for AgentStateVisualizer component
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

import { useAgentState } from "agora-agent-client-toolkit-react";
import { AgentStateVisualizer } from "../agent-state-visualizer";

const mockUseAgentState = vi.mocked(useAgentState);

describe("AgentStateVisualizer", () => {
  beforeEach(() => {
    mockUseAgentState.mockReturnValue({
      agentState: null,
      stateEvent: null,
      agentUserId: null,
    });
  });

  it("renders without crashing", () => {
    const { container } = render(<AgentStateVisualizer />);
    expect(container).toBeInTheDocument();
  });

  it("renders 'ambient' when agentState is null", () => {
    mockUseAgentState.mockReturnValue({ agentState: null, stateEvent: null, agentUserId: null });
    const { getByText } = render(<AgentStateVisualizer />);
    expect(getByText("Ambient")).toBeInTheDocument();
  });

  it("maps AgentState.IDLE to 'ambient'", () => {
    mockUseAgentState.mockReturnValue({ agentState: "idle" as any, stateEvent: null, agentUserId: null });
    const { getByText } = render(<AgentStateVisualizer />);
    expect(getByText("Ambient")).toBeInTheDocument();
  });

  it("maps AgentState.LISTENING to 'listening'", () => {
    mockUseAgentState.mockReturnValue({ agentState: "listening" as any, stateEvent: null, agentUserId: null });
    const { getByText } = render(<AgentStateVisualizer />);
    expect(getByText("Listening")).toBeInTheDocument();
  });

  it("maps AgentState.THINKING to 'analyzing'", () => {
    mockUseAgentState.mockReturnValue({ agentState: "thinking" as any, stateEvent: null, agentUserId: null });
    const { getByText } = render(<AgentStateVisualizer />);
    expect(getByText("Analyzing")).toBeInTheDocument();
  });

  it("maps AgentState.SPEAKING to 'talking'", () => {
    mockUseAgentState.mockReturnValue({ agentState: "speaking" as any, stateEvent: null, agentUserId: null });
    const { getByText } = render(<AgentStateVisualizer />);
    expect(getByText("Talking")).toBeInTheDocument();
  });

  it("maps AgentState.SILENT to 'ambient'", () => {
    mockUseAgentState.mockReturnValue({ agentState: "silent" as any, stateEvent: null, agentUserId: null });
    const { getByText } = render(<AgentStateVisualizer />);
    expect(getByText("Ambient")).toBeInTheDocument();
  });

  it("overrideState takes precedence over toolkit state", () => {
    mockUseAgentState.mockReturnValue({ agentState: "speaking" as any, stateEvent: null, agentUserId: null });
    const { getByText } = render(<AgentStateVisualizer overrideState="not-joined" />);
    expect(getByText("Not Joined")).toBeInTheDocument();
  });

  it("overrideState 'joining' renders Joining text", () => {
    const { getByText } = render(<AgentStateVisualizer overrideState="joining" />);
    expect(getByText("Joining")).toBeInTheDocument();
  });

  it("overrideState 'disconnected' renders Disconnected text", () => {
    const { getByText } = render(<AgentStateVisualizer overrideState="disconnected" />);
    expect(getByText("Disconnected")).toBeInTheDocument();
  });

  it("accepts size prop", () => {
    const { container } = render(<AgentStateVisualizer size="lg" />);
    expect(container).toBeInTheDocument();
  });
});
