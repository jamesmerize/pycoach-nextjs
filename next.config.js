/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: '/pycoach-nextjs',
  assetPrefix: '/pycoach-nextjs/',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
