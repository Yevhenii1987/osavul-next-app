import Image from 'next/image';
import CasesSection from '@/components/Sections/CasesSection';
import BannerSection from '@/components/Sections/BannerSection';
import NewsSection from '@/components/Sections/NewsSection';
import SubscribeSection from '@/components/Sections/SubscribeSection';
import AdvantagesSection from '@/components/Sections/AdvantagesSection';
import ProductsFeaturesSection from '@/components/Sections/ProductsFeaturesSection';
import Breadcrumbs from '@/components/UI/Breadcrumbs';
import { getMetricsData, getFeatureAdvantages, getFeature } from '@/lib/http';
import { notFound } from 'next/navigation';
import AnimationWrapper from '@/components/Sections/AnimationWrapper';

export async function generateMetadata({ params }) {
  const feature = getFeature(params.featureSlug);

  return {
    title: feature.title,
    description: feature.subTitle,
  };
}

export default async function FeaturePage({ params }) {
  const feature = getFeature(params.featureSlug);
  const metricsData = await getMetricsData();
  const featureAdvantages = getFeatureAdvantages();

  if (!feature) {
    notFound();
  }

  feature.description = feature.description.replace(/\n/g, '<br />');

  return (
    <main className="page features-page">
      <AnimationWrapper>
        <Breadcrumbs />
        <section className="section features-page-top">
          <div className="container">
            <h2 className="page-title flex items-center">{feature.title}</h2>
          </div>
        </section>
        <section className="section feature-about">
          <div className="container">
            <h3 className="block-title">{feature.subTitle}</h3>
            <div className="flex max-md:flex-col">
              <div className="feature-about-image">
                <Image src={feature.image} alt=" " />
              </div>
              <div
                className="feature-about-text"
                dangerouslySetInnerHTML={{
                  __html: feature.description,
                }}
              >
                { }
              </div>
            </div>
          </div>
        </section>

        <AdvantagesSection data={metricsData} />
        <ProductsFeaturesSection features={featureAdvantages} />
        <CasesSection />
        <BannerSection />
        <NewsSection />
        <SubscribeSection />
      </AnimationWrapper>
    </main>
  );
}
