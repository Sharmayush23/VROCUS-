"use client";

import { Linkedin, Twitter } from "lucide-react";

const team = [
    {
        name: "Alex Vrocus",
        role: "Founder & Creative Director",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
    },
    {
        name: "Sarah Lee",
        role: "Head of Strategy",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
    },
    {
        name: "David Kim",
        role: "Lead Developer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop",
    },
    {
        name: "Elena Ray",
        role: "3D Artist",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop",
    },
];

export function Team() {
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet the Minds</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    A diverse group of thinkers and makers.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                    <div key={index} className="group text-center">
                        <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square max-w-[280px] mx-auto">
                            {/* Use Next/Image in real app */}
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                <a href="#" className="p-2 bg-white text-black rounded-full hover:scale-110 transition-transform"><Linkedin size={20} /></a>
                                <a href="#" className="p-2 bg-white text-black rounded-full hover:scale-110 transition-transform"><Twitter size={20} /></a>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-muted-foreground text-sm">{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
