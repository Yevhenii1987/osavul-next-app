'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const path = usePathname();
  const links = path.split('/');
  // console.log(links);
  return (
    <ul className="breadcrumbs container flex">
      {/* <Link href="/">Main</Link>&nbsp;/&nbsp;<span>Cases</span> */}
      {links.map((item, index) => (
        <li key={index}>
          {item === '' && (
            <>
              <Link href="/">Main</Link>&nbsp;/&nbsp;
            </>
          )}
          {item !== '' && index < links.length - 1 && (
            <>
              <Link href={`/${path.slice(1, path.indexOf(item)) + item}`}>
                {item.charAt(0).toLocaleUpperCase() + item.slice(1)}
              </Link>
              &nbsp;/&nbsp;
            </>
          )}
          {index === links.length - 1 && (
            <>
              <span>{item.charAt(0).toLocaleUpperCase() + item.slice(1)}</span>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
