import { prisma } from "@/lib/db/prisma";
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {

    const userType = request.nextUrl?.searchParams.get("userType");

    const response = await prisma.user.findMany({
        where: { userType: "cliente" },
        include: { profile: true }
    })

    return NextResponse.json({ response })
}