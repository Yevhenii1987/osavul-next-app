'use client';

import Image from 'next/image';
import { getClients } from '@/lib/http';
import { motion } from 'motion/react';

export default function ClientsSection({ show = true }) {
  if (!show) {
    return;
  }

  const clients = getClients();

  return (
    <section className="section-clients section">
      <div className="container">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="section-clients-top flex justify-between w-full max-lg:flex-col"
        >
          <h3
            className="block-title w-7/12 max-lg:w-full"
          >
            We create genuine relationships and meaningful experiences with our
            clients
          </h3>
          <div
            className="block-text w-4/12 max-lg:w-full"
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
          </div>
        </motion.div>
        <div>
          <ul className="clients-list grid grid-cols-4 gap-6 max-md:grid-cols-2 max-md:gap-4">
            {clients.map((item) => (
              <motion.li
                key={item.name}
                className="clients-list-item flex justify-center items-center"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
                transition={{ delay: 0.1, duration: 0.4 }}
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
