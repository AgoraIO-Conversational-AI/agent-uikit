# agora-agent-uikit

[![CI](https://github.com/AgoraIO-Conversational-AI/agent-uikit/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/AgoraIO-Conversational-AI/agent-uikit/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/agora-agent-uikit)](https://www.npmjs.com/package/agora-agent-uikit)
[![npm downloads](https://img.shields.io/npm/dm/agora-agent-uikit)](https://www.npmjs.com/package/agora-agent-uikit)

React component library for building conversational, voice, video, and biomarker AI interfaces with Agora.

---

## Installation

```bash
npm install agora-agent-uikit
# or
pnpm add agora-agent-uikit
# or
yarn add agora-agent-uikit
```

`react` and `react-dom` are peer dependencies and are expected to already be installed in your app.

Install the optional Agora peers only for the entrypoints you use.

## Overview

`agora-agent-uikit` is an Agora-first React UI kit. The base package is the main UI surface for conversational, voice, video, settings, and biomarker UI. Subpath exports group deeper integrations by runtime dependency.

## Entrypoint Guide

| Use case                                                        | Import path                 | Extra packages                                                   |
| --------------------------------------------------------------- | --------------------------- | ---------------------------------------------------------------- |
| Main UI components, primitives, chat, video, settings, branding | `agora-agent-uikit`         | none beyond `react` and `react-dom`                              |
| Components and hooks that talk directly to Agora RTC            | `agora-agent-uikit/rtc`     | `agora-rtc-react`                                                |
| Components that connect directly to `ConversationalAIProvider`  | `agora-agent-uikit/session` | `agora-agent-client-toolkit`, `agora-agent-client-toolkit-react` |
| Thymia biomarker UI and RTM subscription helpers                | `agora-agent-uikit/thymia`  | `agora-rtm-sdk`                                                  |

### Install by integration mode

Base UI:

```bash
npm install agora-agent-uikit
```

Base UI plus RTC entry:

```bash
npm install agora-agent-uikit agora-rtc-react
```

Base UI plus Session entry:

```bash
npm install agora-agent-uikit agora-agent-client-toolkit@^1.2.0 agora-agent-client-toolkit-react@^1.2.0
```

Base UI plus Thymia entry:

```bash
npm install agora-agent-uikit agora-rtm-sdk
```

## Quick Start

### 1. Configure Tailwind

Add the package to your Tailwind `content` paths so its classes are included in your build:

```js
// tailwind.config.js
export default {
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/agora-agent-uikit/dist/**/*.{js,mjs}',
  ],
};
```

### 2. Basic visual voice UI

This example uses presentation components only, so no [toolkit](https://github.com/AgoraIO-Conversational-AI/agent-client-toolkit-ts) integration is required:

```tsx
import { useState } from 'react';
import { MicButton, AgentVisualizer } from 'agora-agent-uikit';
import type { AgentVisualizerState, MicButtonState } from 'agora-agent-uikit';

export function VoiceUI() {
  const [agentState] = useState<AgentVisualizerState>('ambient');
  const [micState, setMicState] = useState<MicButtonState>('idle');

  return (
    <div className="flex flex-col items-center gap-6">
      <AgentVisualizer state={agentState} size="md" />
      <MicButton
        state={micState}
        onClick={() =>
          setMicState((s) => (s === 'idle' ? 'listening' : 'idle'))
        }
      />
    </div>
  );
}
```

`AgentVisualizer` uses built-in state-specific `.lottie` animations by default. To customize the visualizer without replacing every state, pass `lottiePaths` with only the states you want to override:

```tsx
<AgentVisualizer
  state="talking"
  lottiePaths={{
    talking: '/brand/talking.lottie',
    listening: '/brand/listening.lottie',
  }}
/>
```

For live agent state, transcript rendering, and session messaging, use the `/session` entry with [`agora-agent-client-toolkit`](https://github.com/AgoraIO-Conversational-AI/agent-client-toolkit-ts) and [`agora-agent-client-toolkit-react`](https://github.com/AgoraIO-Conversational-AI/agent-client-toolkit-ts).

### 3. RTC-connected components (requires agora-rtc-react)

Install the optional RTC package:

```bash
npm install agora-rtc-react
```

Import components that call Agora RTC hooks from the `/rtc` entry:

```tsx
import { useState } from 'react';
import type { IMicrophoneAudioTrack } from 'agora-rtc-react';
import { MicButtonWithVisualizer, MicSelector } from 'agora-agent-uikit/rtc';

export function RTCControls() {
  const [isMicOn, setIsMicOn] = useState(true);
  const [selectedMicId, setSelectedMicId] = useState<string>('');
  const [track] = useState<IMicrophoneAudioTrack | null>(null);

  return (
    <div className="flex items-center gap-4">
      <MicSelector value={selectedMicId} onValueChange={setSelectedMicId} />
      <MicButtonWithVisualizer
        isEnabled={isMicOn}
        setIsEnabled={setIsMicOn}
        track={track}
      />
    </div>
  );
}
```

Use the `/rtc` entry for components that call Agora RTC hooks directly. Other base components can still be composed with Agora client-side SDK state without importing that subpath.

### 5. Session-connected UI (requires toolkit)

Install the optional toolkit packages:

```bash
npm install agora-agent-client-toolkit@^1.2.0 agora-agent-client-toolkit-react@^1.2.0
```

Wrap your app with `ConversationalAIProvider` and import session components from the `/session` entry:

```tsx
import { ConversationalAIProvider } from 'agora-agent-client-toolkit-react';
import {
  SessionTranscript,
  AgentStateVisualizer,
  SessionChatInput,
} from 'agora-agent-uikit/session';

interface SessionUIProps {
  channel: string;
  agentUid: string | number;
}

export function SessionUI({ channel, agentUid }: SessionUIProps) {
  return (
    <ConversationalAIProvider config={{ channel }}>
      <div className="flex flex-col gap-4">
        <AgentStateVisualizer size="md" />
        <SessionTranscript
          agentUid={agentUid}
          agentName="Agent"
          userName="You"
        />
        <SessionChatInput
          agentUid={agentUid}
          showInterrupt
          placeholder="Type a message…"
        />
      </div>
    </ConversationalAIProvider>
  );
}
```

Use the `/session` entry for components that talk directly to `ConversationalAIProvider`. `SessionChatInput` can also be wired manually with `sendMessage` and `interrupt` overrides when you want to supply your own toolkit integration layer.

### 6. RTM / Thymia UI (requires agora-rtm-sdk)

```bash
npm install agora-rtm-sdk
```

```tsx
import { ThymiaPanel } from 'agora-agent-uikit/thymia';

<ThymiaPanel
  biomarkers={{ happy: 0.68, stress: 0.21 }}
  wellness={{}}
  clinical={{}}
  progress={{}}
  safety={{}}
  isConnected
/>;
```

---

## Architecture

The library has four entry points:

| Entry   | Import                      | Extra install needed                                                               |
| ------- | --------------------------- | ---------------------------------------------------------------------------------- |
| Base    | `agora-agent-uikit`         | None required; some components can integrate more deeply with optional Agora peers |
| RTC     | `agora-agent-uikit/rtc`     | `agora-rtc-react`                                                                  |
| Session | `agora-agent-uikit/session` | `agora-agent-client-toolkit` + `agora-agent-client-toolkit-react`                  |
| Thymia  | `agora-agent-uikit/thymia`  | `agora-rtm-sdk`                                                                    |

The base entry contains the main visual components: voice, chat, video, layout, settings, branding, primitives, and selected biomarker surfaces. Many are pure presentation components; some are Agora-oriented convenience components that integrate more deeply when the relevant peers are installed.

The RTC entry adds components and hooks that call Agora RTC hooks directly (`MicButtonWithVisualizer`, `MicSelector`, `useAudioDevices`). These require `agora-rtc-react` to be installed.

The session entry adds components that connect directly to `ConversationalAIProvider`. They call toolkit hooks internally and require both toolkit packages unless you pass explicit action overrides where supported.

The Thymia entry adds RTM-bound biomarker helpers and the `ThymiaPanel` UI surface.

---

## Peer Dependencies

All peer dependencies are required unless marked optional.

| Package                            | Version  | Notes                         |
| ---------------------------------- | -------- | ----------------------------- |
| `react`                            | ≥ 18.0.0 | Required                      |
| `react-dom`                        | ≥ 18.0.0 | Required                      |
| `agora-rtc-react`                  | ≥ 2.0.0  | Optional — rtc entry only     |
| `agora-agent-client-toolkit`       | ≥ 1.2.0  | Optional — session entry only |
| `agora-agent-client-toolkit-react` | ≥ 1.2.0  | Optional — session entry only |
| `agora-rtm-sdk`                    | ≥ 2.0.0  | Optional — thymia entry only  |

Everything else (`lucide-react`, `@radix-ui/*`, `@lottiefiles/dotlottie-react`, `cmdk`, `clsx`, `tailwind-merge`, `class-variance-authority`) is bundled as a regular dependency — no separate install needed.

---

## Component Reference

Full props, usage examples, and notes for every component are in **[packages/uikit/docs/components.md](packages/uikit/docs/components.md)**.

**Base entry** (`agora-agent-uikit`):

- Voice — `MicButton`, `AgentVisualizer`, `AudioVisualizer`, `SimpleVisualizer`, `LiveWaveform`
- Chat — `Conversation`, `Message`, `Response`, `ConvoTextStream`
- Video — `LocalVideoPreview`, `AvatarVideoDisplay`, `Avatar`, `CameraSelector`
- Settings — `AgentSettings`, `SettingsDialog`
- Layout — `VideoGrid`, `MobileTabs`
- Primitives — `Button`, `IconButton`, `Card`, `Chip`, `ValuePicker`

**RTC entry** (`agora-agent-uikit/rtc`):

- `MicButtonWithVisualizer`, `MicSelector`, `useAudioDevices`

**Session entry** (`agora-agent-uikit/session`):

- `AgentStateVisualizer`, `SessionTranscript`, `SessionChatInput`

**Thymia entry** (`agora-agent-uikit/thymia`):

- `ThymiaPanel`, `useRTMSubscription`, `useThymia`

---

## Theming

All components accept `className` and compose with Tailwind via the `cn()` utility:

```tsx
import { MicButton, cn } from 'agora-agent-uikit';

<MicButton
  className={cn('w-full', isActive && 'ring-2 ring-blue-500')}
  state={micState}
/>;
```

Override default colours via Tailwind config:

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        'agent-active': '#A0FAFF',
        'agent-idle': '#333333',
      },
    },
  },
};
```

---

## Running Tests

```bash
pnpm --filter agora-agent-uikit test
pnpm --filter agora-agent-uikit test:contracts
pnpm --filter agora-agent-uikit test:coverage
pnpm --filter agora-agent-uikit typecheck
pnpm --filter agora-agent-uikit build
pnpm --filter www build
```

## Demo Site

The repo includes `apps/www`, a static-export Next.js demo and landing site for the UI kit. It is part of the repo’s validation path and should stay aligned with the published package surface.

---

## License

MIT
