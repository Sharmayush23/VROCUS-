"use client";

import { useRef } from "react";
import { useGsapScroll } from "@/hooks/useGsapScroll";
import { Rocket, ShieldCheck, Users, Zap } from "lucide-react";

const features = [
    {
        icon: Rocket,
        title: "Accelerated Growth",
        description: "Strategies designed to scale your business 3x faster than industry average through data-driven campaigns.",
    },
    {
        icon: ShieldCheck,
        title: "Enterprise Reliability",
        description: "Robust, secure, and scalable solutions that major corporations trust for their mission-critical applications.",
    },
    {
        icon: Users,
        title: "Expert Team",
        description: "Access a top-tier team of designers, developers, and strategists who have worked with Fortune 500 companies.",
    },
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "We optimize everything for speed, from our development workflows to the final loading time of your website.",
    },
];

export function WhyVrocus() {
    const sectionRef = useRef<HTMLElement>(null);
    useGsapScroll(sectionRef, { start: "top 80%", y: 40 });

    return (
        <section ref={sectionRef} className="container mx-auto px-4 py-24 opacity-0 transform translate-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Why visionary brands <span className="text-primary">choose VROCUS</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        We don&apos;t just build websites; we build digital growth engines. Our unique approach combines artistic excellence with engineering precision.
                    </p>
                    <div className="flex gap-4">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold">150+</span>
                            <span className="text-sm text-muted-foreground">Projects Delivered</span>
                        </div>
                        <div className="w-px bg-white/10 h-12" />
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold">98%</span>
                            <span className="text-sm text-muted-foreground">Client Retention</span>
                        </div>
                        <div className="w-px bg-white/10 h-12" />
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold">10x</span>
                            <span className="text-sm text-muted-foreground">ROI Average</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <feature.icon className="w-10 h-10 text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
