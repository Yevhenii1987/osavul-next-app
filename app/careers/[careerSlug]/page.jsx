import BannerSection from '@/components/Sections/BannerSection';
import NewsSection from '@/components/Sections/NewsSection';
import SubscribeSection from '@/components/Sections/SubscribeSection';
import AdvantagesSection from '@/components/Sections/AdvantagesSection.jsx';
import Breadcrumbs from '@/components/UI/Breadcrumbs';
import { getAdvantagesData, getCareer } from '@/lib/http';
import AnimationWrapper from '@/components/Sections/AnimationWrapper';
import CareerSidebar from '@/components/Sections/CareerSidebar';

export async function generateMetadata({ params }) {
  const careerData = getCareer(params.careerSlug);

  return {
    title: careerData.title,
    description: careerData.details,
  };
}

export default async function CareerPage({ params }) {
  const careerData = getCareer(params.careerSlug);
  const advantagesData = await getAdvantagesData();

  return (
    <main className="page career-page article-page">
      <AnimationWrapper>
        <Breadcrumbs />
        <section className="section article-page-top flex justify-between items-center">
          <div className="container">
            <h1 className="page-title">{careerData.title}</h1>
          </div>
        </section>

        <section className="section section-article">
          <div className="container flex max-lg:flex-col">
            <CareerSidebar
              location={careerData.location}
              nav={careerData.nav}
            />
            <article
              className="article-content"
              dangerouslySetInnerHTML={{
                __html: careerData.article,
              }}
            >
            </article>
          </div>
        </section>

        <div className="sections-divider"></div>

        <NewsSection />
        <BannerSection />
        <AdvantagesSection data={advantagesData} />
        <SubscribeSection />
      </AnimationWrapper>
    </main>
  );
}
