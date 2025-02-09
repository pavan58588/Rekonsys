/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "pbs.twimg.com", "cdn.sanity.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = {
  ...nextConfig,
  images: {
    domains: ['localhost', 'cdn.sanity.io', 'pbs.twimg.com'], // Add the hostname here
  },
};
