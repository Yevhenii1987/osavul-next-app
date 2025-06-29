'use client';

import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import ButtonDark from '@/components/UI/ButtonDark';
import MainNavigation from '@/components/UI/MainNavigation';
import Logo from '@/components/Logo';
import Modal from './UI/Modal';

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
        className={`main-header max-lg:hidden ${
          path !== '/' ? 'inner-header' : ''
        }`}
      >
        <div className="main-header-ctn container w-full flex justify-between items-center">
          <Logo />
          <nav className="flex justify-between items-center ml-auto">
            <MainNavigation />
          </nav>
          <ButtonDark>Book demo</ButtonDark>
        </div>
      </header>
      <header
        className={`main-header hidden max-lg:block ${
          path !== '/' ? 'inner-header' : ''
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
