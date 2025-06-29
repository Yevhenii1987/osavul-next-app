'use client';

import Image from 'next/image';
import { getClients } from '@/lib/http';
import { motion } from 'motion/react';

export default function ClientsSection() {
  const clients = getClients();

  return (
    <section className="section-clients section">
      <div className="container">
        <div className="section-clients-top flex justify-between w-full max-lg:flex-col">
          <motion.h3
            className="block-title w-7/12 max-lg:w-full"
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            We create genuine relationships and meaningful experiences with our
            clients
          </motion.h3>
          <motion.div
            className="block-text w-4/12 max-lg:w-full"
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <p>
              Our clients are industry leaders and change agents who believe in
              leveraging data, technology, and creativity to drive business
              growth.
            </p>
            <br />
            <p>
              We seek out partners who believe in data-driven transformation and
              open collaboration and help them lead their industries. Some of
              our clients include:
            </p>
          </motion.div>
        </div>
        <div>
          <ul className="clients-list grid grid-cols-4 gap-6 max-md:grid-cols-2 max-md:gap-4">
            {clients.map((item) => (
              <motion.li
                key={item.name}
                className="clients-list-item flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-200px 0px 0px 0px" }}
                transition={{ type: 'spring', delay: 0.2, duration: 0.3 }}
              >
                <Image src={item.logo} alt=" " />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
