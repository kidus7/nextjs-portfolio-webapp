import Link from 'next/link';
import { getBlogPosts } from '../../lib/notion';

export default async function BlogPage() {
  const posts = await getBlogPosts();
    if (!posts || posts.length === 0) {
        return <p className="text-center text-gray-500">No blog posts available.</p>;
    }

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      <ul className="space-y-6">
        {posts.map(post => (
          <li key={post.id} className="border-b pb-4">
            <Link href={`/blog/${post.slug}`}>
              <div className="text-xl font-semibold text-blue-600 hover:underline">{post.title}</div>
            </Link>
            <p className="text-sm text-gray-500">{new Date(post.date).toDateString()}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
