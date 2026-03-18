import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [
    {
      name: "mock-lottie",
      transform(_code: string, id: string) {
        if (id.endsWith(".lottie")) {
          return `export default ""`
        }
      },
    },
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test/setup.ts"],
  },
})
