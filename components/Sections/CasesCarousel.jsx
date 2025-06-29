'use client';

import Image from 'next/image';
import ClassNames from 'embla-carousel-class-names';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import Link from 'next/link';

export default function CasesCarousel({ cases }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      slidesToScroll: 1,
    },
    [ClassNames()]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="slider-buttons">
        <button
          className="slider-button slider-button--prev embla__prev"
          onClick={scrollPrev}
        ></button>
        <button
          className="slider-button slider-button--next embla__next"
          onClick={scrollNext}
        ></button>
      </div>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {cases.map((item, index) => (
            <div
              key={index}
              className="embla__slide cases-item flex justify-end items-stretch"
            >
              <div className="cases-item-descr">
                <h3 className="cases-item-title block-title">
                  <Link href={`/cases/${item.slug}`}>{item.title}</Link>
                </h3>
                <div className="cases-item-image hidden max-lg:block">
                  <Image src={item.img} alt=" " />
                </div>
                <div className="cases-item-bottom flex justify-between w-full">
                  {item.list.map((listItem, index) => (
                    <div key={index} className="cases-list-item">
                      <div className="cases-list-item-top">
                        <div className="icon">
                          <Image src={listItem.icon} alt=" " />
                        </div>
                        <p className="title">{listItem.title}</p>
                      </div>
                      <p>{listItem.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cases-item-image max-lg:hidden">
                <Image src={item.img} alt=" " />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
