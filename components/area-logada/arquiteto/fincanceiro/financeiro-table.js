'use client'

import { formatarDataBR } from "@/lib/utilis/formatDate"
import formatMoney from "@/lib/utilis/formatMoney"
import { useEffect, useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { isSameMonth, isSameYear } from "date-fns";
import Modal from "../../../ui/modal";
import { EditFormGeneric } from "../../edit-form-generic";
import StatusBadge from "../../gerenciamento/statusBadge";
import { SquarePen } from "lucide-react";

export default function FinanceiroTable({ array, tipo }) {
    const today = new Date()
    const mesAtual = today.getMonth() + 1;
    const proxMes = mesAtual === 12 ? 1 : mesAtual + 1;
    const anoAtual = new Date().getFullYear();

    const [filteredArray, setFilteredArray] = useState(array);
    const [filtros, setFiltros] = useState({ periodo: mesAtual, status: null })
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState();

    useEffect(() => {
        let referenceDate = today
        let arrayFiltrado = array;
        if (filtros.periodo > 12) {
            referenceDate.setFullYear(filtros.periodo);
            arrayFiltrado = arrayFiltrado.filter((item) => isSameYear(new Date(item.dueDate), referenceDate))
        }
        if (filtros.periodo <= 12 && filtros.periodo !== null) {
            referenceDate.setMonth(filtros.periodo - 1)
            arrayFiltrado = arrayFiltrado.filter((item) => isSameMonth(new Date(item.dueDate), referenceDate) && isSameYear(new Date(item.dueDate), today))
        }
        if (filtros.periodo === null) {
            arrayFiltrado = arrayFiltrado
        }
        if (filtros.status === null) {
            arrayFiltrado = arrayFiltrado;
        } else {
            arrayFiltrado = arrayFiltrado.filter((item) => item.status === filtros.status);
        }
        setFilteredArray(arrayFiltrado)
    }, [filtros,array,today])

    const dropdownDateOpt = [
        { display: "Janeiro", value: 1 }, { display: "Fevereiro", value: 2 }, { display: "Março", value: 3 }, { display: "Abril", value: 4 }, { display: "Maio", value: 5 }, { display: "Junho", value: 6 },
        { display: "Julho", value: 7 }, { display: "Agosto", value: 8 }, { display: "Setembro", value: 9 }, { display: "Outubro", value: 10 }, { display: "Novembro", value: 11 }, { display: "Dezembro", value: 12 }
    ];

    function Table({ filteredArray }) {


        return (
            <div className="overflow-x-auto rounded-lg shadow mt-4 max-w-full">
                <table className="min-w-[420px] max-w-full w-full bg-white border border-gray-200 text-s">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="py-2 px-2 text-left font-semibold">Vencimento</th>
                            <th className="py-2 px-2 text-left font-semibold">Status</th>
                            <th className="py-2 px-2 text-left font-semibold">Projeto</th>
                            <th className="py-2 px-2 text-left font-semibold">Descrição</th>
                            <th className="py-2 px-2 text-left font-semibold">Valor</th>
                            <th className="py-2 px-2 text-left font-semibold"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredArray.map((item, idx) => (
                            <tr key={item.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                                <td className="py-1 px-1 border-b">{formatarDataBR(item.dueDate)}</td>
                                <td className="py-1 px-1 border-b capitalize">
                                    <StatusBadge item={item} isDropdown table={"payment"} />

                                </td>
                                <td className="py-1 px-1 border-b  max-w-[120px]">{item.project.title}</td>
                                <td className="py-1 px-1 border-b  max-w-[120px]">{item.description}</td>
                                <td className="py-1 px-1 border-b">{formatMoney(item.amount)}</td>
                                <td className="py-1 px-1 border-b"><button onClick={() => { setModal(true), setModalData(item) }}><SquarePen /></button></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }



    return (
        <div className="max-w-5xl mx-auto p-4">
            <Modal title={"Editar dados do pagamento"} isOpen={modal} onClose={() => setModal(false)}>
                <EditFormGeneric data={modalData} table={"payment"} />
            </Modal>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">{tipo}</h2>
            <div className="flex flex-wrap gap-4 mb-6">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="rounded px-4 py-2 border border-gray-300 bg-white hover:bg-gray-50">Período</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="rounded shadow-lg bg-white border border-gray-200">
                        <DropdownMenuItem onClick={() => setFiltros({ ...filtros, periodo: mesAtual })}>Mês atual</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setFiltros({ ...filtros, periodo: proxMes })}>Próximo mês</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setFiltros({ ...filtros, periodo: anoAtual })}>Ano atual</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setFiltros({ ...filtros, periodo: null })}>Todos Registros</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {dropdownDateOpt.map((item) => (
                            <DropdownMenuItem onClick={() => setFiltros({ ...filtros, periodo: item.value })} key={item.display}>{item.display}</DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="rounded px-4 py-2 border border-gray-300 bg-white hover:bg-gray-50">Status</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="rounded shadow-lg bg-white border border-gray-200">
                        <DropdownMenuItem onClick={() => setFiltros({ ...filtros, status: null })}>Todos</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => setFiltros({ ...filtros, status: "pendente" })}>Pendente</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setFiltros({ ...filtros, status: "pago" })}>Pago</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setFiltros({ ...filtros, status: "atrasado" })}>Atrasado</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setFiltros({ ...filtros, status: "cancelado" })}>Cancelado</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div>
                {filteredArray.length > 0 ? <Table filteredArray={filteredArray} /> : <p className="text-center text-gray-500 py-8">Nenhum registro encontrado</p>}
            </div>
        </div>
    )
}