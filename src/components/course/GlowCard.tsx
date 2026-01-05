import React from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: "lime" | "blue" | "purple" | "red" | "grey";
}

export const GlowCard = ({ children, className, glowColor = "grey" }: GlowCardProps) => {
    const glowStyles = {
        lime: "group-hover:shadow-[0_0_30px_-5px_rgba(225,255,0,0.3)] group-hover:border-[#E1FF00]/50",
        blue: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] group-hover:border-blue-500/50",
        purple: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)] group-hover:border-purple-500/50",
        red: "group-hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.5)] group-hover:border-red-500/50",
        grey: "group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] group-hover:border-white/20",
    };

    return (
        <div
            className={cn(
                "group relative rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden transition-all duration-300",
                glowStyles[glowColor],
                className
            )}
        >
            <div className="relative z-10 p-6 h-full">{children}</div>

            {/* Background Noise/Texture */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

            {/* Inner Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    );
};
