import { getBlogPosts } from '@/lib/notion';

export async function GET() {
  try {
    const posts = await getBlogPosts();
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to load blogs' }), {
      status: 500,
    });
  }
}
