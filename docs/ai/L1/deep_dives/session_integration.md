# Session Integration

When to Read This: use this document when editing the `/session` entry or any component that depends on `ConversationalAIProvider`.

## Purpose

The `/session` entry provides components that are already wired to Agora conversational toolkit hooks, so consumers can focus on layout rather than plumbing.

## Main Files

| Component | File |
| --- | --- |
| `SessionTranscript` | `packages/uikit/src/session/session-transcript.tsx` |
| `AgentStateVisualizer` | `packages/uikit/src/session/agent-state-visualizer.tsx` |
| `SessionChatInput` | `packages/uikit/src/session/session-chat-input.tsx` |
| `SessionErrorDisplay` | `packages/uikit/src/session/session-error-display.tsx` |

## Provider Requirement

Session components must render inside a toolkit provider:

```tsx
<ConversationalAIProvider config={{ channel }}>
  {/* session components */}
</ConversationalAIProvider>
```

Without the provider:

- hook-driven behavior does not work
- some components log warnings in development
- rendering may degrade to inert defaults rather than useful behavior

```text
ConversationalAIProvider
  -> toolkit hooks/context
     -> SessionTranscript
     -> AgentStateVisualizer
     -> SessionChatInput
     -> SessionErrorDisplay
```

## Component → Toolkit Hook Mapping

| Component              | Toolkit Hook                   | Data Consumed                       |
| ---------------------- | ------------------------------ | ----------------------------------- |
| `SessionTranscript`    | `useTranscript()`              | `TranscriptHelperItem[]`            |
| `AgentStateVisualizer` | `useAgentState()`              | agent state string                  |
| `SessionChatInput`     | `useConversationalAIContext()` | `sendMessage()`, `interrupt()`      |
| `SessionErrorDisplay`  | `useAgentError()`              | `AgentErrorEvent \| null`           |

## AgentStateVisualizer

```typescript
interface AgentStateVisualizerProps {
  overrideState?: AgentVisualizerState;
  size?: AgentVisualizerSize;
  className?: string;
  lottiePaths?: Partial<Record<AgentVisualizerState, string>>;
}
```

### State Mapping

| Toolkit State | Visualizer State |
| ------------- | ---------------- |
| `idle`        | `ambient`        |
| `listening`   | `listening`      |
| `thinking`    | `analyzing`      |
| `speaking`    | `talking`        |
| `silent`      | `ambient`        |
| `null`/unknown | `ambient`       |

Notes:

- `overrideState` wins over derived toolkit state
- use `overrideState` for `not-joined`, `joining`, or `disconnected`

## SessionTranscript

```typescript
interface SessionTranscriptProps {
  agentUid: string | number;   // used to identify which messages are from the agent
  agentName?: string;           // default: "Agent"
  userName?: string;            // default: "You"
  height?: string;              // Conversation container height
  className?: string;
}
```

- consumes toolkit transcript items
- determines agent/user alignment via the `agentUid` prop
- renders onto the base conversation/message primitives
- inherits the transcript/message-type coupling described in chat docs

## SessionChatInput

```typescript
interface SessionChatInputProps {
  agentUid: string | number;
  placeholder?: string;          // default: "Type a message…"
  showInterrupt?: boolean;       // default: false
  interruptLabel?: string;       // default: "Interrupt agent"
  onRTMError?: (error: Error) => void;
  className?: string;
}
```

Behavior:

1. text input captures message text
2. Enter sends unless modifier handling prevents it
3. `sendMessage(String(agentUid), trimmedText)` is called through toolkit context
4. optional interrupt button calls `interrupt(String(agentUid))`
5. failures are forwarded through `onRTMError`

Operational notes:

- component tracks `inFlight` state to prevent overlapping send/interrupt calls
- development warning appears if no provider instance is present

## SessionErrorDisplay

- renders toolkit error state and returns `null` when no error is present
- should stay lightweight because it reflects upstream toolkit state rather than owning error policy itself

### Custom Rendering

```tsx
<SessionErrorDisplay>
  {(error, clearError) => (
    <div>
      <p>{error.message}</p>
      <button onClick={clearError}>Dismiss</button>
    </div>
  )}
</SessionErrorDisplay>
```

## High-Risk Changes

- changing state mappings without checking animation expectations
- moving toolkit hook usage into the base entry
- changing `agentUid` handling without validating transcript/send behavior

## Related Files

- [02_architecture.md](../02_architecture.md)
- [05_workflows.md](../05_workflows.md)
- [06_interfaces.md](../06_interfaces.md)
- [realtime_integrations.md](realtime_integrations.md)
- [chat_components.md](chat_components.md)
