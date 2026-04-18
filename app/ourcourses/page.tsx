'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Beaker, Calculator, Landmark, BarChart3, ChevronRight } from 'lucide-react';
import Why from '@/components/common/why';
import Admissioncall from '@/components/common/admissioncall';

const collegeCourses = [
  {
    title: "MPC",
    name: "Maths, Physics, Chemistry",
    icon: <Calculator size={28} />,
    color: "var(--primary)",
    desc: "Foundation for Engineering, Architecture, and Pure Sciences."
  },
  {
    title: "BiPC",
    name: "Biology, Physics, Chemistry",
    icon: <Beaker size={28} />,
    color: "var(--secondary)",
    desc: "Path to Medicine, Agriculture, and Biotechnology."
  },
  {
    title: "CEC",
    name: "Civics, Economics, Commerce",
    icon: <Landmark size={28} />,
    color: "var(--primary)",
    desc: "Gateway to CA, Law, Business, and Administration."
  },
  {
    title: "MEC",
    name: "Maths, Economics, Commerce",
    icon: <BarChart3 size={28} />,
    color: "var(--secondary)",
    desc: "Focus on Corporate Finance, Actuarial Science, and Data."
  }
];

export default function CoursesPage() {
  return (
    <div className="w-full">
      {/* --- Hero Section (Kept exactly as requested) --- */}
      <section className="relative overflow-hidden dark:bg-primary/[0.08] bg-primary/[0.08] pt-24 pb-20 lg:pt-15 lg:pb-15">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold tracking-tight dark:text-slate-900 text-slate-900 mb-6 leading-tight">
                Our <span className="text-primary">Courses</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Discover a variety of intermediate programs designed to shape your academic future.
                Choose from MPC, BiPC, CEC, and MEC streams tailored to match your career goals.
              </p>
            </div>
            <div className="">
              <div className="relative p-8 rounded-3xl bg-white dark:bg-white border border-slate-200 dark:border-slate-200 shadow-xl shadow-slate-200/50 dark:shadow-xl shadow-slate-200/50 overflow-hidden backdrop-blur-sm transition-all duration-300">
                <p className="text-slate-600 dark:text-slate-600 italic text-lg leading-relaxed relative z-10 font-sans">
                  "Our courses are designed to provide strong academic foundations, critical thinking skills, and the confidence to excel in competitive environments."
                </p>
                <div className="mt-6 flex items-center gap-4 relative z-10">
                  <div className="h-10 w-1 bg-secondary rounded-full" />
                  <span className="text-slate-600 dark:text-slate-600 font-bold uppercase tracking-widest text-xs">
                    Career Focused Learning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Updated Courses Content --- */}
      <section className="py-20 bg-primary/[0.08] dark:bg-primary/[0.08] transition-colors duration-300">    
        <div className="max-w-7xl mx-auto relative overflow-hidden px-15 py-20 border border-slate-200 dark:border-slate-200 rounded-3xl bg-white dark:bg-white shadow-lg">
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/50 dark:bg-secondary/50 rounded-bl-full -mr-10 -mt-10" />
          <div className="mb-12 text-center">
            
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Choose Your <span className="text-primary">Specialization</span></h2>
            <p className="text-foreground/60 dark:text-foreground/60 max-w-2xl mx-auto">Providing specialized coaching for JEE, NEET, and CA-Foundation along with regular intermediate curriculum.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collegeCourses.map((course, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="relative group p-8 rounded-[2rem] bg-white dark:bg-white border border-slate-200 dark:border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                {/* Accent Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{ backgroundColor: `${course.color}15`, color: course.color }}
                >
                  {course.icon}
                </div>

                <h3 className="text-4xl font-bold font-heading mb-2 text-slate-900 dark:text-slate-900">
                  {course.title}
                </h3>

                <p className="text-xs font-bold uppercase tracking-widest mb-4 transition-colors" style={{ color: course.color }}>
                  {course.name}
                </p>

                <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed mb-6 font-sans">
                  {course.desc}
                </p>
                {/* View Syllabus Button with Animated Underline 
                <button className="flex items-center gap-2 text-sm font-bold group-hover:gap-4 transition-all" style={{ color: course.color }}>
                  View Syllabus <ChevronRight size={16} />
                </button>
*/}
                {/* Bottom decorative bar */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 group-hover:w-1/2 transition-all duration-300 rounded-full"
                  style={{ backgroundColor: course.color }}
                />
              </motion.div>
            ))}
          </div>
         
         <Admissioncall/>
        </div>
       
      </section>
       <Why/>
    </div>
  );
}