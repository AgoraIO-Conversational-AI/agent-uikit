/**
 * Tests for utility functions: cn, decodeStreamMessage, renderMarkdownToHtml
 */

import { describe, it, expect } from "vitest";
import { cn, decodeStreamMessage, renderMarkdownToHtml } from "../utils";

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("handles conditional classes", () => {
    expect(cn("base", false && "hidden", "visible")).toBe("base visible");
    expect(cn("base", true && "active")).toBe("base active");
  });

  it("merges tailwind conflicts, keeping the last value", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });
});

describe("decodeStreamMessage", () => {
  it("decodes Uint8Array to string", () => {
    const encoder = new TextEncoder();
    const data = encoder.encode("hello world");
    expect(decodeStreamMessage(data)).toBe("hello world");
  });

  it("handles empty Uint8Array", () => {
    const data = new Uint8Array(0);
    expect(decodeStreamMessage(data)).toBe("");
  });
});

describe("renderMarkdownToHtml", () => {
  it("returns empty string for empty input", () => {
    expect(renderMarkdownToHtml("")).toBe("");
    expect(renderMarkdownToHtml(undefined as unknown as string)).toBe("");
  });

  it("converts **bold** to <strong>", () => {
    const result = renderMarkdownToHtml("This is **bold** text");
    expect(result).toContain("<strong>bold</strong>");
  });

  it("converts [text](url) to anchor tags", () => {
    const result = renderMarkdownToHtml("[Click me](https://example.com)");
    expect(result).toContain('href="https://example.com"');
    expect(result).toContain('target="_blank"');
    expect(result).toContain('rel="noopener noreferrer"');
  });

  it("converts ## headers to div.heading", () => {
    const result = renderMarkdownToHtml("## My Heading");
    expect(result).toContain('<div class="heading">My Heading</div>');
  });

  it("converts ### headers to div.heading-sub", () => {
    const result = renderMarkdownToHtml("### Sub Heading");
    expect(result).toContain('<div class="heading-sub">Sub Heading</div>');
  });

  it("converts numbered lists", () => {
    const result = renderMarkdownToHtml("1. First item");
    expect(result).toContain('<span class="list-item-numbered">');
    expect(result).toContain('<span class="list-number">1.</span>');
    expect(result).toContain("First item");
  });

  it("converts bullet lists", () => {
    const result = renderMarkdownToHtml("- A bullet");
    expect(result).toContain('<span class="list-item">');
  });

  it("converts indented sub-items", () => {
    const result = renderMarkdownToHtml("  - Sub item");
    expect(result).toContain('<span class="list-item-sub">');
  });

  it("sanitizes HTML (strips dangerous tags) via DOMPurify", () => {
    // jsdom provides window, so DOMPurify path is used
    const result = renderMarkdownToHtml('<script>alert("xss")</script>Safe');
    expect(result).not.toContain("<script>");
    expect(result).toContain("Safe");
  });

  it("returns stripped HTML in SSR context (when window is undefined)", () => {
    const originalWindow = globalThis.window;
    // @ts-expect-error - temporarily remove window for SSR simulation
    delete globalThis.window;
    try {
      const result = renderMarkdownToHtml("**bold** and <script>bad</script>");
      // In SSR mode all HTML tags are stripped
      expect(result).not.toContain("<strong>");
      expect(result).not.toContain("<script>");
      expect(result).toContain("bold");
    } finally {
      globalThis.window = originalWindow;
    }
  });
});
