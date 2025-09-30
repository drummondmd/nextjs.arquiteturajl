import EstimativaComponent from "@/components/area-logada/arquiteto/estimativa-obra/estimativa-componente"
import { prisma } from "@/lib/db/prisma"
import normalizePrismaData from "@/lib/utilis/normalize-prisma"

export default async function EstimativaObraPage(){

    return <p className="mt-10 text-2xl">Em breve estará disponível para você...</p>

    const refereciaRaw = await prisma.executionCostEstimate.findMany({})
    const referencia =  normalizePrismaData(refereciaRaw)

    return <EstimativaComponent referencia={referencia} />
}