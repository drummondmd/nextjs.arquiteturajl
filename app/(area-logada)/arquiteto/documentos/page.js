import { getFilesFromGoogleDrive } from "@/lib/google-drive/readFunctions";
import { prisma } from "@/lib/db/prisma";

export default async function DocumentosHome() {

    const documentosDoDrive = await getFilesFromGoogleDrive();
    const documentosDoDb = await prisma.projectDocument.findMany({})



    return (<div className="grid grid-cols-2 my-auto mt-4">
        <div>
            {documentosDoDrive.map((elem) =><p key={elem.id}>{elem.name}</p>)}
        </div>
        <div>
            {documentosDoDb.map((elem)=><p key={elem.id}>{elem.name}</p>)}
        </div>

    </div>)
}