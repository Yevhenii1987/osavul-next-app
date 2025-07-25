import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/osavul-logo.svg';

export default function Logo() {
  return (
    <div className="logo">
      <Link href="/" aria-label="Go to main page">
        <Image src={logoImg} alt="osavul" />
      </Link>
    </div>
  );
}
