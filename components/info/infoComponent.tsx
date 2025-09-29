'use client'

import { UserWithProfile } from "@/lib/db/select"
import { useState } from "react"
import EditProfileForm from "./editProfileForm"
import resetPasswordAction from "@/actions/update/resetPassword"
import { toast, Toaster } from "sonner"
import deleteUserAcc from "@/actions/delete/deleteAccAction"

export default function InfoComponent({ user }: { user: any }) {
    const [selector, setSelector] = useState(1)
    const Cliente = () => <p className="text-gray-600">Nada adicional a ser definido no momento.</p>
    const Arquiteto = () => <p className="text-gray-600">Nada adicional a ser definido no momento.</p>
    async function handleClick(action: "reset" | "delete") {
        let response = { success: false, message: "Erro ao executar ação no cliente." }
        const toastLoadingId = toast.loading("Enviando")
        if (action === "reset") {
            response = await resetPasswordAction(user)
        } if (action === "delete") {
            const confirmed = window.confirm('Tem certeza que deseja prosseguir?');
            if (confirmed) {
                response = await deleteUserAcc(user)
            } else {
                response = { success: true, message: "Você continua com sua conta" }
            }
        }
        toast.dismiss(toastLoadingId)
        if (response.success) {
            toast.success(response.message)
        } else {
            toast.error(response.message)
        }
    }
    const Safety = () => (
        <div className="space-y-4">
            <div className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-gray-50">
                <div>
                    <p className="font-semibold text-gray-800">Resetar senha</p>
                    <p className="text-sm text-gray-600">Clique no botão ao lado para solicitar nova senha. Instruções serão enviadas por email.</p>
                </div>
                <button onClick={() => handleClick("reset")} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Resetar senha</button>
            </div>
            <div className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-gray-50">
                <div>
                    <p className="font-semibold text-gray-800">Deletar Conta</p>
                    <p className="text-sm text-gray-600">Tenha ciência que ao deletar sua conta todos os dados serão perdidos de forma permanente.</p>
                </div>
                <button onClick={() => handleClick("delete")} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">Deletar conta permanentemente</button>
            </div>
        </div>
    )
    return (
        <div className="mx-4 mt-6 p-4 bg-white rounded-lg shadow">
            <Toaster richColors />
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Informações e Preferências</h4>
            <div className="flex flex-wrap gap-2 mb-6">
                <button onClick={() => setSelector(1)} className={`px-4 py-2 rounded font-medium transition ${selector === 1 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-blue-100'}`}>Perfil</button>
                <button onClick={() => setSelector(2)} className={`px-4 py-2 rounded font-medium transition ${selector === 2 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-blue-100'}`}>Segurança</button>
                {user?.userType === "cliente" && <button onClick={() => setSelector(3)} className={`px-4 py-2 rounded font-medium transition ${selector === 3 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-blue-100'}`}>Definições Cliente</button>}
                {user?.userType === "arquiteto" && <button onClick={() => setSelector(4)} className={`px-4 py-2 rounded font-medium transition ${selector === 4 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-blue-100'}`}>Definições Arquiteto</button>}
            </div>
            <div>
                {selector === 1 && <EditProfileForm user={user} />}
                {selector === 2 && <Safety />}
                {selector === 3 && <Cliente />}
                {selector === 4 && <Arquiteto />}
            </div>
        </div>
    )
}