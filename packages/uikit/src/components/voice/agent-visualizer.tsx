"use client";

import * as React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { cn } from "../../lib/utils";
import ambientSrc from "../../assets/lottie/ambient.lottie";
import analyzingSrc from "../../assets/lottie/analyzing.lottie";
import disconnectedSrc from "../../assets/lottie/disconnected.lottie";
import joiningSrc from "../../assets/lottie/joining.lottie";
import listeningsrc from "../../assets/lottie/listening.lottie";
import notJoinedSrc from "../../assets/lottie/not-joined.lottie";
import talkingSrc from "../../assets/lottie/talking.lottie";

export type AgentVisualizerState =
  | "not-joined"
  | "joining"
  | "ambient"
  | "listening"
  | "analyzing"
  | "talking"
  | "disconnected";

export type AgentVisualizerSize = "sm" | "md" | "lg";

export interface AgentVisualizerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current state of the agent visualizer. */
  state: AgentVisualizerState;

  /**
   * Size of the visualizer.
   * @default "md"
   */
  size?: AgentVisualizerSize;

  /**
   * Override the animation source for one or more states. Accepts any URL or
   * data URL accepted by DotLottieReact's `src` prop. Bundled animations are
   * used for any state not overridden.
   * @example { talking: "https://cdn.example.com/custom-talking.lottie" }
   */
  lottiePaths?: Partial<Record<AgentVisualizerState, string>>;
}

// Bundled animation data URLs — no external files or CDN required.
const bundledAnimations: Record<AgentVisualizerState, string> = {
  "not-joined": notJoinedSrc,
  joining: joiningSrc,
  ambient: ambientSrc,
  listening: listeningsrc,
  analyzing: analyzingSrc,
  talking: talkingSrc,
  disconnected: disconnectedSrc,
};

const stateToText: Record<AgentVisualizerState, string> = {
  "not-joined": "Not Joined",
  joining: "Joining",
  ambient: "Ambient",
  listening: "Listening",
  analyzing: "Analyzing",
  talking: "Talking",
  disconnected: "Disconnected",
};

const sizeClasses: Record<
  AgentVisualizerSize,
  { container: string; text: string }
> = {
  sm: {
    container: "w-32 h-32",
    text: "text-sm",
  },
  md: {
    container: "w-48 h-48",
    text: "text-base",
  },
  lg: {
    container: "w-64 h-64",
    text: "text-lg",
  },
};

export const AgentVisualizer = React.forwardRef<
  HTMLDivElement,
  AgentVisualizerProps
>(
  (
    {
      state,
      size = "md",
      lottiePaths,
      className,
      ...props
    },
    ref,
  ) => {
    const displayText = stateToText[state];
    const sizeConfig = sizeClasses[size];
    const lottieSrc = lottiePaths?.[state] ?? bundledAnimations[state];

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center gap-4",
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            "flex items-center justify-center",
            sizeConfig.container,
          )}
        >
          <DotLottieReact
            src={lottieSrc}
            loop
            autoplay
            className="h-full w-full"
          />
        </div>
        {displayText && (
          <p
            className={cn(
              "text-foreground text-center font-medium",
              sizeConfig.text,
            )}
          >
            {displayText}
          </p>
        )}
      </div>
    );
  },
);

AgentVisualizer.displayName = "AgentVisualizer";
