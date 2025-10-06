import { raw } from "@prisma/client/runtime/library";
import { pool } from "./db-config";
import { prisma } from "./prisma";
import normalizePrismaData from "../utilis/normalize-prisma";
import { ConstructionPhase, ConstructionTask, paymentType, Project, ProjectDetail, ProjectPhase, User, UserProfile } from "@prisma/client";
import { convertIsoDatesInArrayObjects } from "../utilis/normalizeDateInArrayOrObject";

///USUARIOS

///todos usuarios

///usuario especifico por email, usar cache depois
const typeTest = await prisma.user.findUnique({
    where: { email: "userEmail" },
    include: { profile: true },
    omit: { passwordHash: true }
})


type TUser = Omit<User, "passwordHash">
export type UserWithProfile = TUser & { profile: UserProfile | null } | null


export async function getUser(userEmail: string) {
    try {
        const result = await prisma.user.findUnique({
            where: { email: userEmail },
            include: { profile: true },
            omit: { passwordHash: true }
        })
        return result

    } catch (error) {
        console.error("Erro ao buscar dados ", error)
        return null
    }

}

/// buscando usuario, orçamentos e projetos, usar cache depois
const rawResult = await prisma.user.findUnique({
    where: { email: "teste@gmail" },
    include: { profile: true, budgets: true, projects: true },
    omit: { passwordHash: true }
})
export type UserCompleto = typeof rawResult;

export async function getUserCompleto(userEmail: string): Promise<UserCompleto | null> {
    try {
        const rawResult = await prisma.user.findUnique({
            where: { email: userEmail },
            include: { profile: true, budgets: true, projects: true },
            omit: { passwordHash: true }
        })
        if (!rawResult) {
            return null
        }
        const result = normalizePrismaData(rawResult)
        return result

    } catch (error) {
        console.error("Erro ao buscar dados ", error)
        return null
    }

}

////PROJETOS

//payment e documentos como any por que não achei
export type ProjetoCompleto = Project & { details: ProjectDetail, designPhases: Array<ProjectPhase>, constructionPhases: Array<ConstructionPhase & { tasks: Array<ConstructionTask> }>, documents: any, payments: any }


export default async function getProjeto(slug: string): Promise<ProjetoCompleto | null> {

    try {
        const rawResult = await prisma.project.findUnique({
            where: { slug: slug },
            include: {
                details: true, designPhases: { orderBy: { order: "asc" } }, constructionPhases: { include: { tasks: true }, orderBy: { order: "asc" } }, documents: true, payments: { where: { paymentType: "entrada" } }
            }
        })
        const normalizedResult = normalizePrismaData(rawResult)
        return normalizedResult

    } catch (error) {
        console.error("Erro ao obter dados", error)
        return null

    }
}

///OUTRAS FUNÇÕES.

export async function getEstimativaCustos() {
    try {
        const result = await pool.query("SELECT * FROM estimativa_custos_execucao");
        if (result.rowCount > 0) {
            return result.rows
        } else {
            return null
        }

    } catch (error) {
        console.error(error, "Erro ao obter usuarios")
        return null

    }
}

