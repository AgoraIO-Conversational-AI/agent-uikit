import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HelloWorld } from "../hello-world";

describe("HelloWorld", () => {
  it("renders the default message and helper text", () => {
    render(<HelloWorld />);

    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
    expect(
      screen.getByText("Welcome to Agora AI Builder UI! This is your first component."),
    ).toBeInTheDocument();
  });

  it("renders a custom message and forwards props", () => {
    render(<HelloWorld message="Custom greeting" data-testid="hello" className="custom" />);

    expect(screen.getByText("Custom greeting")).toBeInTheDocument();
    expect(screen.getByTestId("hello")).toHaveClass("custom");
  });
});
