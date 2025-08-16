import AddPaymentsGrid from "../../../../../../components/adicionar-projeto/payments/grid";
import { prisma } from "../../../../../../lib/db/prisma";
import normalizePrismaData from "../../../../../../lib/utilis/normalize-prisma";

export default async function AddPaymentsPage({ searchParams }) {

    const { projectId } = await searchParams;
    const projectRaw = await prisma.project.findUnique({
        where: { id: projectId }
    })
    const project = normalizePrismaData(projectRaw)



    if (!projectId || !project) {
        return <p>Projeto não encontrado</p>
    }

    return (
        <AddPaymentsGrid project={project} />
    )
}