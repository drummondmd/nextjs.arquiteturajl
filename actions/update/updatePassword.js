'use server'

import { redirect } from "next/navigation"
import { prisma } from "../../lib/db/prisma"
import { hashPassword } from "../../lib/hash/hash"

export default async function updatePassword(prev, formData) {
    ///validação de token já feita no get request do servidor.Se chegou até aqui creio que não precise de outra validação adicional.
    const password = formData.get("password")
    const passwordConfirmation = formData.get("passwordConfirmation")
    const tokenId = formData.get("tokenId")
    const email = formData.get("email")

    /// validar senha, caracter e que são iguais.
    if (password.length < 6 ||
        password != passwordConfirmation ||
        !email ||
        !tokenId
    ) {
        return { erro: "Senha muito curta ou senhas não conferem. Tente novamente." }
    }

    ///hash
    const hashedPassword = await hashPassword(password)

    ///mudar na database.
    try {
        const response = await prisma.user.update({
            where: { email: email },
            data: { passwordHash: hashedPassword }
        })
        if (response) {
            ///depois de trocar senha, exluir token.
            const tokenDelete =  await prisma.userToken.delete({
                where:{id:tokenId}
            })

        } else {
            throw Error()
        }

    } catch (error) {
        console.error("Erro ao mudar senha na database", error)
        return { erro: " Erro ao atualizar base de dados." }
    }

    ///redirecionar para login se tudo certo.
    redirect("/login")

}