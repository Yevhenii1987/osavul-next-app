import BannerSection from '@/components/Sections/BannerSection';
import NewsSection from '@/components/Sections/NewsSection';
import SubscribeSection from '@/components/Sections/SubscribeSection';
import AdvantagesSection from '@/components/Sections/AdvantagesSection.jsx';
import Breadcrumbs from '@/components/UI/Breadcrumbs';
import VideoBlock from '@/components/Video';
import { getAdvantagesData } from '@/lib/http';
import AnimationWrapper from '@/components/Sections/AnimationWrapper';
import ContactForm from '@/components/UI/ContactForm';

export const metadata = {
  title: 'About Us',
  description:
    'Osavul leverages AI-driven technology to protect organizations from various information threats.',
};

export default async function ContactsPage() {
  const advantagesData = await getAdvantagesData();

  return (
    <main className="page contacts-page">
      <AnimationWrapper>
        <Breadcrumbs />
        <section className="section contacts-page-top">
          <div className="container flex justify-between items-center max-lg:flex-col">
            <h2 className="page-title w-1/2 max-lg:w-full">Contacts</h2>
          </div>
        </section>
        <section className="contacts-page-wrap">
          <div className="container flex max-lg:flex-col">
            <div className="contacts-page-image"></div>
            <div className="contacts-page-descr">
              <div className="contacts-item">
                <h3 className="contacts-title">Location</h3>
                <p>123 Main Street, Apt 4B <br />Anytown, CA 91234, USA</p>
              </div>
              <div className="contacts-item">
                <h3 className="contacts-title">Email</h3>
                <a href="mailto:info@osavul.cloud">info@osavul.cloud</a>
              </div>

              <div className="sections-divider"></div>

              <ContactForm />
            </div>
          </div>
        </section>


        <NewsSection />
        <BannerSection />
        <AdvantagesSection data={advantagesData} />
        <SubscribeSection />
      </AnimationWrapper>
    </main>
  );
}
