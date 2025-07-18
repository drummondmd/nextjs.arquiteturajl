import GerenciamentoGrid from "@/components/area-logada/gerenciamento/gerenciamento-grid"
import getProjeto from "@/lib/db/select"

export default async function GerenciamentoObraPage({ params }) {

    const {projetoSlug} = await params
    ///buscar user pelo login e verificar se ele pode acessar tal projeto

    ///buscar projeto
    const projeto = await getProjeto(projetoSlug)
    console.log(projeto)

    return <GerenciamentoGrid user={null} projeto={projeto} />


}