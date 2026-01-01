"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Instagram, Linkedin, Twitter, Phone as WhatsApp } from "lucide-react";

// Testimonials Component
export function Testimonials() {
    const reviews = [
        {
            name: "Priya Sharma",
            role: "Founder, Luxe Mumbai",
            text: "VROCUS redefined our digital presence. Their creative strategy turned our brand into a household name within months.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop"
        },
        {
            name: "Rajesh Patel",
            role: "CEO, TechFlow Solutions",
            text: "The performance marketing results were staggering. We saw a 4x increase in lead quality and a significant drop in CAC.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop"
        },
        {
            name: "Ananya Iyer",
            role: "Director, Green Horizon",
            text: "Their ability to blend high-end creative with data insights is what sets them apart. They don't just make it look good; they make it work.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop"
        }
    ];

    return (
        <section className="bg-secondary/10 py-32 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-mono text-sm uppercase tracking-widest block mb-4"
                    >
                        Client Success
                    </motion.span>
                    <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter">Voices of <br /> Impact.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-apple-lg bg-secondary/50 border border-white/5 backdrop-blur-md flex flex-col hover:border-white/10 transition-colors"
                        >
                            <div className="flex items-center gap-1 text-accent mb-8">
                                {[1, 2, 3, 4, 5].map(s => (
                                    <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-lg text-white font-medium italic mb-10 leading-relaxed">
                                "{r.text}"
                            </p>
                            <div className="mt-auto flex items-center gap-4 pt-8 border-t border-white/5">
                                <img src={r.image} className="w-14 h-14 rounded-full object-cover grayscale" alt={r.name} />
                                <div>
                                    <h4 className="font-bold uppercase tracking-tight text-white">{r.name}</h4>
                                    <p className="text-xs text-primary font-bold uppercase tracking-widest">{r.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Footer Component
import { Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background pt-20 px-0">
            <div className="w-full">
                {/* Full Width MynaUI Inspired Glass Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                    className="glass-anti-gravity noise-overlay inner-glow-white rounded-t-[48px] p-12 lg:p-20 xl:px-32 border-t border-x border-white/5 relative overflow-hidden w-full"
                >
                    {/* Background Depth Glow */}
                    <div className="absolute -bottom-20 -right-20 w-[800px] h-[800px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />

                    <div className="grid grid-cols-1 xl:grid-cols-5 gap-16 xl:gap-8 relative z-10 w-full">
                        {/* Column 1: Brand & Social */}
                        <div className="space-y-10 xl:col-span-1">
                            <Link href="/" className="inline-block group">
                                <img src="/logo.png" className="w-32 h-14 object-contain transition-transform duration-500 group-hover:scale-105" alt="VROCUS" />
                                <h3 className="text-2xl font-bold uppercase tracking-tight text-white mt-6 italic">VROCUS</h3>
                            </Link>

                            <div className="flex space-x-6">
                                {[
                                    { Icon: Instagram, sr: "Instagram" },
                                    { Icon: Twitter, sr: "Twitter" },
                                    { Icon: Linkedin, sr: "LinkedIn" },
                                    { Icon: Facebook, sr: "Facebook" }
                                ].map(({ Icon, sr }, i) => (
                                    <a key={i} href="#" className="w-12 h-12 rounded-full glass border border-white/5 flex items-center justify-center text-muted hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-500 group">
                                        <span className="sr-only">{sr}</span>
                                        <Icon className="size-6 transition-transform group-hover:scale-110" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Column 2-5: Nav Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 xl:col-span-4 mt-8 xl:mt-0">
                            {/* Column 2: Creative Strategy */}
                            <div>
                                <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/40 mb-8 font-mono">Creative Strategy</h4>
                                <ul className="space-y-5 text-xs font-medium uppercase tracking-[0.15em]">
                                    {["Brand Strategy", "Campaign Matrix", "Content Engine", "Market Analysis"].map((item) => (
                                        <li key={item}>
                                            <Link href="#" className="text-muted hover:text-white transition-all duration-300 block hover:translate-x-1">{item}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Column 3: Growth Services */}
                            <div>
                                <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/40 mb-8 font-mono">Growth Services</h4>

                                <ul className="space-y-5 text-xs font-medium uppercase tracking-[0.15em]">
                                    {["Performance Ads", "SEO Mastery", "Social Scaling", "Lead Gen Funnels"].map((item) => (
                                        <li key={item}>
                                            <Link href="#" className="text-muted hover:text-white transition-all duration-300 block hover:translate-x-1">{item}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Column 4: Agency */}
                            <div>
                                <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/40 mb-8 font-mono">Agency</h4>
                                <ul className="space-y-5 text-xs font-medium uppercase tracking-[0.15em]">
                                    {["Services", "Work", "Our Story", "Careers"].map((item) => (
                                        <li key={item}>
                                            <Link href={item === "Work" ? "/portfolio" : item === "Our Story" ? "/about" : `/${item.toLowerCase()}`} className="text-muted hover:text-white transition-all duration-300 block hover:translate-x-1">{item}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Column 5: Support */}
                            <div>
                                <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/40 mb-8 font-mono">Support</h4>
                                <ul className="space-y-5 text-xs font-medium uppercase tracking-[0.15em]">
                                    {["Contact", "WhatsApp", "Terms", "Privacy"].map((item) => (
                                        <li key={item}>
                                            <Link href={item === "Contact" ? "/contact" : "#"} className="text-muted hover:text-white transition-all duration-300 block hover:translate-x-1">{item}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20">
                            &copy; 2026 VROCUS. Agents of Disruption.
                        </p>
                        <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.4em] text-white/10">
                            <Link href="#" className="hover:text-white/40 transition-colors">Instagram</Link>
                            <Link href="#" className="hover:text-white/40 transition-colors">Twitter</Link>
                            <Link href="#" className="hover:text-white/40 transition-colors">LinkedIn</Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
