/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "pbs.twimg.com", "cdn.sanity.io", "images.unsplash.com"],
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
