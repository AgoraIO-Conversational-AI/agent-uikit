/**
 * Tests for Avatar component
 */

import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Avatar } from "../avatar";

describe("Avatar Component", () => {
  it("renders image when src is provided", () => {
    render(<Avatar src="https://example.com/photo.jpg" alt="User photo" />);
    const img = screen.getByRole("img", { name: "User photo" });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://example.com/photo.jpg");
  });

  it("renders icon when icon prop is provided", () => {
    render(<Avatar icon={<span data-testid="custom-icon">IC</span>} />);
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
  });

  it("renders initials from name", () => {
    render(<Avatar name="John Doe" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("renders single initial for single-word name", () => {
    render(<Avatar name="Alice" />);
    expect(screen.getByText("A")).toBeInTheDocument();
  });

  it("renders custom initials when provided", () => {
    render(<Avatar initials="XY" name="John Doe" />);
    expect(screen.getByText("XY")).toBeInTheDocument();
  });

  it("falls back to '?' when no name or initials provided", () => {
    render(<Avatar />);
    expect(screen.getByText("?")).toBeInTheDocument();
  });

  it("applies size variant classes", () => {
    const { container: smContainer } = render(<Avatar size="sm" name="A" />);
    expect(smContainer.firstChild).toHaveClass("h-8", "w-8");

    const { container: mdContainer } = render(<Avatar size="md" name="A" />);
    expect(mdContainer.firstChild).toHaveClass("h-10", "w-10");

    const { container: lgContainer } = render(<Avatar size="lg" name="A" />);
    expect(lgContainer.firstChild).toHaveClass("h-12", "w-12");
  });

  it("defaults to md size", () => {
    const { container } = render(<Avatar name="A" />);
    expect(container.firstChild).toHaveClass("h-10", "w-10");
  });

  it("applies custom bgColor", () => {
    render(<Avatar name="Test" bgColor="bg-red-500" />);
    const initialsContainer = screen.getByText("T").closest("div");
    expect(initialsContainer).toHaveClass("bg-red-500");
  });

  it("prefers image over icon and initials", () => {
    render(
      <Avatar
        src="https://example.com/photo.jpg"
        icon={<span data-testid="icon">IC</span>}
        name="John"
      />,
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
    expect(screen.queryByText("J")).not.toBeInTheDocument();
  });

  it("prefers icon over initials when no src", () => {
    render(
      <Avatar
        icon={<span data-testid="icon">IC</span>}
        name="John"
      />,
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.queryByText("J")).not.toBeInTheDocument();
  });
});
