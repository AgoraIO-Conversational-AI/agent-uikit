import { defineConfig } from "tsup"

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "session/index": "src/session/index.ts",
    "rtc/index": "src/rtc/index.ts",
  },
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "agora-rtc-react",
    "agora-rtm-sdk",
    "agora-agent-client-toolkit",
    "agora-agent-client-toolkit-react",
  ],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    }
    options.loader = {
      ...options.loader,
      ".lottie": "dataurl",
    }
  },
})
