import { UserProfile } from "@prisma/client"
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
    complement: z.nullish(z.string()),
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
    complement: z.nullish(z.string()),
})

export const constructionTaskSchema = z.object({
    name: z.string().min(5, "Minimo de 5 caracteres"),
    phaseId: z.uuid(),
    status: z.enum(["planejado", "em_andamento", "concluido", "cancelado", "atrasado"]),
    budget: z.nullish(z.coerce.number()),
    actualCost: z.nullish(z.coerce.number()),
    startDate: z.iso.date(),
    expectedEndDate: z.iso.date(),
    endDate: z.nullish(z.date()),
    notes: z.nullish(z.string()),
    responsible: z.nullish(z.string()),
    priority: z.nullish(z.coerce.number()),
    fornecedor: z.nullish(z.string()),
    link: z.nullish(z.url())
})

export const constructionTaskUI = z.object({
    name: z.string().min(5, "Minimo de 5 caracteres"),
    phaseId: z.uuid(),
    status: z.enum(["planejado", "em_andamento", "concluido", "cancelado", "atrasado"]),
    budget: z.nullish(z.coerce.number()),
    actualCost: z.nullish(z.coerce.number()),
    startDate: z.iso.date(),
    expectedEndDate: z.iso.date(),
    notes: z.nullish(z.string()),
    priority: z.coerce.number(),
    fornecedor: z.nullish(z.string()),
    link: z.nullish(z.url())
})

export const userProfileSchema = z.object({
    id: z.uuid(),
    firstName: z.string("Preencha um nome válido").min(2, "Preencha um nome válido"),
    userId: z.string("Preencha um ID de usuário válido").uuid(),
    lastName: z.nullish(z.string("Preencha um sobrenome válido").min(2, "Preencha um sobrenome válido")),
    phone: z.nullish(z.string("Preencha um telefone válido").min(10, "Preencha um telefone válido")),
    avatarUrl: z.nullish(z.file()),
    birthDate: z.nullish(z.iso.date("Preencha uma data de nascimento válida")),
    gender: z.nullish(z.enum(["masculino", "feminino", "outro"], "Selecione um gênero válido")),
    identityDoc: z.nullish(z.string("Preencha um documento de identidade válido").min(5, "Preencha um documento de identidade válido")),
    cpf: z.nullish(z.string("Preencha um CPF válido").min(11, "Preencha um CPF válido")),
    occupation: z.nullish(z.string("Preencha uma ocupação válida").min(2, "Preencha uma ocupação válida")),
    maritalStatus: z.nullish(z.string("Preencha um estado civil válido")),
    hasChildren: z.nullish(z.coerce.boolean()),
    stylePreference: z.nullish(z.string("Preencha uma preferência de estilo válida")),
    referralSource: z.nullish(z.string("Preencha uma fonte de referência válida")),
}
)

export type UserProfileType = z.infer<typeof userProfileSchema>
