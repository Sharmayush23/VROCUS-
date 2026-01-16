import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const ASSETS_DIR = "f:\\portfolio website\\assets\\work";

export async function GET() {
    try {
        if (!fs.existsSync(ASSETS_DIR)) {
            return NextResponse.json({ error: "Assets directory not found" }, { status: 404 });
        }

        const files = fs.readdirSync(ASSETS_DIR);

        // Filter for video and image files
        const mediaFiles = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return [".mp4", ".webm", ".jpg", ".jpeg", ".png", ".webp"].includes(ext);
        });

        const assets = mediaFiles.map(file => {
            const stats = fs.statSync(path.join(ASSETS_DIR, file));
            return {
                name: file,
                type: [".mp4", ".webm"].includes(path.extname(file).toLowerCase()) ? "video" : "image",
                url: `/api/videos/${encodeURIComponent(file)}`,
                size: stats.size,
                mtime: stats.mtime
            };
        });

        return NextResponse.json(assets);
    } catch (error) {
        console.error("Error listing videos:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
