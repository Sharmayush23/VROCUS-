"use client";

import {
    Megaphone,
    Film,
    Palette,
    Video,
    Monitor,
    Smartphone,
    Mic,
    Camera,
    ArrowUpRight,
    Check,
    X,
    Star
} from "lucide-react";
import { motion } from "framer-motion";

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

const digitalServices = [
    {
        title: "Social Media Marketing",
        description: "We grow your followers from 200 to 120k+. Strategic content distribution that turns engagement into profit.",
        icon: Megaphone,
    },
    {
        title: "Video Editing",
        description: "High-retention edits optimized for Reels, YouTube, and Ads. We maximize watch time and viral potential.",
        icon: Film,
    },
    {
        title: "Graphics Design",
        description: "Premium visual identity, thumbnails, and ad creatives that demand attention and set your brand apart.",
        icon: Palette,
    },
    {
        title: "Website Designing",
        description: "High-converting, award-winning websites designed to turn visitors into loyal customers.",
        icon: Monitor,
    },
    {
        title: "App Design & Development",
        description: "Scalable, user-centric mobile applications for iOS and Android that dominate the App Store.",
        icon: Smartphone,
    },
];

const studioServices = [
    {
        title: "Video Shooting",
        description: "On-location professional shoots including commercials, interviews, and brand documentaries.",
        icon: Video,
    },
    {
        title: "Podcast Studio",
        description: "State-of-the-art acoustic studio rental for professional podcast recording and distribution.",
        icon: Mic,
    },
    {
        title: "Studio for Video Shooting",
        description: "Fully equipped studio space with professional lighting, backdrops, and gear for creators.",
        icon: Camera,
    },
];

const packages: {
    title: string;
    price: string;
    popular?: boolean;
    features: {
        text: string;
        included: boolean;
        note?: string;
    }[];
}[] = [
        {
            title: "Starter",
            price: "10,000",
            features: [
                { text: "Limited Reels", included: true },
                { text: "Limited Posts", included: true },
                { text: "No Professional Shoot", included: false },
                { text: "Basic Editing", included: true },
            ]
        },
        {
            title: "Growth",
            price: "18,000",
            popular: true,
            features: [
                { text: "Unlimited Reels", included: true },
                { text: "Unlimited Posts", included: true },
                { text: "Advanced Editing", included: true },
                { text: "No Professional Shoot", included: false, note: "Add Sony A7M3 Shoot for +5,000" },
            ]
        },
        {
            title: "Enterprise",
            price: "Custom",
            features: [
                { text: "Unlimited Everything", included: true },
                { text: "Professional Shoot Included", included: true },
                { text: "Dedicated Manager", included: true },
                { text: "24/7 Support", included: true },
            ]
        }
    ];

export default function ServicesPage() {
    return (
        <main className="bg-black min-h-screen relative overflow-hidden">
            {/* Background Texture/Noise */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

            {/* Ambient Glows */}
            <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r ${PRIMARY_GRADIENT} opacity-20 blur-[150px] rounded-full pointer-events-none`} />
            <div className={`absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-r ${ACCENT_GRADIENT} opacity-10 blur-[150px] rounded-full pointer-events-none`} />

            {/* Header */}
            <section className="pt-32 pb-24 px-6 relative overflow-hidden">

                <div className="container mx-auto relative z-10">
                    <div className="max-w-4xl mb-24 space-y-6 text-center mx-auto">
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${PRIMARY_GRADIENT} text-sm font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-blue-900/30 bg-blue-900/10`}>
                            Our Capabilities
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
                            Complete Digital <br />
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>Domination.</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-xl mx-auto font-medium leading-relaxed">
                            From viral content to physical production, we provide every tool you need to scale your brand to the moon.
                        </p>
                    </div>

                    {/* Digital Growth Section */}
                    <div className="mb-24">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="h-px bg-white/10 flex-1"></div>
                            <h2 className={`text-xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${PRIMARY_GRADIENT}`}>Digital Growth</h2>
                            <div className="h-px bg-white/10 flex-1"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {digitalServices.map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-r ${ACCENT_GRADIENT} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${PRIMARY_GRADIENT} flex items-center justify-center mb-8 text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500`}>
                                        <service.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 font-medium leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {service.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Studio Section */}
                    <div className="mb-32">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="h-px bg-white/10 flex-1"></div>
                            <h2 className={`text-xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${PRIMARY_GRADIENT}`}>Studio & Production</h2>
                            <div className="h-px bg-white/10 flex-1"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {studioServices.map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-r ${ACCENT_GRADIENT} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${PRIMARY_GRADIENT} flex items-center justify-center mb-8 text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                                        <service.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight relative z-10">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 font-medium leading-relaxed relative z-10">
                                        {service.description}
                                    </p>

                                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                                        <span className={`text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>Book Studio</span>
                                        <ArrowUpRight className="w-4 h-4 text-white" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* PACKAGES SECTION */}
                    <div>
                        <div className="text-center mb-16">
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${PRIMARY_GRADIENT} text-sm font-bold tracking-widest uppercase mb-4 block`}>
                                Pricing Plans
                            </span>
                            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                                Flexible <span className={`text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>Packages.</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {packages.map((pkg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`relative p-8 rounded-3xl bg-[#0A0A0A] border ${pkg.popular ? "border-transparent" : "border-white/10"} flex flex-col group overflow-hidden`}
                                >
                                    {/* Popular Gradient Border Wrapper */}
                                    {pkg.popular && (
                                        <div className={`absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br ${ACCENT_GRADIENT} opacity-100 -z-10`} />
                                    )}
                                    {pkg.popular && (
                                        <div className={`absolute top-0 right-0 px-4 py-1 bg-gradient-to-r ${ACCENT_GRADIENT} rounded-bl-xl text-xs font-bold text-black uppercase tracking-wider`}>
                                            Popular
                                        </div>
                                    )}

                                    <h3 className="text-xl font-bold text-gray-400 mb-2 uppercase tracking-wider">{pkg.title}</h3>
                                    <div className="flex items-baseline gap-1 mb-8">
                                        <span className="text-4xl font-bold text-white">{pkg.price}</span>
                                        {pkg.price !== "Custom" && <span className="text-sm text-gray-500">/mo</span>}
                                    </div>

                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {pkg.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                {feature.included ? (
                                                    <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 text-green-500">
                                                        <Check size={12} />
                                                    </div>
                                                ) : (
                                                    <div className="mt-1 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 text-red-500">
                                                        <X size={12} />
                                                    </div>
                                                )}
                                                <div>
                                                    <span className={feature.included ? "text-gray-300" : "text-gray-600"}>{feature.text}</span>
                                                    {feature.note && (
                                                        <p className={`text-xs mt-1 font-bold text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>
                                                            {feature.note}
                                                        </p>
                                                    )}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 ${pkg.popular ? `bg-gradient-to-r ${ACCENT_GRADIENT} text-black hover:shadow-lg hover:shadow-orange-500/20` : "bg-white/5 text-white hover:bg-white/10 border border-white/10"}`}>
                                        Choose Plan
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
