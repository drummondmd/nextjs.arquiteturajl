////adicionar informações de documentos.

import { prisma } from "@/lib/db/prisma.ts"

///Inserir metadata para a db com link gerado do cloudnary

export async function insertDocumentsInfo(inputs, response) {

    const data = {
        projectId: inputs.projectId,
        name: inputs.name,
        type: inputs.type,
        link: response.secure_url,
        notes: inputs.notes,
        uploadedAt: new Date(),
        uploadedById: null, /// estrutuura que pode ser feita depois
        visibleToClient: inputs.visibleToClient,
        description: inputs.description
    }

    try {
        const response = await prisma.projectDocument.create({ data: data })
        if (response) {
            return true

        }

    } catch (error) {
        console.error("Erro ao adicionar na db(prisma)", error)
        return false

    }


}


/**
 *
 * @param {String} table - tabela que vai ser feita a inserção
 * @param {Object} data - obejeto para ser colocado em db
 * @returns - padrão do prisma , objeto que foi inserido. Retorna null ou erro se falha
 */

export async function createFunction(table,data) {

    try {

        const response =  await prisma[table].create({data:data})
        return response

    } catch (error) {
        console.error("Erro ao inserir em DB",error)
        return null

    }

}

/**
 *
 * @param {String} table - tabela que vai ser feita a inserção
 * @param {Array} data - Array of Data para ser colocado na database
 * @returns - padrão do prisma , objeto que foi inserido. Retorna null ou erro se falha
 */

export async function createManyFunction(table,data) {

    try {

        const response =  await prisma[table].createMany({data:data})
        return response

    } catch (error) {
        console.error("Erro ao inserir em DB",error)
        return null

    }

}