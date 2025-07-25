import Link from 'next/link';
import Image from 'next/image';

export default function NewsCard({ classes = '', newsItem }) {
  return (
    <>
      <article className={"news-item " + classes}>
        <Link href={`/blog/${newsItem.slug}`} className="image">
          <Image src={newsItem.img} alt=" " />
        </Link>
        <div className="descr">
          <div className="descr-inner">
            <header className="descr-top flex items-center">
              <div className="tag">
                <Link href="/blog">{newsItem.tag}</Link>
              </div>
              <time dateTime={newsItem.date} className="date flex items-center max-lg:hidden">
                {newsItem.formattedDate}
              </time>
              {newsItem.zoomLink && (
                <div className="zoom max-lg:hidden">
                  ⋅ <Link href={newsItem.zoomLink}>ZOOM</Link>
                </div>
              )}
            </header>
            <h3 className="title"><Link href={`/blog/${newsItem.slug}`}>{newsItem.title}</Link></h3>
            <div className="more max-lg:hidden">
              <Link href={`/blog/${newsItem.slug}`}>Read more</Link>
            </div>
            <footer className="date-mob hidden max-lg:flex items-center">
              <div className="date flex items-center">{newsItem.date}</div>
              {newsItem.zoomLink && (
                <div className="zoom">
                  <Link href={newsItem.zoomLink}>ZOOM</Link>
                </div>
              )}
            </footer>
          </div>
        </div>
      </article>
    </>
  );
}
