import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { DetailedServices } from "@/components/sections/DetailedServices"; // Updated Import
import { AboutDetailed } from "@/components/sections/AboutDetailed";
import { Testimonials } from "@/components/layout/FinalSections";

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

import { InstagramStats } from "@/components/sections/InstagramStats";

export default function Home() {
  return (
    <div className="flex flex-col relative overflow-hidden bg-black min-h-screen">
      {/* Background Texture/Noise */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      {/* Ambient Glows */}
      <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r ${PRIMARY_GRADIENT} opacity-20 blur-[150px] rounded-full pointer-events-none`} />
      <div className={`absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-r ${ACCENT_GRADIENT} opacity-10 blur-[150px] rounded-full pointer-events-none`} />

      <HeroSection />
      <InstagramStats />
      {/* <FeaturedWork /> Removed as per user request */}
      <DetailedServices /> {/* Updated Component */}
      <AboutDetailed />
      <Testimonials />
    </div>
  );
}

