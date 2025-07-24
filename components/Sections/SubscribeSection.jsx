'use client';

import ButtonDark from '../UI/ButtonDark';
import { bookDemo } from '@/lib/actions';
import { motion } from 'motion/react';

export default function SubscribeSection() {
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
          Subscribe to stay informed about all releases and updates!
        </h2>
        <form className="input-sub flex" action={bookDemo}>
          <label className="flex flex-nowrap w-full">
            <input type="email" placeholder="Write your email" required />
          </label>
          <ButtonDark type="submit">Book demo</ButtonDark>
        </form>
      </motion.div>
    </section>
  );
}
