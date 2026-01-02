'use client';

import Link from 'next/link';
import styles from './PostList.module.css';
import { PostInfo } from '../../lib/posts';

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
