'use client';

import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import MainNavigation from '@/components/UI/MainNavigation';
import Logo from '@/components/Logo';
import Modal from './UI/Modal';
import Link from 'next/link';

export default function MainHeader() {
  const path = usePathname();
  const dialog = useRef();
  // console.log(path);

  function handleMenuOpen() {
    dialog.current.open();
  }
  function handleMenuClose() {
    dialog.current.close();
  }

  return (
    <>
      <header
        className={`main-header max-lg:hidden ${path !== '/' ? 'inner-header' : ''
          }`}
      >
        <div className="main-header-ctn container w-full flex justify-between items-center">
          <Logo />
          <nav className="flex justify-between items-center ml-auto">
            <MainNavigation />
          </nav>
          <Link
            href={`/booking`}
            className="button-dark"
            aria-label="Fill in the form and book demo"
          >
            Book demo
          </Link>
        </div>
      </header>
      <header
        className={`main-header hidden max-lg:block ${path !== '/' ? 'inner-header' : ''
          }`}
      >
        <div className="main-header-ctn container w-full flex justify-between items-center">
          <Logo />
          <button className="menu-btn" onClick={handleMenuOpen}>
            Menu
          </button>
          <Modal ref={dialog}>
            <MainNavigation menuClose={handleMenuClose} />
          </Modal>
        </div>
      </header>
    </>
  );
}
