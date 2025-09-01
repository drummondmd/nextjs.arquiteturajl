import { FormField, SubmitButton } from "@/components/ui/form-field";
import { constructionTaskUI } from "@/lib/validationSchemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { lightFormat } from "date-fns";
import { fi } from "date-fns/locale";
import { useRouter } from "next/navigation";
import { Controller, FormProvider, useFieldArray, useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import z from "zod";

export default function FormForTasks({ phaseId, projectSlug, table }: { phaseId: string, projectSlug: string, table: string }) {
    const router = useRouter()

    const zodArraySchema = z.object({
        [table]: z.array(constructionTaskUI)
    })

    type TaskInfer = z.infer<typeof constructionTaskUI>
    type Task = Omit<TaskInfer, "priority" | "budget" | "actualCost"> & { priority: string, budget?: string, actualCost?: string }

    const initialValues: Task[] = [{
        name: " ",
        phaseId: phaseId,
        status: "planejado",
        startDate: lightFormat(new Date(), "yyyy-MM-dd"),
        expectedEndDate: lightFormat(new Date(), "yyyy-MM-dd"),
        priority: "1",
        actualCost: " ",
        budget: " ",
        fornecedor: undefined,
        link: undefined,
        notes: undefined
    }]


    const methods = useForm({
        resolver: zodResolver(zodArraySchema),
        defaultValues: {
            [table]: initialValues
        }
    });

    const { fields } = useFieldArray({
        control: methods.control,
        name: table
    })



    console.log(fields)


    ///fn
    async function onSubmit(data: any) {
        console.log(data)
        const response = { success: true, message: "Deu certo" }
        if (response.success) {
            toast.success("Informações cadastradas com sucesso")
            router.push(`/arquiteto/projetos/${projectSlug}/gerenciamento-de-obra`);
        } else {
            toast.error(response.message)
        }
    }

    async function onError(data: any) {
        console.log(data)
        toast.error("Errado")
    }

    const validationErros = methods.formState.errors[table];


    function FormUnitario({ field, idx }: { field: Task, idx: number }) {
        return (
            <div className="rounded border px-2 py-6 my-4 bg-gray-100">
                <input value={field.phaseId} {...methods.register(`${table}.${idx}.phaseId`)} />
                <div className="grid md:grid-cols-4 gap-2">
                    {/* name */}
                    <Controller
                        name={`${table}.${idx}.name`}
                        render={({ field }) => (
                            <FormField
                                error={validationErros?.[idx]?.name?.message}
                                {...field}
                                label="Nome"
                                className="mb-2 col-span-3"
                            />
                        )}
                    />
                    {/* priority */}
                    <Controller
                        name={`${table}.${idx}.priority`}
                        render={({ field }) => (
                            <FormField
                                error={validationErros?.[idx]?.priority?.message}
                                {...field}
                                label="Prioridade"
                                className="mb-2"
                            />
                        )}
                    />
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                    {/* startDate */}
                    <Controller
                        name={`${table}.${idx}.startDate`}
                        render={({ field }) => (
                            <FormField
                                type="date"
                                error={validationErros?.[idx]?.startDate?.message}
                                {...field}
                                label="Data de Início"
                                className="mb-2"
                            />
                        )}
                    />
                    {/* expectedEndDate */}
                    <Controller
                        name={`${table}.${idx}.expectedEndDate`}
                        render={({ field }) => (
                            <FormField
                                type="date"
                                error={validationErros?.[idx]?.expectedEndDate?.message}
                                {...field}
                                label="Data de Fim (Previsto)"
                                className="mb-2"
                            />
                        )}
                    />
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                    {/* budget */}
                    <Controller
                        name={`${table}.${idx}.budget`}
                        render={({ field }) => (
                            <FormField
                                error={validationErros?.[idx]?.budget?.message}
                                {...field}
                                label="Orçamento"
                                className="mb-2"
                            />
                        )}
                    />
                    {/* actualCost */}
                    <Controller
                        name={`${table}.${idx}.actualCost`}
                        render={({ field }) => (
                            <FormField
                                error={validationErros?.[idx]?.actualCost?.message}
                                {...field}
                                label="Custo Real"
                                className="mb-2"
                            />
                        )}
                    />
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                    {/* fornecedor */}
                    <Controller
                        name={`${table}.${idx}.fornecedor`}
                        render={({ field }) => (
                            <FormField
                                error={validationErros?.[idx]?.fornecedor?.message}
                                {...field}
                                label="Fornecedor"
                                className="mb-2"
                            />
                        )}
                    />
                    {/* link */}
                    <Controller
                        name={`${table}.${idx}.link`}
                        render={({ field }) => (
                            <FormField
                                error={validationErros?.[idx]?.link?.message}
                                {...field}
                                label="Link"
                                className="mb-2"
                            />
                        )}
                    />
                </div>
                <div>
                    {/* notes */}
                    <Controller
                        name={`${table}.${idx}.notes`}
                        render={({ field }) => (
                            <FormField
                                error={validationErros?.[idx]?.notes?.message}
                                {...field}
                                label="Observações"
                                className="mb-2"
                            />
                        )}
                    />
                </div>
            </div>
        );
    }



    return (
        <>
            <Toaster richColors />
            <FormProvider {...methods}>
                <form className="bg-white rounded-lg shadow-md p-6 space-y-6" onSubmit={methods.handleSubmit(onSubmit, onError)}>
                    {fields.map((field, idx) => <FormUnitario key={field.id} field={field} idx={idx} />)}


                    <SubmitButton />
                </form>

            </FormProvider>

        </>

    )
}