'use client'

import { ProjetoCompleto } from "@/lib/db/select";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function HubAdd({ project }:{project:ProjetoCompleto}) {
    const router = useRouter();
    const links = [
        { label: "Fases de projeto", table: "projectPhase", link: `/arquiteto/projetos/add/projectPhase?projectId=${project.id}` },
        { label: "Pagamentos", table: "payments", link: `/arquiteto/projetos/add/payments?projectId=${project.id}` },
        { label: "Fases de Construção", table: "constructionPhase", link: `/arquiteto/projetos/add/constructionPhase?projectId=${project.id}` }
    ];



    return (
        <div className="mt-3 max-w-5/6 mx-auto px-2">
            <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                        <h2 className="text-lg font-bold text-gray-800">{project.title}</h2>
                        {/* <p className="text-sm text-gray-500">{links.find((elem) => elem.table === table)?.label}</p> */}
                    </div>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => router.back()} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded transition">Voltar</button>
                    {links.map((elem) => (
                        <Link key={elem.label} href={elem.link} className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded transition">{elem.label}</Link>
                    ))}
                </div>
            </div>
        </div>

    )


}