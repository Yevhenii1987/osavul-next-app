'use client';

import Image from 'next/image';
import logo from '@/assets/osavul-logo.svg';
import { getNews } from '@/lib/http';
import NewsCarousel from './NewsCarousel';
import { motion } from 'motion/react';

export default async function NewsSection() {
  const { news } = await getNews();

  return (
    <section className="section-news section">
      <div className="container flex justify-center items-center flex-col">
        <hgroup className="section-title-group flex justify-center items-center flex-col">
          <motion.h2
            className="section-title"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Latest articles <br /> about
            <Image src={logo} className="logo" alt="osavul" />
          </motion.h2>
          <motion.p
            className="section-title-caption text-center"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Osavul leverages AI-driven technology to protect organizations <br />{' '}
            from various information threats.
          </motion.p>
        </hgroup>
        <motion.div
          className="section-news-wrap w-full"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <NewsCarousel news={news} />
        </motion.div>
      </div>
    </section>
  );
}
