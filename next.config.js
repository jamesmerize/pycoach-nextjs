/** @type {import('next').NextConfig} */
const repoName = 'pycoach-nextjs';
const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: isCustomDomain ? '' : `/${repoName}`,
  assetPrefix: isCustomDomain ? '' : `/${repoName}/`,
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
