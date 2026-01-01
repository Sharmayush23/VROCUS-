"use client";

import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Neon Cybernetic",
        category: "3D Animation",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    },
    {
        title: "Future Finance",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1642104704074-907c0698eb98?q=80&w=2532&auto=format&fit=crop",
    },
    {
        title: "Eco Vision",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop",
    },
    {
        title: "Quantum Leap",
        category: "VFX",
        image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=2574&auto=format&fit=crop",
    },
];

export function Projects() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-background">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-16 px-16">
                    <div className="flex flex-col justify-center min-w-[30vw] md:min-w-[400px] mb-20 p-8">
                        <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-6">
                            Selected <br /> Work
                        </h2>
                        <p className="text-gray-400 max-w-sm mb-8">
                            A curated showcase of our most ambitious projects.
                        </p>
                        <div className="flex items-center gap-2 uppercase tracking-widest text-sm font-bold border-b border-white pb-1 w-fit">
                            All Projects
                        </div>
                    </div>

                    {projects.map((project, index) => (
                        <div key={index} className="relative h-[60vh] w-[80vw] md:w-[600px] shrink-0 bg-gray-900 overflow-hidden group">
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                                />
                            </div>
                            <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
                                <span className="text-primary font-mono text-xs uppercase tracking-widest mb-2">{project.category}</span>
                                <h3 className="text-4xl font-bold uppercase tracking-tight">{project.title}</h3>
                            </div>
                            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-md">
                                <ArrowUpRight className="text-white w-8 h-8" />
                            </div>
                        </div>
                    ))}

                </motion.div>
            </div>
        </section>
    );
}
