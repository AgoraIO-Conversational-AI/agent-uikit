/**
 * Tests for SettingsDialog component
 */

import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { SettingsDialog } from "../settings-dialog";

// Mock useAudioDevices hook used by AgentSettings
vi.mock("../../../hooks/use-audio-devices", () => ({
  useAudioDevices: vi.fn(() => ({
    devices: [{ deviceId: "mic1", label: "Mic 1" }],
    loading: false,
    error: null,
    hasPermission: true,
    loadDevices: vi.fn(),
  })),
}));

const defaultProps = {
  open: true,
  onOpenChange: vi.fn(),
  enableAivad: true,
  onEnableAivadChange: vi.fn(),
  language: "en-US",
  onLanguageChange: vi.fn(),
};

describe("SettingsDialog Component", () => {
  it("renders dialog when open=true", () => {
    render(<SettingsDialog {...defaultProps} open={true} />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("does not render content when open=false", () => {
    render(<SettingsDialog {...defaultProps} open={false} />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("shows default title text", () => {
    render(<SettingsDialog {...defaultProps} />);
    expect(screen.getByText("Agent Settings")).toBeInTheDocument();
  });

  it("shows custom title text", () => {
    render(<SettingsDialog {...defaultProps} title="Custom Title" />);
    expect(screen.getByText("Custom Title")).toBeInTheDocument();
  });

  it("shows description when provided", () => {
    render(
      <SettingsDialog
        {...defaultProps}
        description="Configure your agent"
      />,
    );
    expect(screen.getByText("Configure your agent")).toBeInTheDocument();
  });

  it("calls onOpenChange when close button is clicked", () => {
    const onOpenChange = vi.fn();
    render(<SettingsDialog {...defaultProps} onOpenChange={onOpenChange} />);
    const closeButton = screen.getByText("Close");
    closeButton.click();
    expect(onOpenChange).toHaveBeenCalled();
  });

  it("renders children content", () => {
    render(
      <SettingsDialog {...defaultProps}>
        <div data-testid="child-content">Extra content</div>
      </SettingsDialog>,
    );
    expect(screen.getByTestId("child-content")).toBeInTheDocument();
  });
});
