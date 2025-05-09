import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const revalidate = 3600; // Cache for 1 hour

// Use CommonJS require for rss-parser
const Parser = require('rss-parser');

interface CustomItem {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  categories?: string[];
  'content:encoded'?: string;
}

// Create parser instance
const parser = new Parser();

const MEDIUM_USERNAME = '@mudipakishanimayanga';
const MEDIUM_FEED_URL = `https://medium.com/feed/${MEDIUM_USERNAME}`;

export async function GET() {
  try {
    // Add cache control headers
    const headers = {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    };

    const feed = await parser.parseURL(MEDIUM_FEED_URL);
    
    if (!feed.items || !Array.isArray(feed.items)) {
      throw new Error('Invalid feed format');
    }

    const articles = feed.items.map((item: any) => {
      // Extract the first image from the content if available
      const thumbnail = item['content:encoded']?.match(/<img[^>]+src="([^">]+)"/)?.[1] || '';
      
      // Clean up the content by removing HTML tags and limiting length
      const cleanContent = item.content
        ?.replace(/<[^>]+>/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 200) + '...';

      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        content: cleanContent,
        thumbnail,
        categories: item.categories || []
      };
    });

    return NextResponse.json(articles, { headers });
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    
    // Return a more detailed error response
    return NextResponse.json(
      { 
        error: 'Failed to fetch articles',
        message: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-store'
        }
      }
    );
  }
}
