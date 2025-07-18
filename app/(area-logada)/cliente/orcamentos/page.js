import TableOrcamentos from "@/components/area-logada/orcamentos/table-orcamentos"
import { getUserCompleto } from "@/lib/db/select"
import { cookies } from "next/headers"

export default async function OrcamentoCliente() {
    ///simulando login, acessar dados dos usuarios por getServerSession depois
    const cookieStore = await cookies()
    const userEmailFromCookies = cookieStore.get("userEmail")?.value

    ///buscar user
    const user = await getUserCompleto(userEmailFromCookies)

    return (
        <TableOrcamentos tipo_usuario={"cliente"} user={user} />
    )
}