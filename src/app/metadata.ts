import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mudipa Kishan - Software Engineer Portfolio',
  description: 'Explore the work and projects of Mudipa Kishan, a dedicated Software Engineer specializing in web development, cloud technologies, and innovative solutions. Experienced in React, Node.js, AWS, and more.',
  keywords: [
    'Software Engineer',
    'Web Developer',
    'React Developer',
    'Full Stack Developer',
    'Sri Lanka',
    'AWS',
    'Cloud Computing',
    'Node.js',
    'TypeScript',
    'Portfolio'
  ],
  authors: [{ name: 'Mudipa Kishan', url: 'https://github.com/mk1shan' }],
  creator: 'Mudipa Kishan',
  publisher: 'Mudipa Kishan',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Mudipa Kishan - Software Engineer Portfolio',
    description: 'Dedicated Software Engineer specializing in web development and innovative technologies.',
    type: 'website',
    locale: 'en_US',
    images: [{
      url: '/api/og',
      width: 1200,
      height: 630,
      alt: 'Mudipa Kishan - Software Engineer',
    }],
    siteName: 'Mudipa Kishan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mudipa Kishan - Software Engineer Portfolio',
    description: 'Dedicated Software Engineer specializing in web development and innovative technologies.',
    images: ['/api/og'],
    creator: '@mudipakishan',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  alternates: {
    canonical: 'https://your-domain.com', // Add your domain
  },
}