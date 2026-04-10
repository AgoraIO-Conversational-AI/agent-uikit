# 03 — Code Map

## Top-Level Tree

```
agent-uikit/
├── .github/workflows/ci.yml      # CI install/build order
├── packages/
│   └── uikit/                     # published package: agora-agent-uikit
│       ├── src/
│       │   ├── index.ts           # base entry — exports all non-RTC/session components
│       │   ├── session/index.ts   # session entry — toolkit-connected components
│       │   ├── rtc/index.ts       # rtc entry — agora-rtc-react components
│       │   ├── thymia/index.ts    # thymia entry — RTM-connected biomarker components
│       │   ├── components/
│       │   │   ├── voice/         # MicButton, AgentVisualizer, AudioVisualizer,
│       │   │   │                  # SimpleVisualizer, LiveWaveform,
│       │   │   │                  # MicButtonWithVisualizer, MicSelector
│       │   │   ├── chat/          # Conversation, Message, Response, ConvoTextStream,
│       │   │   │                  # ConversationContext
│       │   │   ├── video/         # Avatar, AvatarVideoDisplay, LocalVideoPreview,
│       │   │   │                  # CameraSelector
│       │   │   ├── settings/      # AgentSettings, SettingsDialog
│       │   │   ├── layout/        # VideoGrid, VideoGridWithControls, MobileTabs
│       │   │   ├── primitives/    # Button, IconButton, Card, Chip, ValuePicker,
│       │   │   │                  # Dialog, DropdownMenu, Popover, Command
│       │   │   ├── session/       # SessionPanel (debug/config display)
│       │   │   ├── branding/      # AgoraLogo
│       │   │   ├── shen/          # ShenPanel (camera vitals)
│       │   │   └── thymia/        # ThymiaPanel (voice biomarkers)
│       │   ├── session/           # SessionTranscript, AgentStateVisualizer,
│       │   │                      # SessionChatInput, SessionErrorDisplay
│       │   ├── hooks/             # useVideoPlayback, useAudioDevices, useIsMobile,
│       │   │                      # useRTMSubscription, useThymia
│       │   ├── assets/lottie/     # bundled animation assets
│       │   └── lib/               # cn(), renderMarkdownToHtml, decodeStreamMessage,
│       │       ├── utils.ts       # debug, message-types, transcriptToMessageList
│       │       ├── debug.ts
│       │       ├── message-types.ts
│       │       └── theme/         # applyCustomTheme, getCurrentTheme, hexToRgbString
│       │           └── apply-theme.ts
│       ├── test/                  # Vitest setup (setup.ts); tests live in src/**/__tests__/
│       ├── docs/                  # components.md — full props reference
│       ├── tsup.config.ts         # build config: 4 entry points, CJS+ESM
│       ├── vitest.config.ts       # jsdom env, .lottie mock plugin
│       └── package.json           # agora-agent-uikit v1.0.0
├── apps/
│   └── www/                       # Next.js demo/docs site
│       ├── app/page.tsx           # forwards to component showcase
│       ├── app/components/
│       │   ├── page.tsx           # main tabbed demo page
│       │   ├── demos/             # per-component demo implementations
│       │   └── code-examples.ts   # copyable snippets used by the site
│       ├── lib/basepath.ts        # static export base-path helpers
│       ├── lib/theme/apply-theme.ts  # app-local theme helper copy
│       └── next.config.mjs        # static export config, base-path wiring
├── turbo.json                     # Turbo task definitions
├── pnpm-workspace.yaml            # workspace: packages/*, apps/*
└── package.json                   # monorepo root, private
```

## Module Responsibilities

| Module                | Responsibility                                              |
| --------------------- | ----------------------------------------------------------- |
| `components/voice/`   | Audio visualization, microphone controls, agent state       |
| `components/chat/`    | Message display, conversation containers, streaming chat    |
| `components/video/`   | Camera preview, remote video, avatars, camera selection     |
| `components/settings/`| Pre-session config UI (language, AIVAD, prompt, mic)        |
| `components/layout/`  | Desktop grid layout, mobile tab switching                   |
| `components/primitives/`| Reusable UI atoms: buttons, cards, dropdowns, selects     |
| `session/`            | Components wired to `ConversationalAIProvider` hooks        |
| `hooks/`              | Shared hooks: video playback, device enumeration, mobile    |
| `lib/`                | Utilities: class merging, markdown, message types, theming  |
| `apps/www/`           | Component demos, code examples, Next.js documentation site  |

## Key Files

| File                             | Purpose                                          |
| -------------------------------- | ------------------------------------------------ |
| `src/index.ts`                   | barrel export for base entry                     |
| `src/session/index.ts`           | barrel export for session entry                  |
| `src/rtc/index.ts`               | barrel export for rtc entry                      |
| `src/thymia/index.ts`            | barrel export for thymia entry                   |
| `src/lib/utils.ts`               | `cn()`, markdown rendering, stream decode        |
| `src/lib/message-types.ts`       | `EMessageStatus`, `IMessageListItem`, transcript bridge |
| `tsup.config.ts`                 | multi-entry build with Lottie data URLs          |
| `package.json` (root)            | orchestration commands, workspace config         |
| `packages/uikit/package.json`    | publish contract, exports, peer boundaries       |
| `packages/uikit/vitest.config.ts`| test environment and asset mocking               |
| `apps/www/next.config.mjs`       | static export config and base-path wiring        |
| `.github/workflows/ci.yml`       | CI install/build order                            |

## Fast Navigation Hints

- Public package API starts in `packages/uikit/src/index.ts` and sub-entry `index.ts` files.
- Demo behavior starts in `apps/www/app/components/page.tsx`.
- If a change touches optional integrations, check both package exports and peer dependency metadata.
- If a change touches theming, check both `packages/uikit/src/lib/theme/apply-theme.ts` and the app copy in `apps/www/lib/theme/apply-theme.ts`.

## Related Deep Dives

- [Entry Points And Optional Dependencies](deep_dives/entry_points_and_optional_dependencies.md)
- [Demo App And CI Workspace](deep_dives/demo_app_and_ci_workspace.md)
