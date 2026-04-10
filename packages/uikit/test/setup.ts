/**
 * Shared test setup for agora-agent-uikit
 */
import * as React from "react"
import "@testing-library/jest-dom"
import { vi } from "vitest"

const mockAgoraRTC = {
  getMicrophones: vi.fn(async () => []),
  on: vi.fn(),
  off: vi.fn(),
}

vi.mock("agora-rtc-react", () => ({
  default: mockAgoraRTC,
  useRTCClient: vi.fn(() => ({
    publish: vi.fn(async () => undefined),
    unpublish: vi.fn(async () => undefined),
  })),
}))

vi.mock("@lottiefiles/dotlottie-react", () => ({
  DotLottieReact: ({
    className,
    src,
  }: {
    className?: string
    src?: string
  }) =>
    React.createElement("div", {
      "data-testid": "dotlottie-player",
      "data-src": src,
      className,
    }),
}))

// Mock IntersectionObserver for Lottie animations
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return []
  }
  unobserve() {}
} as any

global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
} as any

Element.prototype.scrollIntoView = () => {}

Object.defineProperty(window.navigator, "mediaDevices", {
  value: {
    enumerateDevices: vi.fn(async () => []),
    getUserMedia: vi.fn(async () => ({}) as MediaStream),
  },
  configurable: true,
})

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

HTMLMediaElement.prototype.play = vi.fn(async () => undefined)
HTMLMediaElement.prototype.pause = vi.fn()

HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
  clearRect: vi.fn(),
  fillRect: vi.fn(),
  createLinearGradient: vi.fn(() => ({
    addColorStop: vi.fn(),
  })),
  beginPath: vi.fn(),
  moveTo: vi.fn(),
  lineTo: vi.fn(),
  stroke: vi.fn(),
  closePath: vi.fn(),
  fill: vi.fn(),
  save: vi.fn(),
  restore: vi.fn(),
  scale: vi.fn(),
  setTransform: vi.fn(),
})) as any
