import AddPaymentsGrid from "../../../../../../components/adicionar-projeto/payments/grid";
import AddProjectPhaseGrid from "../../../../../../components/adicionar-projeto/projectPhase/grid";
import { prisma } from "../../../../../../lib/db/prisma";
import normalizePrismaData from "../../../../../../lib/utilis/normalize-prisma";

export default async function AddInfoIntoProjectsPage({ searchParams,params}) {

    const { projectId } = await searchParams;
    const {rotaDeAdicionar} = await params

    if (!projectId) {
        return <p>Projeto não encontrado</p>
    }

    const projectRaw = await prisma.project.findUnique({
        where: { id: projectId }
    })
    const project = normalizePrismaData(projectRaw)



    if (!projectId || !project) {
        return <p>Projeto não encontrado</p>
    }

    if(rotaDeAdicionar === "payments"){
        return <AddPaymentsGrid project={project} />

    }else if(rotaDeAdicionar === "projectPhase"){
        return <AddProjectPhaseGrid project={project} />
    }

    else{
        return <p>Outras rotas</p>
    }
}