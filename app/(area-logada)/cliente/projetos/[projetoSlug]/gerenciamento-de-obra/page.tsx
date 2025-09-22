////versão cliente

import { ServerSession } from "@/app/redirect/page"
import GerenciamentoGrid from "@/components/area-logada/gerenciamento/gerenciamento-grid"
import { auth } from "@/lib/auth/auth"
import getProjeto from "@/lib/db/select"
import { notFound, redirect } from "next/navigation"

export default async function GerenciamentoObraPage({ params }: { params: any }) {

    const session = await auth() as ServerSession

    if (!session) {
        redirect("/login")
    }

    const { projetoSlug } = await params;

    ///buscar projeto por slug
    const projeto = await getProjeto(projetoSlug);

    ///página de erro se cliente não for o do projeto.
    if (!projeto || session.user.userId != projeto.clientId) {
        console.log("cliente não autorizado");
        notFound()

    }

    ///se não tiver etapa.
    if (projeto.constructionPhases.length === 0) {
        return (<div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-md rounded-2xl p-8 text-center max-w-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Serviço não contratado
                </h2>
                <p className="text-gray-600 mb-6">
                    Para dar continuidade ao projeto, entre em contato com o arquiteto.
                </p>

                <a
                    href={`https://wa.me/${process.env.TELEFONE}`} // coloque seu número aqui no formato internacional
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-xl shadow hover:bg-green-600 transition-colors"
                >
                    Falar no WhatsApp
                </a>
            </div>
        </div>
        )
    } else {
        return <GerenciamentoGrid tipo_usuario={"cliente"} user={null} projeto={projeto} />
    }

}