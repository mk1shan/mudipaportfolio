/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-**',
      }
    ],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  swcMinify: true,
  poweredByHeader: false,
  generateEtags: true,
  optimizeFonts: true
};

export default nextConfig;