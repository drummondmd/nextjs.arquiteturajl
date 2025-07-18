import { linksForSideBar } from "@/lib/recursos/links";
import MainSideBar from "@/components/area-logada/main-sidebar";
import { cookies } from "next/headers";
import { getUser, getUserProfile } from "@/lib/db/select";
import { prisma } from "@/lib/db/prisma";

export default async function LayoutCliente({ children, params, searchParams }) {

    ///simulando login, acessar dados dos usuarios por getServerSession depois
    const cookieStore = await cookies()
    const userEmailFromCookies = cookieStore.get("userEmail")?.value

    ///selecionar os ids se precisar
    // console.log(await prisma.user.findMany({ select: { id: true, email: true } }))

    ///buscar user com profile
    const user = await getUser(userEmailFromCookies)
    const userType = user.userType

    //selecionando menu apropriado
    const links = linksForSideBar.find((item) => item.role === userType).links

    return (
        <div className="row">
            <MainSideBar links={links} role={userType} user={user} />

            <div className="col-lg-10">
                {children}

            </div>




        </div>
    )
}