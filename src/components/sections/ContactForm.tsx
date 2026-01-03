"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Calendar, Mail, MapPin, Phone, Check, Palette, Video, Monitor, Smartphone, Megaphone, Camera, Mic } from "lucide-react";

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

const services = [
    { id: "social-media", name: "Social Media Marketing", icon: Megaphone },
    { id: "video-editing", name: "Video Editing", icon: Video },
    { id: "graphics", name: "Graphics Design", icon: Palette },
    { id: "website", name: "Website Designing", icon: Monitor },
    { id: "app-dev", name: "App Design & Development", icon: Smartphone },
    { id: "video-shooting", name: "Video Shooting", icon: Camera },
    { id: "podcast", name: "Podcast Studio", icon: Mic },
];

const budgetRanges = [
    { id: "under-10k", label: "Under ₹10k" },
    { id: "10k-25k", label: "₹10k - ₹25k" },
    { id: "25k-50k", label: "₹25k - ₹50k" },
    { id: "50k-1l", label: "₹50k - ₹1L" },
    { id: "1l-plus", label: "₹1L+" },
    { id: "not-sure", label: "Not Sure Yet" },
];

const timelines = [
    { id: "asap", label: "ASAP" },
    { id: "1-2weeks", label: "1-2 Weeks" },
    { id: "1month", label: "1 Month" },
    { id: "flexible", label: "Flexible" },
];

