'use client';

import { useEffect } from 'react';

export default function LoadingScreen() {
  useEffect(() => {
    const loader = document.getElementById('loading-screen');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }
  }, []);

  return (
    <div 
      id="loading-screen" 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-100 transition-opacity duration-500"
    >
      <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}