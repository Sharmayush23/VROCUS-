"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Agency", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    // Scroll-driven transforms for "anti-gravity" feel
    const headerY = useTransform(scrollY, [0, 100], [0, 6]);
    const headerScale = useTransform(scrollY, [0, 100], [1, 0.97]);
    const headerBg = useTransform(
        scrollY,
        [0, 100],
        ["rgba(15, 15, 15, 0.45)", "rgba(10, 10, 10, 0.85)"]
    );

    return (
        <>
            <motion.header
                style={{
                    y: headerY,
                    scale: headerScale,
                }}
                className="fixed top-4 left-0 w-full z-50 px-6 md:px-12 pointer-events-none"
            >
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        style={{ backgroundColor: headerBg }}
                        className="flex items-center justify-between glass-anti-gravity noise-overlay inner-glow-white px-8 py-3 rounded-full border border-white/10 pointer-events-auto backdrop-blur-[24px]"
                    >
                        {/* Logo Wrapper with Ambient Glow */}
                        <Link href="/" className="relative flex items-center gap-4 group transition-opacity hover:opacity-80 py-1">
                            <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative w-40 h-10 overflow-hidden flex items-center">
                                <Image
                                    src="/logo.png"
                                    alt="VROCUS Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <span className="hidden lg:block text-2xl font-bold tracking-tighter text-white uppercase italic">VROCUS</span>
                        </Link>

                        {/* Desktop Nav - Apple Style Spacing */}
                        <nav className="hidden md:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative text-[13px] font-medium text-muted hover:text-white transition-colors uppercase tracking-[0.1em] group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/40 transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </nav>

                        {/* Primary CTA - Floating Glass Pill */}
                        <div className="flex items-center gap-4">
                            <Link
                                href="/contact"
                                className="hidden sm:block px-8 py-2.5 bg-white/5 hover:bg-white/10 glass-anti-gravity border-white/10 text-[11px] font-bold uppercase tracking-widest text-white rounded-full transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] active:scale-95"
                            >
                                Start a Project
                            </Link>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMenuOpen(true)}
                                className="md:hidden p-2 text-white hover:opacity-70 transition-opacity"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isMenuOpen ? 1 : 0 }}
                style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
                className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-3xl flex flex-col items-center justify-center p-8"
            >
                <div className="absolute inset-0 bg-primary/5 noise-overlay pointer-events-none" />
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-8 right-8 p-4 text-white hover:rotate-90 transition-transform duration-300"
                >
                    <X className="w-8 h-8" />
                </button>

                <nav className="flex flex-col items-center gap-10 relative z-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-5xl font-bold text-white hover:text-primary transition-all duration-300 tracking-tighter hover:scale-110"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="mt-6 px-12 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-sm rounded-full"
                    >
                        Start a Project
                    </Link>
                </nav>
            </motion.div>
        </>
    );
}



