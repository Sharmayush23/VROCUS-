"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseGsapScrollOptions {
    start?: string;
    duration?: number;
    y?: number;
    delay?: number;
}

export function useGsapScroll(
    ref: React.RefObject<HTMLElement | null>,
    options: UseGsapScrollOptions = {}
) {
    const {
        start = "top 80%",
        duration = 0.6,
        y = 20,
        delay = 0,
    } = options;

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Check for small screens (<768px)
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        if (isMobile) {
            // Optional: you might want a simple fade-in or just visible on mobile without scroll trigger
            // For now, ensuring it is visible if we skip animation, 
            // OR we can allow animation but disable scrollTrigger logic if specifically requested.
            // The prompt asked: "disable ScrollTrigger on small screens".
            // We'll just animate it in immediately or leave it alone? 
            // Let's set it to visible state immediately to be safe.
            gsap.set(element, { opacity: 1, y: 0 });
            return;
        }

        // Initial state
        gsap.set(element, { opacity: 0, y: y });

        const ctx = gsap.context(() => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: start,
                    toggleActions: "play none none reverse", // Or "play none none none" for once
                },
                opacity: 1,
                y: 0,
                duration: duration,
                delay: delay,
                ease: "power3.out",
            });
        });

        return () => ctx.revert();
    }, [ref, start, duration, y, delay]);
}
