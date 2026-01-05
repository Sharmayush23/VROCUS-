"use client";

import { motion } from "framer-motion";
import { Filter, Instagram } from "lucide-react";
import { useState } from "react";
import { clientsData, getCategories, ClientWork } from "@/data/clients-data";
import { InstagramReelCard } from "@/components/ui/InstagramReelCard";

const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";

export const InstagramReelsGrid = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const categories = ["All", ...getCategories()];

    // Filter clients based on selected category
    const filteredClients = selectedCategory === "All"
        ? clientsData
        : clientsData.filter(client => client.category === selectedCategory);

    // Count total reels
    const totalReels = filteredClients.reduce((acc, client) => acc + client.featuredReels.length, 0);

    return (
        <section className="relative py-24 px-6">
            {/* Section Header */}
            <div className="container mx-auto max-w-7xl mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${ACCENT_GRADIENT} p-[2px]`}>
                            <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                                <Instagram className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>

                    <h2 className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${ACCENT_GRADIENT} bg-clip-text text-transparent`}>
                        Featured Client Work
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                        Real results from real clients. Explore our latest Instagram reels showcasing campaigns, content, and creative work.
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-center gap-8 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="text-gray-300">
                                <span className="font-bold text-white">{filteredClients.length}</span> Clients
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-orange-500" />
                            <span className="text-gray-300">
                                <span className="font-bold text-white">{totalReels}</span> Reels
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-12 flex flex-wrap items-center justify-center gap-3"
                >
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Filter className="w-4 h-4" />
                        <span>Filter:</span>
                    </div>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`
                                px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                                ${selectedCategory === category
                                    ? `bg-gradient-to-r ${ACCENT_GRADIENT} text-black shadow-lg shadow-orange-500/30`
                                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                                }
                            `}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>
            </div>

            {/* Reels Grid */}
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredClients.map((client, clientIndex) => (
                        client.featuredReels.map((reel, reelIndex) => (
                            <InstagramReelCard
                                key={`${client.id}-${reelIndex}`}
                                reel={reel}
                                clientName={client.clientName}
                                instagramHandle={client.instagramHandle}
                                index={clientIndex * client.featuredReels.length + reelIndex}
                            />
                        ))
                    ))}
                </motion.div>

                {/* Empty State */}
                {filteredClients.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
                            <Instagram className="w-10 h-10 text-gray-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">No reels found</h3>
                        <p className="text-gray-400">Try selecting a different category</p>
                    </motion.div>
                )}
            </div>

            {/* Background Decorations */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};
