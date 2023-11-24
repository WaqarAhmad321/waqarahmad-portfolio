/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { dev, isServer }) {
    if (!dev && !isServer) {
      config.devtool = "source-map";
    }

    return config;
  },
};

module.exports = nextConfig;
