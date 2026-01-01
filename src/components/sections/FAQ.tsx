"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Do you offer custom packages?",
        answer: "Yes! While we have standard tiers, we understand every project is unique. Contact us for a tailored quote.",
    },
    {
        question: "What is your typical turnaround time?",
        answer: "For standard Web or 3D projects, timeline corresponds to complexity, usually ranging from 2-6 weeks.",
    },
    {
        question: "Do you provide ongoing support?",
        answer: "Absolutely. Our Growth and Enterprise plans include dedicated support and maintenance options.",
    },
    {
        question: "What technologies do you use?",
        answer: "We specialize in modern stacks: Next.js, React, WebGL (Three.js), and industry-standard 3D software like Blender/Cinema4D.",
    },
    {
        question: "How does the payment structure work?",
        answer: "We typically work with a 50% upfront deposit to secure the schedule, and 50% upon final delivery.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="max-w-3xl mx-auto py-20 px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-white/5 rounded-3xl bg-white/[0.03] backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
                        <button
                            onClick={() => setOpenIndex(index === openIndex ? null : index)}
                            className="w-full flex items-center justify-between p-7 text-left font-semibold text-white/80 hover:text-white transition-colors"
                        >
                            <span className="text-lg">{faq.question}</span>
                            <div className="p-2 rounded-full bg-white/5">
                                {index === openIndex ? <Minus size={18} /> : <Plus size={18} />}
                            </div>
                        </button>
                        <AnimatePresence>
                            {index === openIndex && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className="px-7 pb-7 text-white/50 leading-relaxed text-base">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
