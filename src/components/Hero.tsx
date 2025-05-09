'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const Stars = dynamic(() => import('./canvas/Stars'), { ssr: false });

const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-20">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Canvas
            dpr={[1, 2]}
            camera={{ position: [0, 0, 1], fov: 75 }}
            style={{ background: 'transparent' }}
          >
            <ambientLight intensity={0.5} />
            <Stars />
          </Canvas>
        </Suspense>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Mudipa Kishan
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
            Software Engineer
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            I specialize in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="#projects"
              className="px-8 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 text-white border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-gray-400 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
