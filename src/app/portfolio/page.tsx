"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Work3DCarousel } from "@/components/sections/Work3DCarousel";

// Data from portpolio.html
const creativeProjects = [
    {
        title: "Spotless Cleaners",
        category: "Instagram Campaign",
        description: "Professional cleaning services ad campaign with 32% engagement boost.",
        image: "https://storage.googleapis.com/a1aa/image/dc2cc7c0-f237-4ffa-3580-6a0a0b9fc8a5.jpg",
        color: "bg-[#f9d54a]"
    },
    {
        title: "Aditya Plywood",
        category: "Facebook Product",
        description: "Fire-resistant materials product showcase with 28% CTR.",
        image: "https://storage.googleapis.com/a1aa/image/fabdc9be-3d83-470d-27ce-950c62863a38.jpg",
        color: "bg-green-500"
    },
    {
        title: "Diet Siri",
        category: "Instagram Promotion",
        description: "Nutrition app promotional content driving 15K+ installs.",
        image: "https://storage.googleapis.com/a1aa/image/71f9818e-9738-47c5-3aaf-6bd6f7659416.jpg",
        color: "bg-green-500"
    },
    {
        title: "Guru Gym",
        category: "Facebook Seasonal",
        description: "Seasonal membership campaign with 42% conversion rate.",
        image: "https://storage.googleapis.com/a1aa/image/fde2918c-97da-4f9d-5703-787665547af7.jpg",
        color: "bg-red-500"
    }
];

const videos = [
    {
        title: "Calibrated Plywood",
        subtitle: "Uniform thickness, perfect finish!",
        src: "https://vrocus-assets.s3.amazonaws.com/0605+(2).mp4"
    },
    {
        title: "65°C Water Resistant",
        subtitle: "Tested for 5+ hours",
        src: "https://vrocus-assets.s3.amazonaws.com/SW+.mov"
    },
    {
        title: "Boiling Water Test",
        subtitle: "Extreme condition durability",
        src: "https://vrocus-assets.s3.amazonaws.com/SW+.mov"
    }
];

const brands = [
    { name: "Altitude Realtors", image: "https://storage.googleapis.com/a1aa/image/5969da46-1997-40e3-d597-479d88992d0b.jpg" },
    { name: "Dawn Tribe", image: "https://storage.googleapis.com/a1aa/image/59fd18cc-a4b0-47ec-b0d6-0e9331242905.jpg" },
    { name: "Illustration", image: "https://storage.googleapis.com/a1aa/image/07168a0a-2d12-4258-11b7-36b5cf8c6511.jpg" },
    { name: "Typography", image: "https://storage.googleapis.com/a1aa/image/76521808-1135-4c8a-03c7-69e9a0530230.jpg" },
    { name: "Web Design", image: "https://storage.googleapis.com/a1aa/image/453f1514-4054-4e1d-9029-fb405300a548.jpg" },
    { name: "Mobile", image: "https://storage.googleapis.com/a1aa/image/f3c9d5e0-238a-439a-e1b4-f96c12d5b82e.jpg" },
];

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

export default function PortfolioPage() {
    return (
        <main className="bg-black min-h-screen relative overflow-hidden">
            {/* Background Texture/Noise */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />

            {/* Ambient Glows */}
            <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r ${PRIMARY_GRADIENT} opacity-20 blur-[150px] rounded-full pointer-events-none`} />
            <div className={`absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-r ${ACCENT_GRADIENT} opacity-10 blur-[150px] rounded-full pointer-events-none`} />


            {/* 3D Carousel Hero */}
            <Work3DCarousel />

            {/* Spacer for content below hero */}
            <div className="pt-24"></div>

            {/* Creative Grid */}
            <section className="container mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {creativeProjects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative h-[400px] rounded-3xl overflow-hidden glass-anti-gravity border border-white/10 transition-all duration-500 hover:border-transparent"
                            style={{
                                boxShadow: `0 0 0 0px transparent`,
                            }}
                        >
                            {/* Colorful Glow Background on Hover */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${project.color.replace('bg-', 'bg-')}`} />

                            {/* Colorful Border Glow */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl ring-2 ring-inset ${project.color.replace('bg-', 'ring-')}`} style={{ filter: 'blur(2px)' }}></div>

                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="mb-2">
                                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded text-black mb-2 inline-block ${project.title.includes('Instagram') ? 'bg-pink-500' : 'bg-white'}`}>
                                        {project.category.split(' ')[0]}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Product Showcase (Video Section) */}
            <section className="w-full bg-secondary/30 py-24 relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-accent text-[10px] font-bold tracking-widest uppercase mb-4 block">Product Showcase</span>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                            Premium <span className="text-gray-500">Performance.</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            Witness the superior quality of our water and fire-resistant materials through rigorous testing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Placeholder for Videos - Using styled divs since local video files are not accessible in browser environment */}
                        {videos.map((video, idx) => (
                            <div key={idx} className="aspect-[9/16] bg-black/50 rounded-2xl overflow-hidden relative group border border-white/10 glass-anti-gravity transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:border-purple-500/50">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-current border-b-[8px] border-b-transparent ml-1"></div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{video.title}</h3>
                                    <p className="text-xs text-gray-400">{video.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand Carousel */}
            <section className="py-24 border-t border-white/5 overflow-hidden">
                <div className="container mx-auto px-6 mb-12 text-center">
                    <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Trusted Partners</p>
                </div>

                <div className="flex gap-12 animate-infinite-scroll min-w-full">
                    {[...brands, ...brands].map((brand, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-4 min-w-[150px] opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                            <div className="w-24 h-24 rounded-2xl bg-white p-4 flex items-center justify-center">
                                <Image src={brand.image} alt={brand.name} width={80} height={80} className="object-contain" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider">{brand.name}</span>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}
