# 05 — Workflows

Purpose: provide the shortest reliable paths for common maintenance tasks in this repo.

## Add A New Base Component

1. Create `packages/uikit/src/components/<category>/<component-name>.tsx`.
2. Export component + props type as named exports.
3. Re-export from `packages/uikit/src/index.ts`.
4. Add tests in `packages/uikit/src/components/<category>/__tests__/<component-name>.test.tsx`.
5. Add a demo in `apps/www/app/components/demos/` if the component should be showcased.
6. Add or update a snippet in `apps/www/app/components/code-examples.ts`.
7. Validate:

```bash
pnpm --filter agora-agent-uikit test
pnpm --filter agora-agent-uikit build
pnpm --filter www build
```

## Add A Session/RTC/Thymia Component

1. Create component in the appropriate `src/` subdirectory (`session/`, `rtc/`, or `thymia/`).
2. Re-export from the matching entry barrel (`src/session/index.ts`, `src/rtc/index.ts`, or `src/thymia/index.ts`).
3. Do **not** re-export from `src/index.ts` — this keeps optional deps tree-shaken.
4. Mark new peer deps as `external` in `tsup.config.ts` if not already listed.
5. Update `packages/uikit/package.json` peers/exports only if the surface changes.
6. Confirm base consumers can still import `agora-agent-uikit` without optional packages installed.

## Modify the Theme System

1. Add new field to `RemoteThemeConfig` in `src/lib/theme/apply-theme.ts`.
2. Add CSS variable mapping to `CSS_VAR_MAP`.
3. Update `applyCustomTheme()` if hex-to-RGB conversion is needed.
4. Update `getCurrentTheme()` to read the new variable.
5. Mirror changes in `apps/www/lib/theme/apply-theme.ts` if needed.
6. Verify existing components still consume the expected CSS variables.

## Add a Lottie Animation

1. Place `.lottie` file in the component directory.
2. Import directly — tsup inlines as data URL via esbuild loader.
3. The Vitest plugin mocks `.lottie` imports as empty strings for tests.

## Update The Demo Site

1. Add or edit the demo component in `apps/www/app/components/demos/`.
2. Wire it into the tabs in `apps/www/app/components/page.tsx`.
3. Update the copyable snippet source in `code-examples.ts`.
4. Run `pnpm --filter www build` to confirm static export output.

## Run Tests

```bash
pnpm --filter agora-agent-uikit test              # single run
pnpm --filter agora-agent-uikit test -- --watch    # watch mode
pnpm --filter agora-agent-uikit test -- --coverage # with coverage
pnpm --filter agora-agent-uikit typecheck          # TypeScript only
```

## Build & Verify

```bash
pnpm build               # turbo builds all workspaces
ls packages/uikit/dist/  # expect index, session/, rtc/, thymia/ — each with .js, .mjs, .d.ts
```

## Validate A Typical PR

```bash
pnpm docs:validate
pnpm --filter agora-agent-uikit typecheck
pnpm --filter agora-agent-uikit test:contracts
pnpm --filter agora-agent-uikit test
pnpm --filter www typecheck
pnpm --filter agora-agent-uikit build
pnpm --filter www build
```

Also check:

- Subpath exports still resolve as expected.
- Optional peers are still optional.
- No new browser-only code is evaluated on the server.
- `pnpm docs:validate` still passes.

## Public Contract Checklist

Use this when a change affects exports, entrypoints, peer deps, install instructions, or README examples.

1. Update the correct entry barrel.
2. Update `packages/uikit/package.json` exports or peer deps if the package surface changed.
3. Update README entrypoint guidance if the consumer decision path changed.
4. Update `docs/ai/L1/02_architecture.md`, `docs/ai/L1/06_interfaces.md`, and `docs/ai/L1/07_gotchas.md` when the package contract changed.
5. Add or update contract tests in `packages/uikit/src/__tests__/`.
6. Rebuild the demo app if the user-facing surface changed.

## Release Readiness Checklist

Before publishing or merging a package-surface change:

1. Verify install examples still match actual peer dependencies.
2. Verify badges, metadata links, and repo references still point at canonical public targets.
3. Verify contract tests cover the affected entrypoint behavior.
4. Verify `apps/www` still reflects the current component/API surface.
5. Verify `pnpm docs:validate` passes if any `docs/ai` file changed.

## Update Dependencies Safely

1. Change the version in the correct package manifest.
2. Confirm it belongs in package deps, package peers, or app-only deps.
3. Run library build/tests and demo build.
4. If the dependency affects docs or commands, run `pnpm docs:validate`.

## Run the Demo Site

```bash
pnpm dev                 # full workspace dev servers
pnpm --filter www dev    # demo site only (faster)
```

## If You Change Workspace Or CI Setup

1. Re-read `pnpm-workspace.yaml`.
2. Re-read `.github/workflows/ci.yml`.
3. Re-read `.github/workflows/deploy-pages.yml` if the change affects demo deployment.
4. Confirm external toolkit dependencies still resolve from the registry.
5. Confirm Turbo outputs still match the actual build products.
6. Confirm `apps/www/out/` remains generated output rather than committed source.

## Related Deep Dives

- [Entry Points And Optional Dependencies](deep_dives/entry_points_and_optional_dependencies.md)
- [Demo App And CI Workspace](deep_dives/demo_app_and_ci_workspace.md)
- [Realtime Integrations](deep_dives/realtime_integrations.md)
