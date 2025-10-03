"use client";

import { memo, Suspense, lazy } from "react";
import { useInView } from "react-intersection-observer";

// Lazy load the 3D component
const LazyBlob = lazy(() => import("./Blob"));

const Background = memo(() => {
  const { ref, inView } = useInView({
    threshold: 0.1, 
    triggerOnce: true,
    rootMargin: '100px'
  });

  return (
    <div
      ref={ref}
      className="fixed inset-0 -z-10 overflow-hidden backdrop-blur-md"
      aria-hidden="true"
    >
      {inView && (
        <Suspense
          fallback={
            <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800" />
          }
        >
          <LazyBlob />
        </Suspense>
      )}
    </div>
  );
});

Background.displayName = 'Background';

export default Background;




