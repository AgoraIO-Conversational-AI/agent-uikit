/**
 * Get the base path for the application
 * Returns empty string in development, or the configured base path in production
 */
export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || ""
}

/**
 * Get the Lottie files base path with the application's base path
 */
export function getLottieBasePath(): string {
  const base = getBasePath()
  return base ? `${base}/agora-uikit/lottie` : "/agora-uikit/lottie"
}
