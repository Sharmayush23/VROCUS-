"use client";

import React, { useState, useEffect, useRef } from "react";
import { WorkCard, MediaItem } from "./WorkCard";
import { Loader2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const CATEGORIES = [
    "VFX",
    "Video Editing",
    "Motion Graphics",
    "3D Art",
    "Commercial",
    "Social Media"
];

function getRandomCategory(filename: string) {
    // Deterministic random based on string char codes
    let sum = 0;
    for (let i = 0; i < filename.length; i++) {
        sum += filename.charCodeAt(i);
    }
    return CATEGORIES[sum % CATEGORIES.length];
}

export const WorkGallery = () => {
    const [items, setItems] = useState<MediaItem[]>([]);
    const [loading, setLoading] = useState(true);
    const trendingSwiperRef = useRef<any>(null);

    useEffect(() => {
        async function fetchVideos() {
            try {
                const res = await fetch("/api/videos");
                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();

                // Process items to add titles and categories
                const processed = data.map((item: any) => ({
                    ...item,
                    title: item.name.replace(/\.[^/.]+$/, "").replace(/video/i, "Project ").replace(/[-_]/g, " ").replace(/\d+/g, (n: string) => ` ${n}`),
                    category: getRandomCategory(item.name)
                }));

                setItems(processed);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchVideos();
    }, []);

    if (loading) {
        return (
            <div className="w-full h-96 flex items-center justify-center text-white/50">
                <Loader2 className="w-8 h-8 animate-spin" />
            </div>
        );
    }

    // Split items for different sections - slightly adjusted counts
    const featuredItems = items.slice(0, 4);
    const popularItems = items.slice(4, 14);
    const exploreItems = items.slice(14);

    return (
        <section className="container mx-auto px-4 py-16 relative z-10">
            {/* Featured Section - Smaller Grid */}
            <div className="mb-20">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tighter">Featured <span className="text-orange-500">Works</span></h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {featuredItems.map((item) => (
                        <WorkCard
                            key={item.name}
                            item={item}
                            aspectRatio="video"
                        />
                    ))}
                </div>
            </div>

            {/* Popular / Recent (Auto-scrolling Swiper) */}
            {popularItems.length > 0 && (
                <div className="mb-20">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tighter">Trending <span className="text-blue-500">Projects</span></h2>
                    </div>

                    <div
                        onMouseEnter={() => trendingSwiperRef.current?.autoplay?.stop()}
                        onMouseLeave={() => trendingSwiperRef.current?.autoplay?.start()}
                    >
                        <Swiper
                            onSwiper={(swiper) => (trendingSwiperRef.current = swiper)}
                            modules={[Autoplay, FreeMode]}
                            spaceBetween={16}
                            slidesPerView={1.5}
                            loop={true}
                            freeMode={true}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                            }}
                            speed={5000}
                            breakpoints={{
                                640: { slidesPerView: 2.5 },
                                1024: { slidesPerView: 4.5 },
                                1280: { slidesPerView: 5.5 }
                            }}
                            className="w-full !overflow-visible"
                        >
                            {popularItems.map((item) => (
                                <SwiperSlide key={item.name} className="!h-auto">
                                    <WorkCard
                                        item={item}
                                        aspectRatio="video"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}

            {/* Explore All (Masonry Grid) - Smaller cards, more columns */}
            {exploreItems.length > 0 && (
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tighter">Explore <span className="text-purple-500">Archive</span></h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {exploreItems.map((item) => (
                            <WorkCard
                                key={item.name}
                                item={item}
                                aspectRatio="portrait"
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};
