"use client";

import * as React from "react";

import { debug } from "../lib/debug";

/**
 * Minimal interface that both IRemoteVideoTrack and ICameraVideoTrack satisfy.
 */
export interface PlayableVideoTrack {
  play(element: HTMLElement): void;
  stop(): void;
  getMediaStreamTrack(): MediaStreamTrack;
}

export interface UseVideoPlaybackOptions {
  /** The video track to play. */
  videoTrack: PlayableVideoTrack | null | undefined;
  /** When true, attach via MediaStream on a <video> element; otherwise use Agora play() on a container div. */
  useMediaStream: boolean;
  /** Ref to the container div used by Agora play() mode. */
  videoContainerRef: React.RefObject<HTMLDivElement | null>;
  /** Ref to the <video> element used by MediaStream mode. */
  videoElementRef: React.RefObject<HTMLVideoElement | null>;
  /** Label used in debug messages to identify the caller. */
  debugLabel?: string;
}

export interface UseVideoPlaybackReturn {
  /** Whether the video track is currently playing. */
  isPlaying: boolean;
}

/**
 * Shared dual-mode video playback logic.
 *
 * Supports two playback strategies:
 * 1. **MediaStream mode** (`useMediaStream: true`) — attaches the track's
 *    underlying `MediaStreamTrack` to a native `<video>` element.
 * 2. **Agora play() mode** (`useMediaStream: false`) — delegates to the Agora
 *    SDK's `play()` / `stop()` lifecycle on a container `<div>`.
 */
export function useVideoPlayback({
  videoTrack,
  useMediaStream,
  videoContainerRef,
  videoElementRef,
  debugLabel = "useVideoPlayback",
}: UseVideoPlaybackOptions): UseVideoPlaybackReturn {
  const [isPlaying, setIsPlaying] = React.useState(false);

  // MediaStream mode — use native video element
  React.useEffect(() => {
    if (!useMediaStream || !videoTrack || !videoElementRef.current) {
      if (useMediaStream) setIsPlaying(false);
      return;
    }

    try {
      const mediaStreamTrack = videoTrack.getMediaStreamTrack();
      const stream = new MediaStream([mediaStreamTrack]);
      videoElementRef.current.srcObject = stream;
      videoElementRef.current.play().catch((error) => {
        // Ignore AbortError — happens when play is interrupted by a track change
        if ((error as DOMException).name !== "AbortError") {
          debug.error(`${debugLabel}: MediaStream playback failed`, error);
        }
      });
      setIsPlaying(true);
    } catch (error) {
      debug.error(`${debugLabel}: failed to attach MediaStream`, error);
      setIsPlaying(false);
    }

    return () => {
      if (videoElementRef.current) {
        videoElementRef.current.srcObject = null;
      }
      setIsPlaying(false);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps -- videoElementRef is a stable ref object
  }, [videoTrack, useMediaStream, debugLabel]);

  // Agora play() mode — use container div
  React.useEffect(() => {
    if (useMediaStream || !videoTrack || !videoContainerRef.current) {
      if (!useMediaStream) setIsPlaying(false);
      return;
    }

    try {
      videoTrack.play(videoContainerRef.current);
      setIsPlaying(true);
    } catch (error) {
      debug.error(`${debugLabel}: failed to play video track`, error);
      setIsPlaying(false);
    }

    return () => {
      try {
        videoTrack.stop();
        setIsPlaying(false);
      } catch (error) {
        debug.error(`${debugLabel}: failed to stop video track`, error);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps -- videoContainerRef is a stable ref object
  }, [videoTrack, useMediaStream, debugLabel]);

  return { isPlaying };
}
