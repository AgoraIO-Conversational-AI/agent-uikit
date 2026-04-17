# 02 — Architecture

> How the monorepo is split between the publishable UI kit, optional runtime integrations, and the demo/export app.

## Normative Status

This file is normative for package positioning and entrypoint intent. If code, README guidance, or examples disagree with this file, update them together in the same change.

## High-Level Design

Monorepo with one published library (`packages/uikit`) and one demo site (`apps/www`).

The library uses a **multi-entry-point architecture** to enable zero-cost tree-shaking of optional Agora SDK dependencies. Consumers only pay for the entry points they import.

This is an **Agora-first UI kit**. The base package is the main product surface. Subpath exports exist to group deeper integrations by runtime dependency and workflow, not to define a separate non-Agora product.

## Entry Points

```
agora-agent-uikit            ← base: main UI surface, Agora-first but selectively usable
agora-agent-uikit/rtc        ← requires agora-rtc-react at runtime
agora-agent-uikit/session    ← requires agora-agent-client-toolkit-react at runtime
agora-agent-uikit/thymia     ← requires agora-rtm-sdk at runtime
```

## Contract Summary

- `agora-agent-uikit` is the main entry for voice, chat, video, settings, layout, branding, and shared biomarker UI.
- `agora-agent-uikit/rtc` is for components and hooks that call Agora RTC bindings directly.
- `agora-agent-uikit/session` is for toolkit-connected session UI.
- `agora-agent-uikit/thymia` is for RTM-backed Thymia biomarker helpers.
- Base components may still be Agora-oriented when that improves the product API, but they should keep direct side effects isolated to hooks or feature-specific paths.

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
- Keep README install guidance, package metadata, and `docs/ai/L1/06_interfaces.md` aligned when entrypoint behavior changes.

## Do Not

- Import from `src/rtc`, `src/session`, or `src/thymia` inside `src/index.ts`.
- Add a new subpath export without a matching `tsup.config.ts` entry and `package.json` export declaration.
- Move theme mapping changes to the package without mirroring them in `apps/www/lib/theme/apply-theme.ts`.

## Related Deep Dives

- [Entry Points And Optional Dependencies](L2/entry_points_and_optional_dependencies.md)
- [Realtime Integrations](L2/realtime_integrations.md)
- [Demo App And CI Workspace](L2/demo_app_and_ci_workspace.md)
