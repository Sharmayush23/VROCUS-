"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto">
                <div className="relative overflow-hidden bg-primary rounded-3xl p-12 md:p-24 text-center">
                    {/* Background Effects */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative z-10 max-w-2xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Ready to elevate your brand<br />to the next dimension?
                        </h2>
                        <p className="text-white/80 text-xl mb-10">
                            Join the forward-thinking companies scaling with VROCUS.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-white/90 transition-colors">
                                Book a Free Strategy Call <ArrowRight size={20} />
                            </button>
                            <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                                View Pricing
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
