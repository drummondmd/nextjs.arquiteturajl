import { prisma } from "@/lib/db/prisma.ts"
import Link from "next/link"


export default async function UsuariosPage() {
    const users = await prisma.user.findMany({ include: { profile: true, tokens: true } })
    const arquitetos = users.filter((elem) => elem.userType === "arquiteto")
    const clientes = users.filter((elem) => elem.userType === "cliente")
    if (users.length === 0) return <p className="text-center text-gray-500 py-8">Nenhum cliente encontrado.</p>

    function Table({ arrayOfUsers, title }) {
        return (
            <div className="mb-8">
                <h5 className="text-lg font-semibold text-gray-700 mb-2">{title}</h5>
                <div className="overflow-x-auto rounded-lg shadow">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="py-3 px-4 text-left font-semibold text-xs text-gray-500 uppercase">Nome</th>
                                <th className="py-3 px-4 text-left font-semibold text-xs text-gray-500 uppercase">Tipo</th>
                                <th className="py-3 px-4 text-left font-semibold text-xs text-gray-500 uppercase">Status</th>
                                <th className="py-3 px-4 text-left font-semibold text-xs text-gray-500 uppercase">Verificado?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arrayOfUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="py-2 px-4 text-gray-800 font-medium">{`${user.profile.firstName} ${user.profile.lastName}`}</td>
                                    <td className="py-2 px-4 text-gray-700">{user.userType}</td>
                                    <td className="py-2 px-4 text-gray-700">{user.accountStatus}</td>
                                    <td className="py-2 px-4 text-gray-700">{user.emailVerified ? "Sim" : "Não"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h4 className="text-2xl font-bold text-gray-900">Usuários</h4>
                <Link href={"/arquiteto/usuarios/add"} className="inline-block px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">Adicionar Usuário</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Table arrayOfUsers={arquitetos} title="Arquitetos" />
                <Table arrayOfUsers={clientes} title="Clientes" />
            </div>
        </div>
    )
}