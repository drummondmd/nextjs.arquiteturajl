import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const url = searchParams.get("url");

        if (!url) {
            return NextResponse.json({ error: "URL is required" }, { status: 400 });
        }

        const res = await fetch(url, {
            cache: "no-store", headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0 Safari/537.36",
            }
        });
        const html = await res.text();
        const $ = cheerio.load(html);

        const title =
            $('meta[property="og:title"]').attr("content") ||
            $("title").text() ||
            "";
        const description =
            $('meta[property="og:description"]').attr("content") ||
            $('meta[name="description"]').attr("content") ||
            "";
        const image =
            $('meta[property="og:image"]').attr("content") ||
            $('meta[name="twitter:image"]').attr("content") ||
            "";

        return NextResponse.json({ title, description, image, url });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch metadata" },
            { status: 500 }
        );
    }
}
