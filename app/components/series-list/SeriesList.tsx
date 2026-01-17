import Link from 'next/link';
import { PostInfo } from '../../lib/posts';
import styles from './SeriesList.module.css';

interface SeriesListProps {
  posts: PostInfo[];
  currentPostId: number;
}

export default function SeriesList({ posts, currentPostId }: SeriesListProps) {
  if (posts.length <= 1) return null;

  return (
    <nav className={styles.seriesContainer} aria-label="Series List">
      <ul className={styles.seriesList}>
        {posts.map((post) => {
          const isCurrent = post.id === currentPostId;
          return (
            <li
              key={post.id}
              className={`${styles.seriesItem} ${
                isCurrent ? styles.current : ''
              }`}
            >
              {isCurrent ? (
                <span className={styles.currentLink} aria-current="page">
                  {post.title}
                </span>
              ) : (
                <Link href={`/post/${post.id}`} className={styles.seriesLink}>
                  {post.title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
