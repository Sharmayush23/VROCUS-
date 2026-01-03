"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

// Project Data with specific gradient themes
const projects = [
    {
        id: 1,
        title: "Global Brand Launch",
        category: "Brand Strategy",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
        accent: "#1F6ED4"
    },
    {
        id: 2,
        title: "Viral Campaign XP",
        category: "Social Growth",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
        accent: "#F27C2C"
    },
    {
        id: 3,
        title: "Direct Response Pro",
        category: "Performance Marketing",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        accent: "#E64545"
    },
    {
        id: 4,
        title: "Influence Network",
        category: "Influencer Marketing",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        accent: "#6BCF63"
    }
];

export function Work3DCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Cycle projects
    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % projects.length);
    const prevSlide = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

    // Handle Drag
    const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (info.offset.x > 50) {
            prevSlide();
        } else if (info.offset.x < -50) {
            nextSlide();
        }
    };

    return (
        <div className="relative w-full py-20 overflow-hidden min-h-[800px] flex flex-col justify-center bg-black">
            {/* Reactive Gradient Background */}
            <motion.div
                animate={{
                    background: `linear-gradient(135deg, ${projects[activeIndex].accent}20, #000000 80%)`
                }}
                transition={{ duration: 1 }}
                className="absolute inset-0 opacity-60 pointer-events-none"
            />

            {/* Ambient Blobs */}
            <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${PRIMARY_GRADIENT} opacity-10 blur-[100px] rounded-full pointer-events-none`} />

            <div className="container mx-auto relative z-10 px-4">
                {/* Header */}
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            className={`text-transparent bg-clip-text bg-gradient-to-r ${PRIMARY_GRADIENT} font-mono text-sm uppercase tracking-widest block mb-4 font-bold`}
                        >
                            Feature Work
                        </motion.span>
                        <h2 className="text-4xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-none">
                            Selected <br /> <span className={`text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>Projects.</span>
                        </h2>
                    </div>
                    {/* Navigation Controls */}
                    <div className="flex gap-4">
                        <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                            ←
                        </button>
                        <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                            →
                        </button>
                    </div>
                </div>

                {/* 3D Carousel Stage - Drag Enabled */}
                <motion.div
                    className="relative h-[500px] w-full flex items-center justify-center perspective-[1000px] cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={onDragEnd}
                >
                    <AnimatePresence mode="popLayout" initial={false}>
                        {projects.map((project, index) => {
                            const isActive = index === activeIndex;
                            const isNext = (index === (activeIndex + 1) % projects.length);
                            const isPrev = (index === (activeIndex - 1 + projects.length) % projects.length);

                            if (!isActive && !isNext && !isPrev) return null;

                            return (
                                <motion.div
                                    key={project.id}
                                    layoutId={`card-${project.id}`}
                                    className={cn(
                                        "absolute w-[80%] md:w-[60%] lg:w-[50%] aspect-video rounded-[30px] overflow-hidden shadow-2xl border border-white/10",
                                        isActive ? "z-30" : "z-10 grayscale"
                                    )}
                                    initial={{
                                        scale: 0.85,
                                        opacity: 0,
                                        rotateY: isPrev ? -15 : 15, // enter from sides
                                        x: isPrev ? "-60%" : "60%",
                                        z: -100
                                    }}
                                    animate={{
                                        scale: isActive ? 1 : 0.85,
                                        x: isActive ? "0%" : isPrev ? "-60%" : "60%",
                                        rotateY: isActive ? 0 : isPrev ? 15 : -15,
                                        z: isActive ? 0 : -100,
                                        opacity: isActive ? 1 : 0.4
                                    }}
                                    exit={{
                                        scale: 0.8,
                                        opacity: 0,
                                        zIndex: 0
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 25
                                    }}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className="relative h-full w-full group">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            draggable={false}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                            <span className={`inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-white rounded-full bg-gradient-to-r ${PRIMARY_GRADIENT}`}>
                                                {project.category}
                                            </span>
                                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">{project.title}</h3>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Progress / Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {projects.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={cn(
                                "h-1 rounded-full transition-all duration-300",
                                i === activeIndex
                                    ? `w-12 bg-gradient-to-r ${ACCENT_GRADIENT}`
                                    : "w-4 bg-white/20"
                            )}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}
