import { getAllPostsMetadata } from './lib/posts';
import PostListClient from './components/post-list/PostListClient';

export default async function Home() {
  const posts = await getAllPostsMetadata();

  return <PostListClient posts={posts} />;
}
