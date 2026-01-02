'use client';

import Link from 'next/link';
import { PostInfo } from '../../lib/posts';
import styles from './PostList.module.css';

interface PostListClientProps {
  posts: PostInfo[];
}

export default function PostListClient({ posts }: PostListClientProps) {
  return (
    <main>
      <ul className={styles.postList}>
        {posts.map(({ id, title, date }) => (
          <li key={`${title}-${date}`}>
            <article className={styles.postItem}>
              <Link href={`/post/${id}`} className={styles.postTitle}>
                {title}
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
