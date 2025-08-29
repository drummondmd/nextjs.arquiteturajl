import { notFound } from "next/navigation";
import AddPaymentsGrid from "../../../../../../components/adicionar-projeto/payments/grid";
import AddProjectPhaseGrid from "../../../../../../components/adicionar-projeto/projectPhase/grid";
import { prisma } from "../../../../../../lib/db/prisma";
import normalizePrismaData from "../../../../../../lib/utilis/normalize-prisma";
import HubAdd from "@/components/adicionar-projeto/hub-add";

export default async function AddInfoIntoProjectsPage({ searchParams, params }) {

    const { projectId } = await searchParams;
    const { rotaDeAdicionar } = await params

    if (!projectId) {
        return <p>Projeto não encontrado</p>
    }

    const projectRaw = await prisma.project.findUnique({
        where: { id: projectId }
    })
    const project = normalizePrismaData(projectRaw)

    console.log(project)


    if (!projectId || !project) {
        return <p>Projeto não encontrado</p>
    }

    if (rotaDeAdicionar === "hub") {

        return <HubAdd project={project} />

    }

    else if (rotaDeAdicionar === "payments") {
        return <AddPaymentsGrid project={project} table="payments" />

    } else if (rotaDeAdicionar === "projectPhase") {
        const defaultCheckbox = ["Briefing (Levantamento de Necessidades)", "Levantamento Técnico", "Estudo Preliminar / Conceito", "Anteprojeto", "Projeto Executivo", "Compatibilização e Orçamento", "Obra / Acompanhamento", "Entrega e Pós-Obra"];
        return <AddProjectPhaseGrid project={project} table={'projectPhase'} defaultCheckbox={defaultCheckbox} />
    } else if (rotaDeAdicionar === "constructionPhase") {
        const fasesConstrucaoInteriores = ["Demolição e limpeza inicial", "Preparação da alvenaria e novas paredes", "Instalações elétricas e hidráulicas", "Reboco e tratamento de superfícies", "Contrapiso e nivelamento", "Colocação de piso e revestimentos", "Forro e iluminação", "Pintura", "Instalação de marcenaria sob medida", "Colocação de portas, rodapés e esquadrias", "Instalação de móveis soltos", "Decoração e objetos finais"];

        return <AddProjectPhaseGrid project={project} table={'constructionPhase'} defaultCheckbox={fasesConstrucaoInteriores} />
    }
    else {
        notFound()
    }
}