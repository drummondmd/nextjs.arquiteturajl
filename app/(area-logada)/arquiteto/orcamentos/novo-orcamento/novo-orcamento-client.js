'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { budgetSchema } from "../../../../../lib/validationSchemas/schemas"
import { FormField, SubmitButton } from "../../../../../components/ui/form-field"
import { useRouter } from "next/navigation"
import transformArrayinOptions from "../../../../../lib/utilis/transformArrayInOptions"
import { success } from "zod"
import createBudgetAction from "../../../../../actions/create/createBudgetAction"

export default function NovoOrcamentoClient({ users }) {
    const router = useRouter()
    const usersList = users.map((elem) => ({
        label: `${elem.profile.firstName} ${elem.profile.lastName} `,
        value: elem.id
    }))
    usersList.unshift({ label: "Cliente não cadastrado", value: "undefined" })

    const { handleSubmit, setError, formState: { errors, isSubmitting }, control } = useForm({
        resolver: zodResolver(budgetSchema),
        defaultValues: { status: "enviado" }
    })

    async function onSubmit(data) {
        const response = await createBudgetAction(data)
        if (!response.success) {
            setError("root", { message: "Erro ao enviar formulário" })
        } else {
            router.push("/arquiteto/orcamentos")
        }
    }

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-50 p-4">
            <button onClick={() => router.back()} className="self-start mb-6 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded shadow transition">
                Voltar
            </button>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {users.length > 0 && (
                        <Controller control={control} name="clientId"
                            render={({ field }) => <FormField error={errors.clientId?.message} as="select" options={usersList} {...field} label={"Cliente"} />} />
                    )}
                    <Controller control={control} name="totalValue"
                        render={({ field }) => <FormField {...field} label={"Valor do orçamento"}
                            error={errors.totalValue?.message}
                            value={field.value ? field.value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : ""}
                            onChange={(e) => {
                                const raw = e.target.value.replace(/\D/g, "");
                                const numeric = Number(raw) / 100;
                                field.onChange(numeric);
                            }} />} />
                    <Controller control={control} name="paymentTerms"
                        render={({ field }) => <FormField error={errors.paymentTerms?.message} {...field} label={"Termos de Pagamento"} />} />
                    <Controller control={control} name="title"
                        render={({ field }) => <FormField error={errors.title?.message}  {...field} label={"Titulo do orçamento"} />} />
                    <Controller control={control} name="summary"
                        render={({ field }) => <FormField {...field} label={"Descrição breve do orçamento"} />} />
                    <Controller control={control} name="notes"
                        render={({ field }) => <FormField {...field} label={"Notas"} />} />
                    <Controller control={control} name="status"
                        render={({ field }) => <FormField {...field} as="select" label={"Status"} options={transformArrayinOptions(["enviado", "aceito", "rejeitado", "cancelado"])} />} />
                </div>
                {/* Mensagens de erro globais */}
                {errors.root && (
                    <div className="text-red-500 text-sm mt-2 mb-2">
                        {errors.root.message}
                    </div>
                )}
                <div className="flex justify-end mt-6">
                    <SubmitButton loading={isSubmitting} />
                </div>
            </form>
        </div>
    )
}