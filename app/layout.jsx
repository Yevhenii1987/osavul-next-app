import { Inter, IBM_Plex_Sans } from 'next/font/google';

import MainHeader from '@/components/Header';
import MainFooter from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'Osavul',
  description:
    'An advanced AI-driven platform for information assessment and narrative impact analysis.',
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const IBM_plex_sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${IBM_plex_sans.variable}`}>
      <body>
        <div id="modal"></div>
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
