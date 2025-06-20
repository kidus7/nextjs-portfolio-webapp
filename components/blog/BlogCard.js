import Link from 'next/link';

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
        {post.files?.[0]?.url && (
          <img
            src={post.files[0].url}
            alt={post.files[0].name}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
          <p className="text-muted-foreground">{new Date(post.date).toDateString()}</p>
        </div>
      </div>
    </Link>
  );
}
