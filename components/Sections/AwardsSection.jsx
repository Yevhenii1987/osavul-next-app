'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export default function AwardsSection({ awardsData }) {
  // console.log(awardsData)
  const { awards, enableBlock } = awardsData;
  return (
    <>{enableBlock &&
      <section className="section section-awards">
        <div className="container">
          <div className="about-text-block flex justify-between max-md:flex-col">
            <motion.h2
              className="block-title w-2/6 max-md:w-full"
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              Our Awards
            </motion.h2>
            <motion.p
              className="page-title-caption w-4/6 max-md:w-full"
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              Our clients are industry leaders and change agents who believe in
              leveraging data, technology, and creativity to drive business
              growth. <br />
              <br />
              We seek out partners who believe in data-driven transformation and
              open collaboration and help them lead their industries. Some of our
              clients include:
            </motion.p>
          </div>
          <div className="awards-wrap w-full flex justify-center max-md:flex-col">
            {awards.map((item) => (
              <motion.div
                key={item.name}
                className="awards-item flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-200px 0px 0px 0px" }}
                transition={{ type: 'spring', delay: 0.2, duration: 0.3 }}
              >
                <Image src={item.img} alt=" " />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    }</>

  );
}
