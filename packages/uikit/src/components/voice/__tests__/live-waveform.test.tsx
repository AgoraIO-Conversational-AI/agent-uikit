/**
 * Tests for LiveWaveform component DOM structure and props
 */

import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { LiveWaveform } from "../live-waveform";

// Mock browser APIs used by LiveWaveform
beforeEach(() => {
  // Mock ResizeObserver
  global.ResizeObserver = class ResizeObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  } as any;

  // Mock requestAnimationFrame / cancelAnimationFrame
  vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
    return 1;
  });
  vi.spyOn(window, "cancelAnimationFrame").mockImplementation(() => {});

  // Mock canvas getContext
  HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
    clearRect: vi.fn(),
    fillRect: vi.fn(),
    beginPath: vi.fn(),
    roundRect: vi.fn(),
    fill: vi.fn(),
    scale: vi.fn(),
    createLinearGradient: vi.fn().mockReturnValue({
      addColorStop: vi.fn(),
    }),
    globalAlpha: 1,
    globalCompositeOperation: "source-over",
    fillStyle: "",
  });

  // Mock navigator.mediaDevices.getUserMedia
  Object.defineProperty(navigator, "mediaDevices", {
    value: {
      getUserMedia: vi.fn().mockResolvedValue({
        getTracks: () => [{ stop: vi.fn() }],
      }),
    },
    writable: true,
    configurable: true,
  });

  // Mock AudioContext
  const mockAnalyser = {
    fftSize: 256,
    smoothingTimeConstant: 0.8,
    frequencyBinCount: 128,
    getByteFrequencyData: vi.fn(),
    connect: vi.fn(),
  };

  (window as any).AudioContext = vi.fn().mockImplementation(() => ({
    createAnalyser: () => mockAnalyser,
    createMediaStreamSource: vi.fn().mockReturnValue({
      connect: vi.fn(),
    }),
    close: vi.fn(),
    state: "running",
  }));
});

describe("LiveWaveform Component", () => {
  it("renders a canvas element", () => {
    const { container } = render(<LiveWaveform />);
    const canvas = container.querySelector("canvas");
    expect(canvas).toBeInTheDocument();
  });

  it("applies custom className to the container div", () => {
    const { container } = render(<LiveWaveform className="my-waveform" />);
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.classList.contains("my-waveform")).toBe(true);
  });

  it("has role='img' on the container", () => {
    render(<LiveWaveform />);
    const element = screen.getByRole("img");
    expect(element).toBeInTheDocument();
  });

  it("shows idle aria-label when active is false", () => {
    render(<LiveWaveform active={false} />);
    const element = screen.getByRole("img");
    expect(element).toHaveAttribute("aria-label", "Audio waveform idle");
  });

  it("shows active aria-label when active is true", () => {
    render(<LiveWaveform active={true} />);
    const element = screen.getByRole("img");
    expect(element).toHaveAttribute("aria-label", "Live audio waveform");
  });

  it("accepts height prop as a number and sets container style", () => {
    const { container } = render(<LiveWaveform height={100} />);
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.style.height).toBe("100px");
  });

  it("accepts height prop as a string and sets container style", () => {
    const { container } = render(<LiveWaveform height="5rem" />);
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.style.height).toBe("5rem");
  });

  it("canvas has aria-hidden='true'", () => {
    const { container } = render(<LiveWaveform />);
    const canvas = container.querySelector("canvas");
    expect(canvas).toHaveAttribute("aria-hidden", "true");
  });

  it("renders container div with correct default height style", () => {
    const { container } = render(<LiveWaveform />);
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.style.height).toBe("64px");
  });
});
