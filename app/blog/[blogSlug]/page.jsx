
import NewsSection from '@/components/Sections/NewsSection';
import SubscribeSection from '@/components/Sections/SubscribeSection';
import Breadcrumbs from '@/components/UI/Breadcrumbs';
import { getAdvantagesData, getArticle, getSpeakers } from '@/lib/http';
import AnimationWrapper from '@/components/Sections/AnimationWrapper';
import ArticleNav from '@/components/UI/ArticleNav';
import ContactForm from '@/components/UI/ContactForm';
import SpeakersCarousel from '@/components/Sections/SpeakersCarousel';

export async function generateMetadata({ params }) {
  const articleData = getArticle(params.blogSlug);

  return {
    title: articleData.title,
    description: articleData.details,
  };
}

export default async function ArticlePage({ params }) {
  const articleData = getArticle(params.blogSlug);
  const speakersArr = await getSpeakers();

  return (
    <main className="page article-page">
      <AnimationWrapper>
        <Breadcrumbs />
        <section className="section article-page-top flex justify-between items-center">
          <div className="container">
            <h1 className="page-title">{articleData.title}</h1>
          </div>
        </section>

        <section className="section section-article">
          <div className="container flex max-lg:flex-col">
            <aside className="article-sidebar">
              <div className="article-sidebar-wrap">
                <div className="article-details">
                  <h3>Details</h3>
                  <div dangerouslySetInnerHTML={{
                    __html: articleData.details,
                  }}></div>
                </div>

                <div className="sections-divider"></div>

                {articleData.showForm && <ContactForm formType="blog-form" />}
                {!articleData.showForm && <ArticleNav navData={articleData.nav} />}

              </div>
            </aside>
            <article className="article-content">
              <div
                dangerouslySetInnerHTML={{
                  __html: articleData.article,
                }}
              >
              </div>
              <SpeakersCarousel speakers={speakersArr} />
            </article>
          </div>
        </section>

        <div className="sections-divider"></div>

        <NewsSection />
        <SubscribeSection />
      </AnimationWrapper>
    </main>
  );
}
