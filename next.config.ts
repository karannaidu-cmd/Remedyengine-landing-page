import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats first; Next falls back automatically for older browsers.
    formats: ["image/avif", "image/webp"],
  },
  // Next 16 blocks cross-origin dev requests (JS chunks, /_next/image, HMR) by
  // default. This machine's LAN IP is allowlisted so the dev server also works
  // when opened via the network URL (not just localhost) — e.g. from a phone
  // on the same Wi-Fi, or a browser that resolved to the LAN address. Only
  // applies in `next dev`; production is unaffected. If your LAN IP changes,
  // update it here.
  allowedDevOrigins: ["192.168.29.103", "localhost", "127.0.0.1"],
  async redirects() {
    return [
      // Keep /book-demo canonical (SEO equity + breadcrumb schema); /demo aliases it.
      { source: "/demo", destination: "/book-demo", permanent: true },
    ];
  },
};

export default nextConfig;
