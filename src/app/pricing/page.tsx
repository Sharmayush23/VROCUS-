import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { ComparisonTable } from "@/components/sections/ComparisonTable";

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

export default function PricingPage() {
    return (
        <div className="pt-24 pb-20 bg-black min-h-screen relative overflow-hidden">
            {/* Background Texture/Noise */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />

            {/* Ambient Glows */}
            <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r ${PRIMARY_GRADIENT} opacity-20 blur-[150px] rounded-full pointer-events-none`} />
            <div className={`absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-r ${ACCENT_GRADIENT} opacity-10 blur-[150px] rounded-full pointer-events-none`} />

            <div className="container mx-auto px-4 mb-16 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">Simple Pricing</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Invest in your brand's future with transparent, value-driven packages.
                </p>
            </div>
            <Pricing />
            <ComparisonTable />
            <FAQ />
            <CTA />
        </div>
    );
}
