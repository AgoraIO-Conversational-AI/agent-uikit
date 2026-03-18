"use client";

import * as React from "react";
import { Video, VideoOff } from "lucide-react";

import { useVideoPlayback, type PlayableVideoTrack } from "../../hooks/use-video-playback";
import { cn } from "../../lib/utils";

export interface LocalVideoPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Local camera video track from Agora RTC
   */
  videoTrack?: PlayableVideoTrack | null;

  /**
   * Mirror the video horizontally (like a mirror)
   * @default true
   */
  isMirrored?: boolean;

  /**
   * Show label overlay
   * @default false
   */
  showLabel?: boolean;

  /**
   * Custom label text
   * @default "You"
   */
  label?: string;

  /**
   * Placeholder content when no video
   */
  placeholder?: React.ReactNode;

  /**
   * Use MediaStream instead of Agora's play() method
   * Enables multiple video elements to show the same track
   * @default false
   */
  useMediaStream?: boolean;

  /**
   * Whether video is currently muted/disabled
   * @default false
   */
  isVideoMuted?: boolean;

  /**
   * Callback when mute/unmute is clicked
   */
  onToggleMute?: () => void;

  /**
   * Show mute/unmute controls on hover
   * @default false
   */
  showMuteControl?: boolean;

  /**
   * How the video should fit its container
   * @default "cover"
   */
  objectFit?: "cover" | "contain" | "fill";
}

export const LocalVideoPreview = React.forwardRef<
  HTMLDivElement,
  LocalVideoPreviewProps
>(
  (
    {
      className,
      videoTrack,
      isMirrored = true,
      showLabel = false,
      label = "You",
      placeholder,
      useMediaStream = false,
      isVideoMuted = false,
      onToggleMute,
      showMuteControl = false,
      objectFit = "cover",
      ...props
    },
    ref,
  ) => {
    const videoContainerRef = React.useRef<HTMLDivElement>(null);
    const videoElementRef = React.useRef<HTMLVideoElement>(null);
    const [isHovering, setIsHovering] = React.useState(false);

    const { isPlaying } = useVideoPlayback({
      videoTrack: videoTrack ?? null,
      useMediaStream,
      videoContainerRef,
      videoElementRef,
      debugLabel: "LocalVideoPreview",
    });

    const showPlaceholder = !isPlaying;

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-lg bg-muted",
          "flex items-center justify-center",
          className,
        )}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        {...props}
      >
        {/* Video container (Agora play mode) */}
        {!useMediaStream && (
          <div
            ref={videoContainerRef}
            className={cn(
              "absolute inset-2 rounded-lg overflow-hidden",
              isMirrored && "scale-x-[-1]",
              showPlaceholder && "hidden",
            )}
          />
        )}

        {/* Video element (MediaStream mode) */}
        {useMediaStream && (
          <video
            ref={videoElementRef}
            autoPlay
            playsInline
            muted
            className={cn(
              "absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] rounded-lg",
              isMirrored && "scale-x-[-1]",
              showPlaceholder && "hidden",
            )}
            style={{ objectFit }}
          />
        )}

        {/* Placeholder */}
        {showPlaceholder && (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800 text-muted-foreground">
            {placeholder || (
              <div className="flex flex-col items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-slate-600/50 flex items-center justify-center">
                  <Video className="h-6 w-6" />
                </div>
                <p className="text-xs">Camera off</p>
              </div>
            )}
          </div>
        )}

        {/* Label overlay */}
        {showLabel && isPlaying && label && (
          <div className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2 py-1 text-xs text-white backdrop-blur-sm">
            {label}
          </div>
        )}

        {/* Mute/Unmute Control (hover overlay) */}
        {showMuteControl && onToggleMute && isPlaying && isHovering && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleMute();
              }}
              className={cn(
                "flex items-center justify-center rounded-full p-4 transition-all",
                "bg-black/60 hover:bg-black/80 text-white",
                "shadow-lg backdrop-blur-sm",
              )}
              aria-label={isVideoMuted ? "Unmute video" : "Mute video"}
            >
              {isVideoMuted ? (
                <VideoOff className="h-6 w-6" />
              ) : (
                <Video className="h-6 w-6" />
              )}
            </button>
          </div>
        )}
      </div>
    );
  },
);

LocalVideoPreview.displayName = "LocalVideoPreview";
