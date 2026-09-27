import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GoDaddy shared hosting / cPanel FTP upload
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
