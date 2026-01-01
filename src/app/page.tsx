import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { AboutDetailed } from "@/components/sections/AboutDetailed";
import { Testimonials } from "@/components/layout/FinalSections";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedWork />
      <ServiceGrid />
      <AboutDetailed />
      <Testimonials />
    </div>
  );
}

