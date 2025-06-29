import BannerSection from '@/components/Sections/BannerSection';
import NewsSection from '@/components/Sections/NewsSection';
import SubscribeSection from '@/components/Sections/SubscribeSection';
import ClientsSection from '@/components/Sections/ClientsSection.jsx';
import AdvantagesSection from '@/components/Sections/AdvantagesSection.jsx';
import Breadcrumbs from '@/components/UI/Breadcrumbs';
import VideoBlock from '@/components/Video';
import { getAdvantagesData, getAwards } from '@/lib/http';
import AwardsSection from '@/components/Sections/AwardsSection';
import AboutTextBlock from '@/components/Sections/AboutTextBlock';
import AnimationWrapper from '@/components/Sections/AnimationWrapper';

export const metadata = {
  title: 'About Us',
  description:
    'Osavul leverages AI-driven technology to protect organizations from various information threats.',
};

export default async function AboutPage() {
  const advantagesData = await getAdvantagesData();
  const awardsData = getAwards();

  return (
    <main className="page about-page">
      <AnimationWrapper>
        <Breadcrumbs />
        <section className="section about-page-top">
          <div className="container flex justify-between items-center max-lg:flex-col">
            <h2 className="page-title w-1/2 max-lg:w-full">about us</h2>
            <p className="page-title-caption w-1/2 max-lg:w-full">
              Osavul leverages AI-driven technology to protect organizations
              from various information threats.
            </p>
          </div>
        </section>
        <section className="video">
          <div className="container">
            <VideoBlock src={'/video/stock-new-york.mp4'} />
          </div>
        </section>

        <AboutTextBlock />

        <AdvantagesSection data={advantagesData} />
        <AwardsSection awardsData={awardsData} />
        <ClientsSection />
        <BannerSection />
        <NewsSection />
        <SubscribeSection />
      </AnimationWrapper>
    </main>
  );
}
