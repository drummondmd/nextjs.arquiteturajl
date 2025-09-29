'use server'

import { prisma } from "@/lib/db/prisma"
import { UserWithProfile } from "@/lib/db/select"
import { generateToken } from "@/lib/hash/token"
import { htmlResetPassword } from "@/lib/nodemailer/htmlBoiler"
import sendEmail from "@/lib/nodemailer/sendEmail"
import { AwardIcon } from "lucide-react"
import { use } from "react"

export default async function resetPasswordAction(user: UserWithProfile): Promise<{ success: boolean, message: string }> {
    if (!user) return { success: false, message: "Usuario não definido" }

    const token = generateToken()
    const now = new Date();
    const expires = new Date()
    expires.setHours(now.getHours() + 6);

    try {
        await prisma.userToken.deleteMany({
            where: { AND: [{ userId: user.id }, { tokenType: "reset_password" }] }
        })
        const tokenInsert = await prisma.userToken.create({
            data: {
                userId: user.id,
                tokenType: "reset_password",
                token: token,
                createdAt: now,
                tokenExpiry: expires
            }

        })
        if (tokenInsert) {
            const email = await sendEmail(user.email, "Reset de Senha", htmlResetPassword(token, user.email))
            if (!email) {
                throw new Error("Erro ao enviar email.")
            }

        } else {
            throw new Error()
        }


    } catch (error) {
        console.error(error, "Erro ao atualizar base de dados ou enviar email.")
        return { success: false, message: "Erro ao solicitar nova senha no servidor" }



    }

    return { success: true, message: "Deu tudo certo, Verifique seu email para continuar o processo." }

}