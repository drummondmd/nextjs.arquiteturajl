
import { prisma } from "@/lib/db/prisma"
import Temp from "./temp"
import { redirect } from "next/navigation"

export default async function LoginPage() {

    redirect("/api/auth/signin")

    const users = await prisma.user.findMany({})

    return <Temp users={users} />
}