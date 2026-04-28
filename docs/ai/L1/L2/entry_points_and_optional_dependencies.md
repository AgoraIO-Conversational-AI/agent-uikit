# Entry Points And Optional Dependencies

> **When to Read This:** Before changing `exports`, peer dependencies, or any import path that might move code between the base package and optional integrations.

## Goal

The package is intentionally split so consumers can import:

- `agora-agent-uikit` for the main Agora UI surface
- `agora-agent-uikit/rtc` for RTC-aware helpers
- `agora-agent-uikit/session` for toolkit-connected UI
- `agora-agent-uikit/thymia` for RTM/Thymia helpers

This split is the main product boundary in the repo.

This split is about integration intent and runtime dependency boundaries, not about claiming the base package is framework-agnostic or non-Agora.

## Files That Define The Split

| File                             | Role                                          |
| -------------------------------- | --------------------------------------------- |
| `packages/uikit/package.json`    | subpath exports and peer dependency declarations |
| `packages/uikit/tsup.config.ts`  | build entry points and externals              |
| `packages/uikit/src/index.ts`    | base entry exports                            |
| `packages/uikit/src/rtc/index.ts`| RTC-only exports                              |
| `packages/uikit/src/session/index.ts` | toolkit session exports                  |
| `packages/uikit/src/thymia/index.ts`  | Thymia/RTM exports                       |

## Rules To Preserve

1. Base entry should remain broadly usable on its own, but Agora-oriented convenience components are allowed when that improves the product API.
2. Optional peers must remain listed in `peerDependenciesMeta` as optional when appropriate.
3. Any new subpath export must be built by `tsup` and declared in `package.json`.
4. Public APIs should be reachable from an entry-point index file, not by deep import paths.
5. README install guidance and contract tests must stay aligned with any boundary change.

## Existing Patterns

- `useAudioDevices` dynamically imports `agora-rtc-react` to avoid SSR crashes.
- `MicButtonWithVisualizer` lives behind `/rtc` because it imports `agora-rtc-react`.
- Session components calling toolkit hooks live under `src/session/`.
- Generic RTM helpers live in shared hooks; Thymia-specific ones in `src/thymia/`.

## Safe Procedure For Adding A New Optional Export

1. Decide which entry owns the symbol.
2. Implement it in a domain file.
3. Export it from the correct sub-entry `index.ts`.
4. If it introduces a new optional package:
   - Add it to `peerDependencies`.
   - Mark it optional in `peerDependenciesMeta` if that behavior is intended.
   - Add it to `tsup.config.ts` `external`.
5. Build the package and confirm the base import path still works without that peer installed.

## Smells That Usually Mean The Boundary Is Breaking

- A base component starts hard-failing without an optional peer even though the peer-backed feature is not in use.
- `src/index.ts` starts importing from `src/rtc`, `src/session`, or peer SDK packages.
- Tree-shaking claims depend on helpers shared across base and optional entries without review.
- Type-only convenience imports silently become runtime imports after refactors.

## Validation Checklist

```bash
pnpm docs:validate
pnpm --filter agora-agent-uikit test:contracts
pnpm --filter agora-agent-uikit build
pnpm --filter agora-agent-uikit test
```

Also inspect:

- Generated `dist/` entry structure.
- `package.json` `exports`.
- Whether demo examples import the correct path.

## Related Files

- [02_architecture.md](../02_architecture.md)
- [05_workflows.md](../05_workflows.md)
- [06_interfaces.md](../06_interfaces.md)
- [07_gotchas.md](../07_gotchas.md)
