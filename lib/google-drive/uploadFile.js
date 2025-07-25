import { Readable } from "stream";
import { getDriveService } from "./googleDriveConfig";


export async function uploadFileToDrive(file) {

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const stream = Readable.from(buffer);


    try {
        const drive = getDriveService();


        const res = await drive.files.create({
            requestBody: {
                name: file.name,
                parents: [process.env.ID_ARQUIVOS],
            },
            media: {
                mimeType: file.type,
                body: stream,
                supportsAllDrives: true
            },
            fields: "id, webViewLink, webContentLink",
        });

        // tornar o arquivo público
        await drive.permissions.create({
            fileId: res.data.id,
            requestBody: {
                role: "reader",
                type: "anyone",
            },
        });

        console.log(res)
        return res

    } catch (error) {
        console.error("Erro ao fazer upload no Google Drive", error)
        return null
    }







}


