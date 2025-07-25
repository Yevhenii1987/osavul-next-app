import SubscribeSection from '@/components/Sections/SubscribeSection';
import Breadcrumbs from '@/components/UI/Breadcrumbs';
import { getArticles } from '@/lib/http';
import AnimationWrapper from '@/components/Sections/AnimationWrapper';
import BlogGrid from '@/components/Sections/BlogGrid';

export const metadata = {
  title: 'Blog',
};

export default async function BlogPage() {
  const blogData = await getArticles('all');

  return (
    <main className="page cases-page">
      <AnimationWrapper>
        <Breadcrumbs />

        <section className="section cases-page-top">
          <hgroup className="container flex justify-between items-center max-lg:flex-col">
            <h1 className="page-title w-1/2 max-lg:w-full">Blog</h1>
            <p className="page-title-caption w-1/2 max-lg:w-full">
              Experience Our AI-Driven Platform <br />
              for Information Assessment
            </p>
          </hgroup>
        </section>

        <BlogGrid {...blogData} />

        <SubscribeSection />
      </AnimationWrapper>
    </main>
  );
}
