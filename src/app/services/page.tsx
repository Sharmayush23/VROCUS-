"use client";

// Imports removed
import {
    Megaphone,
    Film,
    Palette,
    Video,
    Monitor,
    Smartphone,
    Mic,
    Camera,
    ArrowUpRight
} from "lucide-react";
import { motion } from "framer-motion";

const digitalServices = [
    {
        title: "Social Media Marketing",
        description: "We grow your followers from 200 to 120k+. Strategic content distribution that turns engagement into profit.",
        icon: Megaphone,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Video Editing",
        description: "High-retention edits optimized for Reels, YouTube, and Ads. We maximize watch time and viral potential.",
        icon: Film,
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        title: "Graphics Design",
        description: "Premium visual identity, thumbnails, and ad creatives that demand attention and set your brand apart.",
        icon: Palette,
        color: "text-pink-500",
        bg: "bg-pink-500/10"
    },
    {
        title: "Website Designing",
        description: "High-converting, award-winning websites designed to turn visitors into loyal customers.",
        icon: Monitor,
        color: "text-cyan-500",
        bg: "bg-cyan-500/10"
    },
    {
        title: "App Design & Development",
        description: "Scalable, user-centric mobile applications for iOS and Android that dominate the App Store.",
        icon: Smartphone,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
];

const studioServices = [
    {
        title: "Video Shooting",
        description: "On-location professional shoots including commercials, interviews, and brand documentaries.",
        icon: Video,
        color: "text-orange-500",
        bg: "bg-orange-500/10"
    },
    {
        title: "Podcast Studio",
        description: "State-of-the-art acoustic studio rental for professional podcast recording and distribution.",
        icon: Mic,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10"
    },
    {
        title: "Studio for Video Shooting",
        description: "Fully equipped studio space with professional lighting, backdrops, and gear for creators.",
        icon: Camera,
        color: "text-red-500",
        bg: "bg-red-500/10"
    },
];

export default function ServicesPage() {
    return (
        <main className="bg-background min-h-screen">
            {/* Header */}
            <section className="pt-32 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto relative z-10">
                    <div className="max-w-4xl mb-24 space-y-6 text-center mx-auto">
                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                            Our Capabilities
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
                            Complete Digital <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Domination.</span>
                        </h1>
                        <p className="text-lg text-muted max-w-xl mx-auto font-medium leading-relaxed">
                            From viral content to physical production, we provide every tool you need to scale your brand to the moon.
                        </p>
                    </div>

                    {/* Digital Growth Section */}
                    <div className="mb-24">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="h-px bg-white/10 flex-1"></div>
                            <h2 className="text-xl font-bold uppercase tracking-widest text-muted">Digital Growth</h2>
                            <div className="h-px bg-white/10 flex-1"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {digitalServices.map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="glass p-8 rounded-3xl border border-white/5 group hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                        <service.icon className={`w-7 h-7 ${service.color}`} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted font-medium leading-relaxed group-hover:text-white/80 transition-colors">
                                        {service.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Studio Section */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <div className="h-px bg-white/10 flex-1"></div>
                            <h2 className="text-xl font-bold uppercase tracking-widest text-muted">Studio & Production</h2>
                            <div className="h-px bg-white/10 flex-1"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {studioServices.map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="glass p-8 rounded-3xl border border-white/5 group hover:border-white/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

                                    <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                        <service.icon className={`w-7 h-7 ${service.color}`} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted font-medium leading-relaxed group-hover:text-white/80 transition-colors">
                                        {service.description}
                                    </p>

                                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-xs font-bold uppercase tracking-widest text-white">Book Studio</span>
                                        <ArrowUpRight className="w-4 h-4 text-white" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
