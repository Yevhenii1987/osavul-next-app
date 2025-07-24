import SubscribeSection from '@/components/Sections/SubscribeSection';
import Breadcrumbs from '@/components/UI/Breadcrumbs';
import { getArticles } from '@/lib/http';
import AnimationWrapper from '@/components/Sections/AnimationWrapper';
import BlogGrid from '@/components/Sections/BlogGrid';

export const metadata = {
  title: 'Blog',
};

export default async function CareersPage() {
  // const { blogData, pageNum, isFirstPage, isLastPage } = getArticles('all');
  const blogData = await getArticles('all');

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

        <BlogGrid {...blogData} />

        <SubscribeSection />
      </AnimationWrapper>
    </main>
  );
}
