import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
}

const defaultSEO = {
  title: 'Mudipa Kishan - Portfolio',
  description: 'Welcome to Mudipa Kishan\'s portfolio website showcasing projects, skills, and experience in software development.',
  keywords: ['portfolio', 'software developer', 'web development', 'Mudipa Kishan'],
  ogImage: '/og-image.jpg',
  ogType: 'website',
  twitterCard: 'summary_large_image',
};

export default function SEO({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  ogImage = defaultSEO.ogImage,
  ogType = defaultSEO.ogType,
  twitterCard = defaultSEO.twitterCard,
  noIndex = false,
  canonicalUrl,
}: SEOProps) {
  const router = useRouter();
  const url = canonicalUrl || `https://mudipakishan.com${router.asPath}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Mudipa Kishan Portfolio" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="author" content="Mudipa Kishan" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Mudipa Kishan',
            url: 'https://mudipakishan.com',
            jobTitle: 'Software Developer',
            sameAs: [
              // Add your social media profiles here
              // 'https://github.com/yourusername',
              // 'https://linkedin.com/in/yourusername',
            ],
          }),
        }}
      />
    </Head>
  );
} 
