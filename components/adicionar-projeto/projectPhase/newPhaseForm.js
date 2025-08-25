'use client'

import { Controller, FormProvider, useFieldArray, useForm } from "react-hook-form"
import { FormField, SubmitButton } from "../../ui/form-field";
import z, { success } from "zod";
import { projectPhaseSchema } from "../../../lib/validationSchemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Toaster } from "sonner";
import createPhaseAction from "../../../actions/create/createPhaseAcion";
import { useRouter } from "next/navigation";

export default function NewPhaseForm({ table, defaultValues, restartForm }) {
    const router = useRouter()
    const zodArraySchema = z.object({
        [table]: z.array(projectPhaseSchema)
    })

    const methods = useForm({
        defaultValues: { [table]: defaultValues },

        resolver: zodResolver(zodArraySchema),
    });

    const { fields } = useFieldArray({
        control: methods.control,
        name: [table]
    })


    async function onSubmit(data) {
        //já passou da validação com zod
        ///mandar para banco de dados atraves do action
        const response = await createPhaseAction(table, data)
        ////se erro, logar erro atraves de erro
        if (response.success) {
            toast.success("Informações cadastradas com sucesso")
            setTimeout(() => router.refresh(), 2000)
        } else {
            toast.error(response.message)
        }

        ///se der certo logar erro atraves de toast e deixar usuario ir para onde quiser

    }

    const validationErros = methods.formState.errors[table];

    function InputUnitario({ item, index }) {
        return (
            <>
                <div className={`border p-4 mx-4 my-2 grid grid-cols-5 gap-4 order-${item.order} `}>
                    {/* Hidden inputs e validação de erro teste */}
                    <input hidden name="projectId"  {...methods.register(`${table}.${index}.projectId`)}></input>
                    {validationErros?.[index]?.projectId && <p>{validationErros?.[index]?.projectId.message}</p>}
                    {/* <Controller control={control} name={`payments.${index}.description`} render={({ field }) => <FormField error={errors.description?.message} {...field} label={"Descrição"} className="mb-2" />} /> */}

                    <Controller name={`${table}.${index}.order`}
                        render={({ field }) => <FormField type="number" error={validationErros?.[index]?.order?.message} {...field} label={"Ordem"} className="mb-2" />}>
                    </Controller>

                    {/* name */}
                    <Controller name={`${table}.${index}.name`}
                        render={({ field }) => <FormField error={validationErros?.[index]?.name?.message} {...field} label={"Nome"} className="mb-2 col-span-2" />}>
                    </Controller>

                    {/* startDate */}
                    <Controller name={`${table}.${index}.startDate`}
                        render={({ field }) => <FormField type="date" error={validationErros?.[index]?.startDate?.message} {...field} label={"Data de Início"} className="mb-2" />}>
                    </Controller>

                    {/* expectedEndDate */}
                    <Controller name={`${table}.${index}.expectedEndDate`}
                        render={({ field }) => <FormField type="date" error={validationErros?.[index]?.expectedEndDate?.message} {...field} label={"Data de Fim (Previsto)"} className="mb-2" />}>
                    </Controller>

                </div>


            </>

        )
    }

    return (
        <div>
            <Toaster richColors />
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className="grid grid-row mb-3">
                        {fields.map((field, index) => <InputUnitario key={field.id} index={index} item={field} />)}

                    </div>
                    <div className="flex p-2 m-3">
                        <div className="w-5/6">
                            <SubmitButton text="Cadastrar Etapas" loading={methods.loading} />
                        </div>
                        <div className=" w-1/6 ml-2">
                            <button onClick={restartForm} className="w-full flex justify-center items-center gap-2 px-4 py-2 rounded text-white
        bg-red-600 hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed">Refazer</button>

                        </div>



                    </div>

                </form>

            </FormProvider>


        </div>
    )


}