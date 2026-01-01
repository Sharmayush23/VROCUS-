"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
    { title: "Fintech Hub", category: "App Design", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop", speed: 0.1 },
    { title: "Neuro Sync", category: "Interface", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2564&auto=format&fit=crop", speed: 0.2 },
    { title: "E-Store Pro", category: "UX/UI", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop", speed: 0.15 },
    { title: "Cyber Health", category: "Mobile App", image: "https://images.unsplash.com/photo-1576091160550-2173599211d0?q=80&w=2670&auto=format&fit=crop", speed: 0.25 },
    { title: "Crypto Vault", category: "Security", image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=2574&auto=format&fit=crop", speed: 0.1 },
    { title: "Solaris App", category: "Green Tech", image: "https://images.unsplash.com/photo-1509091353245-a7489505508b?q=80&w=2670&auto=format&fit=crop", speed: 0.3 },
];

export function PortfolioMasonry() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={containerRef} className="bg-background py-32 px-6 overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-primary font-mono text-sm uppercase tracking-widest block mb-4"
                        >
                            04 — Digital Products
                        </motion.span>
                        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                            Next-Gen <br /> Interfaces.
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {projects.map((p, i) => (
                        <ParallaxCard key={i} project={p} index={i} progress={scrollYProgress} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ParallaxCard({ project, index, progress }: { project: any, index: number, progress: any }) {
    // Each card moves at a different speed based on its project.speed
    const y = useTransform(progress, [0, 1], [0, -index * 150 * project.speed]);

    return (
        <motion.div
            style={{ y }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative rounded-[2rem] overflow-hidden bg-slate-900 border border-white/5 cursor-pointer shadow-2xl"
        >
            <div className="aspect-[4/5] overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

            <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-primary font-mono text-[10px] uppercase tracking-[0.3em] font-black mb-2">{project.category}</span>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">{project.title}</h3>
                <div className="flex items-center gap-2 text-white/40 text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project <ArrowUpRight size={14} className="text-primary" />
                </div>
            </div>

            {/* Glass Floating Element - Based on references in uploaded image */}
            <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                <ArrowUpRight size={20} className="text-white" />
            </div>
        </motion.div>
    );
}
