"use client";

import { Check, X, Minus } from "lucide-react";

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
        <section className="container mx-auto px-4 py-20 border-t border-white/5">
            <h2 className="text-3xl font-bold text-center mb-16">Compare Plans</h2>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                        <tr>
                            <th className="p-4 border-b border-white/10 w-1/3">Feature</th>
                            <th className="p-4 border-b border-white/10 text-center font-bold">Starter</th>
                            <th className="p-4 border-b border-white/10 text-center font-bold text-primary">Growth</th>
                            <th className="p-4 border-b border-white/10 text-center font-bold">Enterprise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, index) => (
                            <tr key={index} className="hover:bg-white/5 transition-colors">
                                <td className="p-4 border-b border-white/5 font-medium">{feature.name}</td>
                                <td className="p-4 border-b border-white/5 text-center">
                                    {feature.starter === true ? <Check size={20} className="mx-auto text-primary" /> :
                                        feature.starter === false ? <Minus size={20} className="mx-auto text-muted-foreground" /> :
                                            <span className="text-sm">{feature.starter}</span>}
                                </td>
                                <td className="p-4 border-b border-white/5 text-center bg-white/5">
                                    {feature.growth === true ? <Check size={20} className="mx-auto text-primary" /> :
                                        feature.growth === false ? <Minus size={20} className="mx-auto text-muted-foreground" /> :
                                            <span className="text-sm font-semibold text-primary">{feature.growth}</span>}
                                </td>
                                <td className="p-4 border-b border-white/5 text-center">
                                    {feature.enterprise === true ? <Check size={20} className="mx-auto text-primary" /> :
                                        feature.enterprise === false ? <Minus size={20} className="mx-auto text-muted-foreground" /> :
                                            <span className="text-sm">{feature.enterprise}</span>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
