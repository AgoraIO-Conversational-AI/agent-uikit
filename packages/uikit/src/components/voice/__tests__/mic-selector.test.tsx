/**
 * Tests for MicSelector component
 */

import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MicSelector } from "../mic-selector";

// Mock useAudioDevices hook
const mockLoadDevices = vi.fn();
vi.mock("../../../hooks/use-audio-devices", () => ({
  useAudioDevices: vi.fn(() => ({
    devices: [{ deviceId: "mic1", label: "Mic 1" }],
    loading: false,
    error: null,
    hasPermission: true,
    loadDevices: mockLoadDevices,
  })),
}));

// Mock LiveWaveform to avoid canvas/audio complexity
vi.mock("../live-waveform", () => ({
  LiveWaveform: (props: any) => (
    <div data-testid="live-waveform" data-active={props.active} />
  ),
}));

// Mock ResizeObserver
beforeEach(() => {
  global.ResizeObserver = class ResizeObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  } as any;
});

describe("MicSelector Component", () => {
  it("renders mute toggle button", () => {
    render(<MicSelector />);
    const muteButton = screen.getByRole("button", {
      name: "Mute microphone",
    });
    expect(muteButton).toBeInTheDocument();
  });

  it("renders device dropdown trigger", () => {
    render(<MicSelector />);
    const trigger = screen.getByLabelText("Select microphone device");
    expect(trigger).toBeInTheDocument();
  });

  it("mute button has correct aria-label when unmuted", () => {
    render(<MicSelector muted={false} />);
    const button = screen.getByRole("button", { name: "Mute microphone" });
    expect(button).toBeInTheDocument();
  });

  it("mute button has correct aria-label when muted", () => {
    render(<MicSelector muted={true} />);
    const button = screen.getByRole("button", {
      name: "Unmute microphone",
    });
    expect(button).toBeInTheDocument();
  });

  it("shows error state when hasPermission is false", async () => {
    const { useAudioDevices } = await import(
      "../../../hooks/use-audio-devices"
    );
    (useAudioDevices as ReturnType<typeof vi.fn>).mockReturnValue({
      devices: [],
      loading: false,
      error: null,
      hasPermission: false,
      loadDevices: mockLoadDevices,
    });

    render(<MicSelector />);
    const button = screen.getByRole("button", {
      name: "Microphone error",
    });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();

    // Restore mock
    (useAudioDevices as ReturnType<typeof vi.fn>).mockReturnValue({
      devices: [{ deviceId: "mic1", label: "Mic 1" }],
      loading: false,
      error: null,
      hasPermission: true,
      loadDevices: mockLoadDevices,
    });
  });

  it("calls onMutedChange when mute toggled", () => {
    const onMutedChange = vi.fn();
    render(<MicSelector muted={false} onMutedChange={onMutedChange} />);
    const button = screen.getByRole("button", { name: "Mute microphone" });
    fireEvent.click(button);
    expect(onMutedChange).toHaveBeenCalledWith(true);
  });

  it("calls onMutedChange with false when unmuting", () => {
    const onMutedChange = vi.fn();
    render(<MicSelector muted={true} onMutedChange={onMutedChange} />);
    const button = screen.getByRole("button", {
      name: "Unmute microphone",
    });
    fireEvent.click(button);
    expect(onMutedChange).toHaveBeenCalledWith(false);
  });
});
