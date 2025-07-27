'use client';

import Image from 'next/image';
import ClassNames from 'embla-carousel-class-names';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useState } from 'react';
import Link from 'next/link';
import ButtonArrow from '../UI/ButtonArrow';

export default function CasesCarousel({ cases }) {
  const [isPrev, setIsPrev] = useState(false);
  const [isNext, setIsNext] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      slidesToScroll: 1,
    },
    [ClassNames()]
  );

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
      <div className="slider-buttons">
        <ButtonArrow
          classes={`${isPrev && 'active'} slider-button slider-button--prev embla__prev`}
          label="Previous slide button"
          onClick={scrollPrev}
        ></ButtonArrow>
        <ButtonArrow
          classes={`${isNext && 'active'} slider-button slider-button--next embla__next`}
          label="Next slide button"
          onClick={scrollNext}
        ></ButtonArrow>
      </div>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {cases.map((item, index) => (
            <article
              key={index}
              className="embla__slide cases-item flex justify-end items-stretch"
            >
              <div className="cases-item-descr">
                <h3 className="cases-item-title block-title">
                  <Link href={`/cases/${item.slug}`}>{item.title}</Link>
                </h3>
                <div className="cases-item-image hidden max-lg:block">
                  <Image src={item.img} alt={item.title} />
                </div>
                <div className="cases-item-bottom flex justify-between w-full">
                  {item.list.map((listItem, index) => (
                    <div key={index} className="cases-list-item">
                      <div className="cases-list-item-top">
                        <div className="icon">
                          <Image src={listItem.icon} alt="icon" />
                        </div>
                        <p className="title">{listItem.title}</p>
                      </div>
                      <p>{listItem.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cases-item-image max-lg:hidden">
                <Image src={item.img} alt={item.title} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
