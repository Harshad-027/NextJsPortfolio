import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Blob() {
  return (

      <div className="fixed inset-0 blur-lg scale-110">
        <Spline 
          className='z- cursor-default w-full h-full' 
          scene="https://prod.spline.design/h8JvMwgO-wZVzGCy/scene.splinecode" 
        />
        <div className="absolute inset-0 z-10 bg-transparent"></div>
      </div>

  );
}
