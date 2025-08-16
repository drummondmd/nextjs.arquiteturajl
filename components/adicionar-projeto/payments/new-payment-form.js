'use client'

import { paymentType } from "@prisma/client"
import { Controller, useFieldArray, useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormField, SubmitButton } from "../../ui/form-field"
import transformArrayinOptions from "../../../lib/utilis/transformArrayInOptions"
import { paymentSchema } from "../../../lib/validationSchemas/schemas"
import createPaymentAction from "../../../actions/create/createPaymentAction"


///TODO
//validação de erros do array depois.

export default function NewPaymentForm({ project, projects, onSubmitParent }) {

    ////2 formas de funcionar, diretamente com o projeto ou geral com possibiliade de selecionar projeto
    ///se definir o projeto não preciso avaliar todos projetos.

    let isDefaultValues = null;
    let zodArraySchema;

    ///teste
    let defaultValues = [
        { projectId: "asdasdasd", paymentType: "entrada", description: "teste", amount: "", status: "enviado", dueDate: "2025-08-16" },
        { projectId: "asdasdasd", paymentType: "entrada", description: "teste2", amount: "", status: "enviado", dueDate: "2025-08-16" }

    ]

    if (defaultValues) {
        isDefaultValues =
        {
            payments: defaultValues
        };
        zodArraySchema = z.object({
            payments: z.array(paymentSchema)
        })


    }


    if (!project) {
        const optionsProject = projects.map((elem) => {
            return { label: elem.title, value: elem.id }
        })

    }


    // console.log(optionsProject


    const { setError, register, handleSubmit, formState: { errors, isSubmitting }, control } = useForm({
        resolver: zodResolver(zodArraySchema || paymentSchema),
        defaultValues: isDefaultValues
    })

    const { fields } = useFieldArray({
        control,
        name: "payments"
    })

    ///on submit para quando tiver na pagina generica
    async function onSubmit(data) {
        const response = await createPaymentAction(data)
        if (!response.success) {
            setError("root", { message: "Erro ao enviar os dados para o banco de dados." })
        }
    }

    function OldForm() {
        return (
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-4">
                {!project && (
                    <Controller control={control} name="projectId"
                        render={({ field }) => <FormField {...field} error={errors.projectId?.message} label={"Projeto"} as="select" options={optionsProject} className="mb-2" />}
                    />

                )}
                <Controller control={control} name="paymentType" render={({ field }) => <FormField {...field} label={"Tipo de Pagamento"} as="select" options={transformArrayinOptions(["entrada", "saida"])} className="mb-2" />} />
                <Controller control={control} name="description" render={({ field }) => <FormField error={errors.description?.message} {...field} label={"Descrição"} className="mb-2" />} />
                <Controller control={control} name="amount" render={({ field }) =>
                    <FormField {...field}
                        value={field.value ? field.value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : ""}
                        onChange={(e) => {
                            const raw = e.target.value.replace(/\D/g, "");
                            const numeric = Number(raw) / 100;
                            field.onChange(numeric);
                        }}
                        type="text" label={"Valor"} className="mb-2" />}
                />
                <Controller control={control} name="dueDate" render={({ field }) => <FormField {...field} label={"Data de Vencimento"} type="date" className="mb-2" />} />
                <Controller control={control} name="status" render={({ field }) => <FormField {...field} label={"Status"} as="select" options={transformArrayinOptions(["pendente", "pago", "atrasado", "cancelado"])} className="mb-2" />} />
                <SubmitButton loading={isSubmitting} className="w-full mt-4" />
                {/* Mensagens de erro globais */}
                {Object.values(errors).length > 0 && (
                    <div className="text-red-500 text-sm mt-2">
                        {Object.values(errors).map((err, idx) => <div key={idx}>{err.message}</div>)}
                    </div>
                )}
                <SubmitButton loading={isSubmitting} className="w-full mt-4" />

            </form>
        )

    }

    function FormUnitario({ index }) {
        return (
            <>
                <input {...register(`payments.${index}.projectId`)} name="projectID" value={project.id} readOnly></input>
                {/* novo form só registra entrada */}
                <input {...register(`payments.${index}.paymentType`)} name="paymentType" value={"entrada"} readOnly></input>
                <input {...register(`payments.${index}.status`)} name="status" value={"pendente"} readOnly></input>
                <Controller control={control} name={`payments.${index}.description`} render={({ field }) => <FormField error={errors.description?.message} {...field} label={"Descrição"} className="mb-2" />} />
                <Controller control={control} name={`payments.${index}.amount`} render={({ field }) =>
                    <FormField {...field}
                        value={field.value ? field.value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : ""}
                        onChange={(e) => {
                            const raw = e.target.value.replace(/\D/g, "");
                            const numeric = Number(raw) / 100;
                            field.onChange(numeric);
                        }}
                        type="text" label={"Valor"} className="mb-2" />}
                />
                <Controller control={control} name={`payments.${index}.dueDate`} render={({ field }) => <FormField {...field} label={"Data de Vencimento"} type="date" className="mb-2" />} />

            </>
        )
    }

    return (
        //novo form(para quando o projeeto ja estiver detalhado)
        <div className="flex w-full bg-gray-50 p-2">
            {project && (
                <form onSubmit={handleSubmit(onSubmitParent)} className="w-full bg-white rounded-lg shadow-md p-6 space-y-4">
                    {fields.map((field, index) => (
                        <FormUnitario key={field.id} index={index} />

                    ))}



                    {/* Mensagens de erro globais */}
                    {Object.values(errors).length > 0 && (
                        <div className="text-red-500 text-sm mt-2">
                            {Object.values(errors).map((err, idx) => <div key={idx}>{err.message}</div>)}
                        </div>
                    )}
                    {/* Mensagem de erro temporaria */}
                    {errors.payments && errors.payments.map((erro) => (
                        <div className="text-red-500 text-sm mt-2">
                            {JSON.stringify(erro)}
                        </div>
                    ))}
                    <SubmitButton loading={isSubmitting} className="w-full mt-4 rounded" />


                </form>


            )}
            {!project && <OldForm />}

        </div>
    )



}