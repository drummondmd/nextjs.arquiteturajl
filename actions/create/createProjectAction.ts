'use server'

import { projectAndDetailSchema, projectDetailSchema, projectSchema } from "@/lib/validationSchemas/schemas";
import { uploadToCloudinary } from "../../lib/cloudinary/upload";
import z from "zod";
import { createFunction } from "@/lib/db/create";
import { Project } from "@prisma/client";
import { revalidatePath } from "next/cache";
import stringForSlug from "@/lib/utilis/stringForSlug";

type ProjectAndDetailSchema = z.infer<typeof projectAndDetailSchema>
type ProjectType = z.infer<typeof projectSchema>
type ProjectDetailType = z.infer<typeof projectDetailSchema>



export default async function createProjectAction(data: ProjectAndDetailSchema): Promise<{ success: boolean; message: string; projectId?: string | null | undefined; }> {

    ///validar dados com zod, se erro já retornar
    const zodResponse = projectAndDetailSchema.safeParse(data)
    if (!zodResponse.success) {
        // console.error(zodResponse.error?.message)
        return { success: false, message: "Erro na validação de dados" }
    }

    ///anexar imagem no cloudnary se imagem a ser anexada.
    let secure_url: string | null = null
    if (data.coverUrl) {
        const file = data.coverUrl;
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const mimeType = file.type;
        const filename = file.name;

        const cloudResponse = await uploadToCloudinary(buffer, filename, mimeType);

        secure_url = cloudResponse.secure_url

    }


    ///ajustar dados.
    ///trocando file do cliente para url do cloundnary

    type AdjustProjectType = Omit<ProjectType, "coverUrl"> & { coverUrl: string | null }

    let projectData: AdjustProjectType = {
        title: zodResponse.data.title,
        projectType: zodResponse.data.projectType,
        investmentExpectation: zodResponse.data.investmentExpectation,
        coverUrl: secure_url,
        clientId: zodResponse.data.clientId,
        area: zodResponse.data.area,
        slug: await stringForSlug(zodResponse.data.title)
    }

    let projecDetailData: ProjectDetailType = {
        standard: zodResponse.data.standart,
        postalCode: zodResponse.data.postalCode,
        country: zodResponse.data.country,
        state: zodResponse.data.state,
        city: zodResponse.data.city,
        neighborhood: zodResponse.data.neighborhood,
        street: zodResponse.data.street,
        number: zodResponse.data.number,
        complement: zodResponse.data.complement,

    }



    ///depois criar projeto com dados, retornar id
    try {
        const project = await createFunction("project", projectData)
        if (project) {
            projecDetailData.projectId = project.id;
            const projectDetail = await createFunction("projectDetail", projecDetailData)
            if (!projectDetail) {
                throw new Error("projecDetail")
            }
        } else {
            throw new Error("project")
        }


    } catch (error) {
        console.error("Erro ao inserir em Database")
        console.error(error)
        return { success: false, message: "Erro ao inserir em base de dados" }

    }
    ///criar dados do projectDetail.
    ///revalidar path
    revalidatePath("/", "layout")
    ///retornar sucesso.
    return { success: true, message: "Dados enviados com sucesso", projectId: projecDetailData.projectId }




}