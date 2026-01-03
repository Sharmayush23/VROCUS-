"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Star, Users } from "lucide-react";
import NextImage from "next/image";
import { NeonButton } from "@/components/ui/NeonButton";

export const CourseHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-black selection:bg-[#E1FF00] selection:text-black">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#E1FF00]/10 blur-[120px] rounded-full opacity-50 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/20 blur-[100px] rounded-full opacity-30 pointer-events-none" />
            </div>

            <div className="container relative z-10 px-4 mx-auto text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E1FF00] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E1FF00]"></span>
                    </span>
                    <span className="text-sm font-medium text-white/80">
                        Next Cohort Starts Soon
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-4xl mx-auto mb-6 text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
                >
                    Master <span className="text-[#E1FF00]">Video Editing</span> &
                    <br className="hidden md:block" /> Build Your Agency
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl mx-auto mb-10 text-lg md:text-xl text-gray-400"
                >
                    The ultimate 12-week program to learn advanced editing, unlock creative
                    AI tools, and monetize your skills. Join 5,000+ creators.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16"
                >
                    <NeonButton className="min-w-[200px]">
                        JOIN NOW <Play className="w-4 h-4 fill-current" />
                    </NeonButton>
                    <NeonButton variant="secondary" className="min-w-[200px]">
                        VIEW CURRICULUM
                    </NeonButton>
                </motion.div>

                {/* Social Proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-500 text-sm font-medium"
                >
                    <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full border-2 border-black bg-gray-800"
                                />
                            ))}
                        </div>
                        <span>Trusted by 500+ students</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="flex text-[#E1FF00]">
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                        </div>
                        <span>4.9/5 Rating</span>
                    </div>
                </motion.div>

                {/* Video Thumbnail Grid (Abstract Representation) */}
                <div className="relative mt-20 max-w-6xl mx-auto perspective-1000">
                    <motion.div
                        initial={{ opacity: 0, rotateX: 20 }}
                        animate={{ opacity: 1, rotateX: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                        {/* We can replace these with actual images later */}
                        <div className="h-64 rounded-xl bg-gray-900/50 border border-white/10 backdrop-blur-sm overflow-hidden group relative">
                            <NextImage
                                src="/images/course/analytics.png"
                                alt="Analytics Dashboard"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        </div>
                        <div className="h-64 md:h-80 -mt-8 rounded-xl bg-gray-900/50 border border-[#E1FF00]/20 backdrop-blur-sm overflow-hidden group relative shadow-[0_0_50px_rgba(225,255,0,0.1)]">
                            <NextImage
                                src="/images/course/editing.png"
                                alt="Video Editing"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        </div>
                        <div className="h-64 rounded-xl bg-gray-900/50 border border-white/10 backdrop-blur-sm overflow-hidden group relative">
                            <NextImage
                                src="/images/course/ai.png"
                                alt="AI Video Effects"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
