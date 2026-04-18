'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function Course() {
    return (
        <section className="py-16 md:py-20 bg-background dark:bg-background transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-[2rem] bg-primary/[0.05] dark:bg-primary/[0.05] border border-primary/10 dark:border-primary/10 p-8 md:p-16 text-center"
                >
                    {/* Decorative Background Elements */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-primary text-white shadow-lg">
                            <BookOpen size={24} />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                            Ready to start your <br />
                            <span className="text-primary">Academic Journey?</span>
                        </h2>

                        <p className="text-foreground/70 dark:text-foreground/70 text-lg font-sans mb-10 max-w-2xl mx-auto leading-relaxed">
                            Explore our wide range of intermediate streams including MPC, BiPC, CEC, and MEC.
                            Find the perfect path that aligns with your career goals and aspirations.
                        </p>

                        <Link href="/ourcourses">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="group flex items-center justify-center gap-2 mx-auto px-10 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-all shadow-xl shadow-primary/20 cursor-pointer"
                            >
                                See All Courses
                            </motion.div>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}