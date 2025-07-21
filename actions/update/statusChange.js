'use server'

import getPercentageOfTasks from "@/lib/utilis/percentageTask";
import { revalidatePath } from "next/cache";

export async function updateStatusChange(tabelaRelacionada, id, status) {
    try {

        if (!tabelaRelacionada || !id || !status) {
            throw new Error('Parâmetros inválidos.');
        }
        if (tabelaRelacionada.includes("Task")) {
            await task()
        } else {
            await phase()
        }


    } catch (error) {
        console.error('Erro ao atualizar status:', error);
        return { success: false, message: 'Erro ao atualizar status.' };

    }
    ///melhorar revalidação depois
    revalidatePath("/")
    return { success: true, message: 'Status atualizado com sucesso.' };



    async function task() {
        const response = await prisma[tabelaRelacionada].update({
            where: { id: id },
            data: { status: status },
            select: { phaseId: true }
        })
        const { phaseId } = response
        ////verificar se a fase correspondente já foi concluida.
        try {
            const table = tabelaRelacionada.includes("Construction") ? "ConstructionPhase" : "ProjectPhase";
            const phase = await prisma[table].findUnique({ where: { id: phaseId }, select: { tasks: true, status: true } });
            const percentage = getPercentageOfTasks(phase.tasks);

            if (phase.status == "concluido" && phase.status != "atrasado" && percentage < 100) {
                ///mudar para em andamento.
                await updatePhase(phaseId, table, "em_andamento")
            }
            if (phase.status != "concluido" && percentage == 100) {
                await updatePhase(phaseId, table, "concluido")
                ///mudar para concluido

            }
            async function updatePhase(phaseId, table, status) {
                const response = await prisma[table].update({
                    where: { id: phaseId },
                    data: { status: status }
                });
            }


        } catch (error) {
            console.error("Erro ao atualizar fase correspondente", error)
            throw new Error("Erro ao atualizar fase correspondente.");

        }

    }


    async function phase() {
        const response = await prisma[tabelaRelacionada].update({
            where: { id: id },
            data: { status: status }
        });

    }




    ///revalidar patch ou tags depois

}