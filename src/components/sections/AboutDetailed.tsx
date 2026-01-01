"use client";

import { motion } from "framer-motion";

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
        <section className="bg-secondary/20 py-32 px-6 overflow-hidden">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Left: Principles */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-primary font-mono text-sm uppercase tracking-widest block mb-4"
                        >
                            The VROCUS Standard
                        </motion.span>
                        <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-12">
                            Strategy <br /> & Profit.
                        </h2>

                        <div className="space-y-6">
                            {principles.map((p, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-apple-lg bg-secondary/50 border border-white/5 backdrop-blur-md group hover:border-white/10 transition-colors"
                                >
                                    <div className="flex items-center gap-6">
                                        <span className="text-2xl font-mono text-primary font-bold">{p.number}</span>
                                        <div>
                                            <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                                            <p className="text-muted text-sm leading-relaxed max-w-md">{p.description}</p>
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
                            className="relative p-12 rounded-apple-lg bg-secondary/40 border border-white/5 overflow-hidden"
                        >
                            {/* Decorative blur */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32" />

                            <h3 className="text-3xl font-bold uppercase mb-12 relative z-10">
                                Defined by <br /> Real Growth.
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
                                            <span className="text-3xl font-bold text-primary">{s.suffix}</span>
                                        </div>
                                        <span className="text-xs uppercase tracking-[0.2em] font-bold text-muted">{s.label}</span>
                                    </div>
                                ))}
                            </div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="mt-16 text-muted text-sm leading-relaxed max-w-sm relative z-10 font-medium"
                            >
                                From working with the <strong>Khanna Police</strong> to scaling personal brands from 200 followers to over 120k, we focus on one thing: making your brand profitable.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

