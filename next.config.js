/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["content-prod-live.cert.starbucks.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
