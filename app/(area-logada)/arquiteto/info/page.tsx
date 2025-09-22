import { linksForSideBar } from "@/lib/recursos/links";
import MainSideBar from "@/components/area-logada/main-sidebar";
import { getUser } from "@/lib/db/select";
import { ServerSession } from "../redirect/page";
import { auth } from "@/lib/auth/auth";
import { notFound, redirect } from "next/navigation";
import { ReactElement } from "react";
import InfoComponent from "@/components/info/infoComponent";

export default async function InfoArquiteto() {

    const session = await auth() as ServerSession

    if (!session) {
        redirect("/login")
    }

    const user = await getUser(session.user.email)
    if (!user) {
        notFound()
    }

    return <InfoComponent user={user} />
}