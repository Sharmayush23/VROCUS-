"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useGsapScroll } from "@/hooks/useGsapScroll";

const testimonials = [
    {
        text: "VROCUS transformed our digital presence. Their 3D visuals are simply world-class and helped us secure Series B funding.",
        author: "Sarah Jenkins",
        role: "CMO, TechNova",
    },
    {
        text: "The best creative agency we've worked with. They understand the balance between aesthetics and conversion.",
        author: "David Chen",
        role: "Founder, GrowthBox",
    },
    {
        text: "Incredible attention to detail. The scroll animations and micro-interactions added a level of polish we didn't expect.",
        author: "Elena Rodriguez",
        role: "Product Director, ArtFlow",
    },
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    useGsapScroll(sectionRef, { start: "top 80%", y: 30 });

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section ref={sectionRef} className="container mx-auto px-4 py-20 opacity-0 transform translate-y-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Client Stories</h2>
            </div>

            <div className="relative max-w-4xl mx-auto bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl">
                <div className="absolute top-8 left-8 text-primary/20">
                    <Quote size={48} />
                </div>

                <div className="relative overflow-hidden min-h-[200px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="text-center"
                        >
                            <p className="text-xl md:text-2xl font-light leading-relaxed mb-8">
                                &quot;{testimonials[currentIndex].text}&quot;
                            </p>
                            <div>
                                <h4 className="font-bold text-lg">{testimonials[currentIndex].author}</h4>
                                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex justify-center gap-4 mt-8">
                    <button onClick={prev} className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={next} className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}
