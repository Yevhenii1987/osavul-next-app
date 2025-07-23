import Link from 'next/link';
import Image from 'next/image';

export default function NewsCard({ classes, newsItem }) {
  return (
    <>
      <article className={classes}>
        <div className="image">
          <Image src={newsItem.img} alt=" " />
        </div>
        <div className="descr">
          <div className="descr-inner">
            <div className="descr-top flex items-center">
              <div className="tag">
                <Link href="/blog">{newsItem.tag}</Link>
              </div>
              <div className="date flex items-center max-lg:hidden">
                {newsItem.date}
              </div>
              {newsItem.zoomLink && (
                <div className="zoom max-lg:hidden">
                  <Link href={newsItem.zoomLink}>ZOOM</Link>
                </div>
              )}
            </div>
            <div className="title">{newsItem.title}</div>
            <div className="more max-lg:hidden">
              <Link href={newsItem.link}>Read more</Link>
            </div>
            <div className="date-mob hidden max-lg:flex items-center">
              <div className="date flex items-center">{newsItem.date}</div>
              {newsItem.zoomLink && (
                <div className="zoom">
                  <Link href={newsItem.zoomLink}>ZOOM</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
