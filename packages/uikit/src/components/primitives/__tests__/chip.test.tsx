/**
 * Tests for Chip component
 */

import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Chip } from "../chip";

describe("Chip Component", () => {
  it("renders children", () => {
    render(<Chip>Chip label</Chip>);
    expect(screen.getByText("Chip label")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<Chip className="extra-class">Label</Chip>);
    expect(container.firstChild).toHaveClass("extra-class");
  });

  it("renders without crashing when empty", () => {
    const { container } = render(<Chip />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders complex children", () => {
    render(
      <Chip>
        <span data-testid="icon">*</span>
        <span>Status</span>
      </Chip>,
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
  });
});
