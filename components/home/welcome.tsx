'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, GraduationCap, Users, Trophy, Star } from 'lucide-react';
import Admissioncall from "@/components/common/admissioncall";

const highlights = [
  {
    icon: <GraduationCap size={32} />,
    title: "Expert Faculty",
    desc: "Learn from highly experienced lecturers dedicated to student success.",
    accent: "bg-primary/20 text-primary"
  },
  {
    icon: <Trophy size={32} />,
    title: "Proven Results",
    desc: "Consistently securing top ranks in Board exams and Competitive tests.",
    accent: "bg-secondary/20 text-secondary"
  },
  {
    icon: <Users size={32} />,
    title: "Individual Focus",
    desc: "Small batch sizes to ensure every student receives personal attention.",
    accent: "bg-primary/20 text-primary"
  }
];

export default function Welcome() {
  return (
    <section className="relative py-20 md:py-20 bg-background dark:bg-background px-6 md:px-12 overflow-hidden">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-sm">
              <Star size={16} className="text-secondary fill-secondary" />
             <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Anantapur's Leading Institution
              </span>
            </div>
            
            <h2 className="text-3xl md:text-6xl font-bold font-heading mb-8 tracking-tight leading-[1.1]">
              A Tradition of <span className="text-primary">Academic </span>
              <span className="relative inline-block">
                 Excellence
                <span className="absolute bottom-2 left-0 w-full h-3 bg-secondary/20 -z-10" />
              </span>
            </h2>

            <p className="text-foreground/60 dark:text-foreground/60 mb-12 text-lg md:text-xl font-sans leading-relaxed max-w-3xl">
              Named after the legendary Nobel Laureate, we are a launchpad for future scientists, engineers, and leaders. We provide a rigorous academic environment blended with modern teaching methodologies.
            </p>
            
            {/* Feature Tags - Pill Style */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Advanced Labs', 
                'Digital Classrooms', 
                'JEE/NEET Coaching', 
                'Expert Mentorship'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white border border-foreground/5 rounded-xl shadow-sm">
                  <CheckCircle className="text-secondary" size={18} />
                  <span className="font-bold text-sm text-foreground/80 dark:text-foreground/80 uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* --- Highlights Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative p-10 rounded-[3rem] bg-white dark:bg-white border border-foreground/5 hover:border-primary/30 transition-all duration-500 shadow-xl shadow-black/[0.02] hover:shadow-primary/10 overflow-hidden"
            >
              {/* Card Corner Gradient */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700" />

              <div className={`mb-8 w-16 h-16 ${item.accent} flex items-center justify-center rounded-[1.5rem] transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}>
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              
              <p className="text-foreground/50 dark:text-foreground/50 leading-relaxed font-sans text-base">
                {item.desc}
              </p>

              {/* Interactive Bottom Bar */}
              <div className="mt-8 w-12 h-1.5 bg-foreground/5 dark:bg-foreground/5 rounded-full overflow-hidden">
                <div className="w-0 group-hover:w-full h-full bg-primary transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-20">
        <Admissioncall />
      </div>

      </div>

      
    </section>
  );
}