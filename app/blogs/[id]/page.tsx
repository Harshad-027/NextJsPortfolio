import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogs } from '@/contents/blogs';

export async function generateStaticParams() {
  return blogs.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogs.find((p) => p.id.toString() === id);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogs.find((p) => p.id.toString() === id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto rounded-lg shadow-lg p-8">
        <Link
          href="/blogs"
          className="inline-flex items-center text-blue-400 hover:text-blue-500 font-medium mb-8 transition-colors duration-200"
        >
          <svg
            className="w-5 h-5 mr-2 -ml-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to all blogs
        </Link>

        <article className="prose prose-invert max-w-none">
          <header className="mb-10">
            <h1 className="text-5xl font-extrabold leading-tight text-white mb-3">{post.title}</h1>
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>•</span>
              <span>{post.readTime} read</span>
            </div>
          </header>

          <section className="text-gray-200 leading-relaxed space-y-6">
            {post.data.split('\n').map((paragraph, idx) =>
              paragraph.trim() ? <p key={idx}>{paragraph.trim()}</p> : null
            )}
          </section>
        </article>
      </div>
    </main>
  );
}

