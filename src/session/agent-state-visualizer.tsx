"use client";

import * as React from "react";
import { useAgentState } from "agora-agent-client-toolkit-react";
import type { AgentState } from "agora-agent-client-toolkit";

import {
  AgentVisualizer,
  type AgentVisualizerState,
  type AgentVisualizerSize,
} from "../components/voice/agent-visualizer";

export interface AgentStateVisualizerProps {
  /**
   * Overrides the state derived from the toolkit.
   * Use for lifecycle states the toolkit doesn't emit:
   * 'not-joined' (pre-connection), 'joining' (connecting), 'disconnected' (post-disconnect).
   */
  overrideState?: AgentVisualizerState;
  size?: AgentVisualizerSize;
  className?: string;
  lottieBasePath?: string;
  lottiePaths?: Partial<Record<AgentVisualizerState, string>>;
}

const AGENT_STATE_MAP: Record<string, AgentVisualizerState> = {
  idle: "ambient",
  listening: "listening",
  thinking: "analyzing",
  speaking: "talking",
  silent: "ambient",
};

function mapAgentState(agentState: AgentState | null): AgentVisualizerState {
  if (agentState === null) return "ambient";
  return AGENT_STATE_MAP[agentState] ?? "ambient";
}

/**
 * Session-connected agent state visualizer.
 * Wraps AgentVisualizer with useAgentState() from the toolkit, mapping the
 * toolkit's 5-value AgentState enum to the visualizer's 7-value AgentVisualizerState.
 * Must be used inside a ConversationalAIProvider.
 *
 * Use the overrideState prop to display lifecycle states not emitted by the toolkit:
 * 'not-joined', 'joining', and 'disconnected'.
 *
 * @example
 * ```tsx
 * import { ConversationalAIProvider } from 'agora-agent-client-toolkit-react'
 * import { AgentStateVisualizer } from 'agora-agent-uikit/session'
 *
 * <ConversationalAIProvider config={{ channel: 'my-channel' }}>
 *   <AgentStateVisualizer overrideState={isConnected ? undefined : 'not-joined'} />
 * </ConversationalAIProvider>
 * ```
 */
export function AgentStateVisualizer({
  overrideState,
  size,
  className,
  lottieBasePath,
  lottiePaths,
}: AgentStateVisualizerProps) {
  const { agentState } = useAgentState();

  const derivedState = mapAgentState(agentState);
  const activeState = overrideState ?? derivedState;

  return (
    <AgentVisualizer
      state={activeState}
      size={size}
      className={className}
      lottieBasePath={lottieBasePath}
      lottiePaths={lottiePaths}
    />
  );
}
