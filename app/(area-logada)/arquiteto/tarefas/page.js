import { formatarDataBR } from "@/lib/utilis/formatDate"
import { endOfWeek, isSameMonth, isSameWeek, isToday } from "date-fns";
import convertToLocalDate from "@/lib/utilis/convertToLocalDate"
import splitArrayByStatus from "@/lib/utilis/splitArrayByStatus";
import StatusBadge from "@/components/area-logada/gerenciamento/statusBadge";
import CardTarefas from "@/components/area-logada/tarefas/card";
import normalizePrismaData from "@/lib/utilis/normalize-prisma";
import CardContainerGrid from "../../../../components/area-logada/tarefas/cardContainer-grid"


export default async function TasksPage() {

    ////array dos projetos da database
    const projectPhaseRaw = await prisma.projectPhase.findMany({
        include: { project: true }
    })
    const projectPhase = normalizePrismaData(projectPhaseRaw)

    const ProjectPhaseTaskRaw = await prisma.ProjectPhaseTask.findMany({ include: { phase: { include: { project: true } } } })
    const ProjectPhaseTask = normalizePrismaData(ProjectPhaseTaskRaw)

    const ConstructionPhaseRaw = await prisma.ConstructionPhase.findMany({ include: { project: true } })
    const ConstructionPhase = normalizePrismaData(ConstructionPhaseRaw)

    const ConstructionTaskRaw = await prisma.ConstructionTask.findMany({})
    const ConstructionTask = normalizePrismaData(ConstructionTaskRaw)





    ///today
    const today = new Date()

    const splitedProjectPhase = splitArrayByStatus(projectPhase)
    const splitedProjectPhaseTask = splitArrayByStatus(ProjectPhaseTask)
    const splitedConstructionPhase = splitArrayByStatus(ConstructionPhase)
    const splitedConstructionTask = splitArrayByStatus(ConstructionTask)





    ///ignorando projectPhaseTeste pq não to vendo necessidade no momento.

    return <CardContainerGrid splitedConstructionPhase={splitedConstructionPhase} splitedConstructionTask={splitedConstructionTask} splitedProjectPhase={splitedProjectPhase} />
}