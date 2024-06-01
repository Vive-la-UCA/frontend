/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/admin-front',
  assetPrefix: '/admin-front/',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      },
      {
        protocol: 'http',
        hostname: '**'
      }
    ]
  }
}

export default nextConfig
