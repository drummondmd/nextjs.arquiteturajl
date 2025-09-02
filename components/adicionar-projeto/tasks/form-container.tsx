'use client'

import { constructionTaskUI } from "@/lib/validationSchemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { ConstructionTask } from "@prisma/client"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Toaster } from "sonner";
import z from "zod";
import FormForTasks from "./form";

export default function FormContainerForTasks({ phaseName, phaseId, prevTasks, projectSlug }: { phaseName: string, phaseId: string, prevTasks: ConstructionTask[], projectSlug: string }) {
    const router = useRouter();

    function ActualPhases() {
        return (
            <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-800 mb-2">Adicionar Tarefas a <span className="text-blue-600">{phaseName}</span></h4>
                {prevTasks.length === 0 && <p className="text-gray-500">Nenhuma fase até o momento</p>}
                {prevTasks.length > 0 && (
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Tarefas Atuais:</p>
                        <ol className="list-decimal list-inside space-y-1">
                            {prevTasks.map((task) => (
                                <li key={task.id} className="text-gray-700">{task.name}</li>
                            ))}
                        </ol>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className="mx-auto px-4 py-8">
            <ActualPhases />
            <div className="bg-white rounded-lg shadow p-6">
                <FormForTasks projectSlug={projectSlug} table="ConstructionTask" phaseId={phaseId} />
            </div>
        </div>
    )
}