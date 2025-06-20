'use client';

import dynamic from 'next/dynamic';
import { NotionRenderer } from 'react-notion-x';

const Code = dynamic(
  () => import('react-notion-x/build/third-party/code'),
  { ssr: false }
);

export default function NotionContent({ post, recordMap }) {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-4">{new Date(post.date).toDateString()}</p>

      {post.files.map(f => (
        <img key={f.name} src={f.url} alt={f.name} className="mb-4 w-full object-cover" />
      ))}

      {post.content && (
        <div className="prose mb-6">
          <p>{post.content}</p>
        </div>)}

      <NotionRenderer recordMap={recordMap} components={{ code: Code }} />
    </main>
  );
}
