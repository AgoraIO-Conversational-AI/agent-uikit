/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  outputFileTracingRoot: new URL("../../", import.meta.url).pathname,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
}

export default nextConfig
