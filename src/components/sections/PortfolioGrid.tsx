"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const allProjects = [
    { id: 1, title: "Neon Cybernetic", category: "3D Animation", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe" },
    { id: 2, title: "Future Finance", category: "Web Development", image: "https://images.unsplash.com/photo-1642104704074-907c0698eb98" },
    { id: 3, title: "Eco Vision", category: "Branding", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e" },
    { id: 4, title: "Quantum Leap", category: "VFX", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769" },
    { id: 5, title: "Abstract Flow", category: "3D Animation", image: "https://images.unsplash.com/photo-1620641788421-7f1c338bd728" },
    { id: 6, title: "Tech Corp", category: "Web Development", image: "https://images.unsplash.com/photo-1481487484168-9b930d5b7d9f" },
    { id: 7, title: "Social Boost", category: "Marketing", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a" },
    { id: 8, title: "Space Xplore", category: "VFX", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa" },
];

const categories = ["All", "3D Animation", "Web Development", "VFX", "Branding", "Marketing"];

export function PortfolioGrid() {
    const [filter, setFilter] = useState("All");

    const filtered = filter === "All"
        ? allProjects
        : allProjects.filter(p => p.category === filter);

    return (
        <section className="container mx-auto px-4 py-12">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                            ? "bg-primary text-white scale-105"
                            : "bg-white/5 hover:bg-white/10 text-muted-foreground"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {filtered.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]"
                        >
                            {/* Use Next/Image or img (if external domains not configured) */}
                            <img
                                src={`${project.image}?q=80&w=800&auto=format&fit=crop`}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-start justify-end p-8">
                                <span className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.category}</span>
                                <h3 className="text-3xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
