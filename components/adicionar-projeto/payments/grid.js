'use client'

import Link from "next/link"
import { useState } from "react"
import NewPaymentForm from "./new-payment-form";

export default function AddPaymentsGrid({ project }) {
    const [nextStep, setNextStep] = useState(false);
    const [form, setForm] = useState({
        visible: false,
        defaultValues: null
    })

    ///onSubmit
    function onSubmit(data) {
        alert("Ação")
        console.log(data)

    }

    function ConstrutorDeForm() {
        return (

            <p>
                <button onClick={()=>setForm({...form,visible:true})}>Teste de funcionalidad</button>
                Construtor de formulario
                Adionar pagamento a vista
                Adicionar pagamento parcelado
                Outros
            </p>

        )
    }

    return (
        <div>
            <div>
                <p>Grid para adionar pagamentos ao projeto em questão {project.title}</p>

            </div>
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

                {nextStep && <Link href={`/arquiteto/projetos/add/etapas?projectId=${project.id}`}><button className="bg-blue-300 text-white rounded px-2">Adicionar Etapas de projetos</button></Link>}


            </div>





        </div>
    )
}