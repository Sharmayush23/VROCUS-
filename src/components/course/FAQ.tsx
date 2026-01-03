"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What are the prerequisites for joining?",
            answer:
                "No prior editing experience required! We start from the basics and gradually move to advanced techniques. All you need is a laptop and enthusiasm to learn.",
        },
        {
            question: "How are the classes conducted?",
            answer:
                "All classes are conducted live via Zoom. You'll have access to recordings if you miss a session. We also provide lifetime access to course materials and the community.",
        },
        {
            question: "What software do I need?",
            answer:
                "You'll need Adobe Premiere Pro, After Effects, and DaVinci Resolve. We provide guidance on how to access these tools, including student discounts and trials.",
        },
        {
            question: "Is there a refund policy?",
            answer:
                "Yes! We offer a 30-day money-back guarantee. If you're not satisfied within the first month, we'll refund 100% of your payment—no questions asked.",
        },
        {
            question: "Will I get job placement assistance?",
            answer:
                "Elite and Ultimate plan members get dedicated job placement assistance, portfolio reviews, and access to our hiring network with 50+ partner companies.",
        },
        {
            question: "How much time do I need to dedicate per week?",
            answer:
                "We recommend 10-15 hours per week, including live classes (3 hours), assignments, and practice. The more you invest, the faster you'll see results.",
        },
        {
            question: "Can I pay in installments?",
            answer:
                "Yes, we offer flexible EMI options for all plans. Contact our support team for personalized payment plans.",
        },
    ];

    return (
        <section className="relative py-24 bg-black">
            <div className="container relative z-10 px-4 mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Frequently Asked{" "}
                        <span className="text-[#E1FF00]">Questions</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        Everything you need to know about the cohort.
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                            <div
                                className={`rounded-xl border overflow-hidden transition-all duration-300 ${openIndex === index
                                        ? "border-[#E1FF00]/30 bg-[#0A0A0A] shadow-[0_0_20px_-5px_rgba(225,255,0,0.2)]"
                                        : "border-white/10 bg-[#0A0A0A] hover:border-white/20"
                                    }`}
                            >
                                {/* Question */}
                                <button
                                    onClick={() =>
                                        setOpenIndex(openIndex === index ? null : index)
                                    }
                                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
                                >
                                    <span className="text-white font-semibold text-lg">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ${openIndex === index ? "rotate-180 text-[#E1FF00]" : ""
                                            }`}
                                    />
                                </button>

                                {/* Answer */}
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-400 mb-2">Still have questions?</p>
                    <a
                        href="mailto:hello@vrocus.com"
                        className="text-[#E1FF00] hover:underline font-semibold"
                    >
                        Contact our support team →
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
