import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Blob() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 blur-lg scale-110">
        <Spline 
          className="w-full h-full opacity-50 dark:opacity-30" 
          scene="https://prod.spline.design/h8JvMwgO-wZVzGCy/scene.splinecode" 
        />
      </div>
    </div>
  );
}