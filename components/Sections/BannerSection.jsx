'use client';

import Link from 'next/link';
import ButtonDark from '../UI/ButtonDark';
import { motion } from 'motion/react';

export default function BannerSection() {
  return (
    <section className="section-dark section">
      <motion.div
        className="container flex flex-col items-center"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <h2 className="section-title">
          Excited to work together on your next project?
        </h2>
        <ButtonDark>
          <Link href={`/booking`}>Book demo</Link>
        </ButtonDark>
      </motion.div>
    </section>
  );
}
