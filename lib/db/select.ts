import { raw } from "@prisma/client/runtime/library";
import { pool } from "./db-config";
import { prisma } from "./prisma";
import normalizePrismaData from "../utilis/normalize-prisma";
import { paymentType, Project, ProjectPhase } from "@prisma/client";
import { convertIsoDatesInArrayObjects } from "../utilis/normalizeDateInArrayOrObject";

///USUARIOS

///todos usuarios

///usuario especifico por email, usar cache depois
export async function getUser(userEmail) {
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
export async function getUserCompleto(userEmail) {
    try {
        const rawResult = await prisma.user.findUnique({
            where: { email: userEmail },
            include: { profile: true, budgets: true, projects: true },
            omit: { passwordHash: true }
        })
        const result = normalizePrismaData(rawResult)
        return result

    } catch (error) {
        console.error("Erro ao buscar dados ", error)
        return null
    }

}

////PROJETOS


export default async function getProjeto(slug) {




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
        console.log(error, "Erro ao obter usuarios")
        return null

    }
}

