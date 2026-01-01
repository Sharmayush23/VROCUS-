"use client";

import { motion } from "framer-motion";
import { Monitor, Video, Box, Zap, BarChart, Layers, ArrowUpRight } from "lucide-react";

const services = [
    {
        icon: Box,
        title: "3D Product Advertisements",
        description: "Photorealistic 3D renders and animations that showcase your product from every angle. Perfect for e-commerce and pre-launch marketing.",
        tags: ["CGI", "Product Modeling", "Animation"],
        id: "01"
    },
    {
        icon: Video,
        title: "VFX & Motion Graphics",
        description: "Elevate your brand storytelling with cinematic visual effects and high-energy motion graphics that grab attention instantly.",
        tags: ["Compositing", "Motion Design", "Visual Effects"],
        id: "02"
    },
    {
        icon: Layers,
        title: "AR / VR Experiences",
        description: "Immersive augmented and virtual reality solutions that bridge the gap between the digital and physical worlds.",
        tags: ["WebAR", "Virtual Showrooms", "Interactive"],
        id: "03"
    },
    {
        icon: Monitor,
        title: "Web Development",
        description: "Award-winning creative websites built for performance and conversion. We use top-tier tech like Next.js and WebGL.",
        tags: ["Next.js", "WebGL", "Three.js"],
        id: "04"
    },
    {
        icon: Zap,
        title: "Video Editing & Reels",
        description: "Professional editing services optimized for social media growth. Snappy, engaging cuts that keep retention high.",
        tags: ["Social Content", "Commercials", "Sound"],
        id: "05"
    },
    {
        icon: BarChart,
        title: "Digital Marketing",
        description: "Data-backed strategies to amplify your reach. We handle paid acquisition, content strategy, and community growth.",
        tags: ["PPC", "SEO", "Analytics"],
        id: "06"
    },
];

export function ServiceGrid() {
    return (
        <section className="bg-background py-32 px-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-primary font-mono text-sm uppercase tracking-widest block mb-4"
                        >
                            01 — Our Expertise
                        </motion.span>
                        <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-6">
                            Making Brands <br /> Unforgettable.
                        </h2>
                    </div>
                    <p className="text-muted text-lg max-w-sm mb-2 font-medium">
                        Comprehensive marketing strategies that align with your business goals and drive real ROI.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-10 rounded-3xl bg-glass-bg border border-glass-border hover:border-primary/50 transition-all duration-500 flex flex-col h-full overflow-hidden"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                                        <service.icon size={32} />
                                    </div>
                                    <span className="text-xs font-mono text-muted tracking-widest">{service.id}</span>
                                </div>

                                <h3 className="text-3xl font-bold uppercase tracking-tight mb-6 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-muted text-base leading-relaxed mb-8 font-medium">
                                    {service.description}
                                </p>
                            </div>

                            <div className="mt-auto relative z-10">
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {service.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white group-hover:gap-4 transition-all duration-300">
                                    Learn More <ArrowUpRight size={18} className="text-primary" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
