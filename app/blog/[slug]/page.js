// app/blog/[slug]/page.js
import NotionContent from './PostPageClient';
import { getBlogPosts } from '../../../lib/notion';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_SECRET });

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }) {
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const recordMap = await notion.blocks.children.list({
    block_id: post.id,
    page_size: 100,
  });

  return <NotionContent post={post} recordMap={recordMap} />;
}
