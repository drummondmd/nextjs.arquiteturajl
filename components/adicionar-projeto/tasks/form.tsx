import createPhaseAction from "@/actions/create/createPhaseAcion";
import { FormField, SubmitButton } from "@/components/ui/form-field";
import { constructionTaskUI } from "@/lib/validationSchemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { lightFormat } from "date-fns";
import { useRouter } from "next/navigation";
import { Controller, FormProvider, useFieldArray, useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import z from "zod";

export default function FormForTasks({ phaseId, projectSlug, table }: { phaseId: string, projectSlug: string, table: string }) {
    const router = useRouter();

    const zodArraySchema = z.object({
        [table]: z.array(constructionTaskUI)
    });

    type TaskInfer = z.infer<typeof constructionTaskUI>;
    type Task = Omit<TaskInfer, "priority" | "budget" | "actualCost"> & { priority: string, budget?: string, actualCost?: string };

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
    }];

    const methods = useForm({
        resolver: zodResolver(zodArraySchema),
        defaultValues: {
            [table]: initialValues
        },
        mode: "onBlur"
    });

    const { fields, append, remove } = useFieldArray({
        control: methods.control,
        name: table
    });

    async function onSubmit(data: any) {
        const response = await createPhaseAction(table, data);
        if (response.success) {
            toast.success("Informações cadastradas com sucesso");
            router.push(`/arquiteto/projetos/${projectSlug}/gerenciamento-de-obra`);
        } else {
            toast.error(response.message);
        }
    }

    async function onError(data: any) {
        toast.error("Errado");
    }

    const validationErros = methods.formState.errors[table];

    function FormUnitario({ field, idx }: { field: Task, idx: number }) {
        return (
            <div className="rounded-lg border border-gray-200 px-4 py-6 my-6 bg-gray-50 shadow-sm">
                <p className="font-semibold text-gray-700 mb-4">Tarefa {idx + 1}</p>
                <input value={field.phaseId} {...methods.register(`${table}.${idx}.phaseId`)} className="hidden" />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <Controller name={`${table}.${idx}.name`} render={({ field }) => (
                        <FormField error={validationErros?.[idx]?.name?.message} {...field} label="Nome" className="mb-2 md:col-span-3" />
                    )} />
                    <Controller name={`${table}.${idx}.priority`} render={({ field }) => (
                        <FormField error={validationErros?.[idx]?.priority?.message} {...field} label="Prioridade" className="mb-2" />
                    )} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <Controller name={`${table}.${idx}.startDate`} render={({ field }) => (
                        <FormField type="date" error={validationErros?.[idx]?.startDate?.message} {...field} label="Data de Início" className="mb-2" />
                    )} />
                    <Controller name={`${table}.${idx}.expectedEndDate`} render={({ field }) => (
                        <FormField type="date" error={validationErros?.[idx]?.expectedEndDate?.message} {...field} label="Data de Fim (Previsto)" className="mb-2" />
                    )} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <Controller name={`${table}.${idx}.budget`} render={({ field }) => (
                        <FormField error={validationErros?.[idx]?.budget?.message} {...field} label="Orçamento" className="mb-2" />
                    )} />
                    <Controller name={`${table}.${idx}.actualCost`} render={({ field }) => (
                        <FormField error={validationErros?.[idx]?.actualCost?.message} {...field} label="Custo Real" className="mb-2" />
                    )} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <Controller name={`${table}.${idx}.fornecedor`} render={({ field }) => (
                        <FormField error={validationErros?.[idx]?.fornecedor?.message} {...field} label="Fornecedor" className="mb-2" />
                    )} />
                    <Controller name={`${table}.${idx}.link`} render={({ field }) => (
                        <FormField error={validationErros?.[idx]?.link?.message} {...field} label="Link" className="mb-2" />
                    )} />
                </div>
                <div className="mb-4">
                    <Controller name={`${table}.${idx}.notes`} render={({ field }) => (
                        <FormField error={validationErros?.[idx]?.notes?.message} {...field} label="Observações" className="mb-2" />
                    )} />
                </div>
                <div className="flex flex-col md:flex-row gap-2 mt-4">
                    <button type="button" onClick={() => append(initialValues)} className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Adicionar outro campo</button>
                    <button type="button" onClick={() => remove(idx)} className="w-full md:w-auto px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">Excluir Campo</button>
                </div>
            </div>
        );
    }

    return (
        <>
            <Toaster richColors />
            <FormProvider {...methods}>
                <form className="bg-white rounded-lg shadow-md p-6 space-y-6" onSubmit={methods.handleSubmit(onSubmit, onError)}>
                    {fields.map((field, idx) => <FormUnitario key={field.id} field={field as Task} idx={idx} />)}
                    <SubmitButton />
                </form>
            </FormProvider>
        </>
    );
}