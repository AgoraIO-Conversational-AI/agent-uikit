# L0 — agora-agent-uikit

| Field             | Value                                                              |
| ----------------- | ------------------------------------------------------------------ |
| **Name**          | agora-agent-uikit                                                  |
| **Purpose**       | React component library for voice and video AI interfaces on Agora |
| **Type**          | SDK / UI Library                                                   |
| **Language**      | TypeScript, React 18+                                              |
| **Deploy Target** | npm package (`agora-agent-uikit`) + static Next.js demo/export     |
| **Bundler**       | tsup (esbuild)                                                     |
| **Monorepo**      | pnpm workspaces + Turborepo                                        |
| **Owner**         | AgoraIO Conversational AI                                          |
| **License**       | MIT                                                                |
| **Repository**    | `github.com/AgoraIO-Conversational-AI/agent-uikit`                |
| **last_reviewed** | 2026-04-07                                                         |

## Naming Note

- Git repo: `AgoraIO-Conversational-AI/agent-uikit`
- Published package: `agora-agent-uikit`
- `packages/uikit/package.json` should point at the canonical repo: `AgoraIO-Conversational-AI/agent-uikit`.

## L1 Index

| #  | File                                       | Topic                          | Audience         |
| -- | ------------------------------------------ | ------------------------------ | ---------------- |
| 01 | [Setup](L1/01_setup.md)                   | Environment, deps, commands    | Use & Maintain   |
| 02 | [Architecture](L1/02_architecture.md)     | System design, entry points    | Maintain         |
| 03 | [Code Map](L1/03_code_map.md)             | Directory structure, modules   | Maintain         |
| 04 | [Conventions](L1/04_conventions.md)       | Patterns, naming, style        | Maintain         |
| 05 | [Workflows](L1/05_workflows.md)           | Common dev tasks               | Use & Maintain   |
| 06 | [Interfaces](L1/06_interfaces.md)         | API contracts, prop types      | Use & Maintain   |
| 07 | [Gotchas](L1/07_gotchas.md)               | Pitfalls, tribal knowledge     | Maintain         |
| 08 | [Security](L1/08_security.md)             | Auth, trust, sanitization      | Maintain         |
