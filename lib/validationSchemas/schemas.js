import { title } from "process"
import z from "zod"


export const paymentSchema = z.object({
    paymentType: z.enum(["entrada", "saida"]),
    projectId: z.string("Selecione um projeto"),
    description: z.string("Escreva uma descriçao válida"),
    amount: z.number().min(0.01, "Informe um valor válido"),
    dueDate: z.iso.date(),
    status: z.string()
})

export const budgetSchema =  z.object({
    clientId:z.nullish(z.string()),
    totalValue:z.number("Informe um valor válido").min(0.01,"Informe um valor válido"),
    status:z.enum(["enviado","aceito","rejeitado","cancelado"]),
    paymentTerms:z.string("Esse campo precisa ser preenchido"),
    summary:z.nullish(z.string()),
    notes:z.nullish(z.string()),
    title:z.string("Insira um titulo válido").min(5,"Insira um titulo válido")

})

export const projectPhaseSchema = z.object({
    projectId:z.string(),
    name:z.string().min(1,"Insira um nome válido"),
    startDate:z.iso.date(),
    expectedEndDate:z.iso.date(),
    order:z.number()
})