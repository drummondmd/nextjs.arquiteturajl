'use server'

import { uploadFileToDrive } from "../../lib/google-drive/uploadFile";

export async function addFileToDriveAndDB(prev, formData) {

    const entradas = Object.fromEntries(formData.entries());

    const file = entradas.file

    const response = await uploadFileToDrive(file)

    return "Teste com sucesso"

}