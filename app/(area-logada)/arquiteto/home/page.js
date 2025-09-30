import { ChartBarDefault } from "@/components/area-logada/arquiteto/home/chart"
import ClientForHome from "./clientComponent"
import { prisma } from "@/lib/db/prisma"

export default async function ArquitetoHome() {


    const projectStats = await prisma.project.groupBy({ by: ["status"], _count: true })
    const budget = await prisma.budget.groupBy({ by: ["status"], _count: true })
    const projectPhase = await prisma.projectPhase.groupBy({ by: ["status"], _count: true })
    const constructionPhase = await prisma.constructionPhase.groupBy({ by: ["status"], _count: true })
    // const projectStats  = await prisma.project.groupBy({by:["status"],_count:true})
    // const projectStats  = await prisma.project.groupBy({by:["status"],_count:true})


    const chartsData = [
        {title:"Projetos", data:projectStats},
        {title:"Etapas de Projeto", data:projectPhase},
        {title:"Etapas de Construção", data:constructionPhase},
        {title:"Orçamentos", data:budget},

    ]






    return (
        <div className="container">
            <p className="display-1">Homepage do Arquiteto</p>
            <ClientForHome />
            <div className="grid grid-cols-3">
                {chartsData.map((dado)=>{
                    return(
                        <div key={dado.title}>
                            <ChartBarDefault title={dado.title} data={dado.data} />

                            </div>
                    )
                })}

            </div>
        </div>
    )
}