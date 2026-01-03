"use client";

import React from "react";
import { motion } from "framer-motion";
import { NeonButton } from "@/components/ui/NeonButton";
import { ArrowRight } from "lucide-react";

export const CourseCTA = () => {
    return (
        <section className="relative py-32 bg-black overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#E1FF00]/10 blur-[150px] rounded-full" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-900/20 blur-[100px] rounded-full" />
            </div>

            <div className="container relative z-10 px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Heading */}
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Stop <span className="text-[#E1FF00]">Delaying</span>.
                        <br />
                        Start Creating.
                    </h2>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Join 500+ students who've transformed their passion into a
                        profitable career. Next cohort starts soon.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <NeonButton className="min-w-[220px] text-lg">
                            JOIN NOW <ArrowRight className="w-5 h-5" />
                        </NeonButton>
                        <NeonButton variant="secondary" className="min-w-[220px] text-lg">
                            SCHEDULE A CALL
                        </NeonButton>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
                        <a
                            href="mailto:hello@vrocus.com"
                            className="hover:text-[#E1FF00] transition-colors"
                        >
                            hello@vrocus.com
                        </a>
                        <span className="hidden sm:inline">·</span>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="hover:text-[#E1FF00] transition-colors"
                            >
                                Instagram
                            </a>
                            <span>·</span>
                            <a
                                href="#"
                                className="hover:text-[#E1FF00] transition-colors"
                            >
                                YouTube
                            </a>
                            <span>·</span>
                            <a
                                href="#"
                                className="hover:text-[#E1FF00] transition-colors"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
