/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Mohajerani Lab',
    description: 'The official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://mohajerani-lab.github.io/kasm-registry/1.0/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
