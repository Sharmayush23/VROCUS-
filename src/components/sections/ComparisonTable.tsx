"use client";

import { Check, X, Minus } from "lucide-react";

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

export function ComparisonTable() {
    const features = [
        { name: "3D Product Modeling", starter: true, growth: true, enterprise: true },
        { name: "Web Development", starter: true, growth: true, enterprise: true },
        { name: "SEO Optimization", starter: false, growth: true, enterprise: true },
        { name: "Priority Support", starter: false, growth: true, enterprise: true },
        { name: "Custom AR Filters", starter: false, growth: false, enterprise: true },
        { name: "Dedicated Account Manager", starter: false, growth: false, enterprise: true },
        { name: "Monthly Strategy Calls", starter: false, growth: "Quarterly", enterprise: "Monthly" },
    ];

    return (
        <section className="bg-black py-20 px-4 border-t border-white/5">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white uppercase tracking-tighter">
                    Compare <span className={`text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>Plans</span>
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr>
                                <th className="p-6 border-b border-white/10 w-1/3 text-gray-400 font-medium uppercase tracking-wider text-sm">Feature</th>
                                <th className="p-6 border-b border-white/10 text-center font-bold text-white uppercase tracking-wider text-sm">Starter</th>
                                <th className="p-6 border-b border-white/10 text-center font-bold uppercase tracking-wider text-sm relative">
                                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${PRIMARY_GRADIENT}`}>Growth</span>
                                    {/* Highlight Top Border */}
                                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1F6ED4] to-transparent opacity-50" />
                                </th>
                                <th className="p-6 border-b border-white/10 text-center font-bold uppercase tracking-wider text-sm">
                                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>Enterprise</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, index) => (
                                <tr key={index} className="group hover:bg-white/[0.02] transition-colors">
                                    <td className="p-6 border-b border-white/5 font-medium text-gray-300 group-hover:text-white transition-colors">
                                        {feature.name}
                                    </td>
                                    <td className="p-6 border-b border-white/5 text-center">
                                        {feature.starter === true ? <Check size={20} className="mx-auto text-[#6BCF63]" /> :
                                            feature.starter === false ? <Minus size={20} className="mx-auto text-gray-700" /> :
                                                <span className="text-sm text-gray-300">{feature.starter}</span>}
                                    </td>
                                    {/* Growth Column Highlight */}
                                    <td className="p-6 border-b border-white/5 text-center bg-white/[0.02] group-hover:bg-white/[0.04] transition-colors relative">
                                        {/* Subtle side borders for column highlight */}
                                        <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-white/5" />
                                        <div className="absolute right-0 top-2 bottom-2 w-[1px] bg-white/5" />

                                        {feature.growth === true ? <Check size={20} className="mx-auto text-[#6BCF63]" /> :
                                            feature.growth === false ? <Minus size={20} className="mx-auto text-gray-700" /> :
                                                <span className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${PRIMARY_GRADIENT}`}>{feature.growth}</span>}
                                    </td>
                                    <td className="p-6 border-b border-white/5 text-center">
                                        {feature.enterprise === true ? <Check size={20} className="mx-auto text-[#6BCF63]" /> :
                                            feature.enterprise === false ? <Minus size={20} className="mx-auto text-gray-700" /> :
                                                <span className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${ACCENT_GRADIENT}`}>{feature.enterprise}</span>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
