'use server'

import { uploadToCloudinary } from "@/lib/cloudinary/upload";
import { prisma } from "@/lib/db/prisma";
import { convertIsoDatesInArrayObjects } from "@/lib/utilis/normalizeDateInArrayOrObject";
import { userProfileSchema } from "@/lib/validationSchemas/schemas";
import { se } from "date-fns/locale";

export default async function uptadeUserProfileAction(data: any): Promise<{ success: boolean, message: string }> {

    if (!data) return { success: false, message: "Erro ao fazer requisição." }
    const zodResponse = userProfileSchema.safeParse(data)


    if (!zodResponse.success) {
        return { success: false, message: "Erro na validação de dados" }
    }

    const normalizedData = convertIsoDatesInArrayObjects(zodResponse.data)


    ///anexar imagem no cloudnary se imagem a ser anexada.
    if (data.avatarUrl) {
        const file = data.avatarUrl;
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const mimeType = file.type;
        const filename = file.name;

        const cloudResponse = await uploadToCloudinary(buffer, filename, mimeType);

        normalizedData.avatarUrl = cloudResponse.secure_url
    }








    const profileId = data.id;
    delete data.id;


    try {
        const response = await prisma.userProfile.update({
            where: { id: profileId },
            data: normalizedData
        })
        if (!response) {
            throw new Error()
        }

    } catch (error) {
        console.error(error, "erro ao atualizar base de dados.")
        return { success: false, message: "erro ao atualizar base de dados." }
    }
    return { success: true, message: "Sucesso ao atualizar perfil" }

}