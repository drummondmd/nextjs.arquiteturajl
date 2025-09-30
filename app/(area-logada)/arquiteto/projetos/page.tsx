import ProjetoArqGrid from "@/components/area-logada/arquiteto/projetoArqGrid";
import { prisma } from "@/lib/db/prisma";
import normalizePrismaData from "@/lib/utilis/normalize-prisma";


export default async function ProjetoArquiteto() {


    const rawProjetos = await prisma.project.findMany({
        include: {
            client: {
                select: {
                    profile: {
                        select: {
                            firstName: true,
                            lastName: true,
                        }
                    }
                }
            }
        }
    })
    const projetos = normalizePrismaData(rawProjetos)

return <ProjetoArqGrid projetos={projetos} />
}