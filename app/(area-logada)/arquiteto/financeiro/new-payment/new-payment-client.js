'use client'

import { paymentType } from "@prisma/client"
import { Controller, useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormField, SubmitButton } from "../../../../../components/ui/form-field"
import transformArrayinOptions from "../../../../../lib/utilis/transformArrayInOptions"
import { paymentSchema } from "../../../../../lib/validationSchemas/schemas"
import createPaymentAction from "../../../../../actions/create/createPaymentAction"


export default function NewPaymentClient({ projects }) {

    const optionsProject = projects.map((elem) => {
        return { label: elem.title, value: elem.id }
    })
    // console.log(optionsProject


    const { setError, register, handleSubmit, formState: { errors, isSubmitting }, control } = useForm({
        resolver: zodResolver(paymentSchema)
    })

    async function onSubmit(data) {
        const response =  await createPaymentAction(data)
        if(!response.success){
            setError("root",{message:"Erro ao enviar os dados para o banco de dados."})
        }
    }



    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 p-2">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-4">
                <Controller control={control} name="projectId"
                    render={({ field }) => <FormField {...field} error={errors.projectId?.message} label={"Projeto"} as="select" options={optionsProject} className="mb-2" />}
                />
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
            </form>
        </div>
    )



}