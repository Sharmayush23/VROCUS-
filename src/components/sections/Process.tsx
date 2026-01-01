"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "We deep dive into your brand, goals, and target audience to uncover the core problem and opportunity.",
    },
    {
        number: "02",
        title: "Strategy",
        description: "Our team crafts a tailored roadmap, selecting the right tools, technologies, and creative direction.",
    },
    {
        number: "03",
        title: "Creation",
        description: "This is where the magic happens. We design, build, and refine iteratively, keeping you in the loop.",
    },
    {
        number: "04",
        title: "Launch & Scale",
        description: "We deliver the final assets, help with deployment, and analyze performance for ongoing optimization.",
    },
];

export function Process() {
    return (
        <section className="bg-background py-32 px-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-12 md:gap-32">
                    <div className="md:w-1/3">
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter sticky top-32">
                            Inside the <br /> Method
                        </h2>
                    </div>

                    <div className="md:w-2/3 flex flex-col gap-20">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="border-t border-white/10 pt-8"
                            >
                                <span className="font-mono text-primary text-sm mb-4 block">/ {step.number}</span>
                                <h3 className="text-3xl font-bold uppercase mb-6">{step.title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
