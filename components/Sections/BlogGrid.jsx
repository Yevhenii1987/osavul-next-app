'use client'

import { getArticles } from '@/lib/http';
import NewsCard from './NewsCard';
import { useState } from 'react';

export default function BlogGrid({ articles, pageNum, isFirstPage, isLastPage }) {
  const [articlesTab, setArticlesTab] = useState('all');
  const [articlesArr, setArticlesArr] = useState(articles);
  const [page, setPage] = useState(pageNum);
  const [isFirst, setIsFirst] = useState(isFirstPage);
  const [isLast, setIsLast] = useState(isLastPage);
  const [isPending, setIsPending] = useState(false);

  async function handleTabClick(e) {
    setArticlesTab(e.target.value);
    setIsPending(true);
    const { articles, pageNum, isFirstPage, isLastPage } = await getArticles(articlesTab);
    setIsPending(false);
    setArticlesArr(articles);
    setPage(pageNum);
    setIsFirst(isFirstPage);
    setIsLast(isLastPage);
  }

  async function handlePrev() {
    if (!isFirst) {
      setIsPending(true);
      const { articles, pageNum, isFirstPage, isLastPage } = await getArticles(articlesTab, page - 1);
      setIsPending(false);
      setArticlesArr(articles);
      setPage(pageNum);
      setIsFirst(isFirstPage);
      setIsLast(isLastPage);
    }
  }

  async function handleNext() {
    if (!isLast) {
      setIsPending(true);
      const { articles, pageNum, isFirstPage, isLastPage } = await getArticles(articlesTab, page + 1);
      setIsPending(false);
      setArticlesArr(articles);
      setPage(pageNum);
      setIsFirst(isFirstPage);
      setIsLast(isLastPage);
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

      </div>
    </section>
  );
}
