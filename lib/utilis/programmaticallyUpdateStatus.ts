import { isBefore } from "date-fns";
import { prisma } from "../db/prisma";
import { Prisma } from "@prisma/client";

type Response = {
    success: boolean,
    message: string
}


export async function prgmUpdatePayments(): Promise<Response> {

    try {
        const payments = await prisma.payment.findMany({
            where: {
                status: "pendente"
            }, select: {
                id: true, dueDate: true
            }
        })
        const delayeds = payments.filter((paym) => isBefore(paym.dueDate || new Date(), new Date()));

        let updated = 0
        delayeds.forEach(async (delayed) => {
            updated = updated + 1;
            await prisma.payment.update({
                where: { id: delayed.id },
                data: { status: "atrasado" }
            })


        })

        return {
            success: true,
            message: updated === 0 ? "Nenhum pagamento a ser atualizado" : `${updated}  ${updated === 1 ? "pagamento atualizado" : " pagamentos atualizados"} .`
        }


    } catch (error) {
        console.error(error)
        return { success: false, message: "Erro ao executar ação no servidor." }

    }





}

type Response2 = {
    success: boolean,
    messages: Array<String>
}

export async function prgmUpdatePhasesAndTasks(): Promise<Response2> {

    const tables = ["projectPhase", "constructionPhase", "constructionTask"] as const;

    try {

        let responses: Array<String> = []

        for (const table of tables) {
            const tableData: Array<{ id: string, expectedEndDate: Date }> = await (prisma[table] as any).findMany({
                where: {
                    OR: [{
                        status:"em_andamento"
                    }, {
                        status: "planejado"
                    }

                    ]
                }, select: {
                    id: true, expectedEndDate: true
                }
            })

            const delayeds = tableData.filter((data) => isBefore(data.expectedEndDate || new Date(), new Date()));
            const length = delayeds.length

            delayeds.forEach(async (delayed) => {
                 await (prisma[table] as any).update({
                    where: { id: delayed.id },
                    data: { status: "atrasado" }
                })
            })

            ///optimistic response.
            const optimisticResponse = {
                projectPhase: length === 0 ? "Nenhuma fase de projeto a ser atualizada." : `${length}  ${length === 1 ? "fase de projeto atualizado" : " fases de projeto atualizados"} .`,
                constructionPhase: length === 0 ? "Nenhuma fase de construção a ser atualizada." : `${length}  ${length === 1 ? "fase de construção atualizado" : " fases de construção atualizados"} .`,
                constructionTask: length === 0 ? "Nenhuma tarefa de construção a ser atualizada." : `${length}  ${length === 1 ? "tarefa de construção atualizada" : " tarefas de construção atualizadas"} .`
            }

            responses = [...responses, optimisticResponse[table]];

        }

        return { success: true, messages: responses }

    } catch (error) {
        console.error(error)
        return { success: false, messages: ["Erro ao executar ação no servidor."] }


    }

}