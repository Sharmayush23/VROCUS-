"use client";

import React from "react";
import { motion } from "framer-motion";
import { Youtube, TrendingUp, Award, Users } from "lucide-react";
import { GlowCard } from "@/components/course/GlowCard";

export const WhyUs = () => {
    const stats = [
        {
            icon: Youtube,
            title: "2M+",
            subtitle: "YouTube Subscribers",
            description: "Combined across all channels",
            glowColor: "red" as const,
        },
        {
            icon: TrendingUp,
            title: "6 Years",
            subtitle: "Industry Experience",
            description: "Condensed into 12 weeks",
            glowColor: "blue" as const,
        },
        {
            icon: Award,
            title: "500+",
            subtitle: "Students Trained",
            description: "With 95% success rate",
            glowColor: "purple" as const,
        },
        {
            icon: Users,
            title: "50+",
            subtitle: "Hired by Top Brands",
            description: "Including Google & Unacademy",
            glowColor: "lime" as const,
        },
    ];

    return (
        <section className="relative py-24 bg-black overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black via-purple-950/10 to-black" />

            <div className="container relative z-10 px-4 mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Why Choose{" "}
                        <span className="text-[#E1FF00]">This Cohort?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        Get 6 years of real-world experience in just 3 months. Learn from
                        industry veterans who've built multi-million view channels.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <GlowCard glowColor={stat.glowColor} className="h-full">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="p-4 rounded-full bg-white/5 border border-white/10">
                                        <stat.icon className="w-8 h-8 text-[#E1FF00]" />
                                    </div>
                                    <div>
                                        <h3 className="text-4xl font-bold text-white mb-1">
                                            {stat.title}
                                        </h3>
                                        <p className="text-lg font-semibold text-gray-300 mb-2">
                                            {stat.subtitle}
                                        </p>
                                        <p className="text-sm text-gray-500">{stat.description}</p>
                                    </div>
                                </div>
                            </GlowCard>
                        </motion.div>
                    ))}
                </div>

                {/* Social Proof Images - Placeholder */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 text-center"
                >
                    <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider font-semibold">
                        Trusted by creators from
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
                        {["Tharun Speaks", "Quantum Project", "Tech Burner"].map((brand) => (
                            <div
                                key={brand}
                                className="px-6 py-3 text-xl font-bold text-white/60"
                            >
                                {brand}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
