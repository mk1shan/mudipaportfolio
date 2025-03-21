/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'cdn-images-1.medium.com', 'miro.medium.com'],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  swcMinify: true,
  poweredByHeader: false,
  generateEtags: true
};

export default nextConfig;