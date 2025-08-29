'use server'

import { success } from "zod";
import { uploadToCloudinary } from "../../lib/cloudinary/upload";
import { insertDocumentsInfo } from "../../lib/db/create";

///todo( melhorar validação depois.), depois mandar os arquivos para a db direto do cliente para economizar espaço do servidor.

////Adicionar arquivos na cloudnary e posteriormente adicionando a db.
export async function addFileToCloudnaryeAndDB(prev, formData) {

    const inputs = Object.fromEntries(formData.entries());

    ///arquivo, buffer,nome e tipo
    const file = inputs.file

    ///validação de erros,
    if (file.size === 0 || inputs.projectId === false) {
        return { succes: false, message: "Preencha todos os campos,selecione o projeto e anexe o arquivo" }
    }

    ////Buffer,tipo,name para db
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const mimeType = file.type;
    const filename = file.name;

    try {

        const response = await uploadToCloudinary(buffer, filename, mimeType)
        console.log("primeira resposta")
        console.log(response)

        const secondResponse = await insertDocumentsInfo(inputs, response)

        console.log("segunda resposta")
        console.log(response)

        if (!secondResponse) {
            throw new Error()
        }


    } catch (error) {
        console.error("erro ao adicionar a cloud ou db")
        return { succes: false, message: "Erro ao processar requisição." }

    }

    ///revalidar tags ou path depois.
    return { succes: true, message: "Documento adicionado com sucesso." }



}