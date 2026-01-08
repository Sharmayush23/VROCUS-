"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Instagram, Linkedin, Twitter, Phone as WhatsApp, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

// Testimonials Component
export function Testimonials() {
    const reviews = [
        {
            name: "Sarah Jenkins",
            role: "CMO, TechNova",
            text: "We didn't just want views; we wanted domination. VROCUS delivered a 400% increase in lead quality within 30 days. Their aggressive creative strategy forced the market to pay attention.",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop"
        },
        {
            name: "David Chen",
            role: "Founder, GrowthBox",
            text: "Absolute visual anarchy in the best way possible. They took our stale corporate identity and injected it with raw, futuristic energy. Now, our brand doesn't just speak; it screams premium.",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop"
        },
        {
            name: "Elena Rodriguez",
            role: "Director, ArtFlow",
            text: "Execution at the speed of light. VROCUS doesn't follow trends; they architect them. Our entire digital footprint is now a masterclass in high-conversion storytelling.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop"
        }
    ];

    return (
        <section className="bg-black py-32 px-6 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#F27C2C]/10 blur-[120px] rounded-full opacity-40 pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className={`text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT} font-mono text-sm uppercase tracking-widest block mb-4 font-bold`}
                    >
                        Client Success
                    </motion.span>
                    <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-white">
                        Voices of <br />
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>
                            Impact.
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative"
                        >
                            {/* Gradient Border Wrapper */}
                            <div className={`absolute inset-0 rounded-[22px] bg-gradient-to-r ${ACCENT_GRADIENT} opacity-30 group-hover:opacity-100 blur-[1px] transition-opacity duration-500`} />

                            {/* Card Content */}
                            <div className="relative h-full bg-[#0A0A0A] rounded-[20px] p-10 flex flex-col border border-white/5 transition-transform duration-300 group-hover:-translate-y-1">
                                <div className="flex items-center gap-1 mb-8">
                                    {[1, 2, 3, 4, 5].map(s => (
                                        <svg key={s} className="w-4 h-4 text-[#F5B21A] fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-lg text-gray-300 font-medium italic mb-10 leading-relaxed group-hover:text-white transition-colors">
                                    "{r.text}"
                                </p>
                                <div className="mt-auto flex items-center gap-4 pt-8 border-t border-white/10">
                                    <img src={r.image} className="w-14 h-14 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ring-2 ring-transparent group-hover:ring-[#F27C2C]" alt={r.name} />
                                    <div>
                                        <h4 className="font-bold uppercase tracking-tight text-white">{r.name}</h4>
                                        <p className={`text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>{r.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
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
