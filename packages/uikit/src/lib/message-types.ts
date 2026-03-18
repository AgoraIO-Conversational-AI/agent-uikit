import type { TranscriptHelperItem } from "agora-agent-client-toolkit";

/**
 * Message status for a streaming transcript entry.
 *
 * Intentionally mirrors the toolkit's `TurnStatus` enum (same numeric values):
 *   TurnStatus.IN_PROGRESS = 0, TurnStatus.END = 1, TurnStatus.INTERRUPTED = 2
 *
 * The values are kept in sync so that the session layer can cast between them
 * without a runtime conversion. Do **not** change these numbers without also
 * updating `TurnStatus` in agora-agent-client-toolkit (>=1.0.0). The base
 * package cannot import the toolkit directly because it is an optional peer
 * dependency — the sync guard test in message-types.test.ts will catch any drift.
 */
export enum EMessageStatus {
  /** Message is still being streamed / generated */
  IN_PROGRESS = 0,
  /** Message is complete */
  END = 1,
  /** Message was interrupted before completion */
  INTERRUPTED = 2,
}

/**
 * Shape of a single message item in the transcript list.
 */
export interface IMessageListItem {
  /** Unique identifier for the conversational turn */
  turn_id: number;
  /** Numeric UID of the sender (0 = agent, or a numeric user UID) */
  uid: number;
  /** Message text content (may contain markdown) */
  text: string;
  /** Current status of this message */
  status: EMessageStatus;
  /** Timestamp of when the message was created (epoch ms). Optional for backward compatibility. */
  createdAt?: number;
}

// Set of valid EMessageStatus numeric values for runtime validation
const VALID_MESSAGE_STATUSES = new Set<number>(
  Object.values(EMessageStatus).filter((v): v is number => typeof v === "number"),
);

/**
 * Validates and converts a raw status value to EMessageStatus.
 * Falls back to END for unknown values so the message is still displayed.
 */
function toMessageStatus(value: unknown): EMessageStatus {
  if (typeof value === "number" && VALID_MESSAGE_STATUSES.has(value)) {
    return value as EMessageStatus;
  }
  return EMessageStatus.END;
}

/**
 * Maps the toolkit's TranscriptHelperItem array (returned by useTranscript())
 * to IMessageListItem[] for use with ConvoTextStream.
 *
 * Use this when you need to bridge toolkit transcript data into the
 * ConvoTextStream "bring-your-own-data" widget instead of using SessionTranscript.
 *
 * @example
 * ```tsx
 * import { useTranscript } from 'agora-agent-client-toolkit-react'
 * import { ConvoTextStream, transcriptToMessageList } from 'agora-agent-uikit'
 *
 * const transcript = useTranscript();
 * const messageList = transcriptToMessageList(transcript);
 * // <ConvoTextStream messageList={messageList} agentUID={agentUid} />
 * ```
 */
export function transcriptToMessageList(
  items: TranscriptHelperItem<unknown>[],
): IMessageListItem[] {
  return items.map((item) => ({
    turn_id: item.turn_id,
    uid: Number(item.uid),
    text: item.text,
    status: toMessageStatus(item.status),
    createdAt: item._time,
  }));
}
