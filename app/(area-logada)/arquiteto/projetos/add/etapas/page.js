import { prisma } from "../../../../../../lib/db/prisma";

export default async function AddEtapasPage({ searchParams }) {

    const { projectId } = await searchParams;
    const projeto = await prisma.project.findUnique({
        where: { id: projectId }
    })



    if (!projectId || !projeto) {
        return <p>Projeto não encontrado</p>
    }

    return (
        <p>Adiconar etapas ao projeto {projeto.title}</p>
    )
}