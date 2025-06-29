import BannerSection from '@/components/Sections/BannerSection';
import NewsSection from '@/components/Sections/NewsSection';
import SubscribeSection from '@/components/Sections/SubscribeSection';
import AdvantagesSection from '@/components/Sections/AdvantagesSection.jsx';
import Breadcrumbs from '@/components/UI/Breadcrumbs';
import { getAdvantagesData, getAllCases } from '@/lib/http';
import CasesGrid from '@/components/Sections/CasesGrid';
import AnimationWrapper from '@/components/Sections/AnimationWrapper';

export const metadata = {
  title: 'All Cases',
};

export default async function CasesPage() {
  const cases = await getAllCases();
  const advantagesData = await getAdvantagesData();

  return (
    <main className="page cases-page">
      <AnimationWrapper>
        <Breadcrumbs />

        <section className="section cases-page-top">
          <div className="container flex justify-between items-center max-lg:flex-col">
            <h2 className="page-title w-1/2 max-lg:w-full">Cases</h2>
            <p className="page-title-caption w-1/2 max-lg:w-full">
              Osavul leverages AI-driven technology to protect organizations
              from various information threats.
            </p>
          </div>
        </section>

        <CasesGrid cases={cases} />

        <AdvantagesSection data={advantagesData} />
        <BannerSection />
        <NewsSection />
        <SubscribeSection />
      </AnimationWrapper>
    </main>
  );
}
