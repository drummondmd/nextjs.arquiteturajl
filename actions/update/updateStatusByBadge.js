'use server'

import { prisma } from "../../lib/db/prisma"
import { revalidatePath } from "next/cache"

/**
 *
 * @param {String} status - novo status
 * @param {String} table -tabela que será atualizada
 * @param {String} itemId - id do item que será atualizado
 * @returns {Object} - sucesso, insucesso.
 *
 *  */

export default async function updateStatusByBadge(status, table, itemId) {

    ///TODO

    //validação de erro
    if (!status, !table, !itemId) {
        return { success: false, message: "Dados inválidos" }
    }

    ///trycatch
    try {

        const response = await prisma[table].update({
            where: { id: itemId },
            data: { status: status }
        })
        if (!response) {
            throw new Error()
        }

    } catch (error) {
        console.error("Erro ao atualizar database", error)
        return { success: false, message: "Erro ao atualizar database" }

    }

    ///revalidate path
    revalidatePath('/', 'layout')
    ///retornar sucesso se tudo certo
    return { success: true, message: "Tudo certo ao atualizar Status" }

}