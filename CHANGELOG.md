# Changelog

All notable changes to `agora-agent-uikit` will be documented in this file.

## 1.1.0 - 2026-04-10

### Added

- contract tests for entrypoint boundaries and package export surfaces
- stronger shared test environment mocks for browser, media, canvas, and Lottie behavior
- a standalone package README for npm consumers under `packages/uikit/README.md`
- GitHub Pages deployment workflow for the demo site
- npm publish workflow with tag validation, provenance publishing, and GitHub release creation

### Changed

- updated toolkit compatibility to `agora-agent-client-toolkit` `^1.2.0`
- removed sibling-workspace assumptions so the repo installs and builds standalone
- clarified the Agora-first package contract across the root README, package docs, and AI docs
- documented `AgentVisualizer` partial `lottiePaths` overrides for branded animations
- documented the `AgentSettings` microphone-selection dependency on `agora-rtc-react`
- improved CI with frozen-lockfile installs, contract tests, docs validation, demo app typecheck, and stricter build ordering
- converted the demo export flow to generated `apps/www/out` artifacts instead of tracked output
- aligned the demo app examples with the current component APIs

### Fixed

- `SessionChatInput` provider/override behavior and related test coverage gaps
- `AgentSettings` unnecessary microphone enumeration when mic controls are not enabled
- dialog accessibility gaps in `SettingsDialog`
- stale demo imports and type drift in `apps/www`
- package metadata links so npm and GitHub targets point to the canonical repository
