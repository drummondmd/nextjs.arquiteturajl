
import { prisma } from "@/lib/db/prisma"
import Temp from "./temp"

export default async function LoginPage() {
    const users = await prisma.user.findMany({})

    return <Temp users={users} />
}