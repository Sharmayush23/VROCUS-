"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
    Autoplay,
    EffectCoverflow,
    Navigation,
    Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { cn } from "@/lib/utils";
import { clientsData } from "@/data/clients-data";

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

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

export const WorkSwiper = () => {
    const [isLoaded, setIsLoaded] = useState(false);

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

    // Re-process embeds when Swiper changes or loads
    const onSwiperTransition = () => {
        if (isLoaded && (window as any).instgrm) {
            (window as any).instgrm.Embeds.process();
        }
    };

    return (
        <div className="relative w-full py-20 overflow-hidden min-h-[700px] flex flex-col justify-center bg-black">
            {/* Ambient Glows */}
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
                </div>

                <Carousel_001
                    className="w-full"
                    reels={allReels}
                    showPagination
                    loop={true}
                    showNavigation
                    autoplay={false}
                    onTransitionEnd={onSwiperTransition}
                />
            </div>
        </div>
    );
};

const Carousel_001 = ({
    reels,
    className,
    showPagination = false,
    showNavigation = false,
    loop = true,
    autoplay = false,
    spaceBetween = 0,
    onTransitionEnd,
}: {
    reels: any[];
    className?: string;
    showPagination?: boolean;
    showNavigation?: boolean;
    loop?: boolean;
    autoplay?: boolean;
    spaceBetween?: number;
    onTransitionEnd?: () => void;
}) => {
    const css = `
    .Carousal_001 {
        padding-bottom: 80px !important;
        padding-top: 50px !important;
    }
    .swiper-pagination-bullet {
        background: white !important;
        opacity: 0.3;
        width: 12px;
        height: 6px;
        border-radius: 4px;
        transition: all 0.3s ease;
    }
    .swiper-pagination-bullet-active {
        background: #F27C2C !important;
        opacity: 1;
        width: 32px;
    }
    
    /* Instagram Crop Styling */
    .instagram-crop-container {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #000;
        border-radius: 24px;
    }

    /* Target the iframe and shift it to hide header/footer */
    /* We focus on the inner video area by using a taller iframe and cropping the top/bottom */
    .instagram-crop-container iframe {
        position: absolute !important;
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) scale(1.4) !important; /* Increased zoom for impact */
        width: 100% !important;
        height: 100% !important;
        border: none !important;
        filter: contrast(1.05) brightness(1.05); /* Slight aesthetic boost */
    }

    /* Overlay to block interaction and extra UI elements */
    .instagram-overlay {
        position: absolute;
        inset: 0;
        z-index: 10;
        background: transparent;
        pointer-events: none;
    }

    .swiper-slide {
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        filter: grayscale(100%);
        opacity: 0.4;
        transform: scale(0.85);
    }
    .swiper-slide-active {
        filter: grayscale(0%);
        opacity: 1;
        transform: scale(1);
        z-index: 20;
    }
    .swiper-slide-active .instagram-crop-container {
        box-shadow: 0 20px 50px -10px rgba(242, 124, 44, 0.3);
        border: 2px solid rgba(242, 124, 44, 0.5);
    }
    `;

    return (
        <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
                duration: 0.3,
                delay: 0.5,
            }}
            className={cn("w-full relative", className)}
        >
            <style>{css}</style>

            <Swiper
                spaceBetween={spaceBetween}
                autoplay={
                    autoplay
                        ? {
                            delay: 4000,
                            disableOnInteraction: false,
                        }
                        : false
                }
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={loop}
                slidesPerView={1.5}
                onTransitionEnd={onTransitionEnd}
                onSlideChange={onTransitionEnd}
                breakpoints={{
                    640: { slidesPerView: 2.5 },
                    1024: { slidesPerView: 4.5 }
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false,
                }}
                pagination={
                    showPagination
                        ? {
                            clickable: true,
                        }
                        : false
                }
                navigation={
                    showNavigation
                        ? {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }
                        : false
                }
                className="Carousal_001 !overflow-visible"
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            >
                {reels.map((reel, index) => (
                    <SwiperSlide key={index} className="aspect-[9/16] rounded-[32px] overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 shadow-2xl transition-all duration-500">
                        <div className="instagram-crop-container">
                            <iframe
                                src={`${reel.url.endsWith('/') ? reel.url : reel.url + '/'}embed/`}
                                className="w-full h-full border-0"
                            />
                            {/* Mask/Overlay to ensure focus remains on slide navigation and hide embed UI */}
                            <div className="instagram-overlay pointer-events-none" />
                        </div>

                        {/* Info Overlay */}
                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 pointer-events-none">
                            <p className="text-orange-400 font-mono text-[10px] uppercase tracking-wider mb-1">{reel.category}</p>
                            <h3 className="text-lg font-bold text-white leading-tight">{reel.clientName}</h3>
                        </div>
                    </SwiperSlide>
                ))}

                {showNavigation && (
                    <div className="flex justify-center gap-6 mt-8">
                        <button className="swiper-button-prev static !w-10 !h-10 sm:!w-14 sm:!h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-white/20 transition-all after:hidden">
                            <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                        <button className="swiper-button-next static !w-10 !h-10 sm:!w-14 sm:!h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-white/20 transition-all after:hidden">
                            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                    </div>
                )}
            </Swiper>
        </motion.div>
    );
};
