import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import updateStatusByBadge from "../../../actions/update/updateStatusByBadge"


export default function StatusBadge({ status, isDropdown, item, table }) {
    if (!status) {
        status = item.status
    }

    // Tailwind color classes for each status
    let colors = {
        "concluido": "bg-emerald-500 text-white",
        "pago": "bg-emerald-500 text-white",
        "em_andamento": "bg-yellow-500 text-white",
        "pendente": "bg-yellow-500 text-white",
        "planejado": "bg-stone-500 text-white",
        "cancelado": "bg-pink-600 text-white",
        "atrasado": "bg-red-500 text-white",
    }

    const badgeClass = `inline-block px-3 py-1 rounded-full text-xs font-semibold shadow-sm capitalize transition-colors duration-200 ${colors[status] || 'bg-gray-300 text-gray-700'}`;

    if (!isDropdown) {
        return <span className={badgeClass}>{status}</span>
    }

    const tableCheatSheet = [
        { table: "Budget", enum: ["enviado", "aceito", "rejeitado", "cancelado"] },
        { table: "payment", enum: ["pendente", "pago", "atrasado", "cancelado"] }
    ]
    const itensOfDd = tableCheatSheet.find((elem) => elem.table === table)?.enum || [];

    function handleChangeStatus(elem, item, table) {
        updateStatusByBadge(elem, table, item.id)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <span className={badgeClass + " cursor-pointer hover:opacity-80"}>{status}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-md shadow-lg bg-white border border-gray-200 min-w-[120px] p-1">
                {itensOfDd.map((elem) => (
                    elem !== status && (
                        <DropdownMenuItem key={elem} asChild>
                            <span
                                onClick={() => handleChangeStatus(elem, item, table)}
                                className={`block w-full px-3 py-1 my-1 rounded-full text-xs font-semibold capitalize cursor-pointer transition-colors duration-150 ${colors[elem] || 'bg-gray-300 text-gray-700'} hover:scale-105 hover:ring-2 hover:ring-blue-300 hover:text-black`}
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

