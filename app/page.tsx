import PostListClient from './components/post-list/PostListClient';
import { getAllPostsMetadata } from './lib/posts';

export default async function Home() {
  const posts = await getAllPostsMetadata();

  return <PostListClient posts={posts} />;
}
