'use server'

import { parseISO } from "date-fns"
import { prisma } from "../../lib/db/prisma"
import { revalidatePath } from "next/cache"

export default async function updateByModal(prev, formData) {
    //##TODO

    ///selecionar tabela
    const table = formData.get("table")

    ///selecionar valores e chaves
    let inputs = Object.fromEntries(formData)

    ///deletando o nome da tabela do objeto que irei passar como data
    delete inputs.table

    ///deletar valores nulos da data final.
    const keys = Object.keys(inputs)
    Object.values(inputs)
        .forEach((elem, idx) => {
            if (elem === null || elem === "") {
                console.log("empty", keys[idx])
                const emptyKey = keys[idx]
                delete inputs[emptyKey]
            }
        })


    ///verificação de erros e validação de dados.
    //depois

    ///validação de dados.
    //datas em parseISO
    const datas = ["dueDate", "startDate", "expectedEndDate"];
    datas.forEach((elem) => {
        if (inputs[elem]) {
            inputs[elem] = parseISO(inputs[elem])
        }
    })
    //stringToIntegers
    const integers = ['order',"priority"]
    integers.forEach((elem) => {
        if (inputs[elem]) {
            inputs[elem] = Number(inputs[elem])
        }
    })


    ///try catch com atualização de base de dados.
    try {
        const response = await prisma[table].update({
            where: { id: inputs.id },
            data: inputs
        })
        if (!response) {
            throw new Error()
        }
    } catch (error) {
        console.error("Erro ao atualizar base de dados", error)
        return { success: false, message: "Erro ao atualizar base de dados" }

    }

    ///revalidar path
    revalidatePath("/", "layout")
    ///se tudo certo responder que deu tudo certo
    return { success: true, message: "Tudo Certo", payload: inputs }


}