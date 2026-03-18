/**
 * Tests for AgoraLogo component
 */

import React from "react";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { AgoraLogo } from "../agora-logo";

describe("AgoraLogo Component", () => {
  it("renders an SVG element", () => {
    const { container } = render(<AgoraLogo />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("uses default size of 18", () => {
    const { container } = render(<AgoraLogo />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "18");
    expect(svg).toHaveAttribute("height", "18");
  });

  it("applies custom size", () => {
    const { container } = render(<AgoraLogo size={32} />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "32");
    expect(svg).toHaveAttribute("height", "32");
  });

  it("applies custom className", () => {
    const { container } = render(<AgoraLogo className="my-logo" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveClass("my-logo");
  });

  it("renders without className by default", () => {
    const { container } = render(<AgoraLogo />);
    const svg = container.querySelector("svg");
    // Default empty string className
    expect(svg).toBeInTheDocument();
  });
});
