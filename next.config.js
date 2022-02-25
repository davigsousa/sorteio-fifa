/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')

const nextConfig = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  }
})

module.exports = nextConfig
