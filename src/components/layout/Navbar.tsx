"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { ThemeToggleButton } from "@/components/ui/ThemeToggle";
import { useTheme } from "next-themes";

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Courses", href: "/courses" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    // Scroll-driven transforms
    const headerY = useTransform(scrollY, [0, 100], [0, 6]);
    const headerScale = useTransform(scrollY, [0, 100], [1, 0.97]);
    const headerBg = useTransform(
        scrollY,
        [0, 100],
        isDark
            ? ["rgba(15, 15, 15, 0.45)", "rgba(10, 10, 10, 0.85)"]
            : ["rgba(255, 255, 255, 0.7)", "rgba(245, 245, 247, 0.95)"]
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
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        style={{ backgroundColor: headerBg }}
                        className="flex items-center justify-between glass-panel noise-overlay px-6 py-3 rounded-full pointer-events-auto bg-white/90 dark:bg-black/40 border border-black/10 dark:border-white/10"
                    >
                        {/* Logo */}
                        <Link href="/" className="relative flex items-center gap-2 group transition-opacity hover:opacity-80 py-1 min-w-[140px]">
                            <div className={`absolute inset-0 bg-gradient-to-r ${PRIMARY_GRADIENT} blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                            <div className="relative w-16 h-16 overflow-hidden flex items-center">
                                <Image
                                    src="/logo.png"
                                    alt="VROCUS Logo"
                                    fill
                                    sizes="64px"
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <span className={`text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${PRIMARY_GRADIENT} uppercase italic`}>VROCUS</span>
                        </Link>

                        {/* Desktop Nav with Hover Pill Animation */}
                        <nav className="hidden lg:flex items-center gap-2 relative">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onMouseEnter={() => setHoveredPath(link.href)}
                                        onMouseLeave={() => setHoveredPath(null)}
                                        className={`relative px-4 py-2 text-[11px] xl:text-[12px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${isActive ? "text-black dark:text-white" : "text-gray-600 dark:text-muted hover:text-[#F5B21A]"}`}
                                    >
                                        {/* Hover Pill Background */}
                                        {hoveredPath === link.href && (
                                            <motion.div
                                                layoutId="navbar-hover-pill"
                                                className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-full -z-10"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 30
                                                }}
                                            />
                                        )}

                                        <span className="relative z-10">{link.name}</span>

                                        {/* Active Indicator Underline */}
                                        {isActive && (
                                            <motion.span
                                                layoutId="navbar-active-indicator"
                                                className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r ${ACCENT_GRADIENT}`}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 30
                                                }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* CTA & Menu Toggle */}
                        <div className="flex items-center gap-4">
                            <ThemeToggleButton />
                            <Link
                                href="/contact"
                                className="hidden sm:block px-6 py-2.5 glass-panel text-[10px] font-bold uppercase tracking-widest text-black dark:text-white rounded-full hover:scale-[1.05] active:scale-95 group relative overflow-hidden transition-all duration-300 border border-black/10 dark:border-white/10 hover:border-[#F5B21A]/50 hover:shadow-[0_0_20px_rgba(242,140,45,0.3)]"
                                style={{
                                    transitionDuration: 'var(--transition-normal)',
                                    transitionTimingFunction: 'var(--ease-smooth)',
                                }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${ACCENT_GRADIENT} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                <span className="relative z-10 group-hover:text-black dark:group-hover:text-black transition-colors duration-300">Start a Project</span>
                            </Link>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMenuOpen(true)}
                                className="lg:hidden p-2 text-black dark:text-white hover:opacity-70"
                                style={{
                                    transitionDuration: 'var(--transition-fast)',
                                    transitionTimingFunction: 'var(--ease-smooth)',
                                }}
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
                className="fixed inset-0 z-[60] bg-white/95 dark:bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center p-8"
            >
                <div className={`absolute inset-0 bg-gradient-to-br ${PRIMARY_GRADIENT} opacity-10 noise-overlay pointer-events-none`} />
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-8 right-8 p-4 text-black dark:text-white hover:rotate-90 transition-transform"
                >
                    <X className="w-8 h-8" />
                </button>

                <nav className="flex flex-col items-center gap-10 relative z-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-5xl font-bold text-black dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r ${ACCENT_GRADIENT} tracking-tighter hover:scale-110 transition-all duration-300`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className={`mt-6 px-12 py-5 bg-gradient-to-r ${ACCENT_GRADIENT} text-black font-black uppercase tracking-[0.2em] text-sm rounded-full shadow-[0_0_30px_rgba(242,124,44,0.4)] hover:shadow-[0_0_50px_rgba(242,124,44,0.6)] hover:scale-105 transition-all duration-300`}
                    >
                        Start a Project
                    </Link>
                </nav>
            </motion.div>
        </>
    );
}
