import ProjetoArqGrid from "@/components/area-logada/arquiteto/projetoArqGrid";
import HubGrid from "@/components/area-logada/hub-grid";
import { prisma } from "@/lib/db/prisma";
import normalizePrismaData from "@/lib/utilis/normalize-prisma";
import { cookies } from "next/headers";

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

return( <ProjetoArqGrid projetos={projetos} />)
}