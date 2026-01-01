"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black px-6 noise-overlay">
            {/* Cosmic Background Infrastructure */}
            <div className="absolute inset-0 z-0">
                {/* Subtle Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />

                {/* Discovery Horizon Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120vw] h-[40vh] bg-[radial-gradient(ellipse_at_bottom,rgba(255,165,0,0.12)_0%,transparent_70%)] opacity-70" />

                {/* Horizon Arc */}
                <div className="absolute bottom-[20vh] left-1/2 -translate-x-1/2 w-[200vw] h-[200vw] border-t border-[rgba(255,165,0,0.15)] rounded-full blur-[2px]" />

                {/* Secondary Diffused Glow */}
                <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-[radial-gradient(circle,rgba(255,165,0,0.05)_0%,transparent_75%)] blur-[100px]" />
            </div>

            <div className="container mx-auto relative z-10 flex flex-col items-center justify-center min-h-screen">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center text-center space-y-12 max-w-4xl"
                >
                    {/* Premium Typography */}
                    <h1 className="text-white font-bold tracking-tight leading-[1.05] text-[clamp(2.5rem,8vw,5.5rem)] text-balance">
                        Punjab's Best <br />
                        <span className="gradient-text">Marketing Agency</span>
                    </h1>

                    <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed opacity-80">
                        Trusted by the <strong>Khanna Police</strong> and top brands. We grow followers from <strong>200 to 120k</strong> and turn engagement into pure profit.
                    </p>

                    {/* Primary CTA Section - Glassmorphic Input */}
                    <div className="w-full max-w-lg space-y-4">
                        <div className="flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 bg-transparent border-none px-6 py-3 text-white placeholder:text-white/30 focus:outline-none placeholder:font-medium text-sm w-full"
                            />
                            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                Get Started
                            </button>
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
                            Free and open source forever.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator - Optically Lowered */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 hover:opacity-100 transition-opacity"
            >
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            </motion.div>
        </section>
    );
}
