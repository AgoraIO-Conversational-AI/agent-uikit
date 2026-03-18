/**
 * Tests for SimpleVisualizer component
 */

import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SimpleVisualizer } from "../simple-visualizer";

describe("SimpleVisualizer Component", () => {
  it("renders correct number of bars based on data length", () => {
    const data = [0, 1, 0, 1, 0];
    const { container } = render(<SimpleVisualizer data={data} />);
    const bars = container.querySelectorAll("[role='img'] > div");
    expect(bars).toHaveLength(5);
  });

  it("active bars (value > 0) use activeColor", () => {
    const data = [1, 0.5, 0.8];
    const { container } = render(
      <SimpleVisualizer data={data} activeColor="#ff0000" />,
    );
    const bars = container.querySelectorAll("[role='img'] > div");
    bars.forEach((bar) => {
      expect((bar as HTMLElement).style.backgroundColor).toBe("rgb(255, 0, 0)");
    });
  });

  it("inactive bars (value = 0) use inactiveColor", () => {
    const data = [0, 0, 0];
    const { container } = render(
      <SimpleVisualizer data={data} inactiveColor="#00ff00" />,
    );
    const bars = container.querySelectorAll("[role='img'] > div");
    bars.forEach((bar) => {
      expect((bar as HTMLElement).style.backgroundColor).toBe(
        "rgb(0, 255, 0)",
      );
    });
  });

  it("uses default colors when not specified", () => {
    const data = [1, 0];
    const { container } = render(<SimpleVisualizer data={data} />);
    const bars = container.querySelectorAll("[role='img'] > div");
    // active bar uses default activeColor #374151
    expect((bars[0] as HTMLElement).style.backgroundColor).toBe(
      "rgb(55, 65, 81)",
    );
    // inactive bar uses default inactiveColor #d1d5db
    expect((bars[1] as HTMLElement).style.backgroundColor).toBe(
      "rgb(209, 213, 219)",
    );
  });

  it("applies custom barWidth, barHeight, barGap", () => {
    const data = [1];
    const { container } = render(
      <SimpleVisualizer
        data={data}
        barWidth={10}
        barHeight={20}
        barGap={5}
      />,
    );
    const wrapper = container.querySelector("[role='img']") as HTMLElement;
    const bar = wrapper.querySelector("div") as HTMLElement;

    expect(wrapper.style.gap).toBe("5px");
    expect(wrapper.style.height).toBe("40px");
    expect(bar.style.width).toBe("10px");
    expect(bar.style.height).toBe("20px");
  });

  it("applies custom className", () => {
    const { container } = render(
      <SimpleVisualizer data={[0]} className="my-custom-class" />,
    );
    const wrapper = container.querySelector("[role='img']") as HTMLElement;
    expect(wrapper.classList.contains("my-custom-class")).toBe(true);
  });

  it("has aria role='img' and aria-label", () => {
    render(<SimpleVisualizer data={[0]} />);
    const element = screen.getByRole("img");
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute("aria-label", "Audio level indicator");
  });

  it("renders empty when data is an empty array", () => {
    const { container } = render(<SimpleVisualizer data={[]} />);
    const bars = container.querySelectorAll("[role='img'] > div");
    expect(bars).toHaveLength(0);
  });
});
