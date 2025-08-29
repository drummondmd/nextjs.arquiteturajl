'use client'

import Link from "next/link"
import React, { useCallback, useState } from "react"
import NewPaymentForm from "./new-payment-form";
import { FormField, SubmitButton } from "../../ui/form-field";
import { addDays, format, formatDate, parseISO } from "date-fns";
import { paymentType } from "@prisma/client";
import HeaderAddProjetos from "../header";
import { toast, Toaster } from "sonner"
import { success } from "zod";
import { useRouter } from "next/navigation";
import createPaymentAction from "../../../actions/create/createPaymentAction";

function ConstrutorDeForm({ input, setInput }) {
    return (
        <div className="col-span-2">
            <div className="grid grid-cols-2 gap-2">
                <FormField label={"Valor total"} name={"value"} type="text"
                    // onChange={(e) => {
                    //     const raw = e.target.value.replace(/\D/g, "");
                    //     const numeric = Number(raw) / 100;
                    //     field.onChange(numeric);
                    // }}
                    value={input.value ? input.value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : " "}

                    onChange={(e) => {
                        const raw = e.target.value.replace(/\D/g, "");
                        const numeric = Number(raw) / 100;
                        setInput({ ...input, value: numeric })
                    }} />
                <FormField label={"Parcelas"} name={"parcelas"} type="number" value={input.parcelas || " "} onChange={e => setInput({ ...input, parcelas: e.target.value })}
                />

            </div>

        </div>



    )
}


export default function AddPaymentsGrid({ project, table }) {
    const router = useRouter();
    const links = [
        { label: "Fases de projeto", table: "projectPhase", link: `/arquiteto/projetos/add/projectPhase?projectId=${project.id}` },
        { label: "Pagamentos", table: "payments", link: `/arquiteto/projetos/add/payments?projectId=${project.id}` },
        { label: "Fases de Construção", table: "constructionPhase", link: `/arquiteto/projetos/add/constructionPhase?projectId=${project.id}` }
    ];
    const filteredLinks = links.filter((elem) => elem.table !== table);
    const today = formatDate(new Date(), "yyyy-MM-dd")


    const [nextStep, setNextStep] = useState(true);
    const [input, setInput] = useState({ value: 600, parcelas: 1 })
    const [form, setForm] = useState({
        visible: false,
        defaultValues: null
    })

    ///onSubmit
    async function onSubmit(data) {
        ///presume-se que erros ja validados
        ///action para banco de dados
        const response = await createPaymentAction(data)
        ///se erro - mostrar
        if (!response.success) {
            toast.error(response.message)
        } else {
            // toast.success(response.message)

            router.push(`/arquiteto/projetos/add/hub?projectId=${project.id}`)
        }
        //// se sucesso ir para proxima pagina


    }

    ///transformar o input do usuario em default values para o formulario verdadeiro
    function inputInDefaultValues(obj) {
        const { parcelas, value } = obj;
        const data = today;

        if (parcelas === 1) {
            return [{
                projectId: project.id,
                paymentType: "entrada",
                description: "Pagamento a vista",
                amount: value,
                status: "pendente",
                dueDate: data
            }]
        } else {
            ///1 parcela =40%, demais divide igual.
            const parcelasArray = [];
            for (let i = 0; i < parcelas; i++) {
                const primeira = parcelas > 2 ? (value * 4) / 10 : (value * 6) / 10
                const restante = value - primeira;

                if (i === 0) {
                    parcelasArray.push(primeira)
                } else {
                    parcelasArray.push(restante / (parcelas - 1))
                }

            }

            // const valorParcela = value / parcelas;


            const array = [];
            //mais de uma parcela,para cada parcela criar item do array
            for (let i = 0; i < parcelas; i++) {
                const multiplicador = i * 30
                array.push({
                    projectId: project.id,
                    paymentType: "entrada",
                    description: `Parcela ${i + 1}/${parcelas} `,
                    amount: parcelasArray[i],
                    status: "pendente",
                    dueDate: i === 0 ? data : format(addDays(new Date(data), multiplicador), "yyyy-MM-dd")
                })
            }
            return array
        }
    }



    return (
        <div className="mt-3 max-w-5/6 mx-auto px-2">
            <Toaster richColors />
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

            <div>
                <div>
                    {!form.visible && (
                        <div className="grid grid-cols-3 gap-3">
                            <ConstrutorDeForm setForm={setForm} input={input} setInput={setInput} />
                            <button
                                onClick={() => {
                                    const isNotValid = Object.values(input).filter((elem) => elem === "" || elem == 0)
                                    if (isNotValid.length > 0) {
                                        toast.error("Preencha dados Corretamente")
                                    } else {
                                        setForm({ defaultValues: inputInDefaultValues(input), visible: true })

                                    }
                                }}
                                className="rounded bg-blue-300 m-4 hover:bg-blue-600"
                            >Criar</button>
                        </div>



                    )
                    }
                </div>

                <div>
                    {form.visible && <NewPaymentForm defaultValues={form.defaultValues} onSubmitParent={onSubmit} project={project} />}

                </div>

            </div>

        </div>
    )
}
