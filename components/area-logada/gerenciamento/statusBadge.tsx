'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import updateStatusByBadge from "../../../actions/update/updateStatusByBadge"
import { statusPhase } from "@prisma/client";


type StatusKey =
    | "concluido"
    | "pago"
    | "aceito"
    | "em_andamento"
    | "pendente"
    | "planejado"
    | "cancelado"
    | "atrasado"
    | "rejeitado"
    | "unknown";

export default function StatusBadge({
    status,
    isDropdown,
    item,
    table,
}: {
    status?: StatusKey,
    isDropdown: boolean,
    item: any,
    table: string
}) {

    let finalStatus: StatusKey = status ? status : item.status;


    // Tailwind color classes for each status
    const colors: Record<StatusKey, string> = {
        "concluido": "bg-emerald-500 text-white hover:text-black",
        "pago": "bg-emerald-500 text-white",
        "aceito": "bg-emerald-500 text-white hover:text-black",
        "em_andamento": "bg-yellow-500 text-white",
        "pendente": "bg-yellow-500 text-white",
        "planejado": "bg-stone-500 text-white",
        "cancelado": "bg-pink-600 text-white",
        "atrasado": "bg-red-500 text-white",
        "rejeitado": "bg-red-500 text-white",
        "unknown": "bg-gray-300 text-gray-700"
    };

    const badgeClass = `inline-block px-3 py-1 rounded-full text-xs font-semibold shadow-sm capitalize transition-colors duration-200 ${colors[finalStatus]}`;

    if (!isDropdown) {
        return <span className={badgeClass}>{finalStatus}</span>
    }


    let enumBase: Array<statusPhase> = ["planejado", "em_andamento", "atrasado", "cancelado", "concluido"]

    const tableCheatSheet = [
        { table: "budget", enum: ["enviado", "aceito", "rejeitado", "cancelado"] },
        { table: "payment", enum: ["pendente", "pago", "atrasado", "cancelado"] },
        { table: "projectPhase", enum: ["planejado", "em_andamento", "concluido", "cancelado", "atrasado"] },
        { table: "project", enum: enumBase },
        { table: "constructionTask", enum: enumBase }
    ]
    const itensOfDd = tableCheatSheet.find((elem) => elem.table === table)?.enum || [];

    function handleChangeStatus(elem: any, item: any, table: string) {
        console.log(elem, item, table)
        updateStatusByBadge(elem, table, item.id)
    }

    return (<DropdownMenu>
            <DropdownMenuTrigger asChild>
                <span className={badgeClass + " cursor-pointer hover:opacity-80"}>{finalStatus}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-md shadow-lg bg-white border border-gray-200 min-w-[120px] p-1">
                {itensOfDd.map((elem) => (
                    elem !== finalStatus && (
                        <DropdownMenuItem key={elem} asChild>
                            <span
                                onClick={() => handleChangeStatus(elem, item, table)}
                                className={`block w-full px-3 py-1 my-1 rounded-full text-xs font-semibold capitalize cursor-pointer transition-colors duration-150 ${colors[elem as StatusKey] || 'bg-gray-300 text-gray-700'} hover:scale-105 hover:ring-2 hover:ring-blue-300 hover:text-black`}
                            >
                                {elem}
                            </span>
                        </DropdownMenuItem>
                    )
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

