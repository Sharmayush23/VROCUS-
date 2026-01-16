"use client";

import React, { useRef, useEffect } from "react";
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

import { cn } from "@/lib/utils";

// Specific videos requested by the user
const CAROUSEL_VIDEOS = [
    { url: "/api/videos/video4.mp4", category: "Commercial", title: "Visual Narrative" },
    { url: "/api/videos/video12.mp4", category: "3D Art", title: "Digital Sculpting" },
    { url: "/api/videos/video28.mp4", category: "VFX", title: "CGI Environments" },
    { url: "/api/videos/video32.mp4", category: "Motion", title: "Dynamic Systems" },
    { url: "/api/videos/video37.mp4", category: "Social", title: "Brand Story" },
];

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

export const WorkSwiper = () => {
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
                    videos={CAROUSEL_VIDEOS}
                    showPagination
                    loop={true}
                    showNavigation
                    autoplay={true}
                />
            </div>
        </div>
    );
};

const Carousel_001 = ({
    videos,
    className,
    showPagination = false,
    showNavigation = false,
    loop = true,
    autoplay = false,
    spaceBetween = 0,
}: {
    videos: any[];
    className?: string;
    showPagination?: boolean;
    showNavigation?: boolean;
    loop?: boolean;
    autoplay?: boolean;
    spaceBetween?: number;
}) => {
    const swiperRef = useRef<any>(null);

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
    
    .video-container {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #000;
        border-radius: 24px;
    }

    .video-container video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .swiper-slide {
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        filter: grayscale(80%);
        opacity: 0.4;
        transform: scale(0.85);
    }
    .swiper-slide-active {
        filter: grayscale(0%);
        opacity: 1;
        transform: scale(1);
        z-index: 20;
    }
    .swiper-slide-active .video-container {
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
            onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay?.start()}
        >
            <style>{css}</style>

            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={spaceBetween}
                autoplay={
                    autoplay
                        ? {
                            delay: 3000,
                            disableOnInteraction: false,
                        }
                        : false
                }
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={loop}
                slidesPerView={1.2}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3.5 }
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
                {videos.map((video, index) => (
                    <SwiperSlide key={index} className="aspect-[9/16] rounded-[32px] overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 shadow-2xl transition-all duration-500">
                        <div className="video-container">
                            <video
                                src={video.url}
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        </div>

                        {/* Info Overlay */}
                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 pointer-events-none">
                            <p className="text-orange-400 font-mono text-[10px] uppercase tracking-wider mb-1">{video.category}</p>
                            <h3 className="text-lg font-bold text-white leading-tight">{video.title}</h3>
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

