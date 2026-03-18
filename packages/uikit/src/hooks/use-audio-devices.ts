"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface AudioDevice {
  deviceId: string;
  label: string;
  groupId: string;
}

export interface UseAudioDevicesReturn {
  devices: AudioDevice[];
  loading: boolean;
  error: string | null;
  hasPermission: boolean;
  loadDevices: () => Promise<void>;
}

/**
 * Dynamically imports the AgoraRTC module. This avoids top-level evaluation
 * of agora-rtc-react during SSR, where `window` is not defined.
 *
 * The resolved module is cached after first import.
 */
let agoraRTCPromise: Promise<any> | null = null;
function importAgoraRTC(): Promise<any> {
  if (!agoraRTCPromise) {
    agoraRTCPromise = import("agora-rtc-react").then((mod) => mod.default);
  }
  return agoraRTCPromise;
}

export function useAudioDevices(): UseAudioDevicesReturn {
  const [devices, setDevices] = useState<AudioDevice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasPermission, setHasPermission] = useState(false);
  const agoraRTCRef = useRef<any>(null);

  const loadDevices = useCallback(async () => {
    if (typeof window === "undefined") return;

    try {
      setLoading(true);
      setError(null);

      const AgoraRTC = await importAgoraRTC();
      agoraRTCRef.current = AgoraRTC;

      const microphones = await AgoraRTC.getMicrophones();

      const audioInputs = microphones.map((device: any) => {
        let cleanLabel =
          device.label || `Microphone ${device.deviceId.slice(0, 8)}`;
        cleanLabel = cleanLabel.replace(/\s*\([^)]*\)/g, "").trim();

        return {
          deviceId: device.deviceId,
          label: cleanLabel,
          groupId: device.groupId,
        };
      });

      setDevices(audioInputs);
      setHasPermission(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to get audio devices",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDevices();
  }, [loadDevices]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let mounted = true;
    let cleanup = () => {};

    importAgoraRTC().then((AgoraRTC) => {
      if (!mounted) return;

      const handler = () => {
        loadDevices();
      };
      AgoraRTC.on("microphone-changed", handler);

      cleanup = () => {
        AgoraRTC.off("microphone-changed", handler);
      };
    });

    return () => {
      mounted = false;
      cleanup();
    };
  }, [loadDevices]);

  return {
    devices,
    loading,
    error,
    hasPermission,
    loadDevices,
  };
}
