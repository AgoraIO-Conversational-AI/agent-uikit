/**
 * Test setup for client-ui-kit
 */
import * as React from "react"
import "@testing-library/jest-dom"
import { vi } from "vitest"

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
