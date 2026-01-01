"use client";

import React from "react";
import { motion } from "framer-motion";
import { ModularTile } from "@/components/ui/ModularTile";

const featuredProjects = [
    {
        title: "Global Brand Launch",
        tag: "Brand Strategy",
        description: "A complete identity overhaul and global go-to-market strategy for a leading tech firm.",
        size: "large" as const,
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Viral Campaign XP",
        tag: "Social Growth",
        description: "Driving 200% engagement increase through data-backed creative storytelling.",
        size: "medium" as const,
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
    },
    {
        title: "Direct Response Pro",
        tag: "Performance Marketing",
        description: "High-converting ad funnels designed for maximum ROI and scalability.",
        size: "medium" as const,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    },
    {
        title: "Influence Network",
        tag: "Influencer Marketing",
        description: "Connecting brands with top-tier creators for authentic reach.",
        size: "wide" as const,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    },
];

export const FeaturedWork = () => {
    return (
        <section className="py-24 px-6 bg-background">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <span className="text-accent text-[10px] font-bold tracking-widest uppercase">
                            Campaign Highlights
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                            Scaling brands with <span className="text-muted">creative precision and data.</span>
                        </h2>
                    </div>
                    <button className="text-xs font-semibold text-white/60 hover:text-white transition-colors pb-2 border-b border-white/10 uppercase tracking-widest">
                        View All Campaigns
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ModularTile {...featuredProjects[0]} className="lg:col-span-2 lg:row-span-2" />
                    <ModularTile {...featuredProjects[1]} size="medium" />
                    <ModularTile {...featuredProjects[2]} size="medium" />
                    <ModularTile {...featuredProjects[3]} className="lg:col-span-3 h-[400px]" size="wide" />
                </div>
            </div>
        </section>
    );
};
