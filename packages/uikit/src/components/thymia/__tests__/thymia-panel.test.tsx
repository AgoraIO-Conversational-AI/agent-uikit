import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ThymiaPanel } from "../thymia-panel";

describe("ThymiaPanel", () => {
  it("renders the disconnected empty state", () => {
    render(
      <ThymiaPanel
        biomarkers={{}}
        wellness={{}}
        clinical={{}}
        progress={{}}
        safety={{}}
        isConnected={false}
      />,
    );

    expect(screen.getByText("Connect to start voice analysis")).toBeInTheDocument();
  });

  it("renders waiting state with no scores or progress", () => {
    render(
      <ThymiaPanel
        biomarkers={{}}
        wellness={{}}
        clinical={{}}
        progress={{}}
        safety={{}}
        isConnected
      />,
    );

    expect(screen.getByText("Waiting for voice data...")).toBeInTheDocument();
    expect(screen.getByText("Speak to begin analysis")).toBeInTheDocument();
  });

  it("renders categorized biomarker scores and progress", () => {
    render(
      <ThymiaPanel
        biomarkers={{
          happy: 0.2,
          stress: 0.65,
          symptom_anxiety_probability: 0.73,
          "<unk>": 0.91,
        }}
        wellness={{}}
        clinical={{}}
        progress={{
          anxiety: {
            speech_seconds: 3.4,
            trigger_seconds: 10,
            processing: true,
          },
        }}
        safety={{}}
        isConnected
      />,
    );

    expect(screen.getByText("Emotions")).toBeInTheDocument();
    expect(screen.getByText("Helios — Wellness")).toBeInTheDocument();
    expect(screen.getByText("Apollo — Clinical")).toBeInTheDocument();
    expect(screen.getByText("Happy")).toBeInTheDocument();
    expect(screen.getByText("20%")).toBeInTheDocument();
    expect(screen.getByText("Stress")).toBeInTheDocument();
    expect(screen.getByText("65%")).toBeInTheDocument();
    expect(screen.getAllByText("Anxiety")).toHaveLength(2);
    expect(screen.getByText("73%")).toBeInTheDocument();
    expect(screen.queryByText("<unk>")).not.toBeInTheDocument();
    expect(screen.getByText(/3.4\/10s/)).toBeInTheDocument();
  });

  it("renders safety analysis details", () => {
    render(
      <ThymiaPanel
        biomarkers={{}}
        wellness={{}}
        clinical={{}}
        progress={{}}
        safety={{
          level: 3,
          alert: "professional_referral",
          concerns: ["anxiety", "stress"],
          recommended_actions: {
            for_agent: "Encourage the user to slow down.",
            for_human_reviewer: "Review within 48 hours.",
            urgency: "within_48hrs",
          },
        }}
        isConnected
      />,
    );

    expect(screen.getByText("Safety Analysis")).toBeInTheDocument();
    expect(screen.getByText(/Level 3/)).toBeInTheDocument();
    expect(screen.getByText(/Professional Referral/)).toBeInTheDocument();
    expect(screen.getByText(/anxiety, stress/)).toBeInTheDocument();
    expect(screen.getByText(/Encourage the user to slow down/)).toBeInTheDocument();
    expect(screen.getByText(/Review within 48 hours/)).toBeInTheDocument();
    expect(screen.getByText("Within 48hrs")).toBeInTheDocument();
  });
});
