/**
 * Tests for SessionPanel component
 */

import React from "react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { act, render, screen } from "@testing-library/react";
import { SessionPanel } from "../session-panel";

afterEach(() => {
  vi.useRealTimers();
});

describe("SessionPanel Component", () => {
  it("renders agent ID text", () => {
    render(<SessionPanel agentId="agent-123" payload={null} />);
    expect(screen.getByText("agent-123")).toBeInTheDocument();
    expect(screen.getByText("Agent ID")).toBeInTheDocument();
  });

  it("renders payload JSON in pre block", () => {
    const payload = { key: "value", nested: { a: 1 } };
    render(<SessionPanel agentId="agent-123" payload={payload} />);
    const preElement = document.querySelector("pre");
    expect(preElement).toBeInTheDocument();
    expect(preElement!.textContent).toContain('"key": "value"');
    expect(preElement!.textContent).toContain('"nested"');
  });

  it("copy button exists for agent ID", () => {
    render(<SessionPanel agentId="agent-123" payload={null} />);
    const copyButtons = screen.getAllByText("Copy");
    expect(copyButtons.length).toBeGreaterThanOrEqual(1);
  });

  it("copy button exists for payload", () => {
    render(
      <SessionPanel agentId="agent-123" payload={{ foo: "bar" }} />,
    );
    const copyButtons = screen.getAllByText("Copy");
    // One for agent ID, one for payload
    expect(copyButtons).toHaveLength(2);
  });

  it("returns null when agentId is null", () => {
    const { container } = render(
      <SessionPanel agentId={null} payload={null} />,
    );
    expect(container.innerHTML).toBe("");
  });

  it("does not render payload section when payload is null", () => {
    render(<SessionPanel agentId="agent-123" payload={null} />);
    expect(screen.queryByText("Join Request Body")).not.toBeInTheDocument();
  });

  it("renders Join Request Body label when payload is present", () => {
    render(
      <SessionPanel agentId="agent-123" payload={{ test: true }} />,
    );
    expect(screen.getByText("Join Request Body")).toBeInTheDocument();
  });

  it("copy button copies agent ID to clipboard", async () => {
    vi.useFakeTimers();
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: { writeText },
    });

    render(<SessionPanel agentId="agent-xyz" payload={null} />);
    const copyButton = screen.getByText("Copy");

    await act(async () => {
      copyButton.click();
      await Promise.resolve();
    });

    expect(writeText).toHaveBeenCalledWith("agent-xyz");

    await act(async () => {
      vi.advanceTimersByTime(2000);
    });
  });
});
