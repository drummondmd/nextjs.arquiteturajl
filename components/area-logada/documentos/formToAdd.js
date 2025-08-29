'use client'

import { useActionState } from "react"
import { addFileToCloudnaryeAndDB } from "../../../actions/create/addFileToDbs"


export default function FormToAddDocuments({ projects }) {
    const [state, formAction, isPending] = useActionState(addFileToCloudnaryeAndDB, {})

    return (
        <div className="mt-2 flex flex-col items-center">
            {state?.message && (
                <div className={`w-full max-w-lg mb-4 rounded p-3 text-white text-center font-medium transition-all duration-300
                    ${state?.succes === true ? "bg-green-500" : state?.succes === false ? "bg-red-500" : "bg-gray-300"}`}>
                    {state.message}
                </div>
            )}
            <form className="w-full max-w-lg bg-white shadow-lg rounded-lg px-8 pt-6 pb-8" action={formAction}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Projeto</label>
                    <select className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" name="projectId" required>
                        <option value={false}>Selecione o projeto</option>
                        {projects.map((projeto) => <option key={projeto.id} value={projeto.id}>{projeto.title}</option>)}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nome do arquivo</label>
                    <input type="text" required name="name" className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Tipo do arquivo</label>
                    <input type="text" required name="type" className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Descrição do arquivo</label>
                    <input name="description" className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Notas</label>
                    <input name="notes" className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className="mb-4">
                    <span className="block text-gray-700 text-sm font-bold mb-2">Visível para o cliente?</span>
                    <div className="flex gap-4">
                        <label className="inline-flex items-center">
                            <input defaultChecked={true} type="radio" value={true} name="visible" className="form-radio text-blue-600" />
                            <span className="ml-2 text-gray-700">Sim</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input type="radio" value={false} name="visible" className="form-radio text-blue-600" />
                            <span className="ml-2 text-gray-700">Não</span>
                        </label>
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Arquivo( Menor que 2Mb)</label>
                    <input placeholder="" required type="file" name="file" className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className="flex justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline transition disabled:opacity-60" disabled={isPending}>
                        {isPending ? "Enviando..." : "Enviar"}
                    </button>
                </div>
            </form>
        </div>
    )
}

