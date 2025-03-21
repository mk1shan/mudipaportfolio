declare module 'rss-parser' {
  interface CustomFeed {
    items: CustomItem[];
  }

  interface CustomItem {
    title: string;
    link: string;
    pubDate: string;
    content: string;
    'content:encoded'?: string;
    categories?: string[];
  }
}