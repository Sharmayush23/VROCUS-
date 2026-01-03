"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
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

export const WorkSwiper = () => {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000",
            alt: "Cyberpunk Project 1",
        },
        {
            src: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000",
            alt: "Neon City",
        },
        {
            src: "https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?q=80&w=1000",
            alt: "Digital Art",
        },
        {
            src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000",
            alt: "Tech Circuit",
        },
        {
            src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000",
            alt: "Retro Future",
        },
        {
            src: "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=1000",
            alt: "Vaporwave",
        },
    ];

    return (
        <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-background">
            <Carousel_001 className="w-full max-w-5xl" images={images} showPagination loop showNavigation autoplay />
        </div>
    );
};

const Carousel_001 = ({
    images,
    className,
    showPagination = false,
    showNavigation = false,
    loop = true,
    autoplay = false,
    spaceBetween = 40,
}: {
    images: { src: string; alt: string }[];
    className?: string;
    showPagination?: boolean;
    showNavigation?: boolean;
    loop?: boolean;
    autoplay?: boolean;
    spaceBetween?: number;
}) => {
    const css = `
  .Carousal_001 {
    padding-bottom: 50px !important;
  }
  .swiper-pagination-bullet {
    background: white !important;
    opacity: 0.5;
  }
  .swiper-pagination-bullet-active {
    background: #F28C2D !important;
    opacity: 1;
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
            className={cn("w-full relative px-4", className)}
        >
            <style>{css}</style>

            <Swiper
                spaceBetween={spaceBetween}
                autoplay={
                    autoplay
                        ? {
                            delay: 2500,
                            disableOnInteraction: false,
                        }
                        : false
                }
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={loop}
                slidesPerView={1.5}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 2.5 }
                }}
                coverflowEffect={{
                    rotate: 0,
                    slideShadows: false,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
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
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="!h-[400px] md:!h-[500px] w-full border border-white/10 rounded-2xl overflow-hidden glass-panel">
                        <img
                            className="h-full w-full object-cover"
                            src={image.src}
                            alt={image.alt}
                        />
                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-xl font-bold text-white">Project {index + 1}</h3>
                        </div>
                    </SwiperSlide>
                ))}
                {showNavigation && (
                    <div className="hidden md:block">
                        <div className="swiper-button-next after:hidden !text-orange-vibrant right-0">
                            <ChevronRightIcon className="h-10 w-10 drop-shadow-lg" />
                        </div>
                        <div className="swiper-button-prev after:hidden !text-orange-vibrant left-0">
                            <ChevronLeftIcon className="h-10 w-10 drop-shadow-lg" />
                        </div>
                    </div>
                )}
            </Swiper>
        </motion.div>
    );
};
