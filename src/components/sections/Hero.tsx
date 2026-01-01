"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { GlassOrb } from "@/components/ui/GlassOrb";

export function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <section className="relative min-h-[110vh] w-full flex items-center justify-center overflow-hidden bg-background px-4 pt-32 pb-20">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-white/[0.02] rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-background to-transparent" />
            </div>

            <div className="container mx-auto relative z-10 flex flex-col items-center justify-center text-center">

                {/* 3D Glass Orb Integration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="w-full h-[400px] md:h-[600px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] z-0 pointer-events-none opacity-60"
                >
                    <GlassOrb />
                </motion.div>

                {/* Main Heading */}
                <div className="relative z-10 flex flex-col items-center">
                    <h1 className="flex flex-col items-center justify-center font-bold tracking-tight uppercase leading-[0.85] text-6xl md:text-[10rem] lg:text-[14rem] text-white">
                        <motion.span
                            style={{ y: y1 }}
                            className="block mix-blend-difference"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Visionary
                        </motion.span>
                        <motion.span
                            style={{ y: y2 }}
                            className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20 pb-4"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Design
                        </motion.span>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-8 flex flex-col items-center gap-6"
                    >
                        <p className="text-white/40 text-sm md:text-base uppercase tracking-[0.3em] max-w-md font-medium">
                            Crafting digital experiences with precision and soul.
                        </p>

                        <div className="flex items-center gap-4 mt-4">
                            <div className="h-[1px] w-12 bg-white/20" />
                            <span className="text-white/20 text-xs uppercase tracking-widest">Scroll to explore</span>
                            <div className="h-[1px] w-12 bg-white/20" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
