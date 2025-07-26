'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Pagination from './Pagination';
import { getAllCases } from '@/lib/http';

export default function CasesGrid({ cases, pageNum, pagesCount }) {
  const [casesArr, setCasesArr] = useState(cases);
  const [page, setPage] = useState(pageNum);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    async function fetchCases() {
      setIsPending(true);
      const { fetchedCases } = await getAllCases(page);
      setIsPending(false);
      setCasesArr(fetchedCases);
    }
    fetchCases();
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
    <section className="section cases-wrap">
      <div className="container">
        {isPending && <p>Fetching cases list...</p>}
        {!isPending && (<div className="cases-grid">
          {cases.map((caseItem, index) => (
            <div key={index} className="case-block">
              <div className="case-block-descr">
                <h3 className="case-block-title">{caseItem.title}</h3>
                <Link href={`/cases/${caseItem.slug}`}>Read more</Link>
              </div>
              <div className="case-block-image">
                {caseItem.image && <Image src={caseItem.image} alt=" " />}
              </div>
            </div>
          ))}
        </div>)}
        <Pagination current={page} pagesCount={pagesCount} onPrev={handlePrev} onNext={handleNext} />
      </div>
    </section>
  );
}
