/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: [
      "images.pexels.com",
    ],
  },
}

module.exports = nextConfig