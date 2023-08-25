/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    runtime: "experimental-edge",
  },
  eslint: {
      ignoreDuringBuilds: true,
  },
  images: {
      domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;