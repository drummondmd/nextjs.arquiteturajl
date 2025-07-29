import { prisma } from "@/lib/db/prisma.ts"


export default async function UsuariosPage() {
    const users = await prisma.user.findMany({ include: { profile: true, tokens: true } })

    return (
        <div>
            <p>Aqui estão os usuarios</p>
            <p>{JSON.stringify(users)}</p>

        </div>

    )
}