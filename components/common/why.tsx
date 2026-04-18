'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Building2 } from 'lucide-react';

const reasons = [
  {
    icon: <GraduationCap size={32} />,
    title: "High Pass Percentage",
    desc: "Consistent academic excellence with top-tier board results."
  },
  {
    icon: <Briefcase size={32} />,
    title: "High Placement Ratio",
    desc: "Directing students toward prestigious professional careers."
  },
  {
    icon: <Award size={32} />,
    title: "Qualified Faculty",
    desc: "Learn from subject matter experts with years of experience."
  },
  {
    icon: <Building2 size={32} />,
    title: "Hostel Facility",
    desc: "Safe, secure, and comfortable living for outstation students."
  }
];

export default function Why() {
  return (
    <section className="py-20 px-6 md:px-12 bg-primary dark:bg-zinc-950 transition-colors duration-300 overflow-hidden border-b border-white dark:border-t border-white/20">
      <div className="container mx-auto">
        
        {/* --- Header Area --- */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-heading text-white mb-4"
          >
            Why CVRIC?
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-secondary rounded-full"
          />
        </div>

        {/* --- Features Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 dark:bg-white/5 backdrop-blur-sm transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Icon Container */}
              <div className="mb-6 p-4 rounded-xl bg-white/10 text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-lg">
                {item.icon}
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-white font-heading mb-3">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm font-sans leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                {item.desc}
              </p>
              
              {/* Mobile Description (Always visible on mobile) */}
              <p className="text-white/70 text-sm font-sans md:hidden">
                {item.desc}
              </p>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                <div className="w-4 h-4 border-t-2 border-r-2 border-secondary" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}