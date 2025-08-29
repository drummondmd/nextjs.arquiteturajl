import { prisma } from "@/lib/db/prisma.ts"
import Link from "next/link"


export default async function UsuariosPage() {
    const users = await prisma.user.findMany({ include: { profile: true, tokens: true } })
    console.log(users)

    return (
        <div className="mt-2">
            <div className="mt-2 p-2"   >
                <h4>Usuarios</h4>
                <Link href={"/arquiteto/usuarios/add"}>Adicionar Usuarios</Link>
            </div>
            <div>
                {users.length > 0 && (
                    <table>
                        <thead>
                            <tr>
                                <td>Nome</td>
                                <td>Tipo</td>
                                <td>Status</td>
                                <td>Verificado?</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{`${user.profile.firstName} ${user.profile.lastName}`}</td>
                                        <td>{user.userType}</td>
                                        <td>{user.accountStatus}</td>
                                        <td>{user.emailVerified ? "Sim" : "Não"}</td>

                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>

                )}
                {users.length === 0 && <p>Nenhum usuário cadastrado.</p>}

            </div>

        </div>

    )
}