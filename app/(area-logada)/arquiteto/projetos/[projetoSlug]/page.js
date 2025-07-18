import ProjetosGrid from "@/components/area-logada/projetos/projetos-grid"
import getProjeto from "@/lib/db/select";

export default async function ProjetoSlugPage({ params }) {
    const { projetoSlug } = await params;

    ///buscar projeto por slug
    const projeto = await getProjeto(projetoSlug)

    ///fazer checagem se usuario logado pode ver dados do projeto, depois

    return (
        <>
            <ProjetosGrid tipo_usuario={"arquiteto"}  user={null} projeto={projeto} />


        </>

    )
}