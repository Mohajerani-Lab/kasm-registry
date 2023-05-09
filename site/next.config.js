/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Mohajerani Lab',
    description: 'The store for workspaces used in Mohajerani Lab, CCBN, University of Lethbridge.',
    icon: 'https://username.github.io/repositoryname/1.0/UofL_Logo_CMYK.svg',
    listUrl: 'https://mohajerani-lab.github.io/kasm-registry/',
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
