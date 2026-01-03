import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Brand Gradients
const ACCENT_GRADIENT = "from-[#F5B21A] via-[#F27C2C] via-[#E64545] via-[#6BCF63] to-[#2FB9C3]";
const PRIMARY_GRADIENT = "from-[#1E2A4A] via-[#1F6ED4] to-[#16A1B5]";

export default function BlogPage() {
    const posts = [
        {
            slug: "future-of-web-design",
            title: "The Future of Web Design: 3D & WebGL",
            excerpt: "Why flat design is dying and how immersive experiences are taking over the web landscape.",
            date: "Nov 15, 2024",
            category: "Trends",
        },
        {
            slug: "scaling-with-nextjs",
            title: "Scaling VROCUS with Next.js 15",
            excerpt: "A deep dive into our tech stack and why we chose Next.js for high-performance marketing sites.",
            date: "Oct 28, 2024",
            category: "Engineering",
        },
        {
            slug: "branding-in-digital-age",
            title: "Branding in the Digital Age",
            excerpt: "How to maintain brand consistency across AR, VR, and web platforms.",
            date: "Oct 10, 2024",
            category: "Strategy",
        },
    ];

    return (
        <div className="pt-24 pb-20 container mx-auto px-4 bg-black min-h-screen relative overflow-hidden">
            {/* Background Texture/Noise */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />

            {/* Ambient Glows */}
            <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r ${PRIMARY_GRADIENT} opacity-20 blur-[150px] rounded-full pointer-events-none`} />
            <div className={`absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-r ${ACCENT_GRADIENT} opacity-10 blur-[150px] rounded-full pointer-events-none`} />

            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6">Insights</h1>
                <p className="text-xl text-muted-foreground">
                    Thoughts on design, technology, and digital growth.
                </p>
            </div>

            <div className="grid gap-12 max-w-4xl mx-auto">
                {posts.map((post) => (
                    <article key={post.slug} className="group border-b border-white/10 pb-12">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <span className="text-primary font-medium">{post.category}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                        </div>
                        <Link href={`#`} className="block group-hover:opacity-80 transition-opacity">
                            <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
                            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                                {post.excerpt}
                            </p>
                        </Link>
                        <Link href={`#`} className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                            Read Article <ArrowRight size={20} />
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}
