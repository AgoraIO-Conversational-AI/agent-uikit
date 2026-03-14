import { defineConfig } from "vitest/config"

export default defineConfig({
  assetsInclude: ["**/*.lottie"],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test/setup.ts"],
  },
})
