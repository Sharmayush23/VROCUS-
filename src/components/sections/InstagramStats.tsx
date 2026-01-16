"use client";

import { motion } from "framer-motion";
import { Bot, Calendar, TrendingUp, Target, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

const stats = [
    {
        title: "Automated Campaigns",
        icon: Bot,
        description: "24/7 engagement workflows that never sleep.",
        stat: "98%",
        statLabel: "Response Rate",
        accent: "text-[#F5B21A]" // Orange
    },
    {
        title: "Content Scheduling",
        icon: Calendar,
        description: "Strategic posting during peak listener hours.",
        stat: "2x",
        statLabel: "Reach Spike",
        accent: "text-[#1F6ED4]" // Blue
    },
    {
        title: "Growth Analytics",
        icon: TrendingUp,
        description: "Real-time insights into follower demographics.",
        stat: "Live",
        statLabel: "Tracking",
        accent: "text-[#6BCF63]" // Green/Teal-ish
    },
    {
        title: "Audience Targeting",
        icon: Target,
        description: "Precision filtering for high-value leads.",
        stat: "Hi-Q",
        statLabel: "Leads",
        accent: "text-[#E64545]" // Red
    }
];

export function InstagramStats() {
    return (
        <section className="bg-black py-24 px-6 relative overflow-visible z-20">
            {/* Gradient Separator Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
                    >
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${ACCENT_GRADIENT}`} />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">VROCUS Ecosystem</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Instagram Pages <br />
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${PRIMARY_GRADIENT}`}>Powered by VROCUS</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-md mx-auto"
                    >
                        From automation to analytics — everything handled in one place.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative"
                        >
                            {/* Hover Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${PRIMARY_GRADIENT} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl rounded-2xl`} />

                            {/* Card Body */}
                            <div className="relative h-full bg-[#0A0A0A] hover:bg-[#0F0F0F] rounded-2xl p-6 border border-white/5 group-hover:border-white/10 transition-all duration-300 flex flex-col items-start gap-4">

                                {/* Icon & Stat Row */}
                                <div className="w-full flex justify-between items-start">
                                    <div className="p-3 rounded-xl bg-white/5 text-white group-hover:scale-110 transition-transform duration-300">
                                        <item.icon size={24} className={item.accent} />
                                    </div>
                                    <div className="text-right">
                                        <div className={`text-2xl font-bold ${item.accent}`}>{item.stat}</div>
                                        <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">{item.statLabel}</div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* subtle bottom decoration */}
                                <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${item.accent.replace("text-", "bg-")} opacity-20 mt-auto pt-4`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
