import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../command";

describe("Command primitives", () => {
  it("renders input, groups, items, and empty state slots", () => {
    render(
      <Command label="Search commands" className="command-root">
        <CommandInput placeholder="Search…" />
        <CommandList>
          <CommandEmpty>No results.</CommandEmpty>
          <CommandGroup heading="General">
            <CommandItem>Open settings</CommandItem>
            <CommandItem disabled>Disabled item</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    );

    expect(screen.getByRole("combobox")).toHaveAttribute("placeholder", "Search…");
    expect(screen.getByText("General")).toBeInTheDocument();
    expect(screen.getByText("Open settings")).toBeInTheDocument();
    expect(screen.getByText("Disabled item")).toHaveAttribute("data-disabled", "true");
    expect(document.querySelector('[data-slot="command"]')).toHaveClass("command-root");
    expect(document.querySelector('[data-slot="command-input-wrapper"]')).toBeInTheDocument();
  });
});
