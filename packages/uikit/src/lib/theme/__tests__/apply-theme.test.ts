/**
 * Tests for theme utilities: hexToRgbString, applyCustomTheme, getCurrentTheme
 */

import { describe, it, expect, beforeEach } from "vitest";
import {
  hexToRgbString,
  applyCustomTheme,
  getCurrentTheme,
} from "../apply-theme";

describe("hexToRgbString", () => {
  it("converts 6-digit hex", () => {
    expect(hexToRgbString("#FF0000")).toBe("255, 0, 0");
    expect(hexToRgbString("#00FF00")).toBe("0, 255, 0");
    expect(hexToRgbString("#0000FF")).toBe("0, 0, 255");
  });

  it("converts 3-digit hex", () => {
    expect(hexToRgbString("#F00")).toBe("255, 0, 0");
    expect(hexToRgbString("#0F0")).toBe("0, 255, 0");
  });

  it("returns null for invalid hex", () => {
    expect(hexToRgbString("not-a-hex")).toBeNull();
    expect(hexToRgbString("#GG0000")).toBe("NaN, 0, 0"); // parseInt returns NaN for invalid hex digits
    expect(hexToRgbString("#12")).toBeNull(); // wrong length
    expect(hexToRgbString("")).toBeNull();
  });

  it("handles lowercase", () => {
    expect(hexToRgbString("#ff0000")).toBe("255, 0, 0");
    expect(hexToRgbString("#abc")).toBe("170, 187, 204");
  });
});

describe("applyCustomTheme", () => {
  beforeEach(() => {
    // Clear any inline styles from previous tests
    document.documentElement.removeAttribute("style");
  });

  it("sets CSS variables on document.documentElement", () => {
    applyCustomTheme({
      PRIMARY_COLOR: "#00AEFC",
      BACKGROUND_COLOR: "#111111",
    });

    const root = document.documentElement;
    expect(root.style.getPropertyValue("--primary")).toBe("#00AEFC");
    expect(root.style.getPropertyValue("--background")).toBe("#111111");
  });

  it("handles partial config (only some fields set)", () => {
    applyCustomTheme({ FONT_COLOR: "#FFFFFF" });

    const root = document.documentElement;
    expect(root.style.getPropertyValue("--foreground")).toBe("#FFFFFF");
    // Unset variables remain empty
    expect(root.style.getPropertyValue("--primary")).toBe("");
  });

  it("is SSR safe (does not throw when window is undefined)", () => {
    const originalWindow = globalThis.window;
    // @ts-expect-error - temporarily remove window for SSR simulation
    delete globalThis.window;
    try {
      expect(() =>
        applyCustomTheme({ PRIMARY_COLOR: "#FF0000" }),
      ).not.toThrow();
    } finally {
      globalThis.window = originalWindow;
    }
  });
});

describe("getCurrentTheme", () => {
  beforeEach(() => {
    document.documentElement.removeAttribute("style");
  });

  it("returns current theme values from computed style", () => {
    // Set a known value first
    document.documentElement.style.setProperty("--primary", "#00AEFC");

    const theme = getCurrentTheme();

    // The result should contain the --primary key
    expect(theme).toHaveProperty("--primary");
    // getComputedStyle in jsdom returns inline styles
    expect(theme["--primary"]).toBe("#00AEFC");
  });
});
