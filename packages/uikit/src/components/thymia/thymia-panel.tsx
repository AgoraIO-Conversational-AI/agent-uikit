"use client";

import { cn } from "../../lib/utils";

interface SafetyData {
  level?: number | null;
  alert?: string | boolean;
  concerns?: string[];
  recommended_actions?: {
    for_agent?: string;
    for_human_reviewer?: string;
    urgency?: string;
  };
}

export interface ThymiaPanelProps {
  biomarkers: Record<string, number | null>;
  wellness: Record<string, number | null>;
  clinical: Record<string, number | null>;
  progress: Record<
    string,
    { speech_seconds: number; trigger_seconds: number; processing: boolean }
  >;
  safety: Record<string, unknown>;
  isConnected: boolean;
}

function formatName(key: string): string {
  return key
    .replace(/^symptom_/, "")
    .replace(/_probability$/, "")
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function isValidScore(value: number | null | undefined): value is number {
  return value !== null && value !== undefined && Number.isFinite(value);
}

function scoreColorText(value: number): string {
  if (value < 30) return "text-green-600 dark:text-green-400";
  if (value < 60) return "text-amber-600 dark:text-amber-400";
  return "text-red-600 dark:text-red-400";
}

// Categorize by known key names (confirmed from Thymia POLICY_RESULT data)
const EMOTION_KEYS = new Set([
  "angry",
  "disgusted",
  "fearful",
  "happy",
  "neutral",
  "other",
  "sad",
  "surprised",
]);
const WELLNESS_KEYS = new Set([
  "distress",
  "stress",
  "burnout",
  "fatigue",
  "low_self_esteem",
]);
const SKIP_KEYS = new Set(["<unk>", "unk", "interpretation"]);

function ScoreRow({ name, value }: { name: string; value: number | null }) {
  const valid = isValidScore(value);
  const pct = valid ? Math.round(value * 100) : null;
  return (
    <div className="flex items-center justify-between py-0.5">
      <span className="text-sm text-muted-foreground">
        {formatName(name)}
      </span>
      <span
        className={cn(
          "text-sm font-bold tabular-nums ml-2 shrink-0",
          pct !== null ? scoreColorText(pct) : "text-muted-foreground",
        )}
      >
        {pct !== null ? `${pct}%` : "\u2014"}
      </span>
    </div>
  );
}

function ScoreSection({
  title,
  entries,
  columns = 1,
}: {
  title: string;
  entries: [string, number | null][];
  columns?: number;
}) {
  if (entries.length === 0) return null;
  if (columns === 2) {
    const mid = Math.ceil(entries.length / 2);
    const col1 = entries.slice(0, mid);
    const col2 = entries.slice(mid);
    return (
      <div>
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
          {title}
        </h3>
        <div className="rounded border bg-background px-3 py-1.5">
          <div className="grid grid-cols-2 gap-x-3">
            <div>
              {col1.map(([n, v]) => (
                <ScoreRow key={n} name={n} value={v} />
              ))}
            </div>
            <div>
              {col2.map(([n, v]) => (
                <ScoreRow key={n} name={n} value={v} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
        {title}
      </h3>
      <div className="rounded border bg-background px-3 py-1.5">
        {entries.map(([name, value]) => (
          <ScoreRow key={name} name={name} value={value} />
        ))}
      </div>
    </div>
  );
}

const ALERT_COLORS: Record<string, string> = {
  none: "text-green-600 dark:text-green-400",
  monitor: "text-amber-600 dark:text-amber-400",
  professional_referral: "text-orange-600 dark:text-orange-400",
  crisis: "text-red-600 dark:text-red-400",
};

const ALERT_BG: Record<string, string> = {
  none: "bg-green-500/10 border-green-500/20",
  monitor: "bg-amber-500/10 border-amber-500/20",
  professional_referral: "bg-orange-500/10 border-orange-500/20",
  crisis: "bg-red-500/10 border-red-500/20",
};

const URGENCY_COLORS: Record<string, string> = {
  routine: "text-muted-foreground",
  within_week: "text-amber-600 dark:text-amber-400",
  within_48hrs: "text-orange-600 dark:text-orange-400",
  within_24hrs: "text-red-600 dark:text-red-400",
  immediate: "text-red-600 dark:text-red-400 font-bold",
};

function SafetySection({ safety }: { safety: SafetyData }) {
  const alert =
    typeof safety.alert === "string"
      ? safety.alert
      : safety.alert
        ? "monitor"
        : "none";
  const level = safety.level ?? 0;
  const actions = safety.recommended_actions;
  const concerns = safety.concerns || [];
  const alertColor = ALERT_COLORS[alert] || ALERT_COLORS.none;
  const alertBg = ALERT_BG[alert] || ALERT_BG.none;

  return (
    <div>
      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
        Safety Analysis
      </h3>
      <div className={cn("rounded border px-2.5 py-1.5 space-y-1.5", alertBg)}>
        {/* Level + Alert */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Level {level} —{" "}
            <span className={cn("font-semibold", alertColor)}>
              {formatName(alert)}
            </span>
          </span>
        </div>

        {/* Concerns */}
        {concerns.length > 0 && (
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">Concerns:</span> {concerns.join(", ")}
          </div>
        )}

        {/* Recommended actions */}
        {actions?.for_agent && (
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">Guidance:</span> {actions.for_agent}
          </div>
        )}
        {actions?.for_human_reviewer && (
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">Reviewer:</span>{" "}
            {actions.for_human_reviewer}
          </div>
        )}
        {actions?.urgency && (
          <div className="text-sm">
            <span className="text-muted-foreground font-medium">Urgency:</span>{" "}
            <span
              className={
                URGENCY_COLORS[actions.urgency] || "text-muted-foreground"
              }
            >
              {formatName(actions.urgency)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export function ThymiaPanel({
  biomarkers,
  progress,
  safety,
  isConnected,
}: ThymiaPanelProps) {
  const progressEntries = Object.entries(progress);

  // Categorize biomarkers by known keys
  const emotionEntries: [string, number | null][] = [];
  const wellnessEntries: [string, number | null][] = [];
  const apolloEntries: [string, number | null][] = [];

  for (const [name, value] of Object.entries(biomarkers)) {
    if (SKIP_KEYS.has(name) || !isValidScore(value)) continue;
    if (EMOTION_KEYS.has(name)) emotionEntries.push([name, value]);
    else if (WELLNESS_KEYS.has(name)) wellnessEntries.push([name, value]);
    else apolloEntries.push([name, value]); // everything else is apollo clinical
  }

  const hasAnyScores =
    emotionEntries.length > 0 ||
    wellnessEntries.length > 0 ||
    apolloEntries.length > 0;
  const safetyData =
    safety && Object.keys(safety).length > 0 ? (safety as SafetyData) : null;

  if (!isConnected) {
    return (
      <div className="flex h-full items-center justify-center p-6">
        <div className="text-center">
          <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-muted flex items-center justify-center">
            <svg
              className="h-6 w-6 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          </div>
          <p className="text-sm text-muted-foreground">
            Connect to start voice analysis
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col overflow-auto p-4 gap-3">
      {/* Progress Section — compact inline */}
      {progressEntries.length > 0 && (
        <div className="rounded border bg-background px-3 py-1.5">
          <div className="flex flex-wrap gap-x-4 gap-y-0.5">
            {progressEntries.map(([name, info]) => (
              <span
                key={name}
                className="text-sm text-muted-foreground leading-snug"
              >
                <span className="font-medium text-foreground">
                  {formatName(name)}
                </span>{" "}
                {info.speech_seconds.toFixed(1)}/{info.trigger_seconds}s
                {info.processing && (
                  <span className="ml-0.5 inline-block h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse align-middle" />
                )}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Safety Analysis — top priority */}
      {safetyData &&
        safetyData.level !== undefined &&
        safetyData.level !== null && <SafetySection safety={safetyData} />}

      {/* Biomarker Sections */}
      {hasAnyScores && (
        <>
          <ScoreSection title="Emotions" entries={emotionEntries} columns={2} />
          <ScoreSection title="Helios — Wellness" entries={wellnessEntries} />
          <ScoreSection
            title="Apollo — Clinical"
            entries={apolloEntries}
            columns={2}
          />
        </>
      )}

      {/* Waiting state */}
      {!hasAnyScores && progressEntries.length === 0 && (
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-2 h-8 w-8 rounded-full bg-muted flex items-center justify-center">
              <div className="h-3 w-3 rounded-full border-2 border-muted-foreground border-t-transparent animate-spin" />
            </div>
            <p className="text-sm text-muted-foreground">
              Waiting for voice data...
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Speak to begin analysis
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
