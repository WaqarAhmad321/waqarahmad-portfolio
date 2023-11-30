/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    transpilePackages: [
      "problematic-package",
      "other-problematic-package",
      "etc",
      "...",
    ],
  },
};

module.exports = nextConfig;
