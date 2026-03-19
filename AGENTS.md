# AGENTS.md

Guidelines for AI agents working in this repository.

## Repo at a Glance

| Item | Value |
|------|-------|
| Type | Turborepo monorepo |
| Package manager | pnpm@9.0.6 |
| Primary package | `packages/uikit` — the `agora-agent-uikit` React library |
| Playground | `apps/www` — Next.js demo app |
| External workspace | `../agent-client-toolkit-ts/packages/*` (sibling repo, workspace-linked) |

## Before You Start

1. Always work inside `packages/uikit/` for library changes.
2. Run `pnpm test` from `packages/uikit/` to verify nothing is broken. All 245 tests must pass.
3. Run `pnpm typecheck` to catch TypeScript errors before committing.

## Commands

```bash
# From packages/uikit/
pnpm test           # run full test suite
pnpm typecheck      # TypeScript check (no emit)
pnpm build          # build library to dist/

# From repo root
pnpm build          # build all packages via Turborepo
```

## Entry Points — Keep Them Separated

The library exports from four entry points with different peer dependency requirements:

- `agora-agent-uikit` — visual components only, `react` peer dep
- `agora-agent-uikit/session` — requires `agora-agent-client-toolkit[-react]`
- `agora-agent-uikit/rtc` — requires `agora-rtc-react`
- `agora-agent-uikit/thymia` — requires `agora-rtm-sdk`

**Never import toolkit/RTM packages from the base entry point.** This breaks tree-shaking and forces optional dependencies on all consumers.

## Source Layout

```
packages/uikit/src/
├── components/         # All UI components (organised by feature)
│   └── <feature>/__tests__/   # Tests live alongside components
├── hooks/              # React hooks (audio devices, RTM, Thymia, etc.)
├── lib/                # Shared utilities, types, theme
│   └── message-types.ts       # Protocol types — EMessageStatus, IMessageListItem
├── session/            # Toolkit-connected session components + entry barrel
├── shen/               # shen/types.ts — ShenState, ShenMeasurementResults, RTMPublish
├── rtc/                # RTC entry barrel
├── thymia/             # Thymia entry barrel
├── declarations.d.ts   # Module declarations + minimal process.env typing
└── index.ts            # Main entry barrel
```

## Coding Conventions

### TypeScript
- Strict mode is enabled. No `any` without a comment explaining why.
- `moduleResolution: bundler` — use `.ts`/`.tsx` extensions in imports where required.
- No `@types/node`. For `process.env.NODE_ENV` checks use the declaration in `declarations.d.ts`.
- Guard `process` access: `typeof process !== "undefined" && process.env.NODE_ENV !== "production"`
- Guard DOM access: `if (typeof window === "undefined") return`
- Window property access requires double cast: `window as unknown as Record<string, unknown>`

### Styling
- Tailwind CSS only — no inline styles except for dynamic values (e.g. `style={{ width: \`${pct}%\` }}`).
- Use `cn()` from `lib/utils.ts` for all `className` composition.
- Use CVA (`class-variance-authority`) for components with multiple variants.

### Types and modules
- Protocol/transport types belong in `lib/message-types.ts` or a feature `types.ts` file (e.g. `shen/types.ts`), not inside component files.
- UI props (`*Props` interfaces) stay co-located with their component.
- Re-export types from the entry barrel (`index.ts`) — consumers should never need to import from internal paths.

### Dev-only warnings
Always guard with `typeof process !== "undefined"` before checking `NODE_ENV`:
```ts
if (typeof process !== "undefined" && process.env.NODE_ENV !== "production") {
  console.warn("[ComponentName] ...")
}
```

## Testing

- Vitest 2.x + jsdom + `@testing-library/react`
- Tests live in `__tests__/` subdirectories next to the source files they test
- `test/setup.ts` configures jest-dom matchers and mocks `IntersectionObserver`
- All toolkit packages (`agora-agent-client-toolkit-react`) are fully mocked via `vi.mock` in session tests
- `.lottie` imports are mocked in `vitest.config.ts` (returns empty string)
- `TMPDIR=/tmp` is prepended to test scripts — do not remove this

### Test requirements
- New components need tests covering: renders without crashing, key props, user interactions, edge cases.
- New hooks need tests covering: initial state, state transitions, cleanup.
- Any change to `EMessageStatus` values requires updating the sync-guard test in `src/lib/__tests__/message-types.test.ts`.

## Session Components

All components in `src/session/` require `<ConversationalAIProvider>` from `agora-agent-client-toolkit-react`. They emit a `console.warn` in dev when used outside a provider.

`AgentStateVisualizer` maps toolkit `AgentState` values to visualizer states via `AGENT_STATE_MAP`. If you add a new `AgentState` value from the toolkit, add it to the map — the component logs a dev warning for unmapped values and falls back to `"ambient"`.

## Versioning

All packages are versioned together. When bumping the version, update all three `package.json` files:
- `package.json` (root)
- `packages/uikit/package.json`
- `apps/www/package.json`

Current version: **1.0.0**

## CI

The CI pipeline (`.github/workflows/ci.yml`) runs typecheck → test → build on every push and PR. All three must pass before merging. The pipeline also checks out `agent-client-toolkit-ts` as a sibling workspace — see the workflow for the symlink setup required by `pnpm-workspace.yaml`.
