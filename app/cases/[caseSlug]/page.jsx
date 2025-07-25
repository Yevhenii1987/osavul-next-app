import BannerSection from '@/components/Sections/BannerSection';
import NewsSection from '@/components/Sections/NewsSection';
import SubscribeSection from '@/components/Sections/SubscribeSection';
import AdvantagesSection from '@/components/Sections/AdvantagesSection.jsx';
import Breadcrumbs from '@/components/UI/Breadcrumbs';
import { getAdvantagesData, getCase } from '@/lib/http';
import AnimationWrapper from '@/components/Sections/AnimationWrapper';
import ArticleNav from '@/components/UI/ArticleNav';
import ContactForm from '@/components/UI/ContactForm';

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
    <main className="page article-page">
      <AnimationWrapper>
        <Breadcrumbs />
        <section className="section article-page-top flex justify-between items-center">
          <div className="container">
            <h1 className="page-title">{caseData.title}</h1>
          </div>
        </section>

        <section className="section section-article">
          <div className="container flex max-lg:flex-col">
            <aside className="article-sidebar">
              <div className="article-sidebar-wrap">
                <div className="article-details">
                  <h3>Details</h3>
                  <div dangerouslySetInnerHTML={{
                    __html: caseData.details,
                  }}></div>
                </div>
                <div className="sections-divider"></div>
                {caseData.showForm && <ContactForm />}
                {!caseData.showForm && <ArticleNav navData={caseData.nav} />}
              </div>
            </aside>
            <article
              className="article-content"
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
