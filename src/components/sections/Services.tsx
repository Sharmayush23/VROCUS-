"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
    { title: "Brand Identity", id: "01" },
    { title: "Web Experience", id: "02" },
    { title: "Motion Direction", id: "03" },
    { title: "3D Visuals", id: "04" },
    { title: "Development", id: "05" },
];

export function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="container mx-auto px-6 py-32 bg-background">
            <div className="flex flex-col md:flex-row justify-between items-start mb-20">
                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
                    Expertise
                </h2>
                <p className="max-w-md text-gray-400 mt-6 md:mt-0">
                    We redefine digital landscapes through innovative design and cutting-edge technology.
                </p>
            </div>

            <div className="flex flex-col border-t border-white/10">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="group relative flex items-center justify-between py-12 border-b border-white/10 cursor-pointer transition-colors hover:bg-white/5 px-4"
                    >
                        <div className="flex items-baseline gap-8 md:gap-16">
                            <span className="text-sm font-mono text-gray-500">/{service.id}</span>
                            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight group-hover:pl-4 transition-all duration-300">
                                {service.title}
                            </h3>
                        </div>

                        <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-sm font-medium uppercase tracking-widest hidden md:block">Details</span>
                            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
