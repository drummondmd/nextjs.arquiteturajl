'use client'

import { useState } from "react"
import z, { safeParse, success } from "zod";
import { Project, ProjectDetail, User, UserProfile } from "@prisma/client"
import { Controller, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { title } from "process";
import { FormField } from "../ui/form-field";
import transformArrayinOptions from "@/lib/utilis/transformArrayInOptions";
import Step1 from "./step1";
import Step2 from "./step2";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "sonner";
import createProjectAction from "@/actions/create/createProjectAction";


///definir esquemas
const schemas = {
    projectSchema: {
        clientId: z.nullish(z.uuid()),
        title: z.string().min(5),
        projectType: z.string().min(5),
        investmentExpectation: z.coerce.number(),
        area: z.string(),
        coverUrl: z.file()
    },
    projectDetailSchema: {
        standart: z.string(),
        postalCode: z.string(),
        country: z.string(),
        state: z.string(),
        city: z.string(),
        neighborhood: z.string(),
        street: z.string(),
        number: z.string(),
        complement: z.string(),
    }
}
export type ProjectType = z.infer<typeof schemas.projectSchema>
export type ProjectDetailType = z.infer<typeof schemas.projectDetailSchema>


export const unifiedSchema = z.object({ ...schemas.projectSchema, ...schemas.projectDetailSchema })

export default function GridAdicionarProjeto({ users }) {
    const router = useRouter()







    const methods = useForm({
        resolver: zodResolver(unifiedSchema)
    })

    ///useState para paginação e função que troca paginaçõ
    const [step, setStep] = useState(0);

    const steps = [
        { component: <Step1 methods={methods} formState={methods.formState} users={users} />, schema: schemas.projectSchema },
        { component: <Step2 methods={methods} formState={methods.formState} users={users} />, schema: schemas.projectDetailSchema },
    ];

    const nextStep = async (e: any) => {
        //prevenindo default para não enviar o formulário na primeira etapa
        e.preventDefault();
        ///acredito que eu tenha que validar aqui.
        // const zodResponse = safeParse(data, schemas.projectSchema)
        setStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setStep((prev) => prev - 1);
    }
    async function onSubmit(data: any) {
        ///depois de validado pelo ZOD


        const response = await createProjectAction(data)

        if (!response.success) {
            toast.error(response.message)
        } else {
            router.push("/arquiteto/projetos")

        }

        ///se Erro logar em toast.

        ///se der certo redirecionar a todos projetos por ora.
    }


    return (
        <div className="mt-3 max-w-5/6 mx-auto px-2">
            <Toaster richColors />
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>


                    {/* Step Container */}
                    <div>
                        {steps[step].component}

                    </div>
                    {step > 0 && (
                        <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded">
                            Voltar
                        </button>
                    )}
                    {step < steps.length - 1 ? (
                        <button type="button" onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded">
                            Próximo
                        </button>
                    ) : (
                        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
                            Enviar
                        </button>

                    )}
                </form>


            </FormProvider>



        </div>


    )


}