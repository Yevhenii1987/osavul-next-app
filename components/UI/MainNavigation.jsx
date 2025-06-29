'use client';

import NavLink from './NavLink';

export default function MainNavigation({ menuClose }) {
  function handleClose() {
    if (menuClose) {
      menuClose();
    }
  }
  return (
    <>
      <ul className="main-navigation flex">
        <li>
          <NavLink href="/products" click={handleClose}>
            Our products
          </NavLink>
        </li>
        <li>
          <NavLink href="/cases" click={handleClose}>
            Cases
          </NavLink>
        </li>
        <li>
          <NavLink href="/about" click={handleClose}>
            About us
          </NavLink>
        </li>
        <li>
          <NavLink href="/blog" click={handleClose}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink href="/careers" click={handleClose}>
            Careers
          </NavLink>
        </li>
        <li>
          <NavLink href="/contacts" click={handleClose}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </>
  );
}
