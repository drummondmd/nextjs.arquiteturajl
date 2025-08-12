'use client'

import { paymentType } from "@prisma/client"
import { Controller, useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormField, SubmitButton } from "../../../../../components/ui/form-field"
import transformArrayinOptions from "../../../../../lib/utilis/transformArrayInOptions"


export default function NewPaymentClient({ projects }) {

    const optionsProject = projects.map((elem) => {
        return { label: elem.title, value: elem.id }
    })
    // console.log(optionsProject)



    const payObj = {
        id: 'ede61e3d-4ad2-42d4-bfee-ca210df89c61',
        projectId: 'fd63a0ee-fa8c-48cf-b68f-d82b0544a01a',
        paymentType: 'entrada',
        description: 'Pagamento inicial',
        amount: 50000,
        dueDate: '2025-07-15T00:00:00.000Z',
        status: 'pendente',
        createdAt: '2025-07-08T18:32:20.685Z',
        notificationSent: false
    }

    const schema = z.object({
        paymentType: z.enum(["entrada", "saida"]),
        projectId: z.string(),
        description: z.string(),
        amount: z.string(),
        dueDate: z.string(),
        status: z.string()
    })


    const { register, handleSubmit, formState: { errors, isSubmitting }, control } = useForm({
        resolver: zodResolver(schema)
    })





    async function onSubmit(data) {
        alert("Enviou")
        // await new Promise((resolve)=>setTimeout(resolve,1000))

        console.log("Enviando", data)
    }



    return (
        < div >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller control={control} name="projectId"
                    render={({ field }) => <FormField {...field} error={errors.projectId?.message} label={"Projeto"} as="select" options={optionsProject} />}
                />
                {errors.projectId && <p className="text-red-500">{errors.projectId.message}</p>}
                {/* <Controller control={control} name="" render={({ field }) => <FormField {...field} label={"Tipo de Pagamento"} as="select" options={transformArrayinOptions(["entrada", "saida"])} /> } /> */}
                {errors.paymentType && <p className="text-red-500">{errors.paymentType.message}</p>}
                <Controller control={control} name="paymentType" render={({ field }) => <FormField {...field} label={"Tipo de Pagamento"} as="select" options={transformArrayinOptions(["entrada", "saida"])} />} />
                {errors.paymentType && <p className="text-red-500">{errors.paymentType.message}</p>}
                <Controller control={control} name="description" render={({ field }) => <FormField  {...field} label={"Descrição"} onChange={(e) => field.onChange(e.target.value.toUpperCase())}
                />} />
                {errors.description && <p className="text-red-500">{errors.description.message}</p>}
                <Controller control={control} name="amount" render={({ field }) => <FormField {...field} type="number" label={"Valor"} />} />
                {errors.amount && <p className="text-red-500">{errors.amount.message}</p>}
                <Controller control={control} name="dueDate" render={({ field }) => <FormField {...field} label={"Data de Vencimento"} type="date" />} />
                {errors.dueDate && <p className="text-red-500">{errors.dueDate.message}</p>}
                <Controller control={control} name="status" render={({ field }) => <FormField value={"pendente"} {...field} label={"Status"} as="select" options={transformArrayinOptions(["pendente", "pago", "atrasado", "cancelado"])} />} />
                {errors.status && <p className="text-red-500">{errors.status.message}</p>}
                <SubmitButton loading={isSubmitting} />
            </form>
        </div >
    )



}