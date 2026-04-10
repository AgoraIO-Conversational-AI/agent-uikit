/**
 * Tests for AgentSettings component API contract
 */

import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import { AgentSettings } from "../agent-settings";
import type { AgentSettingsProps } from "../agent-settings";

const { mockUseAudioDevices } = vi.hoisted(() => ({
  mockUseAudioDevices: vi.fn(() => ({
    devices: [],
    loading: false,
    error: null,
    hasPermission: false,
    loadDevices: vi.fn(),
  })),
}));

vi.mock("../../../hooks/use-audio-devices", () => ({
  useAudioDevices: mockUseAudioDevices,
}));

describe("AgentSettings Component", () => {
  beforeEach(() => {
    mockUseAudioDevices.mockClear();
  });

  it("renders without crashing", () => {
    const { container } = render(
      <AgentSettings
        enableAivad={true}
        onEnableAivadChange={() => {}}
        language="en-US"
        onLanguageChange={() => {}}
      />,
    );
    expect(container).toBeInTheDocument();
  });

  it("accepts all documented props", () => {
    const props: AgentSettingsProps = {
      enableAivad: true,
      onEnableAivadChange: () => {},
      language: "en-US",
      onLanguageChange: () => {},
      languages: [
        { id: "en-US", name: "English" },
        { id: "es-ES", name: "Spanish" },
      ],
      disabled: false,
      className: "custom-class",
    };
    expect(props.enableAivad).toBe(true);
    expect(props.language).toBe("en-US");
    expect(props.languages).toHaveLength(2);
    expect(props.disabled).toBe(false);
  });

  it("renders with default languages", () => {
    const { container } = render(
      <AgentSettings
        enableAivad={false}
        onEnableAivadChange={() => {}}
        language="en-US"
        onLanguageChange={() => {}}
      />,
    );
    expect(container).toBeInTheDocument();
  });

  it("renders with custom languages", () => {
    const customLanguages = [
      { id: "en-US", name: "English" },
      { id: "fr-FR", name: "French" },
    ];
    const { container } = render(
      <AgentSettings
        enableAivad={true}
        onEnableAivadChange={() => {}}
        language="en-US"
        onLanguageChange={() => {}}
        languages={customLanguages}
      />,
    );
    expect(container).toBeInTheDocument();
  });

  it("renders in disabled state", () => {
    const { container } = render(
      <AgentSettings
        enableAivad={true}
        onEnableAivadChange={() => {}}
        language="en-US"
        onLanguageChange={() => {}}
        disabled={true}
      />,
    );
    expect(container).toBeInTheDocument();
  });

  it("accepts custom className", () => {
    const { container } = render(
      <AgentSettings
        enableAivad={true}
        onEnableAivadChange={() => {}}
        language="en-US"
        onLanguageChange={() => {}}
        className="test-class"
      />,
    );
    expect(container).toBeInTheDocument();
  });

  it("renders with prompt and greeting props", () => {
    const props: AgentSettingsProps = {
      enableAivad: true,
      onEnableAivadChange: () => {},
      language: "en-US",
      onLanguageChange: () => {},
      prompt: "You are a helpful assistant",
      onPromptChange: () => {},
      greeting: "Hello! How can I help?",
      onGreetingChange: () => {},
    };
    const { container } = render(<AgentSettings {...props} />);
    expect(container).toBeInTheDocument();
  });

  it("renders without optional prompt and greeting props", () => {
    const { container } = render(
      <AgentSettings
        enableAivad={true}
        onEnableAivadChange={() => {}}
        language="en-US"
        onLanguageChange={() => {}}
      />,
    );
    expect(container).toBeInTheDocument();
  });

  it("does not enable microphone device loading when no mic picker is provided", () => {
    render(
      <AgentSettings
        enableAivad={true}
        onEnableAivadChange={() => {}}
        language="en-US"
        onLanguageChange={() => {}}
      />,
    );

    expect(mockUseAudioDevices).toHaveBeenCalledWith({ enabled: false });
  });

  it("enables microphone device loading when mic selection is supported", () => {
    render(
      <AgentSettings
        enableAivad={true}
        onEnableAivadChange={() => {}}
        language="en-US"
        onLanguageChange={() => {}}
        onMicChange={() => {}}
      />,
    );

    expect(mockUseAudioDevices).toHaveBeenCalledWith({ enabled: true });
  });
});
