const PREFIX = "[agora-agent-uikit]";

/**
 * Verbose logs are shown in development, or in production when the global
 * debug flag is set: window.__AGORA_UIKIT_DEBUG__ = true
 *
 * Warnings and errors always surface regardless of environment.
 */
const isVerbose = (): boolean =>
  (typeof process !== "undefined" && process.env.NODE_ENV !== "production") ||
  (typeof window !== "undefined" &&
    !!(window as unknown as Record<string, unknown>).__AGORA_UIKIT_DEBUG__);

export const debug = {
  log: (...args: unknown[]): void => {
    if (isVerbose()) console.debug(PREFIX, ...args);
  },
  warn: (...args: unknown[]): void => {
    console.warn(PREFIX, ...args);
  },
  error: (...args: unknown[]): void => {
    console.error(PREFIX, ...args);
  },
};
