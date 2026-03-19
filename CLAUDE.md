# CLAUDE.md

This file gives Claude Code the context needed to work effectively in this repository.

## Repo Overview

Turborepo monorepo containing the `agora-agent-uikit` React component library and a Next.js playground app.

```
agora-agent-uikit/
├── packages/uikit/        # The published library (agora-agent-uikit)
├── apps/www/              # Next.js playground / demo app
└── ../agent-client-toolkit-ts/  # Sibling repo, workspace-linked
```

Package manager: **pnpm@9.0.6**. Always use `pnpm`, never `npm` or `yarn`.

## Key Commands

All run from `packages/uikit/` unless noted:

```bash
# Test (TMPDIR override required — macOS /tmp symlinks to /private/tmp; Linux uses /tmp directly)
pnpm test                  # run once
pnpm test:watch            # watch mode
pnpm test:coverage         # with coverage

# Typecheck
pnpm typecheck             # tsc --noEmit

# Build library
pnpm build                 # tsup — outputs to dist/

# From repo root (Turborepo)
pnpm build                 # build all packages in dependency order
pnpm dev                   # dev mode for all packages
```

Run tests before and after any change. All 245 tests must pass.

## Architecture

### Entry Points

The library has four separate entry points to avoid forcing optional SDK dependencies on consumers:

| Import | Peer Deps Required | Contents |
|--------|-------------------|----------|
| `agora-agent-uikit` | `react` only | All visual components, no SDK |
| `agora-agent-uikit/session` | `agora-agent-client-toolkit[-react]` | Toolkit-connected session components |
| `agora-agent-uikit/rtc` | `agora-rtc-react` | RTC-connected mic/camera components |
| `agora-agent-uikit/thymia` | `agora-rtm-sdk` | RTM/biometric components |

**Do not** import toolkit or RTM packages from the base entry. Keep entry points cleanly separated.

### Source Structure

```
packages/uikit/src/
├── components/
│   ├── branding/       # AgoraLogo
│   ├── chat/           # Conversation, Message, ConvoTextStream, Response
│   ├── layout/         # VideoGrid, MobileTabs
│   ├── primitives/     # Button, IconButton, Card, Chip, ValuePicker, etc.
│   ├── settings/       # SettingsDialog, AgentSettings
│   ├── shen/           # ShenPanel (camera vitals, no SDK dep)
│   ├── thymia/         # ThymiaPanel
│   └── voice/          # MicButton, AgentVisualizer, AudioVisualizer, etc.
├── hooks/              # use-audio-devices, use-is-mobile, use-rtm-subscription, use-thymia
├── lib/                # utils, message-types, debug, theme/apply-theme
├── rtc/                # rtc entry point
├── session/            # session entry point + SessionTranscript, AgentStateVisualizer, etc.
├── shen/               # shen/types.ts — ShenState, ShenMeasurementResults, RTMPublish
├── thymia/             # thymia entry point
├── declarations.d.ts   # .lottie module + minimal process.env declaration
└── index.ts            # main entry point barrel
```

### Toolkit Integration

The `session/` components wrap hooks from `agora-agent-client-toolkit-react`:
- `SessionTranscript` → `useTranscript()`
- `AgentStateVisualizer` → `useAgentState()`
- `SessionChatInput` → `useConversationalAIContext()`
- `SessionErrorDisplay` → `useAgentError()`

All session components must be inside `<ConversationalAIProvider>`. They emit `console.warn` in dev if used outside one.

`AgentStateVisualizer` maps 5 toolkit states (`idle|listening|thinking|speaking|silent`) to 7 visualizer states. Unknown states log a dev warning and fall back to `"ambient"`.

`EMessageStatus` in `lib/message-types.ts` intentionally mirrors `TurnStatus` from the toolkit (values 0/1/2). A sync-guard test in `src/lib/__tests__/message-types.test.ts` will catch any drift.

## Testing

- Framework: **Vitest 2.x** with **jsdom** environment
- Component tests use `@testing-library/react`
- Setup: `test/setup.ts` — imports jest-dom matchers, mocks `IntersectionObserver`
- `.lottie` files are mocked via a Vitest plugin (returns empty string)
- `TMPDIR=/tmp` is set in all test scripts — required because vitest's jsdom proxy tries to `mkdir` in TMPDIR

**Mocking conventions:**
- `agora-agent-client-toolkit-react` is always fully mocked in session tests (`vi.mock`)
- All toolkit hooks return predictable stub values

## TypeScript

- Strict mode, `moduleResolution: bundler`, `lib: [ES2020, DOM, DOM.Iterable]`
- No `@types/node` — use the minimal `process` declaration in `declarations.d.ts` for `NODE_ENV` checks
- Always use `window as unknown as Record<string, unknown>` for window property access (strict overlap rules)
- Test files are excluded from `tsc` (`tsconfig.json` exclude list)

## Styling

- **Tailwind CSS** for all styling — no CSS modules or styled-components
- **Radix UI** primitives as the base for interactive components
- **CVA** (`class-variance-authority`) for component variants
- `cn()` utility from `lib/utils.ts` for all className composition

## Common Patterns

**Process/env checks** — always guard with `typeof process !== "undefined"`:
```ts
if (typeof process !== "undefined" && process.env.NODE_ENV !== "production") {
  console.warn(...)
}
```

**SSR guards** — functions accessing `window` or `document` must guard:
```ts
if (typeof window === "undefined") return
```

**Type module boundary** — protocol/transport types live in `lib/` or feature `types.ts` files, not inside component files. UI props stay with their component.

**Shen types** — `ShenState`, `ShenMeasurementResults`, `RTMPublish` live in `src/shen/types.ts`.

## CI

`.github/workflows/ci.yml` runs on every push and PR:
1. Checks out this repo + `agent-client-toolkit-ts` (inside workspace, symlinked to `../`)
2. Builds the toolkit packages
3. Runs `typecheck`, `test`, `build` on uikit
4. Builds the playground app

The `pnpm/action-setup` action reads the `packageManager` field from `package.json` — do not add a `version:` key to the workflow step.

## Versioning

All packages in this monorepo are versioned together. Current version: **1.0.0**. Keep `package.json` version fields in sync across `package.json` (root), `packages/uikit/package.json`, and `apps/www/package.json`.
