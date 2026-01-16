"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface MediaItem {
    name: string;
    url: string;
    type: "video" | "image";
    size: number;
    category?: string;
    title?: string;
}

interface WorkCardProps {
    item: MediaItem;
    className?: string;
    aspectRatio?: "square" | "video" | "portrait";
}

export const WorkCard = ({ item, className, aspectRatio = "video" }: WorkCardProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current && item.type === "video") {
            videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current && item.type === "video") {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const aspectRatioClass = {
        square: "aspect-square",
        video: "aspect-video",
        portrait: "aspect-[9/16]",
    }[aspectRatio];

    return (
        <motion.div
            className={cn(
                "group relative rounded-xl overflow-visible bg-black",
                aspectRatioClass,
                className
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            {/* Animated Gradient Stroke Border */}
            <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />

            {/* Card Container */}
            <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-white/10 group-hover:border-transparent transition-all duration-500">
                {/* Media Content */}
                <div className="absolute inset-0 w-full h-full">
                    {item.type === "video" ? (
                        <video
                            ref={videoRef}
                            src={item.url}
                            className="w-full h-full object-cover"
                            loop
                            muted
                            playsInline
                            preload="metadata"
                        />
                    ) : (
                        <img
                            src={item.url}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    )}
                </div>

                {/* Gradient Overlay - Removed to keep video clean */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" /> */}

                {/* Content Info - Removed as requested */}
            </div>
        </motion.div>
    );
};
