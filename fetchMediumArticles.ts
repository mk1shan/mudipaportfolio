import axios from 'axios';
import { parseStringPromise } from 'xml2js';

interface Article {
    title: string;
    link: string;
    description: string;
    image: string;
}

export async function fetchMediumArticles(): Promise<Article[]> {
    const rssFeedUrl = 'https://medium.com/feed/@mudipakishanimayanga';

    try {
        const response = await axios.get(rssFeedUrl);
        const rssData = await parseStringPromise(response.data);

        const articles = rssData.rss.channel[0].item.map((item: any) => {
            const description = item.description[0];
            const imageMatch = description.match(/<img src="([^"]+)"/);
            const image = imageMatch ? imageMatch[1] : '';

            return {
                title: item.title[0],
                link: item.link[0],
                description: description.replace(/<[^>]+>/g, ''), // Strip HTML tags
                image,
            };
        });

        return articles;
    } catch (error) {
        console.error('Error fetching Medium articles:', error);
        return [];
    }
}
