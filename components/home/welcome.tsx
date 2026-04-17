'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, GraduationCap, Users, Trophy, BookOpen, Star } from 'lucide-react';

const highlights = [
  {
    icon: <GraduationCap className="text-primary" size={28} />,
    title: "Expert Faculty",
    desc: "Learn from highly experienced lecturers dedicated to student success."
  },
  {
    icon: <Trophy className="text-secondary" size={28} />,
    title: "Proven Results",
    desc: "Consistently securing top ranks in Board exams and Competitive tests."
  },
  {
    icon: <Users className="text-primary" size={28} />,
    title: "Individual Focus",
    desc: "Small batch sizes to ensure every student receives personal attention."
  }
];

export default function Welcome() {
  return (
    <section className="py-16 md:py-16 bg-background px-6 md:px-12 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        
        {/* --- Content Section: Centered --- */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <Star size={14} className="text-secondary fill-secondary" />
              <span className="text-primary text-xs md:text-sm font-bold tracking-widest uppercase">
                Anantapur's Leading Institution
              </span>
            </div>
           
            
            <p className="text-foreground/70 mb-10 text-lg md:text-xl font-sans leading-relaxed max-w-3xl">
              Named after the legendary Nobel Laureate, we are a launchpad for future scientists, engineers, and leaders. We provide a rigorous academic environment blended with modern teaching methodologies to ensure student success.
            </p>
            
            {/* Feature Tags */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-0">
              {[
                'Advanced Labs', 
                'Digital Classrooms', 
                'JEE/NEET Coaching', 
                'Expert Mentorship'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="text-secondary" size={20} />
                  <span className="font-semibold text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

         
          </motion.div>
        </div>

        {/* --- Highlights Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Decorative background blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-3xl rounded-full -z-10" />
          
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group p-10 rounded-[2.5rem] bg-white dark:bg-zinc-900/40 border border-foreground/5 hover:border-primary/20 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="mb-8 w-14 h-14 bg-primary/10 text-primary flex items-center justify-center rounded-2xl group-hover:bg-white group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4">{item.title}</h3>
              <p className="text-foreground/60 leading-relaxed font-sans text-sm md:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}