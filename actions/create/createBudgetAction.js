'use server'

import { createFunction } from "../../lib/db/create"
import { budgetSchema } from "../../lib/validationSchemas/schemas"

export default async function createBudgetAction(data) {

    ///validar
    const zodResponse = budgetSchema.safeParse(data)
    if (!zodResponse.success) {
        return { success: false, message: "Verifique os dados informados" }
    }

    ///se valido, refinar dado ou retornar erro se erro
    ///se não tiver client excluir propiedade para não bugar a entrada
    if (zodResponse.data.clientId === "undefined" || zodResponse.data.clientId === "") {
        delete zodResponse.data.clientId
    }


    ///trycatch na base de dados, retornar erro se erro
    try {
        const response = await createFunction("budget", zodResponse.data);
        if (!response) {
            throw new Error()
        }

    } catch (error) {
        console.error(error, "Erro ao inserir dado em DB")
        return { success: false, message: "Erro ao inserir dado em DB" }
    }
    ///se tudo der certo retornar sucesso, será redirecionado no cliente

    return { success: true }


}