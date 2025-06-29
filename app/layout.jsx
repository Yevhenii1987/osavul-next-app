import MainHeader from '@/components/Header';
import MainFooter from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'Osavul',
  description:
    'An advanced AI-driven platform for information assessment and narrative impact analysis.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="modal"></div>
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
