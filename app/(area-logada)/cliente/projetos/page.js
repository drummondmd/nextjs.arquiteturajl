
import { getUserCompleto } from "@/lib/db/select";
import { cookies } from "next/headers";
import HubGridProjetos from "../../../../components/area-logada/hub-grid";

export default async function ProjetosCliente() {

    ///simulando login, acessar dados dos usuarios por getServerSession depois
    const cookieStore = await cookies()
    const userEmailFromCookies = cookieStore.get("userEmail")?.value

    ///buscar user
    const userData = await getUserCompleto(userEmailFromCookies)

    return (
        <HubGridProjetos role={"cliente"}  userData={userData} />
    )
}