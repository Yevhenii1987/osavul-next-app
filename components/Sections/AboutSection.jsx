'use client';

import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    <section className="section-about section">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="container grid grid-cols-2 gap-x-8 max-lg:grid-cols-1"
      >
        <div>
          <h2 className="section-title">
            About <br />
            company
          </h2>
        </div>
        <div>
          <p>
            Osavul is an advanced AI-driven platform for information assessment
            and narrative impact analysis.
          </p>
          <br />
          <p>
            Using our experience, we have helped partners in the EU, US, and
            APAC regions prevent information attacks and mitigate the risks they
            pose.
          </p>
          <br />
          <p>
            Through Osavul's narrative analysis and threat intelligence, our
            partners can conduct advanced media monitoring, perform deep
            information environment assessments, and detect information threats
            and narrative attacks, helping to avoid reputational, economic, and
            other collateral risks.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
