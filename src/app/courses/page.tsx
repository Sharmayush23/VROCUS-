"use client";

import { CourseHero } from "@/components/course/CourseHero";
import { WhyUs } from "@/components/course/WhyUs";
import { Curriculum } from "@/components/course/Curriculum";
import { LearningPath } from "@/components/course/LearningPath";
import { Pricing } from "@/components/course/Pricing";
import { Testimonials } from "@/components/course/Testimonials";
import { FAQ } from "@/components/course/FAQ";
import { CourseCTA } from "@/components/course/CourseCTA";

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

export default function CoursesPage() {
    return (
        <main className="bg-black min-h-screen relative overflow-hidden">
            {/* Background Texture/Noise */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

            {/* Ambient Glows */}
            <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r ${PRIMARY_GRADIENT} opacity-20 blur-[150px] rounded-full pointer-events-none`} />
            <div className={`absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-r ${ACCENT_GRADIENT} opacity-10 blur-[150px] rounded-full pointer-events-none`} />

            <CourseHero />
            <WhyUs />
            <Curriculum />
            <LearningPath />
            <Pricing />
            <Testimonials />
            <FAQ />
            <CourseCTA />
        </main>
    );
}
