# L2 Deep Dives — Index

Load these files only when L1 lacks sufficient detail for the task at hand.

## Component Deep Dives

| File                                                  | Topic                                         |
| ----------------------------------------------------- | --------------------------------------------- |
| [voice_components.md](voice_components.md)            | Full props, state machines, audio pipeline     |
| [chat_components.md](chat_components.md)              | Conversation system, markdown, streaming       |
| [video_components.md](video_components.md)            | Dual-mode playback, avatars, camera controls   |
| [theming.md](theming.md)                              | CSS variable system, RemoteThemeConfig mapping |
| [session_integration.md](session_integration.md)      | Toolkit hooks, state mapping, transcript flow  |
| [biomarker_components.md](biomarker_components.md)    | Thymia + Shen panels, RTM subscriptions        |

## Cross-Cutting Concerns

| File                                                                          | When to read it                                      | Topic |
| ----------------------------------------------------------------------------- | ---------------------------------------------------- | ----- |
| [entry_points_and_optional_dependencies.md](entry_points_and_optional_dependencies.md) | changing exports, peers, or bundle boundaries | how the package preserves zero-cost optional integrations |
| [realtime_integrations.md](realtime_integrations.md)                          | modifying RTC, session, or RTM-driven behavior       | runtime expectations for Agora and Thymia-linked features |
| [demo_app_and_ci_workspace.md](demo_app_and_ci_workspace.md)                 | install/build differs locally vs CI or deployment    | workspace coupling, static export, validation flow |
