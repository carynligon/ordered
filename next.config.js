/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.vox-cdn.com",
      },
      {
        protocol: "https",
        hostname: "assets.bonappetit.com",
      },
      {
        protocol: "https",
        hostname: "resizer.otstatic.com",
      },
      {
        protocol: "https",
        hostname: "d2u8towkwolubl.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "keepaustineatin.com",
      },
    ],
  },
};

module.exports = nextConfig;
