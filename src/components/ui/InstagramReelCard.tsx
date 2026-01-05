"use client";

import { motion } from "framer-motion";
import { ExternalLink, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import { InstagramReel } from "@/data/clients-data";

interface InstagramReelCardProps {
    reel: InstagramReel;
    clientName: string;
    instagramHandle: string;
    index: number;
}

export const InstagramReelCard = ({
    reel,
    clientName,
    instagramHandle,
    index
}: InstagramReelCardProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // Load Instagram embed script
    useEffect(() => {
        // Check if Instagram embed script is already loaded
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
            // Process embeds if script already exists
            (window as any).instgrm?.Embeds?.process();
        }
    }, []);

    // Re-process embeds when component updates
    useEffect(() => {
        if (isLoaded && (window as any).instgrm) {
            (window as any).instgrm.Embeds.process();
        }
    }, [isLoaded, reel.url]);

    const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
        >
            {/* Gradient Border Container */}
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-white/20 to-white/5 hover:from-[#F5B21A] hover:via-[#F27C2C] hover:to-[#E64545] transition-all duration-500">

                {/* Glass Card */}
                <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 h-full">

                    {/* Orange Glow on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-red-500/5 transition-all duration-500 pointer-events-none" />

                    {/* Client Info Header */}
                    <div className="relative z-10 p-4 bg-gradient-to-b from-black/60 to-transparent">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                <Instagram className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-sm">{clientName}</h3>
                                <a
                                    href={`https://instagram.com/${instagramHandle.replace("@", "")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-xs bg-gradient-to-r ${ACCENT_GRADIENT} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                                >
                                    {instagramHandle}
                                </a>
                            </div>
                        </div>

                        {reel.caption && (
                            <p className="text-gray-400 text-xs line-clamp-2">{reel.caption}</p>
                        )}
                    </div>

                    {/* Instagram Embed */}
                    <div className="relative instagram-embed-container">
                        <blockquote
                            className="instagram-media"
                            data-instgrm-captioned
                            data-instgrm-permalink={reel.url}
                            data-instgrm-version="14"
                            style={{
                                background: "transparent",
                                border: 0,
                                margin: "0",
                                padding: 0,
                                width: "100%",
                            }}
                        />
                    </div>

                    {/* View on Instagram Button */}
                    <div className="relative z-10 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <a
                            href={reel.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-sm font-semibold transition-all duration-300 group/btn"
                        >
                            <span>View on Instagram</span>
                            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Animated Orange Border */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 via-red-500/20 to-orange-500/20 blur-xl" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
