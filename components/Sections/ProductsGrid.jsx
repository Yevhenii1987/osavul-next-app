import Image from 'next/image';
import Link from 'next/link';

export default function ProductsGrid({ products }) {
  return (
    <section className="section products-wrap">
      <div className="container grid grid-cols-2 gap-7 max-lg:gap-6 max-md:grid-cols-1 max-md:gap-12">
        {products.map((product) => (
          <div key={product.id} className="products-item">
            <div className="image">
              <Image src={product.image} alt=" " />
            </div>
            <div className="title">{product.title}</div>
            <div className="text">{product.text}</div>
            <Link href={`/products/${product.slug}`}>Learn more</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
