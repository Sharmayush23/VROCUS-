"use client";

import React from "react";
import { motion } from "framer-motion";
import { Video, Zap, Briefcase, Sparkles, TrendingUp } from "lucide-react";
import { GlowCard } from "@/components/course/GlowCard";

export const Curriculum = () => {
    const pillars = [
        {
            icon: Video,
            title: "Advanced Video Editing",
            description: "Master industry-standard tools",
            topics: [
                "Premiere Pro Mastery",
                "After Effects VFX",
                "DaVinci Resolve Color Grading",
                "Motion Graphics & Titles",
                "Audio Mixing & Sound Design",
            ],
            glowColor: "blue" as const,
        },
        {
            icon: TrendingUp,
            title: "Social Media Growth",
            description: "Build your personal brand",
            topics: [
                "Algorithm & SEO Optimization",
                "Thumbnail Psychology",
                "Hook & Retention Strategies",
                "Content Strategy Planning",
                "Analytics & Performance Tracking",
            ],
            glowColor: "purple" as const,
        },
        {
            icon: Briefcase,
            title: "Freelancing & Agency",
            description: "Turn skills into income",
            topics: [
                "Client Acquisition & Pitching",
                "Portfolio Building",
                "Pricing & Negotiation",
                "Project Management",
                "Scaling to an Agency Model",
            ],
            glowColor: "lime" as const,
        },
        {
            icon: Sparkles,
            title: "AI Creative Studio",
            description: "Leverage cutting-edge AI",
            topics: [
                "AI Video Generation (Runway, Pika)",
                "AI Voice & Dubbing",
                "ChatGPT for Scriptwriting",
                "Midjourney for Thumbnails",
                "Automation Workflows",
            ],
            glowColor: "red" as const,
        },
    ];

    return (
        <section className="relative py-24 bg-black">
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
                        What You&apos;ll <span className="text-[#E1FF00]">Learn</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        A comprehensive curriculum covering everything from technical skills
                        to business strategy.
                    </p>
                </motion.div>

                {/* Curriculum Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <GlowCard glowColor={pillar.glowColor} className="h-full">
                                <div className="space-y-6">
                                    {/* Header */}
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
                                            <pillar.icon className="w-6 h-6 text-[#E1FF00]" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-1">
                                                {pillar.title}
                                            </h3>
                                            <p className="text-sm text-gray-400">
                                                {pillar.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Topics List */}
                                    <ul className="space-y-3 pl-1">
                                        {pillar.topics.map((topic, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-300">
                                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E1FF00] mt-2 shrink-0" />
                                                <span className="text-sm leading-relaxed">{topic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </GlowCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

