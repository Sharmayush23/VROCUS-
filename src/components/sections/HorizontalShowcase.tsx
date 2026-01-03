"use client";

import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Neon Cybernetic",
        category: "3D Animation",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        description: "Kinetic visual identity for a tech-first streetwear brand."
    },
    {
        title: "Future Finance",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1642104704074-907c0698eb98?q=80&w=2532&auto=format&fit=crop",
        description: "A decentralised platform for the future of global trading."
    },
    {
        title: "Eco Vision",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop",
        description: "Sustainable packaging design for the organic skincare market."
    },
    {
        title: "Quantum Leap",
        category: "VFX",
        image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=2574&auto=format&fit=crop",
        description: "Cinematic visual effects for a sci-fi motion picture series."
    },
];

export function HorizontalShowcase() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Translate from right to left as we scroll down
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-background">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-32 left-12 md:left-24 z-20">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-primary font-mono text-sm uppercase tracking-widest block mb-4"
                    >
                        Selected Works
                    </motion.span>
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white">
                        Case <br /> Studies.
                    </h2>
                </div>

                <motion.div style={{ x }} className="flex gap-12 px-24 pl-[40vw]">
                    {projects.map((project, index) => (
                        <div key={index} className="relative h-[65vh] w-[85vw] md:w-[700px] shrink-0 group glass-panel overflow-hidden">
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale opacity-50 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                            </div>

                            <div className="absolute inset-0 z-10 p-12 flex flex-col justify-end">
                                <div className="max-w-md">
                                    <span className="text-primary font-mono text-xs uppercase tracking-[0.3em] font-bold mb-4 block">
                                        / 0{index + 1}
                                    </span>
                                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted text-lg mb-8 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {project.description}
                                    </p>
                                    <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white border-b-2 border-primary pb-1 group-hover:gap-4 transition-all">
                                        View Case Study <ArrowUpRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Background Decorations */}
                <div className="absolute right-0 bottom-0 p-24 pointer-events-none opacity-20">
                    <span className="text-[20vh] font-black uppercase tracking-tighter text-white leading-none overflow-hidden block whitespace-nowrap">
                        VROCUS • STUDIO
                    </span>
                </div>
            </div>
        </section>
    );
}
