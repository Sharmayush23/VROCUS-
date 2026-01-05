// Instagram utility functions

/**
 * Extract reel ID from Instagram URL
 * @param url - Full Instagram reel URL
 * @returns Reel ID or null if invalid
 */
export function getReelIdFromUrl(url: string): string | null {
    try {
        const match = url.match(/\/reel\/([A-Za-z0-9_-]+)\/?/);
        return match ? match[1] : null;
    } catch {
        return null;
    }
}

/**
 * Validate if URL is a valid Instagram reel URL
 * @param url - URL to validate
 * @returns true if valid Instagram reel URL
 */
export function isValidInstagramUrl(url: string): boolean {
    const instagramPattern = /^https?:\/\/(www\.)?instagram\.com\/(p|reel)\/[A-Za-z0-9_-]+\/?/;
    return instagramPattern.test(url);
}

/**
 * Get Instagram oEmbed API URL
 * @param reelUrl - Instagram reel URL
 * @param maxwidth - Optional max width for embed
 * @returns oEmbed API URL
 */
export function getOEmbedUrl(reelUrl: string, maxwidth: number = 540): string {
    const encodedUrl = encodeURIComponent(reelUrl);
    return `https://graph.facebook.com/v18.0/instagram_oembed?url=${encodedUrl}&maxwidth=${maxwidth}`;
}

/**
 * Fetch Instagram embed data using oEmbed
 * Note: This may require CORS handling or server-side proxy
 * @param reelUrl - Instagram reel URL
 * @returns Promise with embed data
 */
export async function fetchInstagramEmbed(reelUrl: string): Promise<{
    html: string;
    thumbnail_url: string;
    author_name: string;
} | null> {
    try {
        if (!isValidInstagramUrl(reelUrl)) {
            throw new Error("Invalid Instagram URL");
        }

        const response = await fetch(getOEmbedUrl(reelUrl));
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching Instagram embed:", error);
        return null;
    }
}

/**
 * Get direct Instagram reel URL from various formats
 * @param url - Instagram URL (could be shortened or full)
 * @returns Normalized Instagram URL
 */
export function normalizeInstagramUrl(url: string): string {
    // Remove query parameters
    const baseUrl = url.split("?")[0];
    // Ensure it ends without trailing slash for consistency
    return baseUrl.replace(/\/$/, "");
}
