'use client';

import BgImg from '@/assets/Img-hero-2x.jpg';
import BgImgMob from '@/assets/Img-hero-mob.jpg';
import ButtonLinks from '../UI/ButtonLinks';
import ButtonLink from '../UI/ButtonLink';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    }
  }, [isMobile, setIsMobile]);

  let content = (
    <>
      <div
        className="section-hero-bg"
      >
        <Image src={BgImgMob} priority={true} alt="Hero background" sizes="(max-width: 768px) 100vw, 740px" />
      </div>
      <div
        className="container flex justify-center items-center flex-col"
      >
        <h2 className="section-title">
          AI-powered platform for information environment assessment
        </h2>
        <p className="section-title-caption text-center">
          Osavul delivers an AI-powered software platform to analysts and
          decision-makers in businesses, governments, and civil society
          organizations.
        </p>
        <div>
          <ButtonLinks>
            <ButtonLink path={'/booking'} isActive={true} label="Go to booking form">
              Book demo
            </ButtonLink>
            <ButtonLink path={'/about'} isActive={false} label="Go to About page">
              Learn more
            </ButtonLink>
          </ButtonLinks>
        </div>
      </div>
    </>
  );

  if (!isMobile) {
    content = (
      <>
        <motion.div
          className="section-hero-bg"
          style={{ opacity: opacityImage, y: yImage }}
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image src={BgImg} priority={true} alt="Hero background" sizes="(max-width: 768px) 100vw, (max-width: 1440px) 1440px, 2880px" />
        </motion.div>
        <motion.div
          className="container flex justify-center items-center flex-col"
          style={{ y: yText }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0.4, 1] }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <h2 className="section-title">
            AI-powered platform for information environment assessment
          </h2>
          <p className="section-title-caption text-center">
            Osavul delivers an AI-powered software platform to analysts and
            decision-makers in businesses, governments, and civil society
            organizations.
          </p>
          <div>
            <ButtonLinks>
              <ButtonLink path={'/booking'} isActive={true} label="Go to booking form">
                Book demo
              </ButtonLink>
              <ButtonLink path={'/about'} isActive={false} label="Go to About page">
                Learn more
              </ButtonLink>
            </ButtonLinks>
          </div>
        </motion.div>
      </>
    );
  }

  const { scrollY } = useScroll();
  const opacityImage = useTransform(
    scrollY,
    [0, 200, 400, 600, 1000],
    [1, 0.8, 0.6, 0.4, 0.2]
  );
  const yText = useTransform(
    scrollY,
    [0, 300, 500, 700, 1000],
    [0, -10, -40, -70, -100]
  );
  const yImage = useTransform(
    scrollY,
    [0, 200, 400, 600, 1000],
    [0, 20, 40, 60, 80]
  );

  return (
    <section className="section-hero section">
      {content}

      {/* <motion.div
        className="section-hero-bg"
        style={{ opacity: opacityImage, y: yImage }}
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image src={BgImg} priority={true} alt="Hero background" sizes="(max-width: 768px) 100vw, (max-width: 1440px) 1440px, 2880px" />
      </motion.div>
      <motion.div
        className="container flex justify-center items-center flex-col"
        style={{ y: yText }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.2, 0.4, 1] }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <h2 className="section-title">
          AI-powered platform for information environment assessment
        </h2>
        <p className="section-title-caption text-center">
          Osavul delivers an AI-powered software platform to analysts and
          decision-makers in businesses, governments, and civil society
          organizations.
        </p>
        <div>
          <ButtonLinks>
            <ButtonLink path={'/booking'} isActive={true} label="Go to booking form">
              Book demo
            </ButtonLink>
            <ButtonLink path={'/about'} isActive={false} label="Go to About page">
              Learn more
            </ButtonLink>
          </ButtonLinks>
        </div>
      </motion.div> */}
    </section>
  );
}
