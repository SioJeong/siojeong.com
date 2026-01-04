import PostList from '../components/post-list/PostList';
import { getAllPostsMetadata } from '../lib/posts';

export default async function Articles() {
  const posts = await getAllPostsMetadata();

  return <PostList posts={posts} />;
}