export function ContactForm() {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [selectedBudget, setSelectedBudget] = useState<string>("");
    const [selectedTimeline, setSelectedTimeline] = useState<string>("");

    const toggleService = (serviceId: string) => {
        setSelectedServices(prev =>
            prev.includes(serviceId)
                ? prev.filter(id => id !== serviceId)
                : [...prev, serviceId]
        );
    };

    return (
        <section className="container mx-auto px-4 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-8"
                >
                    <h2 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>Get in Touch</h2>
                    <p className="text-gray-400 text-lg">
                        Build your custom package by selecting the services you need. We'll craft a perfect solution for your budget.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${PRIMARY_GRADIENT} flex items-center justify-center text-white`}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="font-semibold text-white">Email Us</p>
                                <a href="mailto:vrocus.contact@gmail.com" className="text-gray-400 hover:text-[#F5B21A] transition-colors">vrocus.contact@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${PRIMARY_GRADIENT} flex items-center justify-center text-white`}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="font-semibold text-white">Visit Us</p>
                                <p className="text-gray-400">Samrala, Punjab, India</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${PRIMARY_GRADIENT} flex items-center justify-center text-white`}>
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="font-semibold text-white">Call Us</p>
                                <a href="tel:+917901745856" className="text-gray-400 hover:text-[#F5B21A] transition-colors">+91 79017 45856</a>
                            </div>
                        </div>
                    </div>

                    {/* Selected Services Summary */}
                    {selectedServices.length > 0 && (
                        <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-[#F5B21A]/30 relative overflow-hidden">
                            <div className={`absolute inset-0 bg-gradient-to-r ${ACCENT_GRADIENT} opacity-5`} />
                            <h3 className="text-lg font-bold mb-3 text-white relative z-10">Your Custom Package</h3>
                            <div className="space-y-2 relative z-10">
                                {selectedServices.map(serviceId => {
                                    const service = services.find(s => s.id === serviceId);
                                    return (
                                        <div key={serviceId} className="flex items-center gap-2 text-sm text-gray-300">
                                            <Check size={16} className="text-[#F5B21A]" />
                                            {service?.name}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group hover:border-[#F5B21A]/30 transition-colors">
                        <div className={`absolute inset-0 bg-gradient-to-r ${ACCENT_GRADIENT} opacity-0 group-hover:opacity-5 transition-opacity`} />
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white relative z-10">
                            <Calendar className="text-[#F5B21A]" /> Book a Strategy Call
                        </h3>
                        <p className="text-sm text-gray-400 mb-6 relative z-10">
                            Skip the email tag. Schedule a direct 30-min consultation with our strategy team.
                        </p>
                        <button className={`w-full py-3 bg-gradient-to-r ${ACCENT_GRADIENT} text-black font-bold rounded-lg hover:shadow-lg hover:shadow-orange-500/20 transition-all relative z-10`}>
                            View Calendar
                        </button>
                    </div>
                </motion.div>

                {/* Enhanced Form */}
                <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 space-y-8 hover:border-white/20 transition-colors"
                >
                    {/* Basic Info */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">Basic Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1 text-gray-300">Name *</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F5B21A]/50 transition-colors text-white placeholder:text-gray-500" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1 text-gray-300">Email *</label>
                                <input type="email" placeholder="john@company.com" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F5B21A]/50 transition-colors text-white placeholder:text-gray-500" required />
                            </div>
                        </div>
                    </div>

                    {/* Budget Range */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Your Budget Range</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {budgetRanges.map(budget => (
                                <button
                                    key={budget.id}
                                    type="button"
                                    onClick={() => setSelectedBudget(budget.id)}
                                    className={`p-3 rounded-lg border transition-all duration-300 text-sm font-medium ${selectedBudget === budget.id
                                            ? `bg-gradient-to-r ${ACCENT_GRADIENT} border-transparent text-black`
                                            : 'bg-black/40 border-white/10 text-gray-300 hover:border-[#F5B21A]/30'
                                        }`}
                                >
                                    {budget.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Custom Package Builder */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Build Your Package</h3>
                        <p className="text-sm text-gray-400 mb-4">Select all services you need (multiple selections allowed)</p>
                        <div className="grid grid-cols-1 gap-3">
                            {services.map(service => {
                                const isSelected = selectedServices.includes(service.id);
                                const Icon = service.icon;
                                return (
                                    <button
                                        key={service.id}
                                        type="button"
                                        onClick={() => toggleService(service.id)}
                                        className={`p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 ${isSelected
                                                ? `border-[#F5B21A]/50 bg-[#F5B21A]/10`
                                                : 'border-white/10 bg-black/20 hover:border-white/20'
                                            }`}
                                    >
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isSelected
                                                ? `bg-gradient-to-br ${ACCENT_GRADIENT}`
                                                : `bg-gradient-to-br ${PRIMARY_GRADIENT}`
                                            }`}>
                                            <Icon size={20} className="text-white" />
                                        </div>
                                        <span className={`flex-1 text-left font-medium ${isSelected ? 'text-white' : 'text-gray-300'
                                            }`}>
                                            {service.name}
                                        </span>
                                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${isSelected
                                                ? 'border-[#F5B21A] bg-[#F5B21A]'
                                                : 'border-white/30'
                                            }`}>
                                            {isSelected && <Check size={14} className="text-black" />}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Project Timeline */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Project Timeline</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {timelines.map(timeline => (
                                <button
                                    key={timeline.id}
                                    type="button"
                                    onClick={() => setSelectedTimeline(timeline.id)}
                                    className={`p-3 rounded-lg border transition-all duration-300 text-sm font-medium ${selectedTimeline === timeline.id
                                            ? `bg-gradient-to-r ${PRIMARY_GRADIENT} border-transparent text-white`
                                            : 'bg-black/40 border-white/10 text-gray-300 hover:border-[#F5B21A]/30'
                                        }`}
                                >
                                    {timeline.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium ml-1 text-gray-300">Project Details</label>
                        <textarea rows={4} placeholder="Tell us more about your project, goals, and any specific requirements..." className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F5B21A]/50 transition-colors resize-none text-white placeholder:text-gray-500" />
                    </div>

                    {/* Submit */}
                    <button type="submit" className={`w-full py-4 bg-gradient-to-r ${ACCENT_GRADIENT} text-black font-bold rounded-lg hover:shadow-lg hover:shadow-orange-500/20 transition-all flex items-center justify-center gap-2`}>
                        Send Proposal Request <Send size={18} />
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
