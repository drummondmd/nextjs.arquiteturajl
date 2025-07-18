import OrcamentoArqGrid from "@/components/area-logada/arquiteto/orcamento-arq-grid";
import { prisma } from "@/lib/db/prisma";
import normalizePrismaData from "@/lib/utilis/normalize-prisma";

export default async function OrcamentosArquiteto() {

    const rawOrcamentos = await prisma.budget.findMany({
        include: {
            client: { select: { profile: { select: {
                firstName: true,
                lastName: true,
            }}}}
        }
    })
const orcamentos = normalizePrismaData(rawOrcamentos)

return <OrcamentoArqGrid orcamentos={orcamentos} />


}