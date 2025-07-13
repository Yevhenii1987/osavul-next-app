'use client';

import { motion } from 'motion/react';

export default function AboutTextBlock() {
  return (
    <>
      <section className="section about-text-block">
        <div className="container flex justify-between max-md:flex-col">
          <motion.h2
            className="block-title w-2/6 max-md:w-full"
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            How we do
          </motion.h2>
          <motion.p
            className="page-title-caption w-4/6 max-md:w-full"
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Through Osavul's narrative analysis and threat intelligence, our
            partners can conduct advanced media monitoring, perform deep
            information environment assessments, and detect information threats
            and narrative attacks, helping to avoid reputational, economic, and
            other collateral risks. <br />
            <br />
            We are happy to assist democratic governmental institutions,
            responsible businesses, media outlets, NGOs, and opinion leaders by
            providing top-notch information security, reputation management, and
            narrative monitoring.
          </motion.p>
        </div>
      </section>
      <div className="sections-divider"></div>
      <section className="section about-text-block">
        <div className="container block-border flex justify-between max-md:flex-col">
          <motion.h2
            className="block-title w-2/6 max-md:w-full"
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Who we are
          </motion.h2>
          <motion.p
            className="page-title-caption w-4/6 max-md:w-full"
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Osavul is an advanced AI-driven platform for information assessment
            and narrative impact analysis. <br />
            <br />
            Leveraging our experience, we help partners in the EU, US, and APAC
            regions prevent information attacks and mitigate the associated
            risks.
          </motion.p>
        </div>
      </section>
    </>
  );
}
