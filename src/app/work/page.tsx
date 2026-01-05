"use client";

import { WorkSwiper } from "@/components/sections/WorkSwiper";
import { motion } from "framer-motion";

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

export default function WorkPage() {
    return (
        <main className="bg-black min-h-screen relative overflow-hidden">
            {/* Background Texture/Noise */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

            {/* Ambient Glows */}
            <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r ${PRIMARY_GRADIENT} opacity-20 blur-[150px] rounded-full pointer-events-none`} />
            <div className={`absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-r ${ACCENT_GRADIENT} opacity-10 blur-[150px] rounded-full pointer-events-none`} />

            {/* Premium Swiper Carousel Showcase */}
            <div className="relative">
                <WorkSwiper />
            </div>

            {/* Case Studies CTA Section */}
            <section className="container mx-auto px-6 py-24 relative z-10 -mt-20">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center relative z-10 backdrop-blur-xl">
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${PRIMARY_GRADIENT} text-xs font-bold uppercase tracking-widest mb-4 block`}>Detailed Analysis</span>
                    <h2 className="text-4xl font-bold text-white mb-6">Deep Dive Case Studies</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore the technical and creative process behind our award-winning projects.
                        Select a project from the showcase above to view the full case study.
                    </p>
                </div>
            </section>
        </main>
    );
}
