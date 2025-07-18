import EstimativaComponent from "@/components/area-logada/arquiteto/estimativa-obra/estimativa-componente"
import normalizePrismaData from "@/lib/utilis/normalize-prisma"

export default async function EstimativaObraPage(){

    const refereciaRaw = await prisma.executionCostEstimate.findMany({})
    const referencia =  normalizePrismaData(refereciaRaw)

    return <EstimativaComponent referencia={referencia} />
}