import AdvantagesSection from '@/components/Sections/AdvantagesSection';
import BannerSection from '@/components/Sections/BannerSection';
import NewsSection from '@/components/Sections/NewsSection';
import SubscribeSection from '@/components/Sections/SubscribeSection';
import Breadcrumbs from '@/components/UI/Breadcrumbs';
import { getAdvantagesData, getShortProducts } from '@/lib/http';
import ProductsGrid from '@/components/Sections/ProductsGrid';
import AnimationWrapper from '@/components/Sections/AnimationWrapper';

export const metadata = {
  title: 'All Products',
};

export default async function ProductsPage() {
  const products = await getShortProducts();
  const advantagesData = await getAdvantagesData();

  return (
    <main className="page products-page">
      <AnimationWrapper>
        <Breadcrumbs />
        <section className="section products-page-top">
          <div className="container flex justify-between items-center max-lg:flex-col">
            <h2 className="page-title text-start w-1/2 max-lg:w-full">
              Our Products
            </h2>
            <p className="page-title-caption w-1/2 max-lg:w-full">
              Osavul leverages AI-driven technology to protect organizations
              from various information threats.
            </p>
          </div>
        </section>
        <ProductsGrid products={products} />
        <AdvantagesSection data={advantagesData} />
        <BannerSection />
        <NewsSection />
        <SubscribeSection />
      </AnimationWrapper>
    </main>
  );
}
