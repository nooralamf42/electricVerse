import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
    unoptimized: true,
    domains: ["res.cloudinary.com", "assets.grok.com"],
  },
};

export default nextConfig;
