/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    transpilePackages: ["resend"],
  },
};

module.exports = nextConfig;
