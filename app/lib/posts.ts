import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export interface PostInfo {
  id: number;
  title: string;
  date: string;
  tag: string[];
  description: string;
}

export interface PostContent extends PostInfo {
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'public', 'markdowns', 'posts');

/**
 * 게시글 파일 목록을 가져옵니다 (파일명만)
 */
export function getPostFileNames(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    // .md 파일만 필터링하고 숫자 순으로 정렬
    return fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .sort((a, b) => {
        const numA = parseInt(a.replace('.md', ''), 10);
        const numB = parseInt(b.replace('.md', ''), 10);
        return numB - numA; // 내림차순 정렬
      });
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

/**
 * 게시글 ID 목록을 가져옵니다
 */
export function getPostIds(): string[] {
  const fileNames = getPostFileNames();
  return fileNames.map((fileName) => fileName.replace('.md', ''));
}

/**
 * 특정 게시글의 메타데이터를 가져옵니다
 */
export function getPostMetadata(postId: string): PostInfo | null {
  try {
    const fullPath = path.join(postsDirectory, `${postId}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      id: data.id,
      title: data.title,
      date: data.date,
      tag: data.tag || [],
      description: data.description || '',
    };
  } catch (error) {
    console.error(`Error reading post ${postId}:`, error);
    return null;
  }
}

/**
 * 특정 게시글의 전체 내용(메타데이터 + 마크다운)을 가져옵니다
 */
export function getPostContent(postId: string): PostContent | null {
  try {
    const fullPath = path.join(postsDirectory, `${postId}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      id: data.id,
      title: data.title,
      date: data.date,
      tag: data.tag || [],
      description: data.description || '',
      content,
    };
  } catch (error) {
    console.error(`Error reading post content ${postId}:`, error);
    return null;
  }
}

/**
 * 모든 게시글의 메타데이터를 가져옵니다
 */
export function getAllPostsMetadata(): PostInfo[] {
  const fileNames = getPostFileNames();
  const posts = fileNames
    .map((fileName) => {
      const postId = fileName.replace('.md', '');
      return getPostMetadata(postId);
    })
    .filter((post): post is PostInfo => post !== null);

  // ID 기준 내림차순 정렬
  return posts.sort((a, b) => b.id - a.id);
}
