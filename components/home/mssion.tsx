'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldAlert, Ban } from 'lucide-react';

const policies = [
  {
    title: "Our Mission",
    icon: <Target className="text-primary" size={48} />,
    content: "To educate students from local and rural areas, so that they become enlightened individuals, improving the living standards of their families and society. We provide individual attention, world-class quality of education, and focus on character building."
  },
  {
    title: "Our Vision",
    icon: <Eye className="text-primary" size={48} />,
    content: "The vision of the institution is to create and continue a premium learning environment for students to transform them into thorough professionals capable of meeting the diverse professional demands of global environments."
  },
  {
    title: "Ragging Policy",
    icon: (
      <div className="relative">
        <ShieldAlert className="text-red-500" size={48} />
        <Ban className="absolute -top-1 -right-1 text-red-600 opacity-40 dark:opacity-40" size={24} />
      </div>
    ),
    content: "Ragging is a violation of Human Rights and is Strictly Prohibited on and off campus. Join hands in making the College Campus free from ragging. We maintain a zero-tolerance policy to ensure a safe environment for all students."
  }
];

export default function Mission() {
  return (
    /* Using bg-primary/5 instead of a hex code makes it look great in both light and dark mode automatically */
    <section className="py-16 md:py-24 bg-primary/[0.08] dark:bg-primary/[0.08] px-6 md:px-12 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {policies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white dark:bg-white rounded-2xl shadow-lg dark:shadow-lg overflow-hidden flex flex-col items-center text-center border border-transparent hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300"
            >
              {/* Header Bar - Uses your --primary variable */}
              <div className="w-[85%] mt-6 py-2 bg-primary text-white rounded-[10] shadow-md group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold font-heading tracking-wide">
                  {item.title}
                </h3>
              </div>

              {/* Icon Area */}
              <div className="py-12 flex justify-center items-center group-hover:scale-110 transition-transform duration-500">
                <div className="p-4 rounded-full bg-primary/5 dark:bg-primary/5 transition-colors">
                  {item.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="px-10 pb-12">
                <p className="text-foreground/70 dark:text-foreground/70 font-sans leading-relaxed text-sm md:text-base">
                  {item.content}
                </p>
              </div>

              {/* Bottom Decorative Edge (Subtle) */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}