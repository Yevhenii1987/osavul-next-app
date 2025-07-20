import BannerSection from '@/components/Sections/BannerSection';
import NewsSection from '@/components/Sections/NewsSection';
import SubscribeSection from '@/components/Sections/SubscribeSection';
import AdvantagesSection from '@/components/Sections/AdvantagesSection.jsx';
import Breadcrumbs from '@/components/UI/Breadcrumbs';
import { getAdvantagesData, getCase } from '@/lib/http';
import AnimationWrapper from '@/components/Sections/AnimationWrapper';
import ArticleNav from '@/components/UI/ArticleNav';

export async function generateMetadata({ params }) {
  const caseData = getCase(params.caseSlug);

  return {
    title: caseData.title,
    description: caseData.details,
  };
}

export default async function CasePage({ params }) {
  const caseData = getCase(params.caseSlug);
  const advantagesData = await getAdvantagesData();

  return (
    <main className="page case-page">
      <AnimationWrapper>
        <Breadcrumbs />
        <section className="section case-page-top flex justify-between items-center">
          <div className="container">
            <h2 className="page-title">{caseData.title}</h2>
          </div>
        </section>

        <section className="section section-case">
          <div className="container flex max-lg:flex-col">
            <aside className="case-sidebar">
              <div className="case-sidebar-wrap">
                <div className="case-details">
                  <h3>Details</h3>
                  <p>{caseData.details}</p>
                </div>
                <ArticleNav navData={caseData.nav} />
              </div>
            </aside>
            <article
              className="case-content"
              dangerouslySetInnerHTML={{
                __html: caseData.article,
              }}
            ></article>
          </div>
        </section>

        <AdvantagesSection data={advantagesData} />
        <BannerSection />
        <NewsSection />
        <SubscribeSection />
      </AnimationWrapper>
    </main>
  );
}
