"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Users, Zap } from "lucide-react";

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

export default function CareersPage() {
    const benefits = [
        { icon: Sparkles, title: "Creative Freedom", desc: "We don't micromanage. We empower you to create your best work." },
        { icon: Zap, title: "High Impact", desc: "Work on global projects that reach millions of users." },
        { icon: Users, title: "Top Talent", desc: "Collaborate with industry leaders in design and engineering." },
    ];

    const positions = [
        { title: "Senior Product Designer", type: "Remote", dept: "Design" },
        { title: "Frontend Engineer (React/Three.js)", type: "Hybrid", dept: "Engineering" },
        { title: "Motion Graphics Artist", type: "Remote", dept: "Creative" },
    ];

    return (
        <main className="bg-black min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Background Texture/Noise */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />

            {/* Ambient Glows */}
            <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r ${PRIMARY_GRADIENT} opacity-20 blur-[150px] rounded-full pointer-events-none`} />
            <div className={`absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-r ${ACCENT_GRADIENT} opacity-10 blur-[150px] rounded-full pointer-events-none`} />

            {/* Hero */}
            <section className="container mx-auto px-6 mb-24 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${PRIMARY_GRADIENT} text-xs font-bold uppercase tracking-widest mb-4 block`}>Join the Revolution</span>
                    <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8">
                        Build the <br /> <span className={`text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>Impossible.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        VROCUS is always looking for visionaries, rebels, and creators.
                    </p>
                </motion.div>
            </section>

            {/* Culture Grid */}
            <section className="container mx-auto px-6 mb-32 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((b, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
                            <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-[#F5B21A]`}>
                                <b.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{b.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Open Positions */}
            <section className="container mx-auto px-6 relative z-10">
                <h2 className="text-3xl font-bold text-white mb-12 uppercase tracking-tight">Open Positions</h2>
                <div className="space-y-4">
                    {positions.map((p, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between group cursor-pointer hover:border-[#F5B21A]/50 transition-colors">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#F5B21A] transition-colors">{p.title}</h3>
                                <div className="flex gap-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <span>{p.dept}</span>
                                    <span>•</span>
                                    <span>{p.type}</span>
                                </div>
                            </div>
                            <button className="mt-4 md:mt-0 px-6 py-2 rounded-full border border-white/10 text-white text-sm font-bold uppercase tracking-widest group-hover:bg-white group-hover:text-black transition-all">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
