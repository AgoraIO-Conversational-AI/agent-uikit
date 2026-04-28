# 08 — Security

> Trust model, sanitization guarantees, caller responsibilities, and review triggers for security-affecting changes.

## Trust Model

This is a **client-side UI library**. It renders content provided by the consuming application and Agora's backend services. It does not manage authentication tokens, API keys, or server-side secrets. Most security boundaries are at integration points with host applications and peer SDKs.

## Trusted Vs Untrusted Inputs

| Input source                | Trust level      | Current handling                                 |
| --------------------------- | ---------------- | ------------------------------------------------ |
| Transcript/stream text (RTM)| untrusted        | markdown → DOMPurify sanitization in browser     |
| RTM messages                | untrusted        | JSON parse with `object` field filter; invalid messages ignored/logged |
| Theme config (API response) | semi-trusted     | hex values set as CSS variables; host app controls source |
| Session payload in UI       | sensitive        | caller expected to redact secrets before passing |
| Browser media devices       | permission-gated | access via browser permission model and SDK APIs |
| User chat input             | N/A              | sent via toolkit SDK, not rendered as HTML       |

## XSS Protection

- All markdown rendered by `renderMarkdownToHtml()` is sanitized with **DOMPurify** before insertion via `dangerouslySetInnerHTML`
- SSR fallback strips HTML tags with a regex when DOMPurify is unavailable
- `ConvoTextStream` uses `dangerouslySetInnerHTML` — always through the sanitization pipeline
- Links rendered from markdown use `target="_blank"` and `rel="noopener noreferrer"`

## Caller Responsibilities

- Do not pass API keys or raw secret-bearing payloads into `SessionPanel`; the component comment explicitly expects redacted payloads.
- Do not embed private credentials into the static-export demo app.
- Do not assume package components enforce authorization; that belongs in the host app and Agora services.

## Dependencies with DOM Access

| Package                       | DOM Usage                              |
| ----------------------------- | -------------------------------------- |
| `@lottiefiles/dotlottie-react`| canvas rendering for animations        |
| `@radix-ui/*`                 | portal rendering, focus traps, popover |
| `dompurify`                   | HTML sanitization                      |
| Web Audio API                 | `AudioContext` for frequency analysis  |
| `getUserMedia`                | microphone access (LiveWaveform)       |

## Secret Management

- No secrets, API keys, or tokens are stored or managed by this library
- Agora tokens are handled by `agora-agent-client-toolkit` (a peer dep), not by the UI kit
- The demo site (`apps/www`) may use `NEXT_PUBLIC_*` env vars — these are public by design

## Permissions

| Browser Permission | Requested by                          | Trigger                |
| ------------------ | ------------------------------------- | ---------------------- |
| Microphone         | `LiveWaveform`, `useAudioDevices`     | user interaction/mount |
| Camera             | consumer code                         | not requested by lib   |

## Logging And Debugging

- Debug helpers exist in the package and may log runtime conditions.
- Do not add raw payload logging for session joins, tokens, or unredacted RTM data.
- Favor structural diagnostics over full message/body dumps.

## Content Safety Notes

- Transcript markdown support is intentionally narrow; avoid extending it casually into full HTML or arbitrary markdown plugins.
- Any richer rendering feature should be reviewed as a security change, not just a UI enhancement.
- RTM payload display components should continue treating missing or malformed fields as untrusted input.

## Supply Chain

- All bundled dependencies are from well-maintained, widely-used packages
- `dompurify` is the only security-critical bundled dep — keep it updated
- Peer deps (`agora-*`) are external and managed by the consumer
- Changes to optional peer versions can affect trust boundaries even if the UI code is unchanged

## Known Limits

- No CSP, server-side auth, or secret storage policy is defined in this repo.
- Theme values are not validated beyond basic string handling.
- RTM message shape validation is partial and purpose-specific, not exhaustive.

## Review Triggers

Re-check this file when a change:

- Adds a new external dependency
- Expands markdown or rich-text rendering
- Exposes session metadata in a new component
- Adds new browser storage, network, or credential handling logic

## Related Deep Dives

- [Realtime Integrations](L2/realtime_integrations.md)
- [Entry Points And Optional Dependencies](L2/entry_points_and_optional_dependencies.md)
- [Chat Components](L2/chat_components.md)
- [Biomarker Components](L2/biomarker_components.md)
- [Theming](L2/theming.md)
