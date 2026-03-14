/**
 * Tests for Card, CardTitle, and CardContent components
 */

import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card, CardTitle, CardContent } from "../card";

describe("Card Component", () => {
  it("renders children", () => {
    render(<Card>Card content here</Card>);
    expect(screen.getByText("Card content here")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Card className="custom-class">Content</Card>);
    const card = screen.getByText("Content").closest("[data-slot='card']");
    expect(card).toHaveClass("custom-class");
  });

  it("has data-slot attribute", () => {
    render(<Card>Content</Card>);
    const card = screen.getByText("Content").closest("[data-slot='card']");
    expect(card).toBeInTheDocument();
  });
});

describe("CardTitle Component", () => {
  it("renders text content", () => {
    render(<CardTitle>My Title</CardTitle>);
    expect(screen.getByText("My Title")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<CardTitle className="title-class">Title</CardTitle>);
    const title = screen.getByText("Title");
    expect(title).toHaveClass("title-class");
  });

  it("has data-slot attribute", () => {
    render(<CardTitle>Title</CardTitle>);
    const title = screen.getByText("Title").closest("[data-slot='card-title']");
    expect(title).toBeInTheDocument();
  });
});

describe("CardContent Component", () => {
  it("renders children", () => {
    render(<CardContent>Some body text</CardContent>);
    expect(screen.getByText("Some body text")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<CardContent className="content-class">Body</CardContent>);
    const content = screen.getByText("Body");
    expect(content).toHaveClass("content-class");
  });

  it("has data-slot attribute", () => {
    render(<CardContent>Body</CardContent>);
    const content = screen
      .getByText("Body")
      .closest("[data-slot='card-content']");
    expect(content).toBeInTheDocument();
  });
});
