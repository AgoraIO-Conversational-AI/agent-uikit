# agora-agent-uikit

React component library for building conversational, voice, video, and biomarker AI interfaces with Agora.

## Install

```bash
npm install agora-agent-uikit
```

`react` and `react-dom` are peer dependencies and should already exist in your app.

## Entrypoints

| Import path | Use when | Extra packages |
| --- | --- | --- |
| `agora-agent-uikit` | main UI components, chat, video, settings, branding, primitives | none by default; `AgentSettings` microphone selection also needs `agora-rtc-react` |
| `agora-agent-uikit/rtc` | components and hooks that call Agora RTC directly | `agora-rtc-react` |
| `agora-agent-uikit/session` | UI that connects directly to `ConversationalAIProvider` | `agora-agent-client-toolkit`, `agora-agent-client-toolkit-react` |
| `agora-agent-uikit/thymia` | RTM-backed Thymia biomarker UI and helpers | `agora-rtm-sdk` |

## Optional Peer Notes

- `agora-rtc-react` is required for the `/rtc` entrypoint.
- `agora-rtc-react` is also required if you enable the `AgentSettings` microphone picker by passing `onMicChange`.
- Base-entry usage without microphone selection does not require `agora-rtc-react`.
- Session components require the toolkit packages.
- Thymia helpers require `agora-rtm-sdk`.

## More Docs

- GitHub repo: https://github.com/AgoraIO-Conversational-AI/agent-uikit
- Root README: https://github.com/AgoraIO-Conversational-AI/agent-uikit#readme
- Component reference: https://github.com/AgoraIO-Conversational-AI/agent-uikit/blob/main/packages/uikit/docs/components.md
