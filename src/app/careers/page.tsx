"use client";

import { motion } from "framer-motion";
import { Megaphone, MessageSquare, Code, Video, Palette, Plus } from "lucide-react";

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

const teamImages = [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80",
];

const jobPositions = [
    { title: "Social Media Manager", icon: Megaphone, tools: "Business Suite, Trends, Content Writing", color: "#F9AE18" },
    { title: "Meta Ads Expert", icon: MessageSquare, tools: "Campaign Creation, FB Ad Library, etc.", color: "#1F6ED4" },
    { title: "WordPress Developer", icon: Code, tools: "Elementor, Cpanel, etc.", color: "#6BCF63" },
    { title: "Video Editor", icon: Video, tools: "Premiere Pro, After Effects, etc.", color: "#E64545" },
    { title: "Graphic Designer", icon: Palette, tools: "Photoshop, Illustrator, Figma", color: "#A18FF7" },
];

const culturePoints = [
    { icon: "👥", title: "Team Collaboration", desc: "Work with talented professionals" },
    { icon: "💡", title: "Creative Freedom", desc: "Bring your ideas to life" },
    { icon: "📈", title: "Growth Opportunities", desc: "Continuous learning and development" },
    { icon: "❤️", title: "Work-Life Balance", desc: "Flexible schedules and remote options" },
];

export default function CareersPage() {
    return (
        <div className="bg-black min-h-screen relative overflow-hidden">
            {/* Background Texture/Noise */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

            {/* Ambient Glows */}
            <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r ${PRIMARY_GRADIENT} opacity-20 blur-[150px] rounded-full pointer-events-none`} />
            <div className={`absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-r ${ACCENT_GRADIENT} opacity-10 blur-[150px] rounded-full pointer-events-none`} />

            {/* Banner Strip */}
            <div className={`bg-gradient-to-r ${PRIMARY_GRADIENT} text-white text-center py-2 text-sm font-medium relative z-10 mt-20`}>
                We're looking for brilliant minds to join our team!
            </div>

            {/* Hero Section */}
            <section className="py-12 md:py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="md:w-1/2"
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-white">
                            Join our{" "}
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>
                                creative परिवार
                            </span>
                            {" "}of creators and dreamers!
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 max-w-xl">
                            Looking for a career that's more "what if" than "been there"?
                            VROCUS Creative Agency is calling. Answer the call and make your "what if" a reality!
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className={`bg-gradient-to-r ${ACCENT_GRADIENT} text-black font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105 relative overflow-hidden group`}>
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                <span className="relative z-10">APPLY NOW</span>
                            </button>
                            <button className="bg-transparent border-2 border-[#1F6ED4] text-[#1F6ED4] font-bold px-8 py-3 rounded-full hover:bg-[#1F6ED4]/10 transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 relative group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#1F6ED4]/0 via-[#1F6ED4]/20 to-[#1F6ED4]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                <span className="relative z-10">WORK AT VROCUS</span>
                            </button>
                        </div>
                    </motion.div>

                    {/* Right images grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:w-1/2 flex justify-center"
                    >
                        <div className="grid grid-cols-3 grid-rows-2 gap-3 max-w-md">
                            {teamImages.map((img, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1, zIndex: 10 }}
                                    className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 relative group"
                                    style={{
                                        animation: `floating 8s ease-in-out infinite`,
                                        animationDelay: `${index * 0.2}s`
                                    }}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-r ${ACCENT_GRADIENT} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`} />
                                    <img alt="Team member" className="w-full h-full object-cover relative z-10" src={img} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className={`h-px bg-gradient-to-r from-transparent via-[#1F6ED4] to-transparent`}></div>
            </div>

            {/* Job Positions Section */}
            <section className="py-12 md:py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
                            Current{" "}
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>
                                Open Positions
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Join our team of innovators and creators in these exciting roles
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {jobPositions.map((job, index) => {
                            const Icon = job.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, zIndex: 10 }}
                                    className="bg-white/5 rounded-2xl shadow-lg overflow-hidden border-2 transition-all duration-300 hover:shadow-xl relative group"
                                    style={{ borderColor: job.color }}
                                >
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{ background: `linear-gradient(135deg, ${job.color}20, transparent)` }} />
                                    <div className="p-6 relative z-10">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div
                                                className="w-14 h-14 rounded-full flex items-center justify-center"
                                                style={{ backgroundColor: `${job.color}20` }}
                                            >
                                                <Icon size={24} style={{ color: job.color }} />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">{job.title}</h3>
                                        </div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span
                                                className="text-xs font-semibold px-3 py-1 rounded-full"
                                                style={{
                                                    backgroundColor: `${job.color}10`,
                                                    color: job.color
                                                }}
                                            >
                                                Experienced
                                            </span>
                                            <span
                                                className="text-xs font-semibold px-3 py-1 rounded-full"
                                                style={{
                                                    backgroundColor: `${job.color}10`,
                                                    color: job.color
                                                }}
                                            >
                                                Good Skill
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-400 mb-4">
                                            Tools: {job.tools}
                                        </p>
                                        <button className={`w-full bg-gradient-to-r ${ACCENT_GRADIENT} text-black font-semibold py-2 rounded-lg mt-4 hover:shadow-md transition-all hover:scale-105`}>
                                            Apply Now
                                        </button>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* More Positions Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: jobPositions.length * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className={`bg-gradient-to-br ${PRIMARY_GRADIENT} rounded-2xl shadow-lg overflow-hidden flex flex-col items-center justify-center p-8 text-white cursor-pointer`}
                        >
                            <div className="text-5xl mb-4">
                                <Plus size={56} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">More Positions</h3>
                            <p className="text-center mb-4 text-white/80">
                                Discover all our open roles and find your perfect fit
                            </p>
                            <button className="bg-white text-[#1F6ED4] font-bold px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
                                VIEW ALL
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Culture Section */}
            <section className="py-20 bg-gradient-to-b from-transparent to-white/5 relative z-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="md:w-1/2"
                        >
                            <div className="bg-white/5 rounded-2xl shadow-lg overflow-hidden">
                                <img
                                    alt="Team collaboration"
                                    className="w-full h-64 object-cover"
                                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="md:w-1/2"
                        >
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
                                Our{" "}
                                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>
                                    Work Culture
                                </span>
                            </h2>
                            <p className="text-gray-400 mb-8 text-lg">
                                At VROCUS, we foster an environment where creativity and innovation thrive.
                                Our culture is built on collaboration, continuous learning, and a shared passion for excellence.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                {culturePoints.map((point, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="text-3xl">{point.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-white">{point.title}</h4>
                                            <p className="text-gray-400 text-sm">{point.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={`py-20 bg-gradient-to-r ${ACCENT_GRADIENT} relative z-10`}>
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                            Ready to Join Our Creative परिवार?
                        </h2>
                        <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto">
                            Apply today and start your journey with VROCUS. We can't wait to see what we'll create together!
                        </p>
                        <button className="bg-black text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-900 transition-all hover:scale-105 shadow-lg hover:shadow-2xl relative group overflow-hidden">
                            <div className={`absolute inset-0 bg-gradient-to-r ${PRIMARY_GRADIENT} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                            <span className="relative z-10">APPLY NOW</span>
                        </button>
                    </motion.div>
                </div>
            </section>

            <style jsx>{`
                @keyframes floating {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
            `}</style>
        </div>
    );
}
