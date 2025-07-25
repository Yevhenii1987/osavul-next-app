import Link from 'next/link';
import Image from 'next/image';

export default function Socials({ socials }) {
  return (
    <div className="socials">
      {socials.map((soc) => (
        <div
          key={soc.name}
          className="socials-item flex justify-center items-center"
        >
          <Link href={soc.url} aria-label={'Our ' + soc.name}>
            <Image src={soc.img} alt={soc.name} />
          </Link>
        </div>
      ))}
    </div>
  );
}
