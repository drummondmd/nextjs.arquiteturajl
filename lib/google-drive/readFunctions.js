
import { getDriveService } from "./googleDriveConfig"


export async function getFilesFromGoogleDrive() {

    try {
        const drive = getDriveService();

        const res = await drive.files.list({
            q: `'${process.env.ID_PASTA_GOOGLE_DRIVE}' in parents`,
            fields: "files(id, name, webViewLink)",
        });

        return res.data.files

    } catch (error) {
        console.error(error)
        return null

    }



}