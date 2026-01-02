import type { Metadata } from 'next';
import Footer from './components/footer/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';
import Header from './components/header/Header';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://jeongsangyoung.dev'),
  title: 'motto',
  description: 'Product Maker 정상영의 블로그',
  authors: [{ name: 'Sio Jeong' }],
  openGraph: {
    type: 'website',
    title: 'motto',
    description: 'Product Maker 정상영의 블로그',
    url: 'https://jeongsangyoung.dev/',
    images: [
      {
        url: '/Symbol.svg',
      },
    ],
  },
  verification: {
    google: 'vDrYh8jxtgaAV4XyZ4hXfBKz2DlUc8GIrfEtW6yyCUQ',
    other: {
      'naver-site-verification': [
        '1aea5b4ec870604d406cd61448d0ae10b79cec5c',
        '347c7a2faa70f3aa9f0431e1fcf6b71183ec11b4',
      ],
    },
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
        <GoogleAnalytics />
        <div className="root-container">
          <div className="content">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
