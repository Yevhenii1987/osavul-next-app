'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useState } from 'react';
import { getNews } from '@/lib/http';
import ButtonArrow from '../UI/ButtonArrow';
import NewsCard from './NewsCard';

export default function NewsCarousel({ news }) {
  const [newsArr, setNewsArr] = useState(news);
  const [newsTab, setNewsTab] = useState('all');
  const [isPending, setIsPending] = useState(false);
  const [isPrev, setIsPrev] = useState(false);
  const [isNext, setIsNext] = useState(true);

  async function handleTabClick(e) {
    setNewsTab(e.target.value);
    setIsPending(true);
    const { news, newsTag } = await getNews(newsTab);
    setIsPending(false);
    setNewsArr(news);
    console.log(newsTag);
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(max-width: 768px)': { axis: 'y' },
    },
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
    setIsPrev(emblaApi.canScrollPrev());
    setIsNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
    setIsPrev(emblaApi.canScrollPrev());
    setIsNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  return (
    <>
      <div className="news-ui flex justify-between items-center w-full">
        <div className="news-links flex">
          <button
            className={`news-link ${newsTab === 'all' && 'active'}`}
            onClick={(e) => handleTabClick(e)}
            value="all"
            aria-label="View all"
          >
            All
          </button>
          <button
            className={`news-link ${newsTab === 'news' && 'active'}`}
            onClick={(e) => handleTabClick(e)}
            value="news"
            aria-label="View news"
          >
            News
          </button>
          <button
            className={`news-link ${newsTab === 'webinars' && 'active'}`}
            onClick={(e) => handleTabClick(e)}
            value="webinars"
            aria-label="View webinars"
          >
            Webinars
          </button>
          <button
            className={`news-link ${newsTab === 'blog' && 'active'}`}
            onClick={(e) => handleTabClick(e)}
            value="blog"
            aria-label="View blog"
          >
            Blog
          </button>
        </div>
        <div className="slider-buttons max-md:hidden">
          {/* <button
            className={`${isPrev && 'active'} slider-button slider-button--prev embla__prev`}
            onClick={scrollPrev}
          ></button>
          <button
            className={`${isNext && 'active'} slider-button slider-button--next embla__next`}
            onClick={scrollNext}
          ></button> */}
          <ButtonArrow
            classes={`${isPrev && 'active'} slider-button slider-button--prev embla__prev`}
            onClick={scrollPrev}
          ></ButtonArrow>
          <ButtonArrow
            classes={`${isNext && 'active'} slider-button slider-button--next embla__next`}
            onClick={scrollNext}
          ></ButtonArrow>
        </div>
      </div>
      {isPending && <p>Fetching {newsTab}...</p>}
      {!isPending && (
        <div className="news-items embla" ref={emblaRef}>
          <div className="embla__container">
            {newsArr.map((item, index) => (
              <NewsCard key={index} classes="embla__slide" newsItem={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
