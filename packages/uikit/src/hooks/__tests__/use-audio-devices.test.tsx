import { renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const {
  mockAgoraOff,
  mockAgoraOn,
  mockGetMicrophones,
} = vi.hoisted(() => ({
  mockGetMicrophones: vi.fn(async () => [
    {
      deviceId: "device-1",
      label: "Studio Mic (Built-in)",
      groupId: "group-1",
    },
  ]),
  mockAgoraOn: vi.fn(),
  mockAgoraOff: vi.fn(),
}));

vi.mock("agora-rtc-react", () => ({
  default: {
    getMicrophones: mockGetMicrophones,
    on: mockAgoraOn,
    off: mockAgoraOff,
  },
  useRTCClient: vi.fn(() => ({
    publish: vi.fn(async () => undefined),
    unpublish: vi.fn(async () => undefined),
  })),
}));

import { useAudioDevices } from "../use-audio-devices";

describe("useAudioDevices", () => {
  beforeEach(() => {
    mockGetMicrophones.mockClear();
    mockAgoraOn.mockClear();
    mockAgoraOff.mockClear();
  });

  it("does not load devices or subscribe to RTC events when disabled", () => {
    const { result } = renderHook(() => useAudioDevices({ enabled: false }));

    expect(result.current.loading).toBe(false);
    expect(result.current.devices).toEqual([]);
    expect(mockGetMicrophones).not.toHaveBeenCalled();
    expect(mockAgoraOn).not.toHaveBeenCalled();
  });

  it("loads and normalizes microphone devices when enabled", async () => {
    const { result } = renderHook(() => useAudioDevices({ enabled: true }));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(mockGetMicrophones).toHaveBeenCalled();
    expect(result.current.devices).toEqual([
      {
        deviceId: "device-1",
        label: "Studio Mic",
        groupId: "group-1",
      },
    ]);
    expect(result.current.hasPermission).toBe(true);
    expect(mockAgoraOn).toHaveBeenCalledWith(
      "microphone-changed",
      expect.any(Function),
    );
  });
});
