"use client";

import { motion } from "framer-motion";
import { Send, Calendar, Mail, MapPin } from "lucide-react";

export function ContactForm() {
    return (
        <section className="container mx-auto px-4 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Info */}
                <div className="flex flex-col gap-8">
                    <h2 className="text-3xl font-bold">Get in Touch</h2>
                    <p className="text-muted-foreground text-lg">
                        Have a project in mind? Let's discuss how VROCUS can help you achieve your goals.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="font-semibold">Email Us</p>
                                <a href="mailto:hello@vrocus.com" className="text-muted-foreground hover:text-white transition-colors">hello@vrocus.com</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="font-semibold">Visit Us</p>
                                <p className="text-muted-foreground">San Francisco, CA</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 p-6 rounded-2xl bg-primary/10 border border-primary/20">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Calendar className="text-primary" /> Book a Strategy Call
                        </h3>
                        <p className="text-sm text-muted-foreground mb-6">
                            Skip the email tag. Schedule a direct 30-min consultation with our strategy team.
                        </p>
                        <button className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-opacity">
                            View Calendar
                        </button>
                    </div>
                </div>

                {/* Form */}
                <form className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium ml-1">Name</label>
                            <input type="text" placeholder="John Doe" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium ml-1">Email</label>
                            <input type="email" placeholder="john@company.com" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium ml-1">Subject</label>
                        <select className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors">
                            <option>Select a Service</option>
                            <option>3D Animation</option>
                            <option>Web Development</option>
                            <option>Motion Graphics</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium ml-1">Message</label>
                        <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors resize-none" />
                    </div>

                    <button type="button" className="w-full py-4 bg-foreground text-background font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                        Send Message <Send size={18} />
                    </button>
                </form>
            </div>
        </section>
    );
}
