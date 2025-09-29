import { linksForSideBar } from "@/lib/recursos/links";
import MainSideBar from "@/components/area-logada/main-sidebar";
import { getUser } from "@/lib/db/select";
import { ServerSession } from "../redirect/page";
import { auth } from "@/lib/auth/auth";
import { notFound, redirect } from "next/navigation";
import { ReactElement } from "react";

export default async function LayoutAreaLogada({ children }: { children: ReactElement }) {

    const session = await auth() as ServerSession

    if (!session) {
        redirect("/login")
    }

    ///buscar user com profile
    const user = await getUser(session.user.email)
    if (!user) {
        notFound()
    }
    const userType  = user.userType

    //selecionando menu apropriado
    const links = linksForSideBar.find((item) => item.role === userType)?.links

    return (
        <div className="row">
            <MainSideBar links={links} role={userType} user={user} image={session.user.image} />

            <div className="col-lg-10">
                {children}

            </div>




        </div>
    )
}