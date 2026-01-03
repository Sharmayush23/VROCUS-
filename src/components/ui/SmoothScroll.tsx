// This file optimizes SmoothScroll to only load Lenis on client-side with dynamic import
"use client";
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

// Dynamically import ReactLenis to reduce initial bundle size
const ReactLenis = dynamic(
    () => import('lenis/react').then((mod) => mod.ReactLenis),
    {
        ssr: false, // Disable SSR for smooth scroll
        loading: () => <div>{/* Optional loading state */}</div>,
    }
);

export default function SmoothScroll({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
            {children}
        </ReactLenis>
    );
}
