import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Disable app directory since we're using pages
  experimental: {},
  images: {
    unoptimized: true,
  }
};

export default nextConfig;