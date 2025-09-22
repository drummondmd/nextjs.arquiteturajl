import { auth } from "../../lib/auth/auth"
import { redirect } from "next/navigation"

export type ServerSession = { user: { email: string, image?: string, firstName: string, lastName: string, userType: "cliente" | "arquiteto",userId:string } }


export default async function RedirectPage() {

    const session = await auth() as ServerSession

    if (!session) {
        redirect("/login")
    }

    if (session.user.userType === "arquiteto") {
        redirect("/arquiteto/home")
    } else {
        redirect("/cliente/projetos")
    }
}