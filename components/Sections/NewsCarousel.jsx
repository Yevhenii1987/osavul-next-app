'use client';

import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useState } from 'react';
import { getNews } from '@/lib/http';

export default function NewsCarousel({ news }) {
  const [newsArr, setNewsArr] = useState(news);
  const [newsTab, setNewsTab] = useState('all');
  const [isPending, setIsPending] = useState(false);

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
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="news-ui flex justify-between items-center w-full">
        <div className="news-links flex">
          <button
            className={`news-link ${newsTab === 'all' && 'active'}`}
            onClick={(e) => handleTabClick(e)}
            value="all"
          >
            All
          </button>
          <button
            className={`news-link ${newsTab === 'news' && 'active'}`}
            onClick={(e) => handleTabClick(e)}
            value="news"
          >
            News
          </button>
          <button
            className={`news-link ${newsTab === 'webinars' && 'active'}`}
            onClick={(e) => handleTabClick(e)}
            value="webinars"
          >
            Webinars
          </button>
          <button
            className={`news-link ${newsTab === 'blog' && 'active'}`}
            onClick={(e) => handleTabClick(e)}
            value="blog"
          >
            Blog
          </button>
        </div>
        <div className="slider-buttons max-md:hidden">
          <button
            className="slider-button slider-button--prev embla__prev"
            onClick={scrollPrev}
          ></button>
          <button
            className="slider-button slider-button--next embla__next"
            onClick={scrollNext}
          ></button>
        </div>
      </div>
      {isPending && <p>Fetching {newsTab}...</p>}
      {!isPending && (
        <div className="news-items embla" ref={emblaRef}>
          <div className="embla__container">
            {newsArr.map((item, index) => (
              <article key={index} className="news-item embla__slide">
                <div className="image">
                  <Image src={item.img} alt=" " />
                </div>
                <div className="descr">
                  <div className="descr-inner">
                    <div className="descr-top flex items-center">
                      <div className="tag">
                        <Link href="/blog">{item.tag}</Link>
                      </div>
                      <div className="date flex items-center max-lg:hidden">
                        {item.date}
                      </div>
                      {item.zoomLink && (
                        <div className="zoom max-lg:hidden">
                          <Link href={item.zoomLink}>ZOOM</Link>
                        </div>
                      )}
                    </div>
                    <div className="title">{item.title}</div>
                    <div className="more max-lg:hidden">
                      <Link href={item.link}>Read more</Link>
                    </div>
                    <div className="date-mob hidden max-lg:flex items-center">
                      <div className="date flex items-center">{item.date}</div>
                      {item.zoomLink && (
                        <div className="zoom">
                          <Link href={item.zoomLink}>ZOOM</Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
