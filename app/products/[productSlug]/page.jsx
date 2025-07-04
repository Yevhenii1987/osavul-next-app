import Image from 'next/image';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import arrow from '@/assets/arr-3.svg';
import CasesSection from '@/components/Sections/CasesSection';
import BannerSection from '@/components/Sections/BannerSection';
import NewsSection from '@/components/Sections/NewsSection';
import SubscribeSection from '@/components/Sections/SubscribeSection';
import ProductsFeaturesSection from '@/components/Sections/ProductsFeaturesSection';
import FeaturesSection from '@/components/Sections/FeaturesSection';
import Breadcrumbs from '@/components/UI/Breadcrumbs';
import VideoBlock from '@/components/Video';
import {
  getAllFeatures,
  getProduct,
  getProductFeaturesData,
  getShortProducts,
} from '@/lib/http';
import AnimationWrapper from '@/components/Sections/AnimationWrapper';

export async function generateMetadata({ params }) {
  const product = getProduct(params.productSlug);

  return {
    title: product.title,
    description: product.text,
  };
}

export default async function ProductPage({ params }) {
  const productFeatures = await getProductFeaturesData();
  const productsList = await getShortProducts();
  const featuresAll = getAllFeatures();
  const product = getProduct(params.productSlug);
  const productIndex = productsList.findIndex(
    (item) => item.slug === params.productSlug
  );
  let prevProduct = null;
  let nextProduct = null;

  if (productIndex !== 0) {
    prevProduct = productsList[productIndex - 1];
  } else {
    prevProduct = productsList[productsList.length - 1];
  }

  if (productIndex === productsList.length - 1) {
    nextProduct = productsList[0];
  } else {
    nextProduct = productsList[productIndex + 1];
  }

  function handlePrev() {
    redirect(`/products/${prevProduct.slug}`);
  }
  function handleNext() {
    redirect(`/products/${nextProduct.slug}`);
  }

  // console.log(nextProduct);

  if (!product) {
    notFound();
  }

  return (
    <main className="page product-page">
      <AnimationWrapper>
        <Breadcrumbs />
        <section className="video">
          <div className="container">
            <div className="video-ui flex justify-between items-center">
              <Link href={`/products/${prevProduct.slug}`}>
                {prevProduct.title}
              </Link>
              <Link
                href={`/products/${prevProduct.slug}`}
                className="btn btn--prev"
              >
                <Image src={arrow} alt=" " />
              </Link>
              <h2 className="page-title flex text-center">{product.title}</h2>
              <Link
                href={`/products/${nextProduct.slug}`}
                className="btn btn--next"
              >
                <Image src={arrow} alt=" " />
              </Link>
              <Link href={`/products/${nextProduct.slug}`}>
                {nextProduct.title}
              </Link>
            </div>
            <VideoBlock src={product.video} />
          </div>
        </section>
        <section className="section product-about">
          <div className="container flex justify-center">
            <p className="text">{product.text}</p>
          </div>
        </section>

        <ProductsFeaturesSection features={productFeatures} />
        <FeaturesSection features={featuresAll} />
        <CasesSection />
        <BannerSection />
        <NewsSection />
        <SubscribeSection />
      </AnimationWrapper>
    </main>
  );
}
