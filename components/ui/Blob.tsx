"use client";

import React, { memo, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Spline with no SSR
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 animate-pulse" />
  )
});

const Blob = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  if (hasError) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800" />
    );
  }

  return (
    <div className="w-full h-full relative">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 animate-pulse" />
      )}
      <Spline
        scene="https://prod.spline.design/34hvskhiN0BrFvvI/scene.splinecode"
        onLoad={handleLoad}
        onError={handleError}
        style={{ 
          width: '100%', 
          height: '100%',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />
    </div>
  );
});

Blob.displayName = 'Blob';

export default Blob;