import Link from 'next/link';

import Facebook from '@/assets/Facebook.svg';
import Twitter from '@/assets/Twitter.svg';
import Instagram from '@/assets/Instagram.svg';
import Cb from '@/assets/Cb.svg';
import LinkedIn from '@/assets/LinkedIn.svg';
import YouTube from '@/assets/YouTube.svg';

import Logo from '@/components/Logo';
import MainNavigation from '@/components/UI/MainNavigation';
import Socials from '@/components/UI/Socials';

export default function MainFooter() {
  const socials = [
    {
      name: 'Facebook',
      img: Facebook,
      url: '/',
    },
    {
      name: 'Twitter',
      img: Twitter,
      url: '/',
    },
    {
      name: 'Instagram',
      img: Instagram,
      url: '/',
    },
    {
      name: 'Cb',
      img: Cb,
      url: '/',
    },
    {
      name: 'LinkedIn',
      img: LinkedIn,
      url: '/',
    },
    {
      name: 'YouTube',
      img: YouTube,
      url: '/',
    },
  ];

  return (
    <>
      <footer className="main-footer container max-lg:hidden">
        <div className="main-footer-top flex items-center">
          <Logo />
          <div className="divider ml-12 mr-12"></div>
          <MainNavigation />
          <Socials socials={socials} />
        </div>
        <div className="main-footer-bottom flex justify-center items-center">
          <div className="copy">OSavul 2025 © All Rights Reserved</div>
          <div className="ml-3 mr-3">/</div>
          <ul className="main-footer-bottom-links flex">
            <li>
              <Link href="/terms-conditions">Terms and Conditions</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/agreement">Data Processing Agreement</Link>
            </li>
          </ul>
        </div>
      </footer>
      <footer className="main-footer container hidden max-lg:block">
        <div className="main-footer-menu">
          <h3 className="footer-title">Menu:</h3>
          <div className="flex">
            <MainNavigation />
            <ul className="main-footer-bottom-links">
              <li>
                <Link href="/terms-conditions">Terms and Conditions</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/agreement">Data Processing Agreement</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-footer-socials">
          <h3 className="footer-title">Social:</h3>
          <Socials socials={socials} />
        </div>
        <div className="main-footer-bottom flex flex-col items-center">
          <Logo />
          <div className="copy">OSavul 2025 © All Rights Reserved</div>
        </div>
      </footer>
    </>
  );
}
