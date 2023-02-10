/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["links.papareact.com","images.pexels.com"]
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
