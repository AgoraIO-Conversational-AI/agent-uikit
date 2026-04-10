import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ShenPanel } from "../shen-panel";
import type { ShenState } from "../../../shen/types";

const baseState: ShenState = {
  sdkLoaded: true,
  initialized: true,
  faceState: "tracking",
  measurementState: "measuring",
  progress: 42,
  heartRate: 72,
  realtimeHr: 70,
  hrvSdnn: 31,
  stressIndex: 14,
  breathingRate: 16,
  systolicBP: 118,
  diastolicBP: 76,
  cardiacWorkload: 9,
  signalQuality: 0.84,
  results: {
    age_years: 34,
    heart_rate_bpm: 74,
    hrv_sdnn_ms: 28,
    stress_index: 12,
    breathing_rate_bpm: 15,
    systolic_bp: 122,
    diastolic_bp: 78,
    cardiac_workload: 8,
    signal_quality: 0.86,
  },
};

describe("ShenPanel", () => {
  it("renders the disconnected empty state", () => {
    render(<ShenPanel shenState={baseState} isConnected={false} />);

    expect(screen.getByText("Connect to start camera vitals")).toBeInTheDocument();
  });

  it("renders the sdk loading state", () => {
    render(
      <ShenPanel
        shenState={{ ...baseState, sdkLoaded: false }}
        isConnected
      />,
    );

    expect(screen.getByText("Loading Shen.AI SDK...")).toBeInTheDocument();
    expect(screen.getByText("This may take a moment")).toBeInTheDocument();
  });

  it("renders realtime and measurement results", () => {
    render(<ShenPanel shenState={baseState} isConnected />);

    expect(screen.getByText("Measurement Progress")).toBeInTheDocument();
    expect(screen.getByText("42%")).toBeInTheDocument();
    expect(screen.getByText("Realtime Vitals")).toBeInTheDocument();
    expect(screen.getByText("Measurement Results")).toBeInTheDocument();
    expect(screen.getAllByText("Heart Rate")[0]).toBeInTheDocument();
    expect(screen.getByText("72 bpm")).toBeInTheDocument();
    expect(screen.getByText("34 yrs")).toBeInTheDocument();
    expect(screen.getByText("86 %")).toBeInTheDocument();
  });

  it("falls back to realtime heart rate and hides progress when zero", () => {
    render(
      <ShenPanel
        shenState={{
          ...baseState,
          progress: 0,
          heartRate: null,
          realtimeHr: 67,
          results: null,
        }}
        isConnected
      />,
    );

    expect(screen.queryByText("Measurement Progress")).not.toBeInTheDocument();
    expect(screen.getByText("67 bpm")).toBeInTheDocument();
    expect(screen.getAllByText("—").length).toBeGreaterThan(0);
  });
});
