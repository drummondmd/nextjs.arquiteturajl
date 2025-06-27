import GerenciamentoGrid from "@/components/area-logada/gerenciamento/gerenciamento-grid"
import { gerenciamento_obraFromDatabase, projetosFromDatabase, subitens_etapaFromDatabase, usersFromDatabase } from "@/lib/db-testes"
import { Suspense } from "react"

export default async function GerenciamentoObraPage({ params }) {


///comparti
    async function GetingData() {
        ///buscando user from session
        const user = usersFromDatabase[0]
        ///slug atraves do parametros
        const { projetoSlug } = await params

        ///acessando projeto através do slug
        const projeto = projetosFromDatabase.find((elem) => elem.slug === projetoSlug)

        ////acessando etapas registradas atraves de id
        const etapas = gerenciamento_obraFromDatabase.filter((etapa) => etapa.projeto_id === projeto.id)
        const keys = Object.keys(etapas[0])

        ///subetapas filtradas do projeto
        const subEtapas = subitens_etapaFromDatabase.filter((subEtapa) => subEtapa.projeto_id === projeto.id)

        ///acrescentar subetapas as etapas lá em cima
        etapas.forEach((etapa) => {
            etapa.subEtapas = subEtapas.filter((subetapa) => subetapa.etapa_id === etapa.id)
        })

        return <GerenciamentoGrid user={user} projeto={projeto} etapas={etapas} />


    }

    return(
        <Suspense fallback={<p>Carregando</p>}>
            <GetingData />
        </Suspense>
    )





}