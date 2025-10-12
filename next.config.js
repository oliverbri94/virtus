/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  // Aquí es donde le decimos a Next.js que nuestra web es bilingüe
  i18n,
}

module.exports = nextConfig