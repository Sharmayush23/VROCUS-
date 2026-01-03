"use client";

import React from "react";
import { motion } from "framer-motion";

export const LearningPath = () => {
    const steps = [
        { label: "Master Skills", position: { x: 0, y: 0 } },
        { label: "Build Agency", position: { x: 200, y: -80 } },
        { label: "Get Placed", position: { x: 350, y: 0 } },
        { label: "Grow Social", position: { x: 200, y: 80 } },
        { label: "Earn Money", position: { x: 0, y: 0 } },
    ];

    return (
        <section className="relative py-32 bg-black overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[600px] h-[400px] bg-[#E1FF00]/5 blur-[100px] rounded-full" />
            </div>

            <div className="container relative z-10 px-4 mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        The <span className="text-[#E1FF00]">Learning Path</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        Your journey from beginner to professional video editor and agency
                        owner.
                    </p>
                </motion.div>

                {/* Path Visualization */}
                <div className="relative max-w-4xl mx-auto h-[400px] flex items-center justify-center">
                    {/* SVG Path */}
                    <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 800 400"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.ellipse
                            cx="400"
                            cy="200"
                            rx="300"
                            ry="150"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="10 5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#E1FF00" />
                                <stop offset="50%" stopColor="#3B82F6" />
                                <stop offset="100%" stopColor="#E1FF00" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Step Nodes */}
                    <div className="relative w-full h-full">
                        {[
                            { label: "Skill", top: "50%", left: "10%", delay: 0 },
                            { label: "Agency", top: "15%", left: "35%", delay: 0.2 },
                            { label: "Placement", top: "50%", left: "65%", delay: 0.4 },
                            { label: "Social Media", top: "85%", left: "35%", delay: 0.6 },
                            { label: "Money", top: "50%", left: "90%", delay: 0.8 },
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: step.delay }}
                                className="absolute -translate-x-1/2 -translate-y-1/2"
                                style={{ top: step.top, left: step.left }}
                            >
                                <div className="relative group">
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 bg-[#E1FF00] rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

                                    {/* Node */}
                                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#E1FF00]/20 to-transparent border-2 border-[#E1FF00] flex items-center justify-center backdrop-blur-sm">
                                        <span className="text-sm md:text-base font-bold text-white text-center px-2">
                                            {step.label}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Path Description */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-16 text-center max-w-3xl mx-auto"
                >
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Follow a proven path that takes you from learning fundamental skills
                        to building a thriving agency, getting placed at top companies,
                        growing your social media presence, and ultimately earning
                        substantial income.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
