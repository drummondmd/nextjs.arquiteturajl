'use client'

import Link from "next/link"
import { useState } from "react"
import NewPaymentForm from "./new-payment-form";
import { FormField, SubmitButton } from "../../ui/form-field";
import { addDays, format, formatDate, parseISO } from "date-fns";
import { paymentType } from "@prisma/client";
import HeaderAddProjetos from "../header";
import { toast, Toaster } from "sonner"
import { success } from "zod";
import { useRouter } from "next/navigation";
import createPaymentAction from "../../../actions/create/createPaymentAction";


export default function AddPaymentsGrid({ project }) {
    const router = useRouter()

    const [nextStep, setNextStep] = useState(true);
    const [input, setInput] = useState({ value: 600, parcelas: 1, data: formatDate(new Date(), "yyyy-MM-dd"), })
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

            router.push(`/arquiteto/projetos/add/etapas?projectId=${project.id}`)
        }


        //// se sucesso ir para proxima pagina


    }

    ////para o input de fazer o form da forma certa
    function handleInputChange(e) {
        const valor = e.target.value
        const inputMod = e.target.name;
        setInput({
            ...input, [inputMod]: valor
        })

    }

    ///transformar o input do usuario em default values para o formulario verdadeiro
    function inputInDefaultValues(obj) {
        const { parcelas, value, data } = obj;
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
            const valorParcela = value / parcelas;
            const array = [];
            //mais de uma parcela,para cada parcela criar item do array
            for (let i = 0; i < parcelas; i++) {
                const multiplicador = i * 30
                array.push({
                    projectId: project.id,
                    paymentType: "entrada",
                    description: `Parcela ${i + 1}/${parcelas} `,
                    amount: valorParcela,
                    status: "pendente",
                    dueDate: i === 0 ? data : format(addDays(new Date(data), multiplicador), "yyyy-MM-dd")
                })
            }
            return array
        }
    }

    function ConstrutorDeForm() {
        return (
            <div className="grid grid-cols-3 gap-3">
                <FormField label={"Valor total"} name={"value"} type="text" value={input.value} onChange={handleInputChange} />
                <FormField label={"Parcelas"} name={"parcelas"} type="number" value={input.parcelas} onChange={handleInputChange} />
                <button onClick={() => setForm({ defaultValues: inputInDefaultValues(input), visible: true })} className="rounded bg-blue-300 m-4 hover:bg-blue-600">Criar</button>
            </div>



        )
    }

    return (
        <div className="mt-2">
            <Toaster richColors />

            <HeaderAddProjetos pagina={"pagamentos"} projeto={project} />
            <div>
                <div>
                    {!form.visible && <ConstrutorDeForm />}
                </div>

                <div>
                    {form.visible && <NewPaymentForm defaultValues={form.defaultValues} onSubmitParent={onSubmit} project={project} />}

                </div>

            </div>


            <div>
                <Link href={`/arquiteto/projetos/${project.slug}`}><button className="bg-blue-300 text-white rounded px-2 m-2">Voltar a home do Projeto</button></Link>

                <Link href={`/arquiteto/projetos/add/etapas?projectId=${project.id}`}><button title={!nextStep && "Complete para seguir"} disabled={!nextStep} className="bg-blue-300 text-white rounded px-2">Adicionar Etapas de projetos</button></Link>


            </div>





        </div>
    )
}