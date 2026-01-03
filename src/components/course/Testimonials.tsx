"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
    const testimonials = [
        {
            name: "Rahul Sharma",
            role: "Video Editor at Unacademy",
            image: "RS",
            rating: 5,
            text: "This cohort changed my life. Within 2 months of completion, I landed a full-time role at Unacademy. The mentorship was invaluable!",
        },
        {
            name: "Priya Patel",
            role: "Freelance Creator",
            image: "PP",
            rating: 5,
            text: "I went from zero clients to earning ₹80k/month in freelancing. The business modules are pure gold!",
        },
        {
            name: "Arjun Reddy",
            role: "YouTuber (250K subs)",
            image: "AR",
            rating: 5,
            text: "The AI tools training alone was worth 10x the price. My editing speed increased by 300%.",
        },
        {
            name: "Sneha Kumar",
            role: "Agency Owner",
            image: "SK",
            rating: 5,
            text: "Started my own video editing agency with 5 clients. The agency building module gave me the exact blueprint I needed.",
        },
        {
            name: "Vikram Singh",
            role: "Content Creator",
            image: "VS",
            rating: 5,
            text: "Best investment I've made in myself. The instructors genuinely care about your success.",
        },
        {
            name: "Ananya Iyer",
            role: "Social Media Manager",
            image: "AI",
            rating: 5,
            text: "The community alone is worth joining. Everyone is so supportive and helpful!",
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
                        Wall of <span className="text-[#E1FF00]">Love</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our students say.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={index === 1 ? "md:col-span-2 lg:col-span-1" : ""}
                        >
                            <div className="group relative h-full rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 overflow-hidden transition-all duration-300 hover:border-[#E1FF00]/30 hover:shadow-[0_0_30px_-5px_rgba(225,255,0,0.2)]">
                                {/* Background Texture */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Quote Icon */}
                                    <Quote className="w-8 h-8 text-[#E1FF00]/20 mb-4" />

                                    {/* Testimonial Text */}
                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                                        "{testimonial.text}"
                                    </p>

                                    {/* Rating */}
                                    <div className="flex gap-1 mb-4">
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 text-[#E1FF00] fill-current"
                                            />
                                        ))}
                                    </div>

                                    {/* Author */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E1FF00]/30 to-purple-500/30 border border-white/10 flex items-center justify-center text-white font-bold text-sm">
                                            {testimonial.image}
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-sm">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-gray-500 text-xs">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
