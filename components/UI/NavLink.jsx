'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, click, label, children }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={path.startsWith(href) ? 'active' : ''}
      onClick={click}
      aria-label={label}
    >
      {children}
    </Link>
  );
}
