/**
 * Tests for useVideoPlayback hook
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import React from "react";

import { useVideoPlayback, type PlayableVideoTrack } from "../use-video-playback";

function createMockTrack(): PlayableVideoTrack {
  return {
    play: vi.fn(),
    stop: vi.fn(),
    getMediaStreamTrack: vi.fn().mockReturnValue({
      kind: "video",
    } as unknown as MediaStreamTrack),
  };
}

describe("useVideoPlayback", () => {
  let videoContainerRef: React.RefObject<HTMLDivElement | null>;
  let videoElementRef: React.RefObject<HTMLVideoElement | null>;

  beforeEach(() => {
    videoContainerRef = { current: document.createElement("div") };
    videoElementRef = { current: document.createElement("video") };
  });

  it("returns isPlaying=false when no videoTrack", () => {
    const { result } = renderHook(() =>
      useVideoPlayback({
        videoTrack: null,
        useMediaStream: false,
        videoContainerRef,
        videoElementRef,
      }),
    );

    expect(result.current.isPlaying).toBe(false);
  });

  it("Agora mode: calls track.play() with container ref and sets isPlaying=true", () => {
    const track = createMockTrack();

    const { result } = renderHook(() =>
      useVideoPlayback({
        videoTrack: track,
        useMediaStream: false,
        videoContainerRef,
        videoElementRef,
      }),
    );

    expect(track.play).toHaveBeenCalledWith(videoContainerRef.current);
    expect(result.current.isPlaying).toBe(true);
  });

  it("Agora mode: calls track.stop() on cleanup", () => {
    const track = createMockTrack();

    const { unmount } = renderHook(() =>
      useVideoPlayback({
        videoTrack: track,
        useMediaStream: false,
        videoContainerRef,
        videoElementRef,
      }),
    );

    unmount();
    expect(track.stop).toHaveBeenCalled();
  });

  it("MediaStream mode: attaches srcObject to video element", () => {
    const track = createMockTrack();

    // Mock the video element play() method
    const videoEl = document.createElement("video");
    videoEl.play = vi.fn().mockResolvedValue(undefined);
    videoElementRef = { current: videoEl };

    // Mock MediaStream constructor
    const originalMediaStream = globalThis.MediaStream;
    globalThis.MediaStream = vi.fn().mockImplementation((tracks) => ({
      getTracks: () => tracks,
    })) as any;

    const { result } = renderHook(() =>
      useVideoPlayback({
        videoTrack: track,
        useMediaStream: true,
        videoContainerRef,
        videoElementRef,
      }),
    );

    expect(track.getMediaStreamTrack).toHaveBeenCalled();
    expect(videoEl.srcObject).toBeTruthy();
    expect(videoEl.play).toHaveBeenCalled();
    expect(result.current.isPlaying).toBe(true);

    globalThis.MediaStream = originalMediaStream;
  });

  it("Agora mode: handles track.play() throwing an error gracefully", () => {
    const track = createMockTrack();
    (track.play as ReturnType<typeof vi.fn>).mockImplementation(() => {
      throw new Error("play failed");
    });

    const { result } = renderHook(() =>
      useVideoPlayback({
        videoTrack: track,
        useMediaStream: false,
        videoContainerRef,
        videoElementRef,
      }),
    );

    // Should not throw, and isPlaying should be false
    expect(result.current.isPlaying).toBe(false);
  });

  it("sets isPlaying=false when track is removed", () => {
    const track = createMockTrack();

    const { result, rerender } = renderHook(
      ({ videoTrack }) =>
        useVideoPlayback({
          videoTrack,
          useMediaStream: false,
          videoContainerRef,
          videoElementRef,
        }),
      { initialProps: { videoTrack: track as PlayableVideoTrack | null } },
    );

    expect(result.current.isPlaying).toBe(true);

    rerender({ videoTrack: null });
    expect(result.current.isPlaying).toBe(false);
  });
});
