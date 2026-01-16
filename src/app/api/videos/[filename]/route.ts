import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const ASSETS_DIR = "f:\\portfolio website\\assets\\work";

function getMimeType(filename: string): string {
    const ext = path.extname(filename).toLowerCase();
    switch (ext) {
        case ".mp4": return "video/mp4";
        case ".webm": return "video/webm";
        case ".jpg":
        case ".jpeg": return "image/jpeg";
        case ".png": return "image/png";
        case ".webp": return "image/webp";
        default: return "application/octet-stream";
    }
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ filename: string }> }) {
    const filename = (await params).filename;

    if (!filename) {
        return new NextResponse("Filename is required", { status: 400 });
    }

    // Security check to prevent directory traversal
    const safeFilename = path.basename(filename);
    const filePath = path.join(ASSETS_DIR, safeFilename);

    if (!fs.existsSync(filePath)) {
        return new NextResponse("File not found", { status: 404 });
    }

    const stat = fs.statSync(filePath);
    const fileSize = stat.size;
    const range = request.headers.get("range");
    const mimeType = getMimeType(filename);

    if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunksize = (end - start) + 1;
        const file = fs.createReadStream(filePath, { start, end });
        const head = {
            "Content-Range": `bytes ${start}-${end}/${fileSize}`,
            "Accept-Ranges": "bytes",
            "Content-Length": chunksize.toString(),
            "Content-Type": mimeType,
        };

        return new NextResponse(file as any, {
            status: 206,
            headers: head,
        });
    } else {
        const head = {
            "Content-Length": fileSize.toString(),
            "Content-Type": mimeType,
        };
        const file = fs.createReadStream(filePath);
        return new NextResponse(file as any, {
            status: 200,
            headers: head,
        });
    }
}
