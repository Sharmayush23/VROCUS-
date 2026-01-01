"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-background text-foreground pt-32 pb-12 relative overflow-hidden">
            {/* Full-width container with padding */}
            <div className="w-full px-6 md:px-12 lg:px-24">

                {/* Top Section: CTA + Heading */}
                <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0">
                    <div className="space-y-8">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            <span className="font-bold text-lg">Vrocus</span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
                            We would love to <br /> hear from you.
                        </h2>
                        <p className="text-gray-400 max-w-md text-lg">
                            Feel free to reach out if you want to collaborate with us, or simply have a chat.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors mt-8"
                        >
                            Become a Client <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="flex flex-col justify-end items-start lg:items-end">
                        <div className="bg-secondary/20 p-8 rounded-2xl md:min-w-[400px]">
                            <p className="text-gray-400 mb-2 uppercase tracking-wider text-sm">Don't like the forms?</p>
                            <a href="mailto:info@vrocus.com" className="text-2xl md:text-3xl font-bold border-b border-gray-700 pb-1 hover:text-primary transition-colors">
                                info@vrocus.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t border-white/10 pt-20">

                    {/* Column 1: Contact */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-xl mb-4">Contact us</h4>
                        <div className="space-y-4 text-gray-400">
                            <p>
                                Our Email <br />
                                <a href="mailto:info@vrocus.com" className="text-white hover:underline">info@vrocus.com</a>
                            </p>
                            <p>
                                San Francisco, CA <br />
                                Embarcadero Center, 8 <br />
                                floor, 94111
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Follow us */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-xl mb-4">Follow us</h4>
                        <ul className="space-y-3">
                            {["Dribbble", "LinkedIn", "Clutch", "Instagram", "Behance"].map((social) => (
                                <li key={social}>
                                    <a href="#" className="flex items-center justify-between text-gray-400 hover:text-white group border-b border-white/5 pb-2">
                                        {social}
                                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-xl mb-4">Services</h4>
                        <ul className="space-y-3 text-gray-400">
                            {["Mobile Development", "Web Development", "Solid Design Solutions"].map((service) => (
                                <li key={service}>
                                    <Link href="/services" className="hover:text-white cursor-pointer transition-colors block">
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Menu */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-xl mb-4">Menu</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-white transition-colors">
                                    Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-white transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="hover:text-white transition-colors">
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
                    <div className="flex gap-4">
                        <span>© Vrocus 2026. All rights reserved</span>
                        <span>•</span>
                        <Link href="#" className="underline hover:text-white">Privacy Policy</Link>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 hover:text-white transition-colors group"
                    >
                        Back to the top <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
