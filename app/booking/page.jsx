import SubscribeSection from '@/components/Sections/SubscribeSection';
import Breadcrumbs from '@/components/UI/Breadcrumbs';
import AnimationWrapper from '@/components/Sections/AnimationWrapper';
import ContactForm from '@/components/UI/ContactForm';
import { bookDemoFull } from '@/lib/actions';

export const metadata = {
  title: 'Booking',
  description:
    'Osavul leverages AI-driven technology to protect organizations from various information threats.',
};

export default async function BookingPage() {

  return (
    <main className="page contacts-page booking-page">
      <AnimationWrapper>
        <Breadcrumbs />
        <section className="contacts-page-wrap">
          <div className="container flex max-lg:flex-col">
            <div className="contacts-page-image"></div>
            <div className="contacts-page-descr">
              <ContactForm formType="booking-form" actionFn={bookDemoFull} />
            </div>
          </div>
        </section>
        <SubscribeSection />
      </AnimationWrapper>
    </main>
  );
}
