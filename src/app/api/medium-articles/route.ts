const Parser = require('rss-parser');
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const revalidate = 3600; // Revalidate every hour

interface MediumRSSItem {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  categories?: string[];
  'content:encoded'?: string;
}

type CustomFeed = {
  items: MediumRSSItem[];
}

const parser = new Parser();

export async function GET() {
  try {
    const feed = await parser.parseURL(`https://medium.com/feed/@mudipakishanimayanga`);
    
    const articles = feed.items.map((item: MediumRSSItem) => {
      // Extract the first image from the content if available
      const thumbnail = item['content:encoded']?.match(/<img[^>]+src="([^">]+)"/)?.[1] || '';
      
      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        content: item.content,
        thumbnail,
        categories: item.categories || []
      };
    });

    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}