'use server'

import { parseISO } from "date-fns";
import { paymentSchema } from "../../lib/validationSchemas/schemas";
import { createFunction } from "../../lib/db/create";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export default async function createPaymentAction(data) {

    ///validação
    const zodResponse = paymentSchema.safeParse(data)

    if (!zodResponse.success) {
        ///erro
        return { success: false, message: zodResponse.error.message }
    }

    // se validado.
    //trocar data manualmente.
    zodResponse.data.dueDate = parseISO(zodResponse.data.dueDate)

    ///try catch

    try {
        const response = await createFunction("payment", zodResponse.data)
        if (!response) {
            throw new Error()
        }

    } catch (error) {
        console.error(error, "Erro ao inserir em DB")
        return { success: false, message:"Erro ao inserir em DB" }

    }

    ///se inserir corretamente, revaliar cache e redirecionar
    revalidatePath("/arquiteto/financeiro/")
    redirect("/arquiteto/financeiro/")






}