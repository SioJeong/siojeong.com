'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav className={styles.container}>
        <ul className={styles.navList}>
          <li>
            <Link
              href="/"
              className={pathname === '/' ? styles.activeLink : undefined}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              href="/articles"
              className={
                pathname === '/articles' ? styles.activeLink : undefined
              }
            >
              articles
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
