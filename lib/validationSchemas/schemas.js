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

export const budgetSchema = z.object({
    clientId: z.nullish(z.string()),
    totalValue: z.number("Informe um valor válido").min(0.01, "Informe um valor válido"),
    status: z.enum(["enviado", "aceito", "rejeitado", "cancelado"]),
    paymentTerms: z.string("Esse campo precisa ser preenchido"),
    summary: z.nullish(z.string()),
    notes: z.nullish(z.string()),
    title: z.string("Insira um titulo válido").min(5, "Insira um titulo válido")

})

export const projectPhaseSchema = z.object({
    projectId: z.uuid(),
    name: z.string().min(1, "Insira um nome válido"),
    startDate: z.iso.date(),
    expectedEndDate: z.iso.date(),
    order: z.coerce.number().min(1)
})

export const constructionPhaseSchema = z.object({
    projectId: z.uuid(),
    name: z.string().min(1, "Insira um nome válido"),
    startDate: z.iso.date(),
    expectedEndDate: z.iso.date(),
    order: z.coerce.number().min(1)
})

export const projectSchema = z.object({
    clientId: z.nullish(z.uuid()),
    title: z.string().min(5),
    projectType: z.string().min(5),
    investmentExpectation: z.coerce.number(),
    area: z.string(),
    coverUrl: z.file(),
    slug: z.nullish(z.string())
})

export const projectDetailSchema = z.object({
    projectId: z.nullish(z.uuid()),
    standard: z.string(),
    postalCode: z.string(),
    country: z.string(),
    state: z.string(),
    city: z.string(),
    neighborhood: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string(),
})


export const projectAndDetailSchema = z.object({
    clientId: z.nullish(z.uuid()),
    title: z.string().min(5),
    projectType: z.string().min(5),
    investmentExpectation: z.coerce.number(),
    area: z.string(),
    coverUrl: z.nullish(z.file()),
    standart: z.string(),
    postalCode: z.string(),
    country: z.string(),
    state: z.string(),
    city: z.string(),
    neighborhood: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string(),
})