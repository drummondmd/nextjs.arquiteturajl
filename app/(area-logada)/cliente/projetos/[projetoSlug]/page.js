//versão cliente

import ProjetosGrid from "@/components/area-logada/projetos/projetos-grid"
import getProjeto from "@/lib/db/select";


export default async function ProjetoSlugPage({ params }) {
    const { projetoSlug } = await params;

    ///buscar projeto por slug
    const projeto = await getProjeto(projetoSlug)

    ///fazer checagem se usuario logado pode ver dados do projeto, depois


    ///se não tiver etapa.

    return <ProjetosGrid tipo_usuario={"cliente"} user={null} projeto={projeto} />



}