'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ButtonLinks from '@/components/UI/ButtonLinks';
import ButtonLink from '@/components/UI/ButtonLink';
import { motion } from 'motion/react';

export default function ProductsFeaturesSection({ features }) {
  const path = usePathname();

  return (
    <section className="section-products section">
      <div className="container flex justify-center items-center flex-col">
        <div className="section-products-wrap w-full">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="section-products-item w-full flex justify-between items-center max-md:flex-col"
            >
              <motion.div
                className="products-item-img w-1/2 max-lg:w-2/5 max-md:w-full"
                initial={{ x: -300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <Image src={feature.image} alt=" " />
              </motion.div>
              <motion.div
                className="products-item-descr flex flex-col w-1/2 max-lg:w-3/5 max-md:w-full"
                initial={{ x: 300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <h3 className="block-title">{feature.title}</h3>
                <p
                  className="block-title-caption"
                  dangerouslySetInnerHTML={{ __html: feature.text }}
                ></p>
                <ul className="block-list">
                  {feature.list &&
                    feature.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
                <ButtonLinks>
                  <ButtonLink path={feature.orderLink} isActive={true}>
                    Get started
                  </ButtonLink>
                  <ButtonLink path={`${path}/${feature.slug}`} isActive={false}>
                    See how it works
                  </ButtonLink>
                </ButtonLinks>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
