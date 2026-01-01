"use client";

import { motion } from "framer-motion";

const brands = [
    "TechNova",
    "GrowthBox",
    "ArtFlow",
    "NextGen",
    "Studio X",
    "Velox",
    "Quantum",
    "CyberDyne",
];

export function TrustedBy() {
    return (
        <section className="py-10 border-b border-white/5 bg-background/50">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
                    Trusted by innovative teams at
                </p>

                {/* Simple Marquee Effect using flex and overflow-hidden for now, 
            or just a responsive grid to be safe and clean. 
            Let's do a responsive grid for better mobile/desktop handling without complex marquee logic. 
        */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {brands.map((brand, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-xl md:text-2xl font-bold font-mono"
                        >
                            {brand}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
