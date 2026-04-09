import { describe, expect, it } from "vitest";

import * as baseExports from "../index";
import * as rtcExports from "../rtc/index";
import * as sessionExports from "../session/index";
import * as thymiaExports from "../thymia/index";

describe("public export surfaces", () => {
  it("exposes the expected base entry points", () => {
    expect(baseExports.AgentVisualizer).toBeDefined();
    expect(baseExports.MicButton).toBeDefined();
    expect(baseExports.Conversation).toBeDefined();
    expect(baseExports.SettingsDialog).toBeDefined();
    expect(baseExports.SessionPanel).toBeDefined();
    expect(baseExports.ShenPanel).toBeDefined();
    expect(baseExports.AgoraLogo).toBeDefined();
    expect(baseExports.cn).toBeDefined();
  });

  it("exposes the expected session entry points", () => {
    expect(sessionExports.AgentStateVisualizer).toBeDefined();
    expect(sessionExports.SessionChatInput).toBeDefined();
    expect(sessionExports.SessionErrorDisplay).toBeDefined();
    expect(sessionExports.SessionTranscript).toBeDefined();
  });

  it("exposes the expected rtc entry points", () => {
    expect(rtcExports.MicButtonWithVisualizer).toBeDefined();
    expect(rtcExports.MicSelector).toBeDefined();
    expect(rtcExports.useAudioDevices).toBeDefined();
  });

  it("exposes the expected thymia entry points", () => {
    expect(thymiaExports.ThymiaPanel).toBeDefined();
    expect(thymiaExports.useRTMSubscription).toBeDefined();
    expect(thymiaExports.useThymia).toBeDefined();
  });
});
