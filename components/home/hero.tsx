'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const carouselImages = [
  'hero1.jpg', 
  'hero2.jpg', 
  'hero3.jpg', 
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] w-full flex flex-col md:flex-row items-center overflow-hidden bg-background">
      
      {/* --- Left Side: Automatic Carousel (Continuous Transition) --- */}
      <div className="relative w-full md:w-1/2 h-[400px] md:h-[85vh] overflow-hidden bg-gray-200">
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={carouselImages[index]}
            // Initial state: invisible and slightly zoomed in
            initial={{ opacity: 0, scale: 1.1 }}
            // Animate to: fully visible and normal scale
            animate={{ opacity: 1, scale: 1 }}
            // Exit state: fade out while the new one comes in on top
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.4, 0, 0.2, 1] // Professional cubic-bezier
            }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="SIR C.V RAMAN College Campus"
          />
        </AnimatePresence>
        
        {/* Modern Overlay: blends image into the right-side content */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/20 md:to-background pointer-events-none" />
      </div>

      {/* --- Right Side: Content --- */}
      <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center gap-6 z-10">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-3 block">
            Established for Excellence
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight font-heading">
            SIR C.V RAMAN <br />
            <span className="text-primary">Junior Inter College</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/70 font-sans max-w-lg leading-relaxed">
            Nurturing the scientists, engineers, and leaders of tomorrow. Join 
            Anantapur's premier institution for intermediate education.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap gap-5 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <button className="px-10 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-xl shadow-primary/20">
            Explore Courses
          </button>
          <button className="px-10 py-4 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold rounded-full transition-all transform hover:scale-105">
            Contact Now
          </button>
        </motion.div>
      </div>

    </section>
  );
}