'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import ButtonArrow from '../UI/ButtonArrow';
import SpeakerCard from './SpeakerCard';

export default function SpeakersCarousel({ speakers }) {
  const [isPrev, setIsPrev] = useState(false);
  const [isNext, setIsNext] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [selectedSnap, setSelectedSnap] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

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
    setCurrentSlide(emblaApi.selectedScrollSnap() + 1);
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
    setIsPrev(emblaApi.canScrollPrev());
    setIsNext(emblaApi.canScrollNext());
    setCurrentSlide(emblaApi.selectedScrollSnap() + 1);
  }, [emblaApi]);

  const updateScrollSnapState = useCallback((emblaApi) => {
    setSnapCount(emblaApi.scrollSnapList().length)
    setSelectedSnap(emblaApi.selectedScrollSnap())
  }, []);

  useEffect(() => {
    if (!emblaApi) return

    updateScrollSnapState(emblaApi)
    emblaApi.on('select', updateScrollSnapState)
    emblaApi.on('reInit', updateScrollSnapState)
  }, [emblaApi, updateScrollSnapState]);

  return (
    <section className="section-speakers">
      <div className="speakers-top flex justify-between items-center w-full relative">
        <h2 className="section-title">Speakers</h2>
        <div className="slider-buttons max-md:hidden">
          <ButtonArrow
            classes={`${isPrev && 'active'
              } slider-button slider-button--prev embla__prev`}
            name="Previous slide button"
            onClick={scrollPrev}
          ></ButtonArrow>
          <div className="slides-num flex items-center justify-center">
            {/* <span className='slides-num-current'>{currentSlide}</span>&nbsp;/&nbsp;<span className='slides-num-all'>{speakers.length - 1}</span> */}

            <span className='slides-num-current'>{selectedSnap + 1}</span>&nbsp;/&nbsp;<span className='slides-num-all'>{snapCount}</span>
          </div>
          <ButtonArrow
            classes={`${isNext && 'active'
              } slider-button slider-button--next embla__next`}
            name="Next slide button"
            onClick={scrollNext}
          ></ButtonArrow>
        </div>
      </div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {speakers.map((item, index) => (
            <SpeakerCard key={index} classes="embla__slide" speaker={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
