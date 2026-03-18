/**
 * Tests for ConvoTextStream component
 */

import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

vi.mock("../../../hooks/use-is-mobile", () => ({
  useIsMobile: vi.fn(() => false),
}));

import { ConvoTextStream } from "../convo-text-stream";
import { EMessageStatus } from "../../../lib/message-types";
import type { IMessageListItem } from "../../../lib/message-types";

function makeMessage(
  overrides: Partial<IMessageListItem> & { uid: number; text: string },
): IMessageListItem {
  return {
    turn_id: 1,
    status: EMessageStatus.END,
    ...overrides,
  };
}

describe("ConvoTextStream Component", () => {
  const defaultProps = {
    messageList: [] as IMessageListItem[],
    agentUID: "0",
  };

  it("renders toggle button when closed", () => {
    render(<ConvoTextStream {...defaultProps} />);
    expect(
      screen.getByRole("button", { name: "Open transcription" }),
    ).toBeInTheDocument();
  });

  it("opens chat when toggle button is clicked", () => {
    render(<ConvoTextStream {...defaultProps} />);
    fireEvent.click(
      screen.getByRole("button", { name: "Open transcription" }),
    );
    expect(screen.getByText("Transcription")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Close transcription" }),
    ).toBeInTheDocument();
  });

  it("renders messages from messageList", () => {
    const messages: IMessageListItem[] = [
      makeMessage({ uid: 0, text: "Hello from AI", turn_id: 1 }),
      makeMessage({ uid: 1, text: "Hello from user", turn_id: 2 }),
    ];

    render(
      <ConvoTextStream {...defaultProps} messageList={messages} />,
    );

    // Auto-opens on first message
    expect(screen.getByText("Transcription")).toBeInTheDocument();
    expect(screen.getByText("Hello from AI")).toBeInTheDocument();
    expect(screen.getByText("Hello from user")).toBeInTheDocument();
  });

  it("distinguishes AI messages (uid=0) from user messages", () => {
    const messages: IMessageListItem[] = [
      makeMessage({ uid: 0, text: "AI says hi", turn_id: 1 }),
      makeMessage({ uid: 1, text: "User says hi", turn_id: 2 }),
    ];

    render(
      <ConvoTextStream {...defaultProps} messageList={messages} />,
    );

    const avatars = screen.getAllByText("AI");
    expect(avatars.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("U")).toBeInTheDocument();
  });

  it("shows streaming message when currentInProgressMessage has IN_PROGRESS status", () => {
    const inProgressMessage = makeMessage({
      uid: 0,
      text: "Streaming response...",
      turn_id: 99,
      status: EMessageStatus.IN_PROGRESS,
    });

    render(
      <ConvoTextStream
        {...defaultProps}
        currentInProgressMessage={inProgressMessage}
      />,
    );

    expect(screen.getByText("Streaming response...")).toBeInTheDocument();
  });

  it("does not show streaming message when text is empty", () => {
    const inProgressMessage = makeMessage({
      uid: 0,
      text: "   ",
      turn_id: 99,
      status: EMessageStatus.IN_PROGRESS,
    });

    const messages: IMessageListItem[] = [
      makeMessage({ uid: 0, text: "Earlier message", turn_id: 1 }),
    ];

    render(
      <ConvoTextStream
        {...defaultProps}
        messageList={messages}
        currentInProgressMessage={inProgressMessage}
      />,
    );

    // The empty streaming message should not appear, but earlier message should
    expect(screen.getByText("Earlier message")).toBeInTheDocument();
    // There should be no extra blank streaming bubble
    const allAvatars = screen.getAllByText("AI");
    expect(allAvatars).toHaveLength(1);
  });

  it("close button closes the chat", () => {
    const messages: IMessageListItem[] = [
      makeMessage({ uid: 0, text: "Hello", turn_id: 1 }),
    ];

    render(
      <ConvoTextStream {...defaultProps} messageList={messages} />,
    );

    // Chat auto-opened
    expect(screen.getByText("Transcription")).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", { name: "Close transcription" }),
    );

    expect(screen.queryByText("Transcription")).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Open transcription" }),
    ).toBeInTheDocument();
  });

  it("auto-opens on first message", () => {
    const messages: IMessageListItem[] = [
      makeMessage({ uid: 0, text: "First message", turn_id: 1 }),
    ];

    render(
      <ConvoTextStream {...defaultProps} messageList={messages} />,
    );

    // Should auto-open and show the chat panel
    expect(screen.getByText("Transcription")).toBeInTheDocument();
    expect(screen.getByText("First message")).toBeInTheDocument();
  });
});
