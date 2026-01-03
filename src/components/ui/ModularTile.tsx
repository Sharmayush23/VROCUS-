"use client";

import React from "react";
import transition from "framer-motion";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ModularTileProps {
    title: string;
    description?: string;
    tag?: string;
    image?: string;
    className?: string;
    size?: "small" | "medium" | "large" | "wide" | "tall";
}

export const ModularTile: React.FC<ModularTileProps> = ({
    title,
    description,
    tag,
    image,
    className = "",
    size = "medium",
}) => {
    const sizeClasses = {
        small: "col-span-1 row-span-1 h-[240px]",
        medium: "col-span-1 row-span-1 h-[320px]",
        large: "col-span-2 row-span-2 h-[660px]",
        wide: "col-span-2 row-span-1 h-[320px]",
        tall: "col-span-1 row-span-2 h-[660px]",
    };

    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`relative overflow-hidden group glass-panel ${sizeClasses[size]} ${className}`}
        >
            {/* Background Image */}
            {image && (
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            )}

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="space-y-2">
                    {tag && (
                        <span className="text-[10px] uppercase tracking-widest text-accent font-bold">
                            {tag}
                        </span>
                    )}
                    <div className="flex items-end justify-between">
                        <h3 className="text-2xl font-semibold tracking-tight leading-tight text-white group-hover:text-primary transition-colors duration-300">
                            {title}
                        </h3>
                        <div className="w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                            <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                    </div>
                    {description && (
                        <p className="text-sm text-muted line-clamp-2 max-w-[80%] group-hover:text-white/80 transition-colors duration-300">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
