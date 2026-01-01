'use client';

import { Canvas } from '@react-three/fiber';
import { Globe } from '@/components/ui/Globe';
import { Suspense } from 'react';

function LoadingFallback() {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-purple-500 border-t-transparent"></div>
        </div>
    );
}

export function GlobeSection() {
    return (
        <section className="relative min-h-screen bg-gradient-to-b from-black via-slate-950 to-black py-20 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 h-96 w-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 right-1/4 h-96 w-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="container relative mx-auto px-4">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                        Global{' '}
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                            Presence
                        </span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-slate-300 md:text-xl">
                        Connecting with clients and partners across the globe, delivering exceptional results worldwide
                    </p>
                </div>

                {/* Globe Canvas */}
                <div className="relative mx-auto h-[600px] w-full max-w-5xl">
                    {/* Glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none"></div>

                    <Canvas
                        camera={{
                            position: [0, 0, 8],
                            fov: 45,
                        }}
                        className="rounded-3xl"
                        gl={{
                            antialias: true,
                            alpha: true,
                        }}
                    >
                        <Suspense fallback={null}>
                            <Globe />
                        </Suspense>
                    </Canvas>

                    {/* Loading fallback outside canvas */}
                    <Suspense fallback={<LoadingFallback />}>
                        <></>
                    </Suspense>
                </div>

                {/* Interactive hint */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-slate-400">
                        <span className="inline-flex items-center gap-2">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                            </svg>
                            Drag to rotate • Scroll to zoom
                        </span>
                    </p>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </section>
    );
}
