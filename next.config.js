/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Frame-Options", value: "DENY" }],
      },
    ];
  },
};

module.exports = nextConfig;
