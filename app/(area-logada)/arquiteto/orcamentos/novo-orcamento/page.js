import { prisma } from "../../../../../lib/db/prisma";
import NovoOrcamentoClient from "./novo-orcamento-client";

export default async function NovoOrcamentoPage() {

    const users = await prisma.user.findMany({
        select: {
            id: true,
            profile: { select: { firstName: true, lastName: true } }
        }
    })


    return <NovoOrcamentoClient users={users || []} />
}
