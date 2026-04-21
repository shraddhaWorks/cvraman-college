'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function GalleryPage() {
  const [showMore, setShowMore] = useState(false);

  const images = [
    { id: 1, title: "Campus Life", src: "/gallery/campus2.jpg" },
    { id: 2, title: "Innovation Lab", src: "/gallery/campus1.jpg" },
    { id: 3, title: "Convocation", src: "/gallery/campus6.jpg" },
    { id: 4, title: "Sports Arena", src: "/gallery/campus3.jpg" },
    { id: 5, title: "Library", src: "/gallery/library.jpg" },
    { id: 6, title: "Cultural Fest", src: "/gallery/fest.jpg" },
  ];

  // Horizontal scroll images (Add as many as you like here)
  const moreMoments = [
    { id: 7, title: "Auditorium", src: "/gallery/campus1.jpg" },
    { id: 8, title: "Workshop", src: "/gallery/campus2.jpg" },
    { id: 9, title: "Cafeteria", src: "/gallery/campus3.jpg" },
    { id: 10, title: "Tech Expo", src: "/gallery/campus6.jpg" },
  ];

  return (
    <div className="w-full bg-white dark:bg-transparent transition-colors duration-300">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden dark:bg-foreground bg-primary/[0.08] pt-24 pb-20 lg:pt-15 lg:pb-20">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight dark:text-white text-slate-900 mb-6 leading-tight font-heading">
            Campus <span className="text-secondary">Gallery</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-sans">
            A visual journey through CVRT College—capturing moments of innovation,
            academic excellence, and vibrant student life.
          </p>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-24 bg-primary/[0.08] dark:bg-foreground transition-colors">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">

          {/* MAIN BENTO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">

            {/* Large Featured */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[2.5rem] border border-slate-200 dark:border-white/10">
              <Image
                src={images[0].src}
                alt={images[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                <p className="text-white text-xl font-bold font-heading">{images[0].title}</p>
              </div>
            </div>

            {/* Tall */}
            <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-[2.5rem] border border-slate-200 dark:border-white/10">
              <Image
                src={images[1].src}
                alt={images[1].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Small 1 */}
            <div className="relative group overflow-hidden rounded-[2.5rem] border border-slate-200 dark:border-white/10">
              <Image
                src={images[3].src}
                alt={images[3].title}
                fill
                className="object-cover"
              />
            </div>

            {/* Small 2 */}
            <div className="relative group overflow-hidden rounded-[2.5rem] border border-slate-200 dark:border-white/10">
              <Image
                src={images[4].src}
                alt={images[4].title}
                fill
                className="object-cover"
              />
            </div>

            {/* Wide 1 */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-[2.5rem] border border-slate-200 dark:border-white/10">
              <Image
                src={images[2].src}
                alt={images[2].title}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Wide 2 */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-[2.5rem] border border-slate-200 dark:border-white/10">
              <Image
                src={images[5].src}
                alt={images[5].title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* VIEW ALL SECTION */}
          <div className="mt-20 text-center">
            <button 
              onClick={() => setShowMore(!showMore)}
              className="px-10 py-4 bg-secondary text-white font-bold rounded-2xl shadow-lg hover:scale-95 transition-all duration-300 font-heading uppercase tracking-widest text-xs"
            >
              {showMore ? "Hide Moments" : "View All Moments"}
            </button>

            {/* HORIZONTAL SCROLL STRIP - Saves vertical space */}
            <div className={`mt-12 transition-all duration-700 ease-in-out overflow-hidden ${
              showMore ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            }`}>
              <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x px-4">
                {moreMoments.map((item) => (
                  <div 
                    key={item.id} 
                    className="min-w-[320px] md:min-w-[400px] h-[250px] relative rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 shrink-0 snap-center shadow-lg"
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-secondary">
                      {item.title}
                    </div>
                  </div>
                ))}
                
                {/* End Card */}
                <div className="min-w-[200px] h-[250px] rounded-[2rem] border-2 border-dashed border-slate-200 dark:border-white/10 flex flex-col items-center justify-center text-slate-400 shrink-0">
                  <span className="text-3xl mb-2">✨</span>
                  <p className="text-[10px] uppercase font-bold tracking-widest">End of Gallery</p>
                </div>
              </div>
              
              <p className="text-[10px] text-slate-400 mt-4 uppercase tracking-[0.3em] font-sans">
                Scroll horizontally to explore →
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Scrollbar-hide CSS (Injected or put in global.css) */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}