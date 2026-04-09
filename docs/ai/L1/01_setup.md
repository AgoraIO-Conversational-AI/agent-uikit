# 01 — Setup

Purpose: get the monorepo installed, run the library/demo locally, and avoid local setup traps.

## Prerequisites

| Tool   | Version   | Notes                              |
| ------ | --------- | ---------------------------------- |
| Node   | 20.x      | CI baseline; toolkit session deps require 20+ |
| pnpm   | 9.0.6     | declared package manager           |

## Workspace Shape

- `packages/uikit` is the publishable package.
- `apps/www` is the Next.js demo/docs app.

## First-Time Install

```bash
pnpm install
```

## Common Commands

From repo root:

```bash
pnpm build                # turbo build — all workspaces
pnpm dev                  # start dev servers (uikit + www)
pnpm lint                 # eslint across workspaces
pnpm typecheck            # tsc --noEmit across workspaces
```

Targeted commands:

```bash
pnpm --filter agora-agent-uikit build
pnpm --filter agora-agent-uikit build:watch
pnpm --filter agora-agent-uikit typecheck
pnpm --filter agora-agent-uikit test
pnpm --filter agora-agent-uikit test -- --watch     # watch mode
pnpm --filter agora-agent-uikit test -- --coverage   # with coverage
pnpm --filter www dev
pnpm --filter www build
pnpm docs:validate                                    # check AI docs integrity
```

## Peer Dependencies (consumer-side)

| Package                            | Version  | Required for           |
| ---------------------------------- | -------- | ---------------------- |
| `react`                            | ≥ 18.0.0 | always                 |
| `react-dom`                        | ≥ 18.0.0 | always                 |
| `agora-rtc-react`                  | ≥ 2.0.0  | `/rtc` entry only      |
| `agora-rtm-sdk`                    | ≥ 2.0.0  | `/thymia` entry only   |
| `agora-agent-client-toolkit`       | ≥ 1.2.0  | `/session` entry only  |
| `agora-agent-client-toolkit-react` | ≥ 1.2.0  | `/session` entry only  |

## Tailwind Configuration (consumer-side)

Consumers must add the package to their Tailwind `content` paths:

```js
// tailwind.config.js
export default {
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/agora-agent-uikit/dist/**/*.{js,mjs}',
  ],
};
```

## Environment Variables

| Variable                 | Used By    | Purpose                                              |
| ------------------------ | ---------- | ---------------------------------------------------- |
| `NEXT_PUBLIC_BASE_PATH`  | `apps/www` | Sets Next.js `basePath` and asset prefix for static export |
| `NEXT_PUBLIC_APP_URL`    | Turbo      | Included in build env caching                        |

None required for the library itself.

## Build Outputs

- Library output: `packages/uikit/dist/`
- Demo output: `apps/www/.next/` for build, `apps/www/out/` for static export

## Local Development Notes

- For focused UI work, `pnpm --filter www dev` is faster than full `pnpm dev`.
- For package work, use `pnpm --filter agora-agent-uikit build:watch` for bundle rebuilds only.
- Library tests run under Vitest + jsdom. Test scripts force `TMPDIR=/tmp`; preserve that for CI parity.

## Setup Failures To Check First

- Browser permission denial breaks mic/camera demos but not package builds.
- Static export paths break if `NEXT_PUBLIC_BASE_PATH` and asset hosting path disagree.
- `apps/www` build intentionally ignores TypeScript build errors (`ignoreBuildErrors: true`); do not treat a green app build as a type-safety guarantee.

## Do Not

- Add workspace packages without updating `pnpm-workspace.yaml` and CI install steps.
- Remove `TMPDIR=/tmp` from test scripts — tests may write to temp paths that differ across OS.
- Assume `pnpm dev` validates types — it only runs dev servers, not `tsc`.

## Related Deep Dives

- [Entry Points And Optional Dependencies](deep_dives/entry_points_and_optional_dependencies.md)
- [Demo App And CI Workspace](deep_dives/demo_app_and_ci_workspace.md)
