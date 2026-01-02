'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Google Analytics 페이지뷰 트래킹
 */
export function usePageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: pathname,
      });
    }
  }, [pathname]);
}
