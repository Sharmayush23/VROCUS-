"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowUp, MapPin, Mail, Phone, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-black text-white pt-16 sm:pt-32 pb-12 relative overflow-hidden selection:bg-[#F5B21A] selection:text-black">
            {/* Background Texture/Noise */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

            {/* Ambient Glow */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-r ${PRIMARY_GRADIENT} opacity-10 blur-[120px] rounded-full pointer-events-none`} />

            {/* Full-width container with padding */}
            <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">

                {/* Top Section: CTA + Heading */}
                {/* Top Section: Heading + Contact Grid */}
                <div className="mb-24">
                    <div className="flex items-center gap-2 mb-6">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${PRIMARY_GRADIENT} shadow-[0_0_10px_#1F6ED4]`}></span>
                        <span className="font-bold text-lg tracking-wide text-[#F5B21A]">GET IN TOUCH</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-12 sm:mb-16 text-white max-w-4xl">
                        Let's create something <span className={`text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>amazing together</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Location */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-start gap-6 hover:border-[#F5B21A]/30 transition-colors duration-300">
                            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Samrala, Punjab <br />
                                    India
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-start gap-6 hover:border-[#F5B21A]/30 transition-colors duration-300">
                            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                                <a href="mailto:vrocus.contact@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                    vrocus.contact@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-start gap-6 hover:border-[#F5B21A]/30 transition-colors duration-300">
                            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                                <a href="tel:+917901745856" className="text-gray-400 hover:text-white transition-colors">
                                    +91 79017 45856 , +91 9877363341
                                </a>
                            </div>
                        </div>

                        {/* Opening Hours */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-start gap-6 hover:border-[#F5B21A]/30 transition-colors duration-300">
                            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Opening Hours</h3>
                                <p className="text-gray-400">
                                    Mon - Sat: 9:00 AM – 6:00 PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t border-white/10 pt-16 sm:pt-20">

                    {/* Column 1: Contact */}
                    <div className="space-y-6">
                        <h4 className={`font-bold text-xl mb-4 text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>Contact us</h4>
                        <div className="space-y-4 text-gray-400">
                            <p>
                                Our Email <br />
                                <a href="mailto:vrocus.contact@gmail.com" className="text-white hover:text-[#F5B21A] transition-colors hover:underline decoration-[#F5B21A]/50">vrocus.contact@gmail.com</a>
                            </p>
                            <p>
                                Location <br />
                                Samrala, Punjab, India
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Follow us */}
                    <div className="space-y-6">
                        <h4 className={`font-bold text-xl mb-4 text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>Follow us</h4>
                        <ul className="space-y-3">
                            {["Dribbble", "LinkedIn", "Clutch", "Instagram", "Behance"].map((social) => (
                                <li key={social}>
                                    <a href="#" className="flex items-center justify-between text-gray-400 hover:text-white group border-b border-white/5 pb-2 hover:border-[#F5B21A]/50 transition-colors">
                                        {social}
                                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-[#F5B21A] transition-all duration-300 -translate-y-2 translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="space-y-6">
                        <h4 className={`font-bold text-xl mb-4 text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>Services</h4>
                        <ul className="space-y-3 text-gray-400">
                            {["Social Media Marketing", "Mobile Development", "Web Development", "packaging design", "branding design", "logo design", "Digital Marketing", "VIdeo shooting"].map((service) => (
                                <li key={service}>
                                    <Link href="/services" className="hover:text-[#F5B21A] cursor-pointer transition-colors block">
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Menu */}
                    <div className="space-y-6">
                        <h4 className={`font-bold text-xl mb-4 text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>Menu</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <Link href="/about" className="hover:text-[#F5B21A] transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-[#F5B21A] transition-colors">
                                    Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-[#F5B21A] transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="hover:text-[#F5B21A] transition-colors">
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm border-t border-white/5 pt-8">
                    <div className="flex gap-4">
                        <span>© Vrocus 2026. All rights reserved</span>
                        <span>•</span>
                        <Link href="#" className="underline hover:text-white transition-colors">Privacy Policy</Link>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 hover:text-white transition-colors group px-4 py-2 rounded-full border border-white/10 hover:border-[#F5B21A]/50 bg-white/5 relative overflow-hidden"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-r ${ACCENT_GRADIENT} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                        <span className="relative z-10 flex items-center gap-2">
                            Back to the top <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}
