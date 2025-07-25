'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export default function FeaturesSection({ features }) {
  return (
    <section className="section product-features">
      <div className="container">
        <div className="product-features-grid">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="product-feature"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-200px 0px 0px 0px" }}
              transition={{ type: 'spring', delay: 0.1, duration: 0.3 }}
            >
              <div className="product-feature-top">
                <div className="product-feature-icon">
                  <Image src={item.icon} alt=" " />
                </div>
                <h4 className="product-feature-title">{item.title}</h4>
              </div>
              <p className="product-feature-text">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
