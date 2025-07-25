
import FormToAddDocuments from "../../../../../components/area-logada/documentos/formToAdd"
import { prisma } from "@/lib/db/prisma";

////criando separado por ora, depois pode mudar.
export default async function AddDocumentsPage() {

    ///depois selecionar somente projetos ativos.
    const rawProjetos = await prisma.project.findMany({
        select:{
            id:true,
            title:true
        }
    })



    return <FormToAddDocuments projects={rawProjetos} />
}