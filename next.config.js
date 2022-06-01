/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://us-central1-asked-chul0721.cloudfunctions.net/asked/:path*'
      }
    ]
  }
}

module.exports = nextConfig
