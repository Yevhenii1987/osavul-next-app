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
          <NavLink href="/products" click={handleClose} label='Go to products'>
            Our products
          </NavLink>
        </li>
        <li>
          <NavLink href="/cases" click={handleClose} label='Go to cases'>
            Cases
          </NavLink>
        </li>
        <li>
          <NavLink href="/about" click={handleClose} label='Go to About us'>
            About us
          </NavLink>
        </li>
        <li>
          <NavLink href="/blog" click={handleClose} label='Go to blog'>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink href="/careers" click={handleClose} label='Go to careers'>
            Careers
          </NavLink>
        </li>
        <li>
          <NavLink href="/contacts" click={handleClose} label='Go to contacts'>
            Contacts
          </NavLink>
        </li>
      </ul>
    </>
  );
}
