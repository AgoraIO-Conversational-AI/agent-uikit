# Chat Components

When to Read This: use this document when changing transcript views, conversation layout, message rendering, or markdown handling.

## Main Files

| Component Or Helper | File |
| --- | --- |
| `Conversation` | `packages/uikit/src/components/chat/conversation.tsx` |
| `ConversationContext` | `packages/uikit/src/components/chat/conversation-context.tsx` |
| `Message` | `packages/uikit/src/components/chat/message.tsx` |
| `Response` | `packages/uikit/src/components/chat/response.tsx` |
| `ConvoTextStream` | `packages/uikit/src/components/chat/convo-text-stream.tsx` |
| Message transforms | `packages/uikit/src/lib/message-types.ts` |
| Markdown rendering | `packages/uikit/src/lib/utils.ts` |

## Conversation System

### Component Hierarchy

```
<Conversation>                    ← scroll container + context provider
  <ConversationEmptyState />      ← shown when no children
  <ConversationContent>           ← padded content area
    <Message from="assistant">    ← flex-start aligned
      <MessageContent>
        <Response>text</Response>
      </MessageContent>
    </Message>
    <Message from="user">         ← flex-end aligned
      <MessageContent>
        <Response>text</Response>
      </MessageContent>
    </Message>
  </ConversationContent>
  <ConversationScrollButton />    ← auto-shown when scrolled away
</Conversation>
```

### Auto-Scroll Behavior

1. `MutationObserver` watches for DOM changes in the scroll container
2. Debounced via `requestAnimationFrame` to batch rapid updates
3. Scrolls to bottom if user is within 100px of bottom
4. Shows "scroll to bottom" chevron button when user scrolls up
5. Button click smooth-scrolls to latest message

### ConversationContext

```typescript
interface ConversationContextValue {
  scrollRef: React.RefObject<HTMLDivElement>;
  agentName: string;
  userName: string;
}
```

- `useConversation()` — throws if outside provider
- `useConversationNames()` — returns defaults if outside provider

---

## ConvoTextStream

Floating transcript panel for live conversation display.

### Layout

- Fixed position overlay
- Mobile: bottom-0, full width
- Desktop: bottom-right with max-width
- Collapsible header with "Transcription" label
- Auto-opens on first message received

### Message Rendering

Each message renders with:
1. Avatar badge: "AI" (cyan bg) for agent, "U" (dark bg) for user
2. Sender name
3. Message text with markdown rendering
4. Pulsing dot animation for `IN_PROGRESS` messages

### Streaming Support

- `currentInProgressMessage` prop renders below completed messages
- Pulsing animation indicates active streaming
- Auto-scrolls during streaming with 100ms safety delay
- Badge count for new messages when panel is collapsed

### Props

```typescript
interface ConvoTextStreamProps {
  messageList: IMessageListItem[];
  currentInProgressMessage?: IMessageListItem | null;
  agentUID: string | undefined;
  className?: string;
}
```

---

## Markdown Rendering

`renderMarkdownToHtml()` in `src/lib/utils.ts` supports a limited markdown subset:

| Syntax               | Output                                   |
| -------------------- | ---------------------------------------- |
| `**bold**`           | `<strong>bold</strong>`                  |
| markdown links       | `<a href="..." target="_blank">text</a>` with line breaks |
| `## Header`          | `<div class="heading">Header</div>`     |
| `### Subheader`      | `<div class="heading-sub">Subheader</div>` |
| `1. item`            | `<span class="list-item-numbered">1. item</span>` |
| `- item`             | `<span class="list-item">item</span>`   |
| `  - item` (indented)| `<span class="list-item-sub">item</span>` |

### Sanitization Pipeline

1. Parse markdown to HTML string
2. **Browser**: sanitize with DOMPurify (`ALLOWED_TAGS`, `ALLOWED_ATTR` whitelist)
3. **SSR**: strip all HTML tags with regex fallback
4. Return safe HTML for `dangerouslySetInnerHTML`

### Not Supported

Code blocks, images, tables, strikethrough, nested bold/italic, blockquotes.

---

## Message Types

### EMessageStatus

```typescript
enum EMessageStatus {
  IN_PROGRESS = 0,  // message still streaming
  END = 1,          // message complete
  INTERRUPTED = 2,  // user or system interrupted
}
```

Values are numerically aligned with toolkit's `TurnStatus` — do not renumber.

### IMessageListItem

```typescript
interface IMessageListItem {
  turn_id: number;     // conversation turn identifier
  uid: number;         // 0 = agent, positive = user
  text: string;        // may contain markdown
  status: EMessageStatus;
  createdAt?: number;  // optional timestamp
}
```

### transcriptToMessageList()

Bridges toolkit's `TranscriptHelperItem[]` to `IMessageListItem[]`:

```typescript
function transcriptToMessageList(
  items: TranscriptHelperItem[]
): IMessageListItem[]
```

- Converts `uid` string → number
- Maps `status` directly (numeric values match)
- Copies `_time` → `createdAt`

## High-Risk Changes

- broadening markdown support without security review
- changing message status values
- removing scroll heuristics that prevent transcript jitter
- bypassing the sanitization path before `dangerouslySetInnerHTML`

## Related Files

- [04_conventions.md](../04_conventions.md)
- [06_interfaces.md](../06_interfaces.md)
- [08_security.md](../08_security.md)
- [realtime_integrations.md](realtime_integrations.md)
