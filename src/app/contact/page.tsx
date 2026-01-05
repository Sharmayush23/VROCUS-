import { ContactForm } from "@/components/sections/ContactForm";

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

export default function ContactPage() {
    return (
        <div className="pt-24 pb-20 bg-black min-h-screen relative overflow-hidden">
            {/* Background Texture/Noise */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

            {/* Ambient Glows */}
            <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r ${PRIMARY_GRADIENT} opacity-20 blur-[150px] rounded-full pointer-events-none`} />
            <div className={`absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-r ${ACCENT_GRADIENT} opacity-10 blur-[150px] rounded-full pointer-events-none`} />

            <div className="container mx-auto px-4 mb-16 text-center relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                    Let's <span className={`text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>Connect</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Ready to start your next project? We're here to help you succeed.
                </p>
            </div>
            <div className="relative z-10">
                <ContactForm />
            </div>
        </div>
    );
}
