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