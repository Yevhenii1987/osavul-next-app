import BannerSection from '@/components/Sections/BannerSection';
import NewsSection from '@/components/Sections/NewsSection';
import SubscribeSection from '@/components/Sections/SubscribeSection';
import AdvantagesSection from '@/components/Sections/AdvantagesSection.jsx';
import Breadcrumbs from '@/components/UI/Breadcrumbs';
import { getCareers, getAdvantagesData } from '@/lib/http';
import AnimationWrapper from '@/components/Sections/AnimationWrapper';
import CareersGrid from '@/components/Sections/CareersGrid';

export const metadata = {
  title: 'Careers',
};

export default async function CareersPage() {
  // const { blogData, pageNum, isFirstPage, isLastPage } = getArticles('all');
  const careersData = await getCareers();
  const advantagesData = await getAdvantagesData();

  return (
    <main className="page cases-page">
      <AnimationWrapper>
        <Breadcrumbs />

        <section className="section cases-page-top">
          <div className="container flex justify-between items-start max-lg:flex-col">
            <h2 className="page-title w-1/2 max-lg:w-full">Osavul <br />
              Careers</h2>
            <p className="page-title-caption w-1/2 max-lg:w-full">
              We are hiring talented professionals globally to join our team in fighting one of the biggest challenges of our days. <br /><br />
              If you share our vision and want to make Internet more trustworthy place with less disinformation and manipulation - apply to our open positions at Osavul Careers.
            </p>
          </div>
        </section>

        <CareersGrid {...careersData} />

        <NewsSection />
        <BannerSection />
        <AdvantagesSection data={advantagesData} />
        <SubscribeSection />
      </AnimationWrapper>
    </main>
  );
}
