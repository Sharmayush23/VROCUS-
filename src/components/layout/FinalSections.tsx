"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Instagram, Linkedin, Twitter, Phone as WhatsApp, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

// TestimonialCard Component with Hover Autoplay
function TestimonialCard({ video, delay }: { video: string; delay: number }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            className="group relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.02 }}
        >
            {/* Animated Gradient Stroke Border */}
            <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />

            {/* Card Container */}
            <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-white/10 group-hover:border-transparent transition-all duration-500 bg-black">
                <div className="aspect-[9/16] w-full relative">
                    <video
                        ref={videoRef}
                        src={video}
                        className="w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        preload="metadata"
                    />
                </div>
            </div>
        </motion.div>
    );
}

// Testimonials Component
export function Testimonials() {
    const testimonials = [
        {
            id: 1,
            video: "/testimonials/testimonial1.mp4",
            poster: "/testimonials/poster1.jpg" // We'll rely on auto-generated posters or video loading for now
        },
        {
            id: 2,
            video: "/testimonials/testimonial2.mp4",
            poster: "/testimonials/poster2.jpg"
        },
        {
            id: 3,
            video: "/testimonials/testimonial3.mp4",
            poster: "/testimonials/poster3.jpg"
        }
    ];

    return (
        <section className="bg-black py-20 px-6 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#F27C2C]/10 blur-[100px] rounded-full opacity-30 pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className={`text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT} font-mono text-xs uppercase tracking-widest block mb-3 font-bold`}
                    >
                        Client Success
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-white leading-none">
                        Voices of <br />
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>
                            Impact.
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={t.id} video={t.video} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Footer Component (Updated to match Theme)
export function Footer() {
    return (
        <footer className="bg-black pt-20 px-0">
            <div className="w-full">
                {/* Full Width Footer Panel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                    className="bg-[#050505] border-t border-white/10 p-12 lg:p-20 xl:px-32 relative overflow-hidden w-full"
                >
                    {/* Background Noise */}
                    <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

                    <div className="grid grid-cols-1 xl:grid-cols-5 gap-16 xl:gap-8 relative z-10 w-full">
                        {/* Column 1: Brand & Social */}
                        <div className="space-y-10 xl:col-span-1">
                            <Link href="/" className="inline-block group">
                                <span className={`text-2xl font-bold uppercase tracking-tight italic text-transparent bg-clip-text bg-gradient-to-r ${PRIMARY_GRADIENT}`}>VROCUS</span>
                            </Link>

                            <div className="flex space-x-6">
                                {[
                                    { Icon: Instagram, sr: "Instagram" },
                                    { Icon: Twitter, sr: "Twitter" },
                                    { Icon: Linkedin, sr: "LinkedIn" },
                                    { Icon: Facebook, sr: "Facebook" }
                                ].map(({ Icon, sr }, i) => (
                                    <a key={i} href="#" className="w-12 h-12 rounded-full flex items-center justify-center text-gray-500 border border-white/10 hover:text-white hover:border-[#F27C2C] hover:bg-[#F27C2C]/10 transition-all duration-300 group">
                                        <span className="sr-only">{sr}</span>
                                        <Icon className="size-5 transition-transform group-hover:scale-110" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Column 2-5: Nav Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 xl:col-span-4 mt-8 xl:mt-0">
                            {/* Creative Strategy */}
                            <div>
                                <h4 className={`text-[11px] font-bold uppercase tracking-[0.4em] mb-8 font-mono text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>Creative</h4>
                                <ul className="space-y-5 text-xs font-medium uppercase tracking-[0.15em]">
                                    {["Brand Strategy", "Campaign Matrix", "Content Engine", "Market Analysis"].map(item => (
                                        <li key={item}><Link href="#" className="text-gray-500 hover:text-[#F27C2C] transition-colors">{item}</Link></li>
                                    ))}
                                </ul>
                            </div>

                            {/* Growth */}
                            <div>
                                <h4 className={`text-[11px] font-bold uppercase tracking-[0.4em] mb-8 font-mono text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>Growth</h4>
                                <ul className="space-y-5 text-xs font-medium uppercase tracking-[0.15em]">
                                    {["Performance Ads", "SEO Mastery", "Social Scaling", "Lead Gen Funnels"].map(item => (
                                        <li key={item}><Link href="#" className="text-gray-500 hover:text-[#F27C2C] transition-colors">{item}</Link></li>
                                    ))}
                                </ul>
                            </div>

                            {/* Agency */}
                            <div>
                                <h4 className={`text-[11px] font-bold uppercase tracking-[0.4em] mb-8 font-mono text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>Agency</h4>
                                <ul className="space-y-5 text-xs font-medium uppercase tracking-[0.15em]">
                                    {["Services", "Work", "Our Story", "Careers"].map(item => (
                                        <li key={item}><Link href="#" className="text-gray-500 hover:text-[#F27C2C] transition-colors">{item}</Link></li>
                                    ))}
                                </ul>
                            </div>

                            {/* Support */}
                            <div>
                                <h4 className={`text-[11px] font-bold uppercase tracking-[0.4em] mb-8 font-mono text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>Support</h4>
                                <ul className="space-y-5 text-xs font-medium uppercase tracking-[0.15em]">
                                    {["Contact", "WhatsApp", "Terms", "Privacy"].map(item => (
                                        <li key={item}><Link href="#" className="text-gray-500 hover:text-[#F27C2C] transition-colors">{item}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-600">
                        <p className="text-[10px] font-bold uppercase tracking-[0.5em]">
                            &copy; 2026 VROCUS. Agents of Disruption.
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
