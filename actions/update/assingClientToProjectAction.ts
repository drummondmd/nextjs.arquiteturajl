'use server'

import { prisma } from "@/lib/db/prisma"

export default async function assingProjectOwnerAction(projectId: string, userId: string): Promise<{ success: boolean, message?: string }> {

    if (!projectId || !userId) {
        return { success: false, message: "Erro ao obter dados para atribuir projeto ao cliente" }
    }

    try {

        const response = await prisma.project.update({
            where: { id: projectId },
            data: { clientId: userId }
        })

        console.log(response)
        if (!response) {
            throw new Error()
        }


    } catch (error) {
        console.error(error)
        console.error("Erro ao atualizar base de dados")
        return { success: false, message: "Erro ao atualizar base de dados" }

    }

    ///revalidar path posteriormente.

    return { success: true }






}