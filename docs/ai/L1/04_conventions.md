# 04 — Conventions

## Language & Style

- **TypeScript strict mode** — `strict: true` in tsconfig
- **React 18+ with JSX transform** — `jsx: react-jsx`, no manual React imports
- **Target ES2020** — modern syntax, no downlevel transforms
- **Module system** — ESNext modules, bundled to CJS + ESM

## Component Patterns

| Pattern              | Convention                                                     |
| -------------------- | -------------------------------------------------------------- |
| Ref forwarding       | all components use `React.forwardRef`                          |
| Props export         | every component co-exports its `*Props` interface              |
| Styling              | Tailwind classes via `cn()` (clsx + tailwind-merge)            |
| Variants             | `class-variance-authority` (CVA) for multi-variant components  |
| className override   | every component accepts `className` for consumer customization |
| Composition          | Radix `Slot` via `asChild` prop on primitives                  |
| Default props        | destructured defaults in function signature, not defaultProps  |
| Side effects         | base components are presentational; effects live in hooks or integration entries |

## Naming

| Entity           | Convention                        | Example                    |
| ---------------- | --------------------------------- | -------------------------- |
| Component file   | kebab-case                        | `mic-button.tsx`           |
| Component export | PascalCase                        | `MicButton`                |
| Props type       | PascalCase + `Props`              | `MicButtonProps`           |
| State/enum type  | PascalCase + `State`/`Status`     | `MicButtonState`           |
| Hook file        | `use-` prefix, kebab-case         | `use-audio-devices.ts`     |
| Hook export      | camelCase, `use` prefix           | `useAudioDevices`          |
| Utility file     | kebab-case                        | `apply-theme.ts`           |
| CSS variables    | `--kebab-case`                    | `--primary`, `--background`|

## Browser/SSR Conventions

- Guard browser-only code with `typeof window === "undefined"` checks.
- Prefer dynamic import for optional browser/runtime SDKs when top-level evaluation would break SSR.
- Example pattern: `useAudioDevices` imports `agora-rtc-react` lazily instead of at module load.
- Interactive modules use `"use client"` when they rely on browser APIs.

## Error Handling

- Components degrade gracefully when optional deps are missing
- `debug.warn()` and `debug.error()` for recoverable issues (never throw in render)
- `debug.log()` for verbose output — only in dev or when `window.__AGORA_UIKIT_DEBUG__` is set
- DOMPurify sanitizes markdown HTML; SSR fallback strips tags with regex

## Testing

- **Framework**: Vitest with jsdom environment
- **Assertions**: `@testing-library/react` for component tests
- **Mocking**: `.lottie` files mocked as empty strings via Vitest plugin; `IntersectionObserver` mocked in `test/setup.ts`
- **Naming**: test files live alongside code in `src/**/__tests__/` directories
- **Coverage**: available via `pnpm run test:coverage`
- Add tests when changing public behavior, export shape, or browser integration logic

## Theming

Runtime: `applyCustomTheme()` sets CSS variables on `:root` from `RemoteThemeConfig`. Build-time: Tailwind config and `className`. See [theming deep dive](deep_dives/theming.md) for full mapping.

## Imports & Exports

- No default exports — always named exports
- Entry point barrel files re-export from component/hook modules
- External deps (`react`, `agora-*`) marked `external` in tsup — not bundled
- Bundled deps (`radix`, `lucide`, `lottie`, etc.) included in dist
- Export public symbols from entry-point `index.ts` files, not by deep import paths

## Dependency Conventions

- Keep React and Agora SDK packages as peers for the publishable package.
- If a new dependency is only needed by the demo app, add it to `apps/www` instead.
- If a dependency supports only one optional integration path, keep it out of the base entry's reachable graph.

## Package-Local Style Note

- The library package uses semicolon-terminated formatting.
- The Next.js app uses a semicolon-free style.
- Preserve the local style of the package you are editing.

## Demo App Conventions

- Demo components use explicit local state so examples stay readable.
- Copyable snippets in `code-examples.ts` are curated documentation, not generated from source.
- Showcase tabs in `apps/www/app/components/page.tsx` are manually curated.
- App-only helpers may duplicate package helpers when that keeps the demo self-contained.

## Change Checklist

When adding or changing a public component:

1. Update the correct entry-point export file.
2. Add or update tests in the same domain.
3. Update demos/examples if the component is user-facing.
4. Check whether optional peer dependency boundaries changed.
5. Re-read `07_gotchas.md` if the change touches build, SSR, or workspace setup.

## Related Deep Dives

- [Entry Points And Optional Dependencies](deep_dives/entry_points_and_optional_dependencies.md)
- [Realtime Integrations](deep_dives/realtime_integrations.md)
