import { MetadataRoute } from 'next';
import { getAllPostsMetadata, getPostIds } from './lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://siojeong.com';

  // 정적 페이지들
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  // 동적 포스트 페이지들
  const postIds = getPostIds();
  const allPosts = getAllPostsMetadata();

  const postRoutes: MetadataRoute.Sitemap = postIds.map((postId) => {
    const post = allPosts.find((p) => String(p.id) === postId);
    return {
      url: `${baseUrl}/post/${postId}`,
      lastModified: post?.date ? new Date(post.date) : new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    };
  });

  return [...staticRoutes, ...postRoutes];
}
