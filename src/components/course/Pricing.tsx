"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Crown, Zap } from "lucide-react";
import { NeonButton } from "@/components/ui/NeonButton";

export const Pricing = () => {
    const plans = [
        {
            name: "Essential",
            price: "₹9,999",
            description: "Perfect for beginners",
            icon: Zap,
            features: [
                "12 weeks of live classes",
                "Access to course materials",
                "Community support",
                "Basic AI tools training",
                "Certificate of completion",
            ],
            glowColor: "grey",
            borderColor: "border-white/10",
            popular: false,
        },
        {
            name: "Elite",
            price: "₹19,999",
            description: "Most popular choice",
            icon: Crown,
            features: [
                "Everything in Essential",
                "1-on-1 mentorship (4 sessions)",
                "Portfolio review & feedback",
                "Job placement assistance",
                "Advanced AI creative tools",
                "Lifetime community access",
                "Freelancing resources",
            ],
            glowColor: "blue",
            borderColor: "border-blue-500/30",
            popular: true,
        },
        {
            name: "Ultimate",
            price: "₹34,999",
            description: "For serious professionals",
            icon: Sparkles,
            features: [
                "Everything in Elite",
                "Guaranteed internship/placement",
                "Personal brand building",
                "1-on-1 mentorship (12 sessions)",
                "Custom AI automation setup",
                "Agency launch support",
                "Direct network access",
                "Priority support 24/7",
            ],
            glowColor: "red",
            borderColor: "border-red-500/30",
            popular: false,
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
                        Choose Your <span className="text-[#E1FF00]">Plan</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        Flexible pricing options designed for every stage of your journey.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative group"
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                    <div className="px-4 py-1.5 rounded-full bg-[#E1FF00] text-black text-xs font-bold uppercase tracking-wide">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            {/* Card */}
                            <div
                                className={`relative h-full rounded-2xl border ${plan.borderColor} bg-[#0A0A0A] overflow-hidden transition-all duration-300 ${plan.glowColor === "blue"
                                        ? "group-hover:shadow-[0_0_40px_-5px_rgba(59,130,246,0.6)]"
                                        : plan.glowColor === "red"
                                            ? "group-hover:shadow-[0_0_40px_-5px_rgba(239,68,68,0.6)]"
                                            : "group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)]"
                                    }`}
                            >
                                {/* Background Effects */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 p-8 h-full flex flex-col">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className="inline-flex p-3 rounded-xl bg-white/5 border border-white/10">
                                            <plan.icon className="w-6 h-6 text-[#E1FF00]" />
                                        </div>
                                    </div>

                                    {/* Plan Name */}
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-sm text-gray-400 mb-6">
                                        {plan.description}
                                    </p>

                                    {/* Price */}
                                    <div className="mb-8">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl font-bold text-white">
                                                {plan.price}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-500 mt-1">One-time payment</p>
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-[#E1FF00] shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <NeonButton
                                        variant={plan.popular ? "primary" : "secondary"}
                                        fullWidth
                                    >
                                        Get Started
                                    </NeonButton>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Money-back Guarantee */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-400 text-sm">
                        🔒 30-day money-back guarantee · No questions asked
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
