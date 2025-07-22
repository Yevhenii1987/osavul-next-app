'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export default function AdvantagesSection({ data }) {
  return (
    <section className="section-advantages section">
      <div className="container flex justify-center items-center flex-col">
        <motion.h2
          className="section-title"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          {data.sectionTitle}
        </motion.h2>
        <motion.p
          className="section-title-caption text-center"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          {data.sectionCaption}
        </motion.p>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="section-advantages-wrap flex"
        >
          <div className="advantages-stat">
            {data.stat.map((item, index) => (
              <div key={index} className="advantages-stat-item">
                <div className="num">{item.num}+</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="advantages-list grid grid-cols-2 gap-24 max-lg:gap-16">
            {data.adv.map((item, index) => (
              <div key={index} className="advantages-item">
                <div className="advantages-item-inner">
                  <div className="advantages-item-top">
                    <div className="advantages-item-icon">
                      <Image src={item.img} alt=" " />
                    </div>
                    <p className="advantages-item-title">{item.title}</p>
                  </div>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section >
  );
}
