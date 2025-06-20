'use client';

import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

export default function BlogsSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const res = await fetch('/api/blogs');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error('Failed to load blogs:', err);
      }
    }

    loadBlogs();
  }, []);

  return (
    <section className="py-20 bg-background" id="blogs">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Blogs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
