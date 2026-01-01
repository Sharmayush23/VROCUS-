import { Team } from "@/components/sections/Team";
import { CTA } from "@/components/sections/CTA";

export default function AboutPage() {
    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4 mb-20 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">Punjab's #1 Agency</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    We are the growth engine behind the region's most profitable brands, from the Khanna Police to rising startups.
                </p>
            </div>

            <section className="container mx-auto px-4 mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            Founded in 2024, VROCUS emerged from a simple belief: that digital experiences should be immersive, not just functional.
                        </p>
                        <p>
                            We bridge the gap between creative artistry and technical engineering. Our mission is to empower brands to tell their stories in 3D, VR, and high-fidelity web environments that captivate audiences and drive measurable growth.
                        </p>
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl h-[400px] flex items-center justify-center">
                    {/* Placeholder for About Image/Video */}
                    <span className="text-muted-foreground">Office / Studio Showreel</span>
                </div>
            </section>

            <Team />
            <CTA />
        </div>
    );
}
