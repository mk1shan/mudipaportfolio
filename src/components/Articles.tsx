'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaMedium } from 'react-icons/fa6';
import Image from 'next/image';

interface Article {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  thumbnail: string;
  categories: string[];
}

const ArticleCard = ({ article, index }: { article: Article; index: number }) => {
  const [imageError, setImageError] = useState(false);
  const formattedDate = new Date(article.pubDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-[rgba(20,0,40,0.8)] backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 group hover:border-purple-500/50 transition-all duration-300"
    >
      {article.thumbnail && !imageError ? (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={article.thumbnail}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,0,40,0.8)] to-transparent opacity-60" />
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center">
          <FaMedium className="w-12 h-12 text-purple-400/50" />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2 hover:text-purple-400 transition-colors">
          <a href={article.link} target="_blank" rel="noopener noreferrer">
            {article.title}
          </a>
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {article.categories?.map((category) => (
            <span
              key={category}
              className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
        
        <p className="text-gray-300 mb-4 line-clamp-3">{article.content}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">{formattedDate}</span>
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2"
          >
            Read More 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/medium-articles');
        if (!response.ok) throw new Error('Failed to fetch articles');
        const data = await response.json();
        if (data.error) throw new Error(data.error);
        setArticles(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <section id="articles" className="min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Latest Articles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[rgba(20,0,40,0.8)] rounded-xl p-6 animate-pulse">
                <div className="h-48 bg-purple-900/30 rounded-lg mb-4" />
                <div className="h-6 bg-purple-900/30 rounded w-3/4 mb-4" />
                <div className="h-4 bg-purple-900/30 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="articles" className="min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Latest Articles
          </h2>
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mt-8">
            <p className="text-red-400">Unable to load articles: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (articles.length === 0) {
    return (
      <section id="articles" className="min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Latest Articles
          </h2>
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 mt-8">
            <p className="text-gray-400">No articles found. Check back soon!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="articles" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <FaMedium className="mr-3" />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Latest Articles
            </span>
          </h2>
          <p className="text-gray-400">Read my latest thoughts and insights</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={article.link} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}