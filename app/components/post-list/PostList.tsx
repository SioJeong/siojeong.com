'use client';

import Link from 'next/link';
import { PostInfo } from '../../lib/posts';
import PostDate from '../post-date/PostDate';
import styles from './PostList.module.css';

interface PostListProps {
  posts: PostInfo[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <main>
      <ul className={styles.postList}>
        {posts.map(({ id, title, date }) => (
          <li key={`${title}-${date}`}>
            <article className={styles.postItem}>
              <Link href={`/post/${id}`} className={styles.postTitle}>
                {title}
              </Link>
              <PostDate date={date} className={styles.postDate} />
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
