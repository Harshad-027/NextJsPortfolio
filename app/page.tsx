import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";

// Lazy load below-the-fold components
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800" />,
});

const Blogs = dynamic(() => import("@/components/Blogs"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800" />,
});

const Newsletter = dynamic(() => import("@/components/Newsletter"), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100 dark:bg-gray-800" />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Blogs />
      <Newsletter />
    </>
  );
}
