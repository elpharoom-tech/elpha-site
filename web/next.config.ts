import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost", "192.168.18.21"],
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
