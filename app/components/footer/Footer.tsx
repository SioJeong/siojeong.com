'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';

export default function Footer() {
  const pathname = usePathname();

  // about 페이지에서는 Footer 숨김 처리
  if (pathname === '/about') return null;

  return (
    <footer>
      <nav className={styles.container}>
        <ul className={styles.socialLinks}>
          <li>
            <a
              href="https://github.com/SioJeong"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="route to Github"
            >
              <Image
                src="/nav-icons/github.svg"
                alt="Github"
                width={24}
                height={24}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jeongsangyoung"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="route to LinkedIn"
            >
              <Image
                src="/nav-icons/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
