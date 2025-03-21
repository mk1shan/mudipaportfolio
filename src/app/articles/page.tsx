'use client';

import React, { useEffect, useState } from 'react';
import { fetchMediumArticles } from '../../../fetchMediumArticles';

interface Article {
    title: string;
    link: string;
    description: string;
    image: string;
}

export default function ArticlesPage() {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const loadArticles = async () => {
            const fetchedArticles = await fetchMediumArticles();
            setArticles(fetchedArticles);
        };

        loadArticles();
    }, []);

    return (
        <div>
            <h1>Articles</h1>
            <div>
                {articles.map((article, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <h2>{article.title}</h2>
                        <a href={article.link} target="_blank" rel="noopener noreferrer">
                            <img src={article.image} alt={article.title} style={{ maxWidth: '100%' }} />
                        </a>
                        <p>{article.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}