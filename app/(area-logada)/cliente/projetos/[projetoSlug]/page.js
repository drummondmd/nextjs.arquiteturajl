import ProjetosGrid from "@/components/area-logada/projetos/projetos-grid"
import { etapasProjetosFromDatabase, projetosFromDatabase, usersFromDatabase } from "@/lib/db-testes"
import Link from "next/link"

export default async function ProjetoSlugPage({ params }) {
    ///buscando usar através da sessão
    const user =  usersFromDatabase[0]

    ///buscando slug através dos params
    const { projetoSlug } = await params

    ///buscar projeto na database
    const projeto = projetosFromDatabase.find((projeto) => projeto.slug === projetoSlug)

    ///etapas
    const etapas = etapasProjetosFromDatabase.filter((item) => item.projeto_id === projeto.id)

    return (
        <>
        <ProjetosGrid user={user} projeto={projeto} etapas={etapas} />


        </>

    )
}