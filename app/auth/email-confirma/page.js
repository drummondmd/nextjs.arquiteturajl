import { redirect } from "next/navigation"
import { getUser } from "../../../lib/db/select"
import { prisma } from "../../../lib/db/prisma"
import EmailConfirmaClient from "./emailConfirmaClient"

export default async function EmailConfirmaPage({ searchParams }) {

    const query = await searchParams
    const tokenQuery = query.token
    const email = query.user_email
    const tokenDb = await prisma.userToken.findFirst({ where: { token: tokenQuery } })

    if (!tokenQuery || !email || !tokenDb) {
        return <EmailConfirmaClient status="false" />
    }

    const user = await getUser(email)
    if (!user) {
        return <EmailConfirmaClient status="false" />
    }
    if (user.emailVerified) {
        return <EmailConfirmaClient status="success" />
    }

    ///ver se token que existe é do cliente. Se tudo certo, mudar db e redirecionar para login
    if (user.id === tokenDb.userId) {
        ///fazer granular depois
        await prisma.user.update({
            where: { id: user.id },
            data: { emailVerified: true }
        })
        return <EmailConfirmaClient status="success" />
    }


    ///else dar parametros invalidos



    return (
        <>
            <EmailConfirmaClient succes="false" />
        </>
    )
}