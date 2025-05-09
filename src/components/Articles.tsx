'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaMedium } from 'react-icons/fa6';

interface Article {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  thumbnail: string;
  categories: string[];
}

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/medium-articles');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setArticles(data);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError(err instanceof Error ? err.message : 'Failed to load articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-purple-200/20 rounded w-60 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-purple-900/20 rounded-xl p-6">
                  <div className="h-48 bg-purple-200/20 rounded-lg mb-4"></div>
                  <div className="h-6 bg-purple-200/20 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-purple-200/20 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <FaMedium className="mr-3" />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Latest Articles
            </span>
          </h2>
          <div className="text-red-400 mt-4">
            <p>Error loading articles: {error}</p>
            <p className="mt-2">Please try again later or visit my Medium profile directly:</p>
            <a
              href="https://medium.com/@mudipakishanimayanga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors mt-2 inline-block"
            >
              View on Medium →
            </a>
          </div>
        </div>
      </section>
    );
  }

  if (articles.length === 0) {
    return (
      <section className="min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <FaMedium className="mr-3" />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Latest Articles
            </span>
          </h2>
          <p className="text-gray-400 mt-4">No articles found. Please check back later!</p>
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
            <motion.article
              key={article.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[rgba(20,0,40,0.8)] backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 group hover:border-purple-500/50 transition-all"
            >
              <div className="p-6">
                {article.thumbnail && (
                  <div className="relative h-48 overflow-hidden mb-4 rounded-lg">
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.categories?.map((category) => (
                    <span
                      key={category}
                      className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">
                    {new Date(article.pubDate).toLocaleDateString()}
                  </span>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
