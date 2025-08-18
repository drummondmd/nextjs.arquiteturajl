import { useRouter } from "next/navigation"

export default function HeaderAddProjetos({ pagina, projeto }) {
    const router =  useRouter()

    if (!projeto) {
        return (
            <div className="py-4 px-6 bg-gray-50 rounded-lg">
                <h1 className="text-xl text-gray-500 font-medium">Projeto não definido</h1>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-sm text-gray-600 font-medium">
                            Adicionar {pagina} ao projeto: {projeto.title}
                        </h2>
                        {/* <h1 className="text-2xl font-bold text-gray-900 mt-1">

                        </h1> */}
                        {projeto.details && (
                            <p className="text-gray-500 text-sm mt-1">
                                {projeto.details.neighborhood} - {projeto.details.city}
                            </p>
                        )}
                    </div>
                    <button
                        onClick={() => router.back()}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                        Voltar
                    </button>
                </div>
            </div>
        </div>
    )
}