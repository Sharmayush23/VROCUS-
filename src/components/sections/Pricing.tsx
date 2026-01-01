"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Starter",
        price: "$2,500",
        description: "Perfect for startups looking for high-impact 3D or Web presence.",
        features: ["One core service (3D or Web)", "Basic revisions", "Standard delivery", "Email support"],
        featured: false,
    },
    {
        name: "Growth",
        price: "$5,000",
        description: "Comprehensive package for scaling brands requiring multiple assets.",
        features: ["Two core services", "Priority revisions", "Expedited delivery", "Strategy consultation", "Dedicated account manager"],
        featured: true,
        tag: "Most Popular",
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Full-service digital partnership for established organizations.",
        features: ["All services included", "Unlimited revisions", "24/7 Priority support", "Custom SLA", "Monthly retainer options"],
        featured: false,
    },
];

export function Pricing() {
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Invest in Excellence</h2>
                <p className="text-muted-foreground text-lg">
                    Transparent pricing for world-class results. No hidden fees, just value.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={cn(
                            "relative p-8 rounded-3xl border transition-all duration-300 flex flex-col",
                            plan.featured
                                ? "bg-white/10 border-primary/50 shadow-2xl shadow-primary/10 transform md:-translate-y-4"
                                : "bg-white/5 border-white/10 hover:border-white/20"
                        )}
                    >
                        {plan.featured && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                                {plan.tag}
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-muted-foreground text-sm mb-6 min-h-[40px]">{plan.description}</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                                {plan.price !== "Custom" && <span className="text-muted-foreground">/project</span>}
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm">
                                    <div className="mt-1 p-0.5 rounded-full bg-primary/20 text-primary">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    <span className="text-muted-foreground">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            className={cn(
                                "w-full py-4 rounded-xl font-bold transition-transform active:scale-95",
                                plan.featured
                                    ? "bg-foreground text-background hover:opacity-90"
                                    : "bg-white/10 hover:bg-white/20"
                            )}
                        >
                            Choose {plan.name}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
