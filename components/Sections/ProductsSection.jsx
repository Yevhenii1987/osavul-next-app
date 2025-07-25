'use client';

import ButtonLinks from '@/components/UI/ButtonLinks';
import ButtonLink from '@/components/UI/ButtonLink';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function ProductsSection({ products }) {
  return (
    <section className="section-products section">
      <div className="container flex justify-center items-center flex-col">
        <hgroup className="section-title-group flex justify-center items-center flex-col">
          <motion.h2
            className="section-title"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Our Highly <br /> effective products
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
        </hgroup>

        <div className="section-products-wrap w-full">
          {products.map((prod) => (
            <motion.article
              key={prod.id}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="section-products-item w-full flex justify-between items-center max-md:flex-col"
            >
              <div
                className="products-item-img w-1/2 max-lg:w-2/5 max-md:w-full"
              >
                <Image src={prod.image} alt=" " />
              </div>
              <div
                className="products-item-descr flex flex-col w-1/2 max-lg:w-3/5 max-md:w-full"
              >
                <h3 className="block-title">{prod.title}</h3>
                <p
                  className="block-title-caption"
                  dangerouslySetInnerHTML={{ __html: prod.text }}
                ></p>
                <ul className="block-list">
                  {prod.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <ButtonLinks>
                  <ButtonLink path={prod.orderLink} isActive={true}>
                    Get started
                  </ButtonLink>
                  <ButtonLink path={`/products/${prod.slug}`} isActive={false}>
                    See how it works
                  </ButtonLink>
                </ButtonLinks>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
