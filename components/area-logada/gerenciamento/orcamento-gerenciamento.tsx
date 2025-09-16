import { ProjetoCompleto } from "@/lib/db/select";
import formatMoney from "@/lib/utilis/formatMoney";
import { Project } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { Fragment } from "react";

export default function OrcamentoGerenciamento({ projeto }: { projeto: ProjetoCompleto }) {
    if (projeto.constructionPhases.length === 0) return <p className="text-center text-gray-500 py-8">Adicione etapas para orçamento</p>
    const constructionPhases = projeto.constructionPhases;
    constructionPhases.forEach((phase, index) => {
        if (phase.tasks.length > 0) {
            const tasks = phase.tasks;
            const sum = tasks.reduce((accumulator, currentValue) => {
                if (currentValue.budget) {
                    return accumulator + Number(currentValue.budget)
                }
                return accumulator
            }, 0)
            constructionPhases[index].budget = sum as unknown as Decimal
        }
    });
    const totalSum = constructionPhases.reduce((acc, phase) => {
        if (phase.budget) {
            return acc + Number(phase.budget)
        }
        return acc
    }, 0)
    return (
        <div className="px-4 py-8">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-lg font-semibold text-gray-700">Orçamento Total:</span>
                <span className="text-2xl font-bold text-blue-600">{formatMoney(totalSum)}</span>
            </div>
            <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full bg-white border border-gray-200 mb-6">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="py-3 px-4 text-left font-semibold text-xs text-gray-500 uppercase">Fase</th>
                            <th className="py-3 px-4 text-left font-semibold text-xs text-gray-500 uppercase">Tarefa</th>
                            <th className="py-3 px-4 text-left font-semibold text-xs text-gray-500 uppercase">Valor</th>
                            <th className="py-3 px-4 text-left font-semibold text-xs text-gray-500 uppercase">Valor Fase</th>
                        </tr>
                    </thead>
                    <tbody>
                        {constructionPhases.map((phase) => (
                            <Fragment key={phase.id}>
                                <tr className="bg-gray-100">
                                    <td className="py-2 px-4 font-medium text-gray-800">{phase.name}</td>
                                    <td className="py-2 px-4"></td>
                                    <td className="py-2 px-4"></td>
                                    <td className="py-2 px-4 font-bold text-blue-700">{formatMoney(phase.budget)}</td>
                                </tr>
                                {phase.tasks.map((task) => (
                                    <tr key={task.id} className="hover:bg-gray-50">
                                        <td className="py-2 px-4"></td>
                                        <td className="py-2 px-4 text-gray-700">{task.name}</td>
                                        <td className="py-2 px-4 text-gray-700">{formatMoney(task.budget)}</td>
                                        <td className="py-2 px-4"></td>
                                    </tr>
                                ))}
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}