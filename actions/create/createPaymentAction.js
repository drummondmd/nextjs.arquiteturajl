'use server'

import { parseISO } from "date-fns";
import { paymentSchema } from "../../lib/validationSchemas/schemas";
import { createFunction, createManyFunction } from "../../lib/db/create";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { success } from "zod";
import z from "zod"


export default async function createPaymentAction(data) {
    const isArray = data.payments ? true : false;


    ///validação dependendo se é array ou não
    let zodResponse;
    if (isArray) {
        const zodArraySchema = z.object({
            payments: z.array(paymentSchema)
        })
        ///se for array validar como array
        zodResponse = zodArraySchema.safeParse(data)
    }

    if (!isArray) {
        zodResponse = paymentSchema.safeParse(data)
        ////validar como objeto
    }

    if (!zodResponse.success) {
        ///erro
        return { success: false, message: zodResponse.error.message }
    }

    // se validado.
    //trocar data manualmente.
    if (!isArray) {
        zodResponse.data.dueDate = parseISO(zodResponse.data.dueDate)
    }
    if (isArray) {
        ///map
        zodResponse.data.payments.forEach((elem) => {
            elem.dueDate = parseISO(elem.dueDate)
        })
    }


    ///try catch

    try {
        let response;
        if (isArray) {
            response = await createManyFunction("payment", zodResponse.data.payments)
            ///createMany
        }
        if (!isArray) {
            response = await createFunction("payment", zodResponse.data)
        }
        if (!response) {
            throw new Error()
        }

    } catch (error) {
        console.error(error, "Erro ao inserir em DB")
        return { success: false, message: "Erro ao inserir em DB" }

    }

    if (isArray) {
        return { success: true, message: "Deu certo" }
    } else {

        ///se inserir corretamente, revaliar cache e redirecionar
        revalidatePath("/arquiteto/financeiro/")
        redirect("/arquiteto/financeiro/")


    }








}