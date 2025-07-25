import Link from 'next/link';
import Image from 'next/image';

export default function SpeakerCard({ classes = '', speaker }) {
  return (
    <>
      <article className={"speaker-card " + classes}>
        <div className="speaker-image">
          <Image src={speaker.img} alt=" " />
        </div>
        <div className="speaker-descr">
          <h3 className="speaker-title">{speaker.name}</h3>
          <footer className="speaker-bottom flex items-center">
            <Link href={speaker.soc_link} className="speaker-link" aria-label="Linkedin profile"><Image src={speaker.soc_icon} alt="Linkedin" /></Link>
            <div className="speaker-work">
              <p><strong>{speaker.position}</strong></p>
              <p>{speaker.company}</p>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
}
