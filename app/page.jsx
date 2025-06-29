import AboutSection from '@/components/Sections/AboutSection';
import HeroSection from '@/components/Sections/HeroSection';
import ProductsSection from '@/components/Sections/ProductsSection';
import CasesSection from '@/components/Sections/CasesSection';
import NewsSection from '@/components/Sections/NewsSection';
import BannerSection from '@/components/Sections/BannerSection';
import ClientsSection from '@/components/Sections/ClientsSection';
import AdvantagesSection from '@/components/Sections/AdvantagesSection';
import SubscribeSection from '@/components/Sections/SubscribeSection';
import { getAdvantagesData, getProducts } from '@/lib/http';
import AnimationWrapper from '@/components/Sections/AnimationWrapper';

export default async function Home() {
  const products = await getProducts();

  const advantagesData = await getAdvantagesData();

  return (
    <main className="home-page">
      <AnimationWrapper>
        <HeroSection />
        <AboutSection />
        <ProductsSection products={products} />
        <CasesSection />
        <NewsSection />
        <BannerSection />
        <ClientsSection />
        <AdvantagesSection data={advantagesData} />
        <SubscribeSection />
      </AnimationWrapper>
    </main>
  );
}
