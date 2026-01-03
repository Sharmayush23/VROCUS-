import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for class merging
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// --- Glass Card ---
interface GlassCardProps extends HTMLMotionProps<"div"> {
    variant?: "default" | "active" | "interactive";
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
    ({ className, variant = "default", children, ...props }, ref) => {
        const baseClass = "glass-panel p-6";
        const variants = {
            default: "",
            active: "glass-panel-active",
            interactive: "hover:translate-y-[-2px] hover:border-white/20 cursor-pointer",
        };

        return (
            <motion.div
                ref={ref}
                className={cn(baseClass, variants[variant], className)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);
GlassCard.displayName = "GlassCard";

// --- Glass Button ---
interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "accent" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

export const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
        const baseStyles = "glass-btn relative overflow-hidden transition-all duration-300 active:scale-95";

        // Gradient backgrounds based on palette
        const variants = {
            primary: "bg-indigo-deep/20 hover:bg-indigo-deep/40 border-indigo-deep/30 text-white shadow-[0_0_20px_rgba(45,50,156,0.2)] hover:shadow-[0_0_30px_rgba(45,50,156,0.4)]",
            secondary: "bg-blue-royal/20 hover:bg-blue-royal/40 border-blue-royal/30 text-white shadow-[0_0_20px_rgba(15,125,184,0.2)]",
            accent: "bg-orange-vibrant/20 hover:bg-orange-vibrant/40 border-orange-vibrant/30 text-white shadow-[0_0_20px_rgba(242,140,45,0.2)]",
            ghost: "bg-transparent hover:bg-white/5 border-transparent hover:border-white/10 text-white/80",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={isLoading}
                {...props}
            >
                {isLoading ? (
                    <span className="animate-spin mr-2">⟳</span>
                ) : null}
                {children}
                {/* Hover Highlight Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] hover:animate-[shimmer_1.5s_infinite]" />
            </button>
        );
    }
);
GlassButton.displayName = "GlassButton";

// --- Glass Input ---
interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const GlassInput = React.forwardRef<HTMLInputElement, GlassInputProps>(
    ({ className, label, error, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-2 w-full">
                {label && <label className="text-sm font-medium text-white/70 ml-1">{label}</label>}
                <input
                    ref={ref}
                    className={cn(
                        "glass-input transition-all duration-300 focus:ring-1 focus:ring-blue-royal/50",
                        error ? "border-red-500/50 focus:border-red-500" : "focus:border-blue-royal/50",
                        className
                    )}
                    {...props}
                />
                {error && <span className="text-xs text-red-400 ml-1">{error}</span>}
            </div>
        );
    }
);
GlassInput.displayName = "GlassInput";

// --- Glass Container (Generic) ---
export function GlassContainer({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={cn("glass-panel p-8 relative overflow-hidden", className)}>
            {/* Decorative Glow Spots */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-deep/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-royal/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10">{children}</div>
        </div>
    );
}
