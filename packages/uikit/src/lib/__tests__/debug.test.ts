/**
 * Tests for debug logging utility
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { debug } from "../debug";

describe("debug", () => {
  beforeEach(() => {
    vi.spyOn(console, "debug").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
    // Clean up any debug flag we may have set
    delete (window as Record<string, unknown>).__AGORA_UIKIT_DEBUG__;
  });

  it("debug.error always calls console.error with prefix", () => {
    debug.error("something broke");
    expect(console.error).toHaveBeenCalledWith(
      "[agora-agent-uikit]",
      "something broke",
    );
  });

  it("debug.warn always calls console.warn with prefix", () => {
    debug.warn("heads up");
    expect(console.warn).toHaveBeenCalledWith(
      "[agora-agent-uikit]",
      "heads up",
    );
  });

  it("debug.log calls console.debug in development", () => {
    const origEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "development";
    try {
      debug.log("dev message");
      expect(console.debug).toHaveBeenCalledWith(
        "[agora-agent-uikit]",
        "dev message",
      );
    } finally {
      process.env.NODE_ENV = origEnv;
    }
  });

  it("debug.log does NOT call console.debug in production", () => {
    const origEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "production";
    // Also ensure the window debug flag is off
    delete (window as Record<string, unknown>).__AGORA_UIKIT_DEBUG__;
    try {
      debug.log("prod message");
      expect(console.debug).not.toHaveBeenCalled();
    } finally {
      process.env.NODE_ENV = origEnv;
    }
  });

  it("debug.log calls console.debug when window.__AGORA_UIKIT_DEBUG__ is true", () => {
    const origEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "production";
    (window as Record<string, unknown>).__AGORA_UIKIT_DEBUG__ = true;
    try {
      debug.log("forced debug");
      expect(console.debug).toHaveBeenCalledWith(
        "[agora-agent-uikit]",
        "forced debug",
      );
    } finally {
      process.env.NODE_ENV = origEnv;
    }
  });
});
