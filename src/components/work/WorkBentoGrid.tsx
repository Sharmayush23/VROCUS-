"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

const workItems = [
    {
        id: 1,
        title: "Neon Cyberpunk Series",
        category: "VFX & Motion",
        video: "/work/work1.mp4",
        size: "large", // col-span-2 row-span-2
        accent: "from-[#F5B21A] to-[#F27C2C]"
    },
    {
        id: 2,
        title: "Future Automotive",
        category: "3D Commercial",
        video: "/work/work2.mp4",
        size: "tall", // row-span-2
        accent: "from-[#1F6ED4] to-[#16A1B5]"
    },
    {
        id: 4,
        title: "Smart Home Tech",
        category: "Product Reveal",
        video: "/work/work4.mp4",
        size: "normal",
        accent: "from-[#6BCF63] to-[#2FB9C3]"
    },
    {
        id: 5,
        title: "Digital Fashion",
        category: "Social Campaign",
        video: "/work/work5.mp4",
        size: "normal",
        accent: "from-[#E64545] to-[#F27C2C]"
    },
    {
        id: 6,
        title: "Holographic UI",
        category: "Interface Design",
        video: "/work/work6.mp4",
        size: "wide", // col-span-2
        accent: "from-[#1E2A4A] to-[#1F6ED4]"
    }
];

export function WorkBentoGrid() {
    return (
        <section className="bg-black py-24 px-6 relative z-10">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Selected <span className={`text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>Works</span>
                    </h2>
                    <p className="text-gray-400">Hover to play. Click to view details.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {workItems.map((item, i) => (
                        <GridItem key={item.id} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function GridItem({ item, index }: { item: any; index: number }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleMouseEnter = () => {
        setIsPlaying(true);
        videoRef.current?.play();
    };

    const handleMouseLeave = () => {
        setIsPlaying(false);
        videoRef.current?.pause();
        if (videoRef.current) videoRef.current.currentTime = 0;
    };

    // Determine grid classes based on size
    let gridClasses = "col-span-1 row-span-1";
    if (item.size === "large") gridClasses = "md:col-span-2 md:row-span-2";
    if (item.size === "tall") gridClasses = "md:row-span-2";
    if (item.size === "wide") gridClasses = "md:col-span-2";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative rounded-3xl overflow-hidden bg-[#0F0F0F] border border-white/10 ${gridClasses}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Glow Border Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10 pointer-events-none`} />

            {/* Video Background */}
            <video
                ref={videoRef}
                src={item.video}
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Content Overlay */}
            <div className={`absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${item.accent} flex items-center justify-center mb-4 text-white shadow-lg`}>
                    <Play size={16} fill="currentColor" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400 font-mono uppercase tracking-wider">{item.category}</p>
            </div>
        </motion.div>
    );
}
