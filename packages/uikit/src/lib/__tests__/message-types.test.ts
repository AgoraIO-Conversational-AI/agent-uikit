/**
 * Tests for message-types: EMessageStatus/TurnStatus sync guard and
 * transcriptToMessageList mapping utility.
 */

import { describe, it, expect } from "vitest";
import { TurnStatus } from "agora-agent-client-toolkit";
import { EMessageStatus, transcriptToMessageList } from "../message-types";

describe("EMessageStatus / TurnStatus sync guard", () => {
  it("IN_PROGRESS values match", () => {
    expect(EMessageStatus.IN_PROGRESS).toBe(TurnStatus.IN_PROGRESS);
  });

  it("END values match", () => {
    expect(EMessageStatus.END).toBe(TurnStatus.END);
  });

  it("INTERRUPTED values match", () => {
    expect(EMessageStatus.INTERRUPTED).toBe(TurnStatus.INTERRUPTED);
  });
});

describe("transcriptToMessageList", () => {
  it("maps TranscriptHelperItem fields to IMessageListItem", () => {
    const result = transcriptToMessageList([
      {
        uid: "42",
        stream_id: 1,
        turn_id: 10,
        _time: 1700000000000,
        text: "hello world",
        status: TurnStatus.END,
        metadata: null,
      },
    ]);

    expect(result).toEqual([
      {
        turn_id: 10,
        uid: 42,
        text: "hello world",
        status: EMessageStatus.END,
        createdAt: 1700000000000,
      },
    ]);
  });

  it("maps in-progress status correctly", () => {
    const [item] = transcriptToMessageList([
      {
        uid: "0",
        stream_id: 1,
        turn_id: 1,
        _time: 0,
        text: "streaming...",
        status: TurnStatus.IN_PROGRESS,
        metadata: null,
      },
    ]);
    expect(item.status).toBe(EMessageStatus.IN_PROGRESS);
    expect(item.uid).toBe(0);
  });

  it("maps interrupted status correctly", () => {
    const [item] = transcriptToMessageList([
      {
        uid: "99",
        stream_id: 2,
        turn_id: 5,
        _time: 0,
        text: "cut short",
        status: TurnStatus.INTERRUPTED,
        metadata: null,
      },
    ]);
    expect(item.status).toBe(EMessageStatus.INTERRUPTED);
  });

  it("returns empty array for empty input", () => {
    expect(transcriptToMessageList([])).toEqual([]);
  });
});
