import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { ComparisonTable } from "@/components/sections/ComparisonTable";

export default function PricingPage() {
    return (
        <div className="pt-24 pb-20">
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
