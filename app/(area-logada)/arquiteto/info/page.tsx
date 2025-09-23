
import { getUser } from "@/lib/db/select";
import { auth } from "@/lib/auth/auth";
import { notFound, redirect } from "next/navigation";
import InfoComponent from "@/components/info/infoComponent";
import { ServerSession } from "@/app/redirect/page";

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