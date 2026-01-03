"use client";

import { motion } from "framer-motion";
import { CTA } from "@/components/sections/CTA";
import Image from "next/image";

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

const teamMembers = [
    {
        name: "Core Member",
        role: "CEO",
        image: "/team/member-2.jpg",
    },
    {
        name: "Core Member",
        role: "COO",
        image: "/team/member-3.jpg",
    },
    {
        name: "Ruhani",
        role: "CMO",
        image: "/team/ruhani.jpg",
    },
];

export default function AboutPage() {
    return (
        <div className="bg-black min-h-screen pt-24 pb-20 overflow-hidden relative">
            {/* Background Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#1E2A4A]/20 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#F27C2C]/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 mb-20 text-center relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white uppercase"
                >
                    Punjab's <br />
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>#1 Agency</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                >
                    We are the growth engine behind the region's most profitable brands, from the <strong className="text-white">Khanna Police</strong> to rising startups.
                </motion.p>
            </div>

            <section className="container mx-auto px-4 mb-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className={`text-sm font-bold tracking-widest uppercase mb-4 block text-transparent bg-clip-text bg-gradient-to-r ${PRIMARY_GRADIENT}`}>Our Mission</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
                        Immersive Stories. <br />
                        <span className="text-gray-500">Measurable Growth.</span>
                    </h2>
                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>
                            Founded in 2024, VROCUS emerged from a simple belief: that digital experiences should be immersive, not just functional.
                        </p>
                        <p>
                            We bridge the gap between creative artistry and technical engineering. Our mission is to empower brands to tell their stories in 3D, VR, and high-fidelity web environments.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-white/5 border border-white/10 rounded-3xl h-[400px] flex items-center justify-center backdrop-blur-md overflow-hidden group"
                >
                    <div className={`absolute inset-0 bg-gradient-to-br ${PRIMARY_GRADIENT} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                    <span className="text-white/40 font-bold uppercase tracking-widest text-xl">Studio Showreel</span>
                </motion.div>
            </section>

            {/* Team Section */}
            <section className="container mx-auto px-4 mb-24 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white uppercase tracking-tight">Meet the <span className={`text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>Core Team</span></h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        The creative minds and technical wizards driving your growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="group relative"
                        >
                            {/* Card Background & Border */}
                            <div className={`relative overflow-hidden rounded-3xl bg-[#0A0A0A] border border-white/10 group-hover:border-transparent transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-r ${ACCENT_GRADIENT} before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500`}>
                                {/* Image Container */}
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    {/* Gradient Overlay on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10`} />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${ACCENT_GRADIENT} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10 mix-blend-overlay`} />

                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="p-6 relative z-20 -mt-20 bg-gradient-to-t from-black via-black to-transparent pt-20">
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#F5B21A] transition-colors">{member.name}</h3>
                                    <p className={`text-sm font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${PRIMARY_GRADIENT}`}>{member.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <CTA />
        </div>
    );
}
