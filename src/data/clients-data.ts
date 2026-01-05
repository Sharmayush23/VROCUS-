// Client Instagram Reels Data Structure
export interface InstagramReel {
    url: string; // Full Instagram reel URL
    caption?: string; // Brief description/caption
    thumbnail?: string; // Optional custom thumbnail
}

export interface ClientWork {
    id: string;
    clientName: string;
    instagramHandle: string;
    category: string; // e.g., "Social Media Marketing", "Video Production"
    featuredReels: InstagramReel[];
    logo?: string; // Client logo URL
    description?: string;
    brandColor?: string; // Optional brand color for theming
}

// Updated client data with user-provided links
export const clientsData: ClientWork[] = [
    {
        id: "featured-batch-1",
        clientName: "Premium Showcase",
        instagramHandle: "@vrocus_media",
        category: "Content Creation",
        featuredReels: [
            { url: "https://www.instagram.com/reel/DPtG72HDhNX/", caption: "Featured Editorial Work" },
            { url: "https://www.instagram.com/reel/DBaVGuIy42N/", caption: "Creative Production" },
            { url: "https://www.instagram.com/p/DQ4BOjbiU37/", caption: "Visual Storytelling" },
            { url: "https://www.instagram.com/p/DSeUgmCEsDL/", caption: "Brand Identity Showcase" },
            { url: "https://www.instagram.com/p/DS39q2QD2BZ/", caption: "High-Impact Visuals" }
        ],
        description: "A curated selection of our high-impact content creation projects.",
        brandColor: "#F5B21A"
    },
    {
        id: "featured-batch-2",
        clientName: "Digital Campaigns",
        instagramHandle: "@vrocus_creative",
        category: "Social Media Marketing",
        featuredReels: [
            { url: "https://www.instagram.com/p/DSZ_JNpkv0m/", caption: "Social Media Strategy" },
            { url: "https://www.instagram.com/p/DR_dOXAEr-5/", caption: "Engagement Campaign" },
            { url: "https://www.instagram.com/p/DS93Z9ECZNa/", caption: "Digital Growth" },
            { url: "https://www.instagram.com/p/DSPohKuEeiK/", caption: "Viral Content Series" }
        ],
        description: "Strategic social media campaigns designed for maximum reach.",
        brandColor: "#F27C2C"
    },
    {
        id: "featured-batch-3",
        clientName: "Video Production",
        instagramHandle: "@vrocus_video",
        category: "Video Production",
        featuredReels: [
            { url: "https://www.instagram.com/reel/DSKpQdUgeg1/", caption: "Cinematic Reel" },
            { url: "https://www.instagram.com/p/DI3toxgvRgr/", caption: "Short-form Content" },
            { url: "https://www.instagram.com/p/DIoPoqNP5Oi/", caption: "Motion Graphics Work" },
            { url: "https://www.instagram.com/p/DIQ_WUgTLSs/", caption: "Production Behind the Scenes" }
        ],
        description: "Professional video editing and production services.",
        brandColor: "#E64545"
    }
];

// Get all unique categories
export const getCategories = (): string[] => {
    const categories = clientsData.map(client => client.category);
    return Array.from(new Set(categories));
};

// Filter clients by category
export const getClientsByCategory = (category: string): ClientWork[] => {
    return clientsData.filter(client => client.category === category);
};

// Get total reel count
export const getTotalReelsCount = (): number => {
    return clientsData.reduce((total, client) => total + client.featuredReels.length, 0);
};
