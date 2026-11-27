import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      // Homepage serves the v11.4 static site
      beforeFiles: [{ source: "/", destination: "/v11/index.html" }],
      // Other v11 pages and assets (blog.html, banana-assets/..., etc.) resolve under /v11/
      // Real app routes (Paktalad pages, /musicforbrand) are matched before this fallback.
      afterFiles: [{ source: "/:path*", destination: "/v11/:path*" }],
    };
  },
};

export default nextConfig;
