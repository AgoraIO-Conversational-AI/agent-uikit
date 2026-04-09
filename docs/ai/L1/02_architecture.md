# 02 — Architecture

Purpose: explain how the monorepo is split between the publishable UI kit, optional runtime integrations, and the demo/export app.

## High-Level Design

Monorepo with one published library (`packages/uikit`) and one demo site (`apps/www`).

The library uses a **multi-entry-point architecture** to enable zero-cost tree-shaking of optional Agora SDK dependencies. Consumers only pay for the entry points they import.

## Entry Points

```
agora-agent-uikit            ← base: main UI surface, Agora-first but selectively usable
agora-agent-uikit/rtc        ← requires agora-rtc-react at runtime
agora-agent-uikit/session    ← requires agora-agent-client-toolkit-react at runtime
agora-agent-uikit/thymia     ← requires agora-rtm-sdk at runtime
```

## Dependency Hierarchy

```
┌─────────────────────────────────────────────────┐
│  Base entry (agora-agent-uikit)                 │
│  ┌───────────────────────────────────────────┐  │
│  │ Voice │ Chat │ Video │ Layout │ Primitives│  │
│  │ Settings │ Branding │ Shen │ Utilities    │  │
│  └───────────────────────────────────────────┘  │
│  Bundled deps: Radix UI, Lucide, Lottie,        │
│  CVA, clsx, tailwind-merge, cmdk, DOMPurify     │
└──────────────────┬──────────────────────────────┘
                   │ imports from base
     ┌─────────────┼──────────────┐
     ▼             ▼              ▼
┌─────────┐  ┌──────────┐  ┌──────────┐
│ /rtc    │  │ /session │  │ /thymia  │
│         │  │          │  │          │
│ agora-  │  │ toolkit  │  │ agora-   │
│ rtc-    │  │ -react   │  │ rtm-sdk  │
│ react   │  │          │  │          │
└─────────┘  └──────────┘  └──────────┘
```

## Build Pipeline

1. **tsup** bundles each entry point into CJS + ESM with `.d.ts` and sourcemaps
2. `.lottie` files are inlined as data URLs (no CDN dependency)
3. `"use client"` banner is injected for Next.js RSC compatibility
4. **Turbo** orchestrates workspace builds; `packages/uikit` builds before `apps/www`

## Major Subsystems

| Subsystem       | Responsibility                                           |
| --------------- | -------------------------------------------------------- |
| Voice           | Visualizers, mic button, live waveform, RTC mic controls |
| Chat            | Transcript and streamed message rendering                |
| Video           | Avatar/video tiles and camera selection UI               |
| Layout          | Video grid and mobile tabs                               |
| Settings        | Settings dialog, agent settings, session metadata        |
| Session entry   | Toolkit-bound transcript/input/state components          |
| Thymia entry    | RTM subscription and biomarker display                   |
| Theme/utils     | Tailwind class merging, CSS variable theming, markdown   |

## Component & State Patterns

- `forwardRef` + co-exported `*Props` interfaces; Tailwind via `cn()`; CVA for variants; `className` for overrides.
- No global state library. Session components delegate to toolkit hooks. Theme state lives in CSS variables on `:root`.
- See [04_conventions.md](04_conventions.md) for full style and naming rules.

## Data Flow (Session Mode)

```
ConversationalAIProvider (toolkit)
  ├─ useAgentState()     → AgentStateVisualizer
  ├─ useTranscript()     → SessionTranscript → Conversation + Message
  ├─ useAgentError()     → SessionErrorDisplay
  └─ sendMessage() /     → SessionChatInput
     interrupt()
```

## Build And Validation Flow (CI)

1. CI checks out this repo.
2. `pnpm install` resolves toolkit dependencies from the registry.
3. Library typecheck, tests, and bundle build run.
4. Demo app static build runs last.

## Architecture Constraints

- Keep direct RTC hook usage concentrated in `/rtc` where practical, but prefer product clarity over artificial purity rules.
- Keep public exports centralized in entry-point index files.
- Preserve static-export compatibility in `apps/www`.
- Treat `packages/uikit/src/lib` as shared infrastructure, not a dumping ground for app-only code.
- Base components stay presentation-oriented; side effects move into hooks or integration entries.

## Do Not

- Import from `src/rtc`, `src/session`, or `src/thymia` inside `src/index.ts`.
- Add a new subpath export without a matching `tsup.config.ts` entry and `package.json` export declaration.
- Move theme mapping changes to the package without mirroring them in `apps/www/lib/theme/apply-theme.ts`.

## Related Deep Dives

- [Entry Points And Optional Dependencies](deep_dives/entry_points_and_optional_dependencies.md)
- [Realtime Integrations](deep_dives/realtime_integrations.md)
- [Demo App And CI Workspace](deep_dives/demo_app_and_ci_workspace.md)
