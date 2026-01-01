import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "var(--primary)",
                accent: "var(--accent)",
                muted: "var(--muted)",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                display: ["var(--font-poppins)", "sans-serif"],
            },
            animation: {
                "text-gradient": "text-gradient 5s linear infinite",
            },
            keyframes: {
                "text-gradient": {
                    "0%, 100%": { "background-size": "200% 200%", "background-position": "left center" },
                    "50%": { "background-size": "200% 200%", "background-position": "right center" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
