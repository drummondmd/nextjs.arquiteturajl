
import { getUserCompleto } from "@/lib/db/select";
import HubGridProjetos from "../../../../components/area-logada/hub-grid";
import { auth } from "@/lib/auth/auth";
import { ServerSession } from "@/app/redirect/page";
import { notFound, redirect } from "next/navigation";

export default async function ProjetosCliente() {

        const session = await auth() as ServerSession

        if (!session) {
            redirect("/login")
        }

        ///buscar user completo com profile,projetos e orçamentos.
        const user = await getUserCompleto(session.user.email)
        if (!user) {
            notFound()
        }

    return (
        <HubGridProjetos user={user} />
    )
}