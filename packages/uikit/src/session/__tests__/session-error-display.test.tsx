import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, fireEvent } from "@testing-library/react";

const mockClearError = vi.fn();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let mockError: any = null;

vi.mock("agora-agent-client-toolkit-react", () => ({
  useAgentError: vi.fn(() => ({ error: mockError, clearError: mockClearError })),
}));

import { SessionErrorDisplay } from "../session-error-display";

const agentError = {
  source: "agent" as const,
  agentUserId: "agent-1",
  error: { type: "llm", code: 500, message: "LLM service unavailable", timestamp: 0 },
};

const messageError = {
  source: "message" as const,
  agentUserId: "agent-1",
  error: { type: "text", code: 400, message: "Message send failed", timestamp: 0 },
};

describe("SessionErrorDisplay", () => {
  beforeEach(() => {
    mockError = null;
    mockClearError.mockReset();
  });

  it("renders nothing when there is no error", () => {
    const { container } = render(<SessionErrorDisplay />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders an alert banner when an agent error is present", () => {
    mockError = agentError;
    const { getByRole } = render(<SessionErrorDisplay />);
    expect(getByRole("alert")).toBeInTheDocument();
    expect(getByRole("alert")).toHaveTextContent("LLM service unavailable");
    expect(getByRole("alert")).toHaveTextContent("llm");
  });

  it("renders an alert banner for message errors", () => {
    mockError = messageError;
    const { getByRole } = render(<SessionErrorDisplay />);
    expect(getByRole("alert")).toHaveTextContent("Message send failed");
  });

  it("calls clearError when dismiss button is clicked", () => {
    mockError = agentError;
    const { getByRole } = render(<SessionErrorDisplay />);
    fireEvent.click(getByRole("button", { name: /dismiss/i }));
    expect(mockClearError).toHaveBeenCalledTimes(1);
  });

  it("renders custom children when provided", () => {
    mockError = agentError;
    const { getByText } = render(
      <SessionErrorDisplay>
        {(error, clearError) => (
          <div>
            <span>custom: {error.error.message}</span>
            <button onClick={clearError}>close</button>
          </div>
        )}
      </SessionErrorDisplay>,
    );
    expect(getByText("custom: LLM service unavailable")).toBeInTheDocument();
  });

  it("calls clearError from custom children", () => {
    mockError = agentError;
    const { getByText } = render(
      <SessionErrorDisplay>
        {(_error, clearError) => <button onClick={clearError}>close</button>}
      </SessionErrorDisplay>,
    );
    fireEvent.click(getByText("close"));
    expect(mockClearError).toHaveBeenCalledTimes(1);
  });

  it("renders nothing from custom children when children returns null", () => {
    mockError = agentError;
    const { container } = render(
      <SessionErrorDisplay>{() => null}</SessionErrorDisplay>,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it("applies custom className to the banner", () => {
    mockError = agentError;
    const { getByRole } = render(<SessionErrorDisplay className="my-class" />);
    expect(getByRole("alert")).toHaveClass("my-class");
  });
});
