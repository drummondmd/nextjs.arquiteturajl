import resetPasswordAction from "@/actions/update/resetPassword";
import { getUserCompleto } from "@/lib/db/select";
import { SearchParamsType } from "@/lib/validationSchemas/nextjs-types";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({ searchParams }: { searchParams: SearchParamsType }) {
    const query = await searchParams;
    const { userEmail } = query;
    if (!userEmail || Array.isArray(userEmail)) return notFound()

        const user = await getUserCompleto(userEmail)

    console.log(user, userEmail)

    if (!user) return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div>
                <h4>Usuário não encontrado</h4>
                <Link href={"/criar-conta"}>Criar usuario</Link>

            </div>
        </div>
    )


    const action = await resetPasswordAction(user)

    if (action.success) {
        return (
            <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
                <h4>
                    Instuções enviadas por email, siga por lá.
                </h4>
            </div>
        )
    }






}