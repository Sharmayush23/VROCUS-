"use client";

import { motion } from "framer-motion";
import { Monitor, Video, Box, Zap, BarChart, Layers, ArrowRight, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

const services = [
    {
        icon: Box,
        title: "3D Product Advertisements",
        description: "We create photorealistic 3D renders and animations that showcase your product from every angle. Perfect for e-commerce and pre-launch marketing.",
        tags: ["CGI", "Product Modeling", "Animation", "Rendering"],
    },
    {
        icon: Video,
        title: "VFX & Motion Graphics",
        description: "Elevate your brand storytelling with cinematic visual effects and high-energy motion graphics that grab attention instantly.",
        tags: ["Compositing", "Motion Design", "Visual Effects", "Color Grading"],
    },
    {
        icon: Bot,
        title: "AI & Automation",
        description: "Streamline operations and unlock new possibilities with cutting-edge AI solutions and intelligent automation.",
        tags: ["Generative AI", "Process Automation", "LLM Integration", "Smart Workflows"],
    },
    {
        icon: Monitor,
        title: "Web Development & Landing Pages",
        description: "Award-winning creative websites built for performance and conversion. We use top-tier tech to deliver smooth, app-like experiences.",
        tags: ["Next.js", "WebGL", "Three.js", "Headless CMS"],
    },
    {
        icon: Zap,
        title: "Video Editing & Reels",
        description: "Professional editing services optimized for social media growth. Snappy, engaging cuts that keep retention high.",
        tags: ["Social Content", "Commercials", "Sound Design", "Storytelling"],
    },
    {
        icon: BarChart,
        title: "Digital Marketing & Social Growth",
        description: "Data-backed strategies to amplify your reach. We handle paid acquisition, content strategy, and community growth.",
        tags: ["PPC", "SEO", "Content Strategy", "Analytics"],
    },
];

export function DetailedServices() {
    return (
        <section className="bg-black py-32 px-6 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[#1E2A4A]/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E64545]/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className={`text-transparent bg-clip-text bg-gradient-to-r ${PRIMARY_GRADIENT} font-mono text-sm uppercase tracking-widest block mb-4 font-bold`}
                    >
                        Our Capabilities
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-none text-white">
                        Precision <br />
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>Systems.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-2xl h-full"
                        >
                            {/* Gradient Border */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${ACCENT_GRADIENT} opacity-20 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]`} />

                            <div className="relative bg-[#0A0A0A] md:bg-[#050505] flex flex-col gap-6 p-8 rounded-[15px] border border-white/5 h-full z-10 transition-all duration-300">
                                <div className="flex flex-col items-start gap-6">
                                    {/* Icon Container */}
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${PRIMARY_GRADIENT} shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                                        {service.title}
                                    </h3>
                                </div>

                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                                    {service.description}
                                </p>

                                <div className="flex flex-col gap-6 mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:border-white/20 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <button className="flex items-center gap-2 font-bold group/btn w-fit">
                                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>Learn more</span>
                                        <ArrowRight size={20} className="text-[#F5B21A] group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
