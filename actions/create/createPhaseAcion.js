'use server'

import z, { success } from "zod"
import { constructionPhaseSchema, constructionTask, constructionTaskSchema, projectPhaseSchema } from "../../lib/validationSchemas/schemas"
import { convertIsoDatesInArrayObjects } from "../../lib/utilis/normalizeDateInArrayOrObject"
import { createManyFunction } from "../../lib/db/create"

export default async function createPhaseAction(table, data) {


    let projectId;
    if (table != "construcionTask") {
        projectId = data[table][0].projectId
    }
    // if (table != "construcionTask") {
    //     projectId = data[table][0].projectId
    // }

    ///tentar fazer para varias tabelas
    const SchemaReference = {
        projectPhase: projectPhaseSchema,
        constructionPhase: constructionPhaseSchema,
        ConstructionTask: constructionTaskSchema
    }

    ////validar erros com zod no servidor
    const zodArraySchema = z.object({
        [table]: z.array(SchemaReference[table])

    })


    const zodResponse = zodArraySchema.safeParse(data)
    if (!zodResponse.success) {
        ///deu erro na validação
        console.error(zodResponse.error)
        return { success: false, message: "Erro na validação de dados do servidor." }
    }

    ///ajustar dados se preciso
    const rawData = zodResponse.data[table]
    const normalizedData = convertIsoDatesInArrayObjects(rawData)
    ///try catch
    try {
        const response = await createManyFunction(table, normalizedData)
        // const response = true
        if (!response) {
            throw new Error()
        }

    } catch (error) {
        console.error(error)
        console.error("Erro ao cadastrar na base de dados")
        return { success: false, message: "Erro na validação de dados do servidor." }
    }

    ///revalidar path, depois, ver melhor forma.
    return { success: true, projectId: projectId }


}