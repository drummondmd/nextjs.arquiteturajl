
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth/auth"
import { ServerSession } from "../redirect/page"
import { LoginForm } from "@/components/ui/login-form"

export default async function LoginPage() {
    const session = await auth() as ServerSession

    if (session) redirect("/redirect")


    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <LoginForm className={""} />
            </div>
        </div>
    )

}