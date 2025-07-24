'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function BannerSection() {
  return (
    <section className="section-dark section">
      <motion.div
        className="container flex flex-col items-center"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <h2 className="section-title">
          Excited to work together on your next project?
        </h2>

        <Link href={`/booking`} className='button-dark'>Book demo</Link>

      </motion.div>
    </section>
  );
}
