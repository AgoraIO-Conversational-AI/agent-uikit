# Realtime Integrations

When to read this: when changing Agora RTC, toolkit session, RTM message handling, or any component that crosses from pure UI into live runtime state.

## Integration Zones

| Zone         | Entry Path | Main Files                                                              |
| ------------ | ---------- | ----------------------------------------------------------------------- |
| RTC controls | `/rtc`     | `src/components/voice/mic-button-with-visualizer.tsx`, `src/hooks/use-audio-devices.ts` |
| Session UI   | `/session` | `src/session/*.tsx`                                                     |
| RTM/Thymia   | `/thymia`  | `src/hooks/use-rtm-subscription.ts`, `src/hooks/use-thymia.ts`, `src/components/thymia/thymia-panel.tsx` |

## RTC Notes

- `MicButtonWithVisualizer` supports either an Agora microphone track or a native `MediaStream`.
- When using an Agora track and no custom `onToggle`, it handles `setEnabled`, `publish`, and `unpublish`.
- Audio visualization uses `AudioContext` + `AnalyserNode`; cleanup on unmount is part of the component contract.
- `useAudioDevices` dynamically imports `agora-rtc-react` and listens for `microphone-changed`.

## Session Notes

- Session entry components are thin consumers of toolkit-provided state.
- Host apps must mount `ConversationalAIProvider` before these components render.
- Keep toolkit hook usage inside the session entry so base consumers stay decoupled.
- State mapping from toolkit → visualizer is documented in [06_interfaces.md](../06_interfaces.md).

## RTM/Thymia Notes

- `useRTMSubscription` consumes a generic event source with `on/off`.
- Messages may arrive as strings or `Uint8Array`.
- The hook parses JSON and filters by the `object` field.
- `useThymia` currently listens to `thymia.biomarkers` and `thymia.progress`.
- Invalid or unexpected RTM payloads should degrade safely, not crash rendering.

## Where Realtime Bugs Usually Hide

- Publish/unpublish state drift in RTC controls.
- Missing provider setup in session consumers.
- RTM payloads that partially match expected shape.
- Stale callbacks in event subscriptions.
- Cleanup leaks around `AudioContext`, timers, or event listeners.

## Suggested Test Focus

- Subscription/unsubscription behavior.
- Malformed message handling.
- State reset when integration is disabled.
- Cleanup behavior on unmount.

## Related Files

- [02_architecture.md](../02_architecture.md)
- [04_conventions.md](../04_conventions.md)
- [06_interfaces.md](../06_interfaces.md)
- [08_security.md](../08_security.md)
