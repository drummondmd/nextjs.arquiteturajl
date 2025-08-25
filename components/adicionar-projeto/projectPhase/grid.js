'use client'

import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { formatDate } from "date-fns";
import { addDaysAndFormatISO } from "../../../lib/utilis/formatDate";
import NewPhaseForm from "./newPhaseForm";
import isSequential from "../../../lib/utilis/isSequencial";

export default function AddProjectPhaseGrid({ project, table, defaultCheckbox }) {
    const router = useRouter();
    const links = [
        { label: "Fases de projeto", table: "projectPhase", link: `/arquiteto/projetos/add/projectPhase?projectId=${project.id}` },
        { label: "Pagamentos", table: "payments", link: `/arquiteto/projetos/add/payments?projectId=${project.id}` },
        { label: "Fases de Construção", table: "constructionPhase", link: `/arquiteto/projetos/add/constructionPhase?projectId=${project.id}` }
    ];
    const filteredLinks = links.filter((elem) => elem.table !== table);

    const defaultCheckboxs = defaultCheckbox.map((phase) => ({
        label: phase,
        checked: false,
    }));

    const [selectors, setSelectors] = useState({ date: formatDate(new Date(), "yyyy-MM-dd"), checkboxs: defaultCheckboxs });
    const [selected, setSelected] = useState([]);
    const [valuesToForm, setValuesToForm] = useState([]);

    const handleSelectorsChange = (e) => {
        if (e.target.name === "date") {
            setSelectors({ ...selectors, date: e.target.value });
        } else {
            const selectedName = e.target.name;
            const index = selectors.checkboxs.findIndex((elem) => elem.label === selectedName);
            const newObject = { ...selectors.checkboxs[index], checked: !selectors.checkboxs[index].checked };
            const newArray = [...selectors.checkboxs];
            newArray[index] = newObject;
            setSelectors({ ...selectors, checkboxs: newArray });
        }
    };

    useEffect(() => {
        const filter = selectors.checkboxs.filter((checkbox) => checkbox.checked === true);
        const filterMaped = filter.map((item, index) => ({
            ...item,
            order: index + 1,
            duration: 10
        }));
        setSelected(filterMaped);
    }, [selectors]);

    const handleTableChange = (e, item) => {
        const value = e.target.value;
        const name = e.target.name;
        const index = selected.findIndex((elem) => elem.label === item);
        const newObject = { ...selected[index], [name]: value };
        const newArray = [...selected];
        newArray[index] = newObject;
        setSelected(newArray);
    };

    const inputToForm = () => {
        const defaultValues = [];
        const order = selected.map((elem) => Number(elem.order)).sort((a, b) => a - b);
        const isOrderSequencial = isSequential(order);
        if (!isOrderSequencial) {
            alert("Confira ordem das etapas");
            return null;
        }
        selected.sort((a, b) => a.order - b.order);
        selected.forEach((elem, index) => {
            if (index === 0) {
                defaultValues.push({
                    projectId: project.id,
                    name: elem.label,
                    startDate: selectors.date,
                    expectedEndDate: addDaysAndFormatISO(selectors.date, elem.duration),
                    order: elem.order
                });
            } else {
                defaultValues.push({
                    projectId: project.id,
                    name: elem.label,
                    startDate: defaultValues[index - 1].expectedEndDate,
                    expectedEndDate: addDaysAndFormatISO(defaultValues[index - 1].expectedEndDate, elem.duration),
                    order: elem.order
                });
            }
        });
        setValuesToForm(defaultValues);
    };

    function manuallyAddorDelete(action, indexChosen) {
        if (action === "add") {
            setSelected([...selected, { order: selected.length + 1, label: `Etapa adicional ${selected.length + 1}`, duration: 10 }]);
        } else {
            const modifiedArray = selected.filter((_, index) => index !== indexChosen);
            setSelected(modifiedArray);
        }
    }

    return (
        <div className="mt-3 max-w-5/6 mx-auto px-2">
            <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                        <h2 className="text-lg font-bold text-gray-800">{project.title}</h2>
                        <p className="text-sm text-gray-500">{links.find((elem) => elem.table === table)?.label}</p>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => router.back()} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded transition">Voltar</button>
                        {filteredLinks.map((elem) => (
                            <Link key={elem.label} href={elem.link} className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded transition">{elem.label}</Link>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                {valuesToForm.length === 0 && (
                    <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <label className="border rounded px-3 py-2 text-gray-700 text-center"  >Data de inicio de projeto:
                                <input type="date" name="date" value={selectors.date} onChange={handleSelectorsChange} className="border rounded px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500"  />
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {selectors.checkboxs.map((elem) => (
                                    <label key={elem.label} className="flex items-center gap-1 text-sm text-gray-700">
                                        <input type="checkbox" name={elem.label} checked={elem.checked} onChange={handleSelectorsChange} className="accent-blue-600" />
                                        {elem.label}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-4">
                            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 font-semibold text-gray-700 mb-2">
                                <div>Ordem</div>
                                <div className="sm:col-span-2">Nome</div>
                                <div>Dias Úteis</div>
                                <div>Ações</div>
                            </div>
                            {selected.map((elem, index) => (
                                <div key={elem.label} className={`grid grid-cols-1 sm:grid-cols-5 gap-2 items-center mb-2 order-${elem.order}`}>
                                    <input name="order" onChange={(e) => handleTableChange(e, elem.label)} value={elem.order} type="number" className="border rounded px-2 py-1 w-full" />
                                    <input readOnly name="label" type="text" className="sm:col-span-2" value={elem.label} />
                                    <input type="number" name="duration" onChange={(e) => handleTableChange(e, elem.label)} value={elem.duration} className="border rounded px-2 py-1 w-full" />
                                    <button onClick={() => manuallyAddorDelete("delete", index)} className="text-red-500 hover:underline">Excluir</button>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 mt-4">
                            <button onClick={() => manuallyAddorDelete("add")} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Adicionar etapa</button>
                            <button disabled={selected.length === 0} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition disabled:opacity-50" onClick={inputToForm}>Próxima etapa</button>
                        </div>
                    </div>
                )}
                <div className="mt-3">
                    {valuesToForm.length > 0 && (
                        <NewPhaseForm restartForm={() => setValuesToForm([])} defaultValues={valuesToForm} table={table} />
                    )}
                </div>
            </div>
        </div>
    );
}