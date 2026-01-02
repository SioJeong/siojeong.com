import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MarkdownRenderer from '../../components/markdown-renderer/MarkdownRenderer';
import PostDate from '../../components/post-date/PostDate';
import { getPostContent, getPostIds } from '../../lib/posts';
import styles from './PostDetail.module.css';

export async function generateStaticParams() {
  const postIds = await Promise.resolve(getPostIds());
  return postIds.map((postId) => ({
    postId: String(postId),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ postId: string }>;
}): Promise<Metadata> {
  const { postId } = await params;
  const post = getPostContent(postId);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description || post.title,
    openGraph: {
      title: post.title,
      description: post.description || post.title,
      type: 'website',
      images: [
        {
          url: '/Symbol.svg',
        },
      ],
    },
  };
}

export default async function PostDetail({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  const post = getPostContent(postId);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <header>
        <div className={styles.postInfo}>
          <div className={styles.tagsContainer}>
            {post.tag.map((tag, index) => (
              <p key={index} className={styles.tagItem}>
                {tag}
              </p>
            ))}
          </div>
          <PostDate date={post.date} className={styles.postDate} />
        </div>
        <h1 className={styles.postHeader}>{post.title}</h1>
      </header>
      <article>
        <MarkdownRenderer markdown={post.content} />
      </article>
      <br />
      <br />
      <footer className={styles.postFooter}>
        <Link href="/">← 게시글 목록으로</Link>
      </footer>
    </main>
  );
}
