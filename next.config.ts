import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upplulzyshwzlwrohekm.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "api.promiedos.com.ar",
        pathname: "/images/team/**",
      },
    ],
  },
};

export default nextConfig;
