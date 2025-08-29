'use client'

import { useEffect, useState } from "react"
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
        title: z.string("Digite pelo menos 5 caracteres").min(5,"Digite pelo menos 5 caracteres"),
        projectType: z.string("Selecione um valor válido").min(5),
        investmentExpectation: z.coerce.number("Preencha um valor válido"),
        area: z.string("Preencha o campo corretamente"),
        coverUrl: z.nullish(z.file())
    },
    projectDetailSchema: {
        standart: z.string("Selecione um valor válido"),
        postalCode: z.string("Preencha o campo corretamente"),
        country: z.string("Preencha o campo corretamente"),
        state: z.string("Preencha o campo corretamente"),
        city: z.string("Preencha o campo corretamente"),
        neighborhood: z.string("Preencha o campo corretamente"),
        street: z.string("Preencha o campo corretamente"),
        number: z.string("Preencha o campo corretamente"),
        complement: z.nullish(z.string()),
    }
}
export type ProjectType = z.infer<typeof schemas.projectSchema>
export type ProjectDetailType = z.infer<typeof schemas.projectDetailSchema>


export const unifiedSchema = z.object({ ...schemas.projectSchema, ...schemas.projectDetailSchema })
type ProjectAndDetail = z.infer<typeof unifiedSchema>

export default function GridAdicionarProjeto({ users }) {
    const router = useRouter();

    const methods = useForm({
        resolver: zodResolver(unifiedSchema),
        defaultValues: {
            city: "Belo Horizonte",
            country: "Brasil",
            state: "Minas Gerais",
        }
    });

    const [step, setStep] = useState(0);

    const steps = [
        { component: <Step1 methods={methods} formState={methods.formState} users={users} />, schema: schemas.projectSchema },
        { component: <Step2 methods={methods} formState={methods.formState} users={users} />, schema: schemas.projectDetailSchema },
    ];

    const nextStep = async (e: any) => {
        e.preventDefault();
        setStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setStep((prev) => prev - 1);
    };

    async function onSubmit(data: any) {
        const response = await createProjectAction(data);
        if (!response.success) {
            toast.error(response.message);
        } else {
            toast.success(response.message);
            router.push(`/arquiteto/projetos/add/hub?projectId=${response.projectId}`);
        }
    }

    const onError = () => {
        toast.error("Confira todos os campos.")
    };



    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            <Toaster richColors />
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit, onError)} className="bg-white rounded-lg shadow-md p-6 space-y-6">
                    <div>
                        {steps[step].component}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 mt-6">
                        {step > 0 && (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
                            >
                                Voltar
                            </button>
                        )}
                        {step < steps.length - 1 ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            >
                                Próximo
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                            >
                                Enviar
                            </button>
                        )}
                    </div>
                </form>
            </FormProvider>
        </div>
    );
}