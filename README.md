# agora-agent-uikit

React component library for building voice and video AI interfaces with Agora.

---

## Quick Start

### 1. Install

```bash
npm install agora-agent-uikit
# or
pnpm add agora-agent-uikit
# or
yarn add agora-agent-uikit
```

### 2. Configure Tailwind

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

### 3. Basic voice UI

No toolkit required — works with any Agora RTC integration:

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

### 4. RTC-connected components (requires agora-rtc-react)

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

Consumers that don't import from `agora-agent-uikit/rtc` get zero RTC code in their bundle.

### 5. Session-connected UI (requires toolkit)

Install the optional toolkit packages:

```bash
npm install agora-agent-client-toolkit agora-agent-client-toolkit-react
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

Consumers that only import from `agora-agent-uikit` get zero toolkit code in their bundle — the `/session` entry and its toolkit dependencies are fully tree-shaken.

---

## Architecture

The library has three entry points:

| Entry   | Import                      | Extra install needed                                              |
| ------- | --------------------------- | ----------------------------------------------------------------- |
| Base    | `agora-agent-uikit`         | None                                                              |
| RTC     | `agora-agent-uikit/rtc`     | `agora-rtc-react`                                                 |
| Session | `agora-agent-uikit/session` | `agora-agent-client-toolkit` + `agora-agent-client-toolkit-react` |

The base entry contains all visual components: voice, chat, video, layout, settings, and primitives. These have no dependency on `agora-rtc-react` or the conversational AI toolkit.

The RTC entry adds components that call Agora RTC hooks at runtime (`MicButtonWithVisualizer`, `MicSelector`, `useAudioDevices`). These require `agora-rtc-react` to be installed.

The session entry adds three components that connect directly to `ConversationalAIProvider`. They call toolkit hooks internally and require both toolkit packages.

---

## Peer Dependencies

All peer dependencies are required unless marked optional.

| Package                            | Version  | Notes                         |
| ---------------------------------- | -------- | ----------------------------- |
| `react`                            | ≥ 18.0.0 | Required                      |
| `react-dom`                        | ≥ 18.0.0 | Required                      |
| `agora-rtc-react`                  | ≥ 2.0.0  | Optional — rtc entry only     |
| `agora-agent-client-toolkit`       | ≥ 0.1.0  | Optional — session entry only |
| `agora-agent-client-toolkit-react` | ≥ 0.1.0  | Optional — session entry only |

Everything else (`lucide-react`, `@radix-ui/*`, `@lottiefiles/dotlottie-react`, `cmdk`, `clsx`, `tailwind-merge`, `class-variance-authority`) is bundled as a regular dependency — no separate install needed.

---

## Component Reference

Full props, usage examples, and notes for every component are in **[docs/components.md](docs/components.md)**.

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
npm test              # run all tests once
npm run test:watch    # watch mode
npm run test:ui       # Vitest browser UI
npm run test:coverage # coverage report
npm run typecheck     # TypeScript type check (no emit)
```

---

## License

MIT
