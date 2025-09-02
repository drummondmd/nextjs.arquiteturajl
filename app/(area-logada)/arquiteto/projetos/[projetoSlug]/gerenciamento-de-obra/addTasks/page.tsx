import FormContainerForTasks from "@/components/adicionar-projeto/tasks/form-container"
import getProjeto from "@/lib/db/select"
import { ConstructionTask } from "@prisma/client"
import { NextPage } from "next"
import { notFound } from "next/navigation"



export default async function AddTasksFromConstructionPage({ params, searchParams }: any) {

    ////TODO
    //validar depois

    const { projetoSlug } = await params
    const { constructionPhaseId } = await searchParams


    ///validação extensa e verbosa que pode ser melhorada, mas está funcionando
    if (!projetoSlug || !constructionPhaseId) {
        notFound()
    }

    const projeto = await getProjeto(projetoSlug)

    if(!projeto ||projeto.constructionPhases.length === 0){
        notFound()
    }

    const constructionPhase = projeto.constructionPhases.find((phase:any)=>phase.id === constructionPhaseId )

    if(!constructionPhase){
        notFound()
    }



    ///buscar user pelo login e verificar se ele pode acessar tal projeto


    ///buscar projeto


    return <FormContainerForTasks phaseName={constructionPhase.name} projectSlug={projeto.slug} phaseId={constructionPhaseId} prevTasks={constructionPhase.tasks} />
}