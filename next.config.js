/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // ignore typescript errors
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
