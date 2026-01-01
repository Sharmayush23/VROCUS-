"use client";

import { motion } from "framer-motion";
import { Monitor, Video, Box, Zap, BarChart, Layers, ArrowRight } from "lucide-react";

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
        icon: Layers,
        title: "AR / VR Experiences",
        description: "Immersive augmented and virtual reality solutions that bridge the gap between the digital and physical worlds.",
        tags: ["WebAR", "Virtual Showrooms", "Interactive Filters", "Unity/Unreal"],
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
        <section className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 gap-12">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all"
                    >
                        <div className="flex flex-col items-start gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
                        </div>

                        <div className="flex flex-col gap-6">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {service.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <button className="flex items-center gap-2 text-primary font-bold mt-auto group-hover:gap-3 transition-all">
                                Learn more <ArrowRight size={20} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
