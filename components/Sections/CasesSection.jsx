'use client';

import { getCases } from '@/lib/http';
import CasesCarousel from './CasesCarousel';
import { motion } from 'motion/react';

export default async function CasesSection() {
  const casesData = await getCases();
  const { cases, enableBlock } = casesData;


  return (
    <>{enableBlock &&
      <section className="section-cases section">
        <div className="container flex justify-center items-center flex-col">
          <motion.h2
            className="section-title"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Our Cases
          </motion.h2>
          <motion.p
            className="section-title-caption text-center"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Osavul leverages AI-driven technology to protect organizations <br />
            from various information threats.
          </motion.p>

          <div className="section-cases-wrap w-full">
            <motion.div
              className="section-cases-inner"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <CasesCarousel cases={cases} />
            </motion.div>
          </div>
        </div>
      </section>
    }</>

  );
}
