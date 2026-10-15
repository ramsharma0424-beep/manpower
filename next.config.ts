import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // CoverImage uses 65 for priority photos and 60 for the rest.
    qualities: [60, 65, 75],
    // 390 covers iPhone 12/13/14 Pro portrait; 414 covers Plus/Max.
    deviceSizes: [390, 414, 640, 828, 1080, 1200, 1920],
    minimumCacheTTL: 2592000,
  },
  async redirects() {
    return [
      {
        source: "/clients",
        destination: "/",
        permanent: true,
      },
      // Common search spelling — consolidate SEO equity on /locations/gurugram
      {
        source: "/locations/gurgaon",
        destination: "/locations/gurugram",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
