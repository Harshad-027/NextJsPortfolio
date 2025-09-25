import Link from 'next/link';
import { blogs } from '@/contents/blogs';

export default function BlogsList() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Blogs</h1>
      <ul className="space-y-6">
        {blogs.map(({ id, title, date, excerpt, readTime }) => (
          <li key={id} className="border-b pb-4">
            <Link 
              href={`/blogs/${id}`} 
              className="text-xl font-semibold hover:underline text-blue-600 hover:text-blue-800"
            >
              {title}
            </Link>
            <div className="flex items-center gap-4 text-sm text-white mt-1">
              <span>{new Date(date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{readTime}</span>
            </div>
            <p className="mt-2 text-white">{excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}