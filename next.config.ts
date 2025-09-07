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
    domains: ["res.cloudinary.com", "assets.grok.com"],
  },
};

export default nextConfig;
