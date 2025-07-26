'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { getCareers } from '@/lib/http';
import Pagination from './Pagination';

export default function CareersGrid({ careers, pageNum, pagesCount }) {
  const [careersArr, setCareersArr] = useState(careers);
  const [page, setPage] = useState(pageNum);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    async function fetchCareers() {
      setIsPending(true);
      const { careers } = await getCareers(page);
      setIsPending(false);
      setCareersArr(careers);
    }
    fetchCareers();
  }, [page]);

  function handlePrev() {
    if (page !== 1) {
      setPage((prevState) => prevState - 1);
    }
  }

  function handleNext() {
    if (page < pagesCount) {
      setPage((prevState) => prevState + 1);
    }
  }

  return (
    <section className="section careers-wrap">
      <div className="container">
        {isPending && <p>Fetching careers list...</p>}
        {!isPending && (<div className="careers-grid">
          <header className='careers-grid-header max-lg:hidden'>
            <span>Job title</span>
            <span>Skills</span>
            <span>Location</span>
          </header>
          {careersArr.map((career, index) => (
            <motion.article
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <Link href={`/careers/${career.slug}`} className="career-block">
                <h3 className="career-title">{career.title}</h3>
                <div className="career-skills">
                  <p className="row-name lg:hidden">Skills:</p>
                  <ul>
                    {career.skills.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="career-location">
                  <p className="row-name lg:hidden">Location:</p>
                  <address dangerouslySetInnerHTML={{
                    __html: career.location,
                  }}></address>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>)}
        <Pagination current={page} pagesCount={pagesCount} onPrev={handlePrev} onNext={handleNext} />
      </div>
    </section>
  );
}
