import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
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
                <svg className="svg-arrow-box" width="92" height="64" viewBox="0 0 92 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="svg-arrow" d="M47 24L55 32L47 40" stroke="#03001C" strokeWidth="4" strokeLinecap="square" />
                  <path className="svg-arrow--sm" d="M39 29L42 32L39 35" stroke="#03001C" strokeWidth="4" strokeLinecap="square" />
                </svg>
              </Link>
              <h1 className="page-title flex text-center">{product.title}</h1>
              <Link
                href={`/products/${nextProduct.slug}`}
                className="btn btn--next"
              >
                <svg className="svg-arrow-btn" width="92" height="64" viewBox="0 0 92 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="svg-arrow" d="M47 24L55 32L47 40" stroke="#03001C" strokeWidth="4" strokeLinecap="square" />
                  <path className="svg-arrow--sm" d="M39 29L42 32L39 35" stroke="#03001C" strokeWidth="4" strokeLinecap="square" />
                </svg>
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
