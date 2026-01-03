import React from "react";
import { cn } from "@/lib/utils";

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    fullWidth?: boolean;
}

export const NeonButton = ({
    children,
    className,
    variant = "primary",
    fullWidth = false,
    ...props
}: NeonButtonProps) => {
    return (
        <button
            className={cn(
                "relative group overflow-hidden font-bold transition-all duration-300 rounded-full",
                "focus:outline-none focus:ring-2 focus:ring-[#E1FF00] focus:ring-offset-2 focus:ring-offset-black",

                // Variants
                variant === "primary" && [
                    "bg-[#E1FF00] text-black border border-[#E1FF00]",
                    "hover:bg-[#ccff00] hover:shadow-[0_0_20px_rgba(225,255,0,0.6)]",
                ],
                variant === "secondary" && [
                    "bg-transparent text-white border border-[#E1FF00]/30",
                    "hover:border-[#E1FF00] hover:shadow-[0_0_15px_rgba(225,255,0,0.3)]",
                ],
                variant === "outline" && [
                    "bg-transparent text-white border border-white/20",
                    "hover:border-white hover:bg-white/5",
                ],

                // Sizing
                fullWidth ? "w-full py-4 text-lg" : "px-8 py-3 text-base",

                className
            )}
            {...props}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-[#E1FF00]/20" />
        </button>
    );
};
