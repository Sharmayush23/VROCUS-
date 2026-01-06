"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { clientsData } from "@/data/clients-data";

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

// Flatten all reels from clientsData into a single array for the carousel
const allReels = clientsData.flatMap(client =>
    client.featuredReels.map(reel => ({
        ...reel,
        clientName: client.clientName,
        instagramHandle: client.instagramHandle,
        category: client.category,
        brandColor: client.brandColor || "#F27C2C"
    }))
);

export function Work3DCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    // Cycle reels
    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % allReels.length);
    const prevSlide = () => setActiveIndex((prev) => (prev - 1 + allReels.length) % allReels.length);

    // Handle Drag
    const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (info.offset.x > 50) {
            prevSlide();
        } else if (info.offset.x < -50) {
            nextSlide();
        }
    };

    // Load Instagram embed script
    useEffect(() => {
        if (!(window as any).instgrm) {
            const script = document.createElement("script");
            script.src = "https://www.instagram.com/embed.js";
            script.async = true;
            script.onload = () => {
                setIsLoaded(true);
                (window as any).instgrm?.Embeds?.process();
            };
            document.body.appendChild(script);
        } else {
            setIsLoaded(true);
            (window as any).instgrm?.Embeds?.process();
        }
    }, []);

    // Re-process embeds when index changes
    useEffect(() => {
        if (isLoaded && (window as any).instgrm) {
            (window as any).instgrm.Embeds.process();
        }
    }, [activeIndex, isLoaded]);

    const css = `
    .instagram-video-only-container iframe {
        position: absolute !important;
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) scale(1.4) !important;
        width: 100% !important;
        height: 100% !important;
        border: none !important;
    }
    `;

    return (
        <div className="relative w-full py-20 overflow-hidden min-h-[700px] flex flex-col justify-center bg-black">
            <style>{css}</style>
            {/* Reactive Gradient Background */}
            <motion.div
                animate={{
                    background: `linear-gradient(135deg, ${allReels[activeIndex].brandColor}20, #000000 80%)`
                }}
                transition={{ duration: 1 }}
                className="absolute inset-0 opacity-60 pointer-events-none"
            />

            {/* Ambient Blobs */}
            <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${PRIMARY_GRADIENT} opacity-10 blur-[120px] rounded-full pointer-events-none`} />

            <div className="container mx-auto relative z-10 px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 text-center md:text-left">
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            className={`text-transparent bg-clip-text bg-gradient-to-r ${PRIMARY_GRADIENT} font-mono text-sm uppercase tracking-widest block mb-4 font-bold`}
                        >
                            Live Work Showcase
                        </motion.span>
                        <h2 className="text-4xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-none mb-4 md:mb-0">
                            Client <br /> <span className={`text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>Reels.</span>
                        </h2>
                    </div>
                    {/* Navigation Controls */}
                    <div className="flex gap-4 mt-8 md:mt-0">
                        <button onClick={prevSlide} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                            ←
                        </button>
                        <button onClick={nextSlide} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                            →
                        </button>
                    </div>
                </div>

                {/* 3D Carousel Stage - Drag Enabled */}
                <motion.div
                    className="relative h-[500px] w-full flex items-center justify-center perspective-[2000px] cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={onDragEnd}
                >
                    <AnimatePresence mode="popLayout" initial={false}>
                        {allReels.map((reel, index) => {
                            const isActive = index === activeIndex;
                            const isNext = (index === (activeIndex + 1) % allReels.length);
                            const isPrev = (index === (activeIndex - 1 + allReels.length) % allReels.length);

                            if (!isActive && !isNext && !isPrev) return null;

                            return (
                                <motion.div
                                    key={`${reel.url}-${index}`}
                                    className={cn(
                                        "absolute w-[220px] md:w-[280px] aspect-[9/16] rounded-[30px] overflow-hidden shadow-2xl transition-all duration-500",
                                        isActive ? "z-30 border-2 border-orange-500/50 shadow-orange-500/20" : "z-10 grayscale opacity-40 border border-white/10"
                                    )}
                                    initial={{
                                        scale: 0.8,
                                        opacity: 0,
                                        rotateY: isPrev ? -25 : 25,
                                        x: isPrev ? "-70%" : "70%",
                                        z: -200
                                    }}
                                    animate={{
                                        scale: isActive ? 1 : 0.8,
                                        x: isActive ? "0%" : isPrev ? "-70%" : "70%",
                                        rotateY: isActive ? 0 : isPrev ? 25 : -25,
                                        z: isActive ? 0 : -200,
                                        opacity: isActive ? 1 : 0.4
                                    }}
                                    exit={{
                                        scale: 0.7,
                                        opacity: 0,
                                        zIndex: 0
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 150,
                                        damping: 20
                                    }}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    {/* Video Container with Cropping */}
                                    <div className="relative h-full w-full bg-black flex flex-col items-center justify-center overflow-hidden">

                                        {/* Instagram Embed with Vertical Crop */}
                                        <div className="instagram-video-only-container w-full h-full relative">
                                            <iframe
                                                src={`${reel.url.endsWith('/') ? reel.url : reel.url + '/'}embed/`}
                                                className="w-full h-full border-0"
                                            />
                                            <div className="instagram-overlay absolute inset-0 pointer-events-none" />
                                        </div>

                                        {/* Overlay Info (Only on active) */}
                                        {isActive && (
                                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Instagram className="w-4 h-4 text-orange-400" />
                                                    <span className="text-white text-sm font-semibold">{reel.clientName}</span>
                                                </div>
                                                <p className="text-gray-300 text-xs font-mono">{reel.instagramHandle}</p>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Progress / Indicators */}
                <div className="flex justify-center flex-wrap gap-2 mt-16 max-w-2xl mx-auto">
                    {allReels.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={cn(
                                "h-1.5 rounded-full transition-all duration-300",
                                i === activeIndex
                                    ? `w-8 bg-gradient-to-r ${ACCENT_GRADIENT}`
                                    : "w-2 bg-white/10 hover:bg-white/30"
                            )}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}
