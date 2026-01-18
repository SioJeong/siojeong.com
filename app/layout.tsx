import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://siojeong.com'),
  title: 'Sio Jeong',
  description: 'Product Maker 정상영의 블로그',
  authors: [{ name: 'Sio Jeong' }],
  openGraph: {
    type: 'website',
    title: 'Sio Jeong',
    description: 'Product Maker 정상영의 블로그',
    url: 'https://siojeong.com/',
    images: [
      {
        url: '/Symbol.svg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <GoogleAnalytics gaId="G-P6TYS1LX97" />
        <div className="root-container">
          <div className="content">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
