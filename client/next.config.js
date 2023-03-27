/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "ui-avatars.com",
      "cdn.sanity.io",
      "flagsapi.com",
    ],
  },
};

module.exports = nextConfig;
