# Demo App And CI Workspace

> **When to Read This:** When installs fail, local behavior differs from CI, or a component change only reproduces in the demo/export app.

## Workspace Coupling

Root workspace includes:

- `apps/*`
- `packages/*`

## CI Sequence

CI installs this repo directly from the lockfile, then runs docs validation → package typecheck → app typecheck → contract tests → package tests → library build → demo build. Package validation happens before the demo app.

## Demo App Behavior

- Framework: Next.js 15 app router.
- Output mode: `export` for static hosting.
- Entry page forwards to the component showcase page.
- Component demos live under `apps/www/app/components/demos/`.
- Snippet text is curated separately in `code-examples.ts`.

## Static Export Constraints

- `NEXT_PUBLIC_BASE_PATH` drives both `basePath` and `assetPrefix`.
- Lottie assets also rely on the computed base path helper.
- A path bug can leave the app apparently fine in dev but broken in exported output.
- `apps/www/out/` is generated export output and should not be committed; Pages deployment should upload it as a workflow artifact.

## Validation Advice

For package-only work:

```bash
pnpm --filter agora-agent-uikit typecheck
pnpm --filter agora-agent-uikit test
pnpm --filter agora-agent-uikit build
```

For demo-affecting work:

```bash
pnpm --filter www typecheck
pnpm --filter www build
```

If the change involves toolkit/session behavior, verify the declared toolkit versions in `packages/uikit/package.json` and confirm `pnpm install` resolved them from the registry.

## Important Caveat

`apps/www` build ignores TypeScript build errors (`ignoreBuildErrors: true`). If you need actual app type safety, run `pnpm --filter www typecheck` explicitly.

## Related Files

- [01_setup.md](../01_setup.md)
- [02_architecture.md](../02_architecture.md)
- [03_code_map.md](../03_code_map.md)
- [07_gotchas.md](../07_gotchas.md)
