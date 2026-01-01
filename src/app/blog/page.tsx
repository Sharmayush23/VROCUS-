import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
        <div className="pt-24 pb-20 container mx-auto px-4">
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
