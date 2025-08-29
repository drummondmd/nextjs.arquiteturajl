import { prisma } from "@/lib/db/prisma";
import GridAdicionarProjeto from "../../../../../components/adicionar-projeto/grid";
import stringForSlug from "@/lib/utilis/stringForSlug";

export default async function AddProjectPage() {

    ///depois colocar where active e cliente
    const users = await prisma.user.findMany({
        select: { id: true, profile: { select: { firstName: true, lastName: true } } },

    })

    return <GridAdicionarProjeto users={users} />
}