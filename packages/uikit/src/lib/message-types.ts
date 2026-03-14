/**
 * Message status for a streaming transcript entry.
 *
 * Intentionally mirrors the toolkit's `TurnStatus` enum (same numeric values):
 *   TurnStatus.IN_PROGRESS = 0, TurnStatus.END = 1, TurnStatus.INTERRUPTED = 2
 *
 * The values are kept in sync so that the session layer can cast between them
 * without a runtime conversion. Do **not** change these numbers without also
 * updating `TurnStatus` in the toolkit. The base package cannot import the
 * toolkit directly because it is an optional peer dependency.
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
  /** UID of the sender (0 = agent, or a numeric/string user ID) */
  uid: number;
  /** Message text content (may contain markdown) */
  text: string;
  /** Current status of this message */
  status: EMessageStatus;
  /** Timestamp of when the message was created (epoch ms). Optional for backward compatibility. */
  createdAt?: number;
}
