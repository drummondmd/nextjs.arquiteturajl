'use client'
import { formatarDataBR } from "@/lib/utilis/formatDate"
import { ConstructionPhase, ConstructionTask } from "@prisma/client"
import { useState } from "react"
import { Toaster } from "sonner"
import Modal from "@/components/ui/modal"
import { EditFormGeneric } from "@/components/area-logada/edit-form-generic";
import Link from "next/link"
import StatusBadge from "./statusBadge"
import formatMoney from "@/lib/utilis/formatMoney"


export default function DetalhadoGerenciamento({ projeto, user }) {


    type ConstructionPhaseAdjusted = ConstructionPhase & { tasks: ConstructionTask[] }
    const etapas: ConstructionPhaseAdjusted[] = projeto.constructionPhases

    if (etapas.length === 0) {
        ///não era para acontecer, mas redundante.
        return <p>Nenhuma etapa registrada</p>
    }

    const inicialDisplay = etapas[0].id

    const [display, setDisplay] = useState(inicialDisplay)
    const [modal, setModal] = useState(false)
    const [modalData, setModalData] = useState({} as ConstructionPhaseAdjusted)

    const displayContent: ConstructionPhaseAdjusted = etapas.find((etapa) => etapa.id === display) || etapas[0]


    function Tarefas({ tasks }: { tasks: Array<ConstructionTask> }) {

        const length = tasks?.length

        if (length === 0) {
            return <p>Nenhuma tarefa registrada até o momento.</p>
        }

        return (
            <div>
                <p>Tarefas da fase:</p>
                {tasks.map((task) => {
                    return (<div key={task.id} className="border">
                        <div className="grid grid-cols-2 md:grid-cols-4">
                            <p>{task.name}</p>
                            <div><StatusBadge status={task.status} isDropdown={false} item={undefined} table={""} /></div>
                            <p>Inicio:{formatarDataBR(task.startDate)}</p>
                            <p>Término:{formatarDataBR(task.expectedEndDate)}</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="grid grid-cols-2">
                                <p>Orçamento: {formatMoney(task.budget as unknown as number)}</p>
                                <p>Atual: {formatMoney(task.actualCost as unknown as number)}</p>
                            </div>
                            <p>{task.notes}</p>
                        </div>
                        <div>
                            {task.link && (<a title={task.link} target="_blank" href={task.link}>
                                {task.fornecedor||"link"}
                            </a>)}
                            {!task.link && (<p>
                                Fornecedor sem link
                            </p>)}

                        </div>
                    </div>
                    )
                }
                )}

            </div>
        )

    }



    return (
        <>
            <Modal isOpen={modal} onClose={() => setModal(false)} title={`Editar ${modalData.name}`} >
                <EditFormGeneric data={modalData} table={"projectPhase"} />
            </Modal>

            <Toaster richColors />
            <div className="min-h-screen flex flex-col md:flex-row">
                {/* Sidebar */}
                <div className="bg-gray-200 p-4 md:w-64 md:min-h-screen">
                    {projeto.constructionPhases.map((fase: ConstructionPhase) => <li className="my-2" key={fase.id}><button className="btn btn-secondary" onClick={() => setDisplay(fase.id)}>{fase.name}</button></li>)}
                </div>

                {/* Main content */}
                <div className="flex-1 bg-white p-6">
                    <div className="border py-2">
                        {/* header do mainDisplay */}
                        <div className="flex">
                            <div>
                                <span className="text 2-1 font-medium">{displayContent.name}</span>
                                <span className="">{displayContent.status}</span>
                                <div>
                                    <button className="mx-2" onClick={() => { setModal(true); setModalData(displayContent) }}>Editar</button>
                                </div>
                                <div>
                                    <Link href={`/arquiteto/projetos/${projeto.slug}/gerenciamento-de-obra/addTasks?constructionPhaseId=${displayContent.id}`}>Adicionar Tarefas</Link>
                                </div>
                            </div>
                            <div className="hidden md:flex">
                                <span className="">Início: {formatarDataBR(displayContent.startDate)}</span>
                                <span className="">Término Previsto: {formatarDataBR(displayContent.expectedEndDate)}</span>
                            </div>


                        </div>
                    </div>
                    <div>
                        <Tarefas tasks={displayContent.tasks} />
                    </div>

                </div>
            </div>


        </>




        // <div className="row">
        //     <div className="col-lg-2">
        //         <ol>
        //             {projeto.constructionPhases.map((fase) => <li className="my-2" key={fase.id}><button className="btn btn-secondary" onClick={() => setDisplay(fase.id)}>{fase.name}</button></li>)}
        //         </ol>
        //     </div>
        //     <div className="col-lg-10">
        //         <p>{displayContent.name}</p>
        //         <p>{displayContent.status}</p>
        //         <p>{displayContent.notes}</p>
        //         <p>{displayContent.budget}</p>
        //         <p>{displayContent.notes}</p>
        //         <h4>Tarefas:</h4>
        //         {displayContent.tasks.map((tarefa)=><p>{JSON.stringify(tarefa)}</p>)}

        //     </div>

        // </div>

    )
}