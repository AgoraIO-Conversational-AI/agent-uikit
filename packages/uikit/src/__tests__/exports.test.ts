import { beforeEach, describe, expect, it, vi } from "vitest";

async function loadExports() {
  const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  const infoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
  const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});

  vi.doMock("agora-rtc-react", () => ({
    default: {
      getMicrophones: vi.fn(async () => []),
      on: vi.fn(),
      off: vi.fn(),
    },
    useRTCClient: vi.fn(() => ({
      publish: vi.fn(async () => undefined),
      unpublish: vi.fn(async () => undefined),
    })),
  }));

  const [baseExports, rtcExports, sessionExports, thymiaExports] =
    await Promise.all([
      import("../index"),
      import("../rtc/index"),
      import("../session/index"),
      import("../thymia/index"),
    ]);

  return {
    baseExports,
    rtcExports,
    sessionExports,
    thymiaExports,
    restoreConsole: () => {
      logSpy.mockRestore();
      infoSpy.mockRestore();
      debugSpy.mockRestore();
    },
  };
}

describe("public export surfaces", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it("exposes the expected base entry points", async () => {
    const { baseExports, restoreConsole } = await loadExports();

    expect(baseExports.AgentVisualizer).toBeDefined();
    expect(baseExports.MicButton).toBeDefined();
    expect(baseExports.Conversation).toBeDefined();
    expect(baseExports.SettingsDialog).toBeDefined();
    expect(baseExports.SessionPanel).toBeDefined();
    expect(baseExports.ShenPanel).toBeDefined();
    expect(baseExports.AgoraLogo).toBeDefined();
    expect(baseExports.cn).toBeDefined();
    restoreConsole();
  });

  it("keeps integration-only symbols out of the base entry", async () => {
    const { baseExports, restoreConsole } = await loadExports();

    expect("MicButtonWithVisualizer" in baseExports).toBe(false);
    expect("SessionChatInput" in baseExports).toBe(false);
    expect("ThymiaPanel" in baseExports).toBe(false);
    expect("useRTMSubscription" in baseExports).toBe(false);
    restoreConsole();
  });

  it("exposes the expected session entry points", async () => {
    const { sessionExports, restoreConsole } = await loadExports();

    expect(sessionExports.AgentStateVisualizer).toBeDefined();
    expect(sessionExports.SessionChatInput).toBeDefined();
    expect(sessionExports.SessionErrorDisplay).toBeDefined();
    expect(sessionExports.SessionTranscript).toBeDefined();
    restoreConsole();
  });

  it("exposes the expected rtc entry points", async () => {
    const { rtcExports, restoreConsole } = await loadExports();

    expect(rtcExports.MicButtonWithVisualizer).toBeDefined();
    expect(rtcExports.MicSelector).toBeDefined();
    expect(rtcExports.useAudioDevices).toBeDefined();
    restoreConsole();
  });

  it("exposes the expected thymia entry points", async () => {
    const { thymiaExports, restoreConsole } = await loadExports();

    expect(thymiaExports.ThymiaPanel).toBeDefined();
    expect(thymiaExports.useRTMSubscription).toBeDefined();
    expect(thymiaExports.useThymia).toBeDefined();
    restoreConsole();
  });
});
