"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

const principles = [
    {
        number: "01",
        title: "Disruption",
        description: "We challenge the status quo to find unique angles that make your brand impossible to ignore.",
    },
    {
        number: "02",
        title: "Intelligence",
        description: "Every creative move is backed by deep-dive market analytics and consumer behavior data.",
    },
    {
        number: "03",
        title: "Execution",
        description: "Speed is our priority. We deploy rapid-fire campaigns that capture market momentum in real-time.",
    },
    {
        number: "04",
        title: "Dominance",
        description: "We don't just compete; we aim to own the category and set the standard for your industry.",
    },
];

const stats = [
    { label: "Followers Gained", value: "120", suffix: "k+" },
    { label: "From Starting", value: "200", suffix: "" },
    { label: "Client Profit", value: "100", suffix: "%" },
    { label: "Trusted By", value: "50", suffix: "+" },
];

export function AboutDetailed() {
    return (
        <section className="bg-black py-32 px-6 overflow-hidden relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-[#1F6ED4]/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[10%] left-0 w-[500px] h-[500px] bg-[#F27C2C]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Left: Principles */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className={`text-transparent bg-clip-text bg-gradient-to-r ${PRIMARY_GRADIENT} font-mono text-sm uppercase tracking-widest block mb-4 font-bold`}
                        >
                            The VROCUS Standard
                        </motion.span>
                        <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-12 text-white">
                            Strategy <br /> &
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}> Profit.</span>
                        </h2>

                        <div className="space-y-6">
                            {principles.map((p, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group relative rounded-xl"
                                >
                                    {/* Gradient Border */}
                                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${ACCENT_GRADIENT} opacity-20 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]`} />

                                    {/* Content */}
                                    <div className="relative bg-[#0A0A0A] p-8 rounded-[11px] border border-white/5 h-full flex items-center gap-6 z-10">
                                        <span className={`text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r ${PRIMARY_GRADIENT}`}>{p.number}</span>
                                        <div>
                                            <h3 className="text-xl font-bold uppercase mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">{p.title}</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed max-w-md">{p.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Stats & Vision */}
                    <div className="lg:pt-24">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative p-[1px] rounded-[30px] overflow-hidden"
                        >
                            {/* Gradient Border for Stats Panel */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${PRIMARY_GRADIENT} opacity-30`} />

                            <div className="relative bg-[#050505]/90 backdrop-blur-xl p-12 rounded-[29px] overflow-hidden">
                                {/* Decorative Texture */}
                                <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

                                <h3 className="text-3xl font-bold uppercase mb-12 relative z-10 text-white">
                                    Defined by <br />
                                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>Real Growth.</span>
                                </h3>

                                <div className="grid grid-cols-2 gap-12 relative z-10">
                                    {stats.map((s, i) => (
                                        <div key={i} className="flex flex-col gap-2">
                                            <div className="flex items-baseline">
                                                <motion.span
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                                                    className="text-5xl md:text-7xl font-bold text-white tracking-tighter"
                                                >
                                                    {s.value}
                                                </motion.span>
                                                <span className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>{s.suffix}</span>
                                            </div>
                                            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500">{s.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    className="mt-16 text-gray-400 text-sm leading-relaxed max-w-sm relative z-10 font-medium"
                                >
                                    From working with the <strong>Khanna Police</strong> to scaling personal brands from 200 followers to over 120k, we focus on one thing: making your brand <span className="text-white font-bold underline decoration-[#F27C2C]">profitable</span>.
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

