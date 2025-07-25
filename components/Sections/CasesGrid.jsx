import Image from 'next/image';
import Link from 'next/link';

export default function CasesGrid({ cases }) {
  return (
    <section className="section cases-wrap">
      <div className="container">
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
      </div>
    </section>
  );
}
