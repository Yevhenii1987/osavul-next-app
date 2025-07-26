'use client'

import { getArticles } from '@/lib/http';
import NewsCard from './NewsCard';
import { useState, useEffect } from 'react';
import Pagination from './Pagination';

export default function BlogGrid({ articles, pageNum, pagesCount }) {
  const [articlesTab, setArticlesTab] = useState('all');
  const [articlesArr, setArticlesArr] = useState(articles);
  const [page, setPage] = useState(pageNum);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      setIsPending(true);
      const { articles } = await getArticles(articlesTab, page);
      setIsPending(false);
      setArticlesArr(articles);
      console.log(`state page: ${page}`);
    }
    fetchArticles();
  }, [page, articlesTab]);

  function handleTabClick(e) {
    setArticlesTab(e.target.value);
    setPage(1);
  }

  function handlePrev() {
    if (page !== 1) {
      setPage((prevState) => prevState - 1);
    }
  }

  function handleNext() {
    if (page < pagesCount) {
      setPage((prevState) => prevState + 1);
    }
  }
  return (
    <section className="section blog-wrap">
      <div className="container">
        <div className="news-ui flex justify-between items-center w-full">
          <div className="news-links flex">
            <button
              className={`news-link ${articlesTab === 'all' && 'active'}`}
              onClick={(e) => handleTabClick(e)}
              value="all"
            >
              All
            </button>
            <button
              className={`news-link ${articlesTab === 'news' && 'active'}`}
              onClick={(e) => handleTabClick(e)}
              value="news"
            >
              News
            </button>
            <button
              className={`news-link ${articlesTab === 'webinars' && 'active'}`}
              onClick={(e) => handleTabClick(e)}
              value="webinars"
            >
              Webinars
            </button>
            <button
              className={`news-link ${articlesTab === 'blog' && 'active'}`}
              onClick={(e) => handleTabClick(e)}
              value="blog"
            >
              Blog
            </button>
          </div>
        </div>
        {isPending && <p>Fetching {articlesTab}...</p>}
        {!isPending && (
          <div className="blog_grid flex flex-wrap justify-between max-lg:flex-col">
            {articlesArr.map((article, index) => (
              <NewsCard key={index} newsItem={article} />
            ))}
          </div>
        )}
        <Pagination current={page} pagesCount={pagesCount} onPrev={handlePrev} onNext={handleNext} />
      </div>
    </section>
  );
}
