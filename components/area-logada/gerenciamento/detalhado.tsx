'use client'
import { formatarDataBR } from "@/lib/utilis/formatDate"
import { ConstructionPhase, ConstructionTask } from "@prisma/client"
import { useState } from "react"
import { Toaster } from "sonner"
import Modal from "@/components/ui/modal"
import { EditFormGeneric } from "@/components/area-logada/edit-form-generic";


export default function DetalhadoGerenciamento({ projeto, user }) {


    type ConstructionPhaseAdjusted = ConstructionPhase & { constructionTask: ConstructionTask[] }
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



    return (
        <>
            <Modal isOpen={modal} onClose={() => setModal(false)} title={`Editar ${modalData.name}`} >
                <EditFormGeneric data={modalData} table={"projectPhase"} />
            </Modal>

            <Toaster richColors />
            <div className="min-h-screen flex flex-col md:flex-row">
                {/* Sidebar */}
                <div className="bg-gray-200 p-4 md:w-64 md:min-h-screen">
                    {projeto.constructionPhases.map((fase) => <li className="my-2" key={fase.id}><button className="btn btn-secondary" onClick={() => setDisplay(fase.id)}>{fase.name}</button></li>)}
                </div>

                {/* Main content */}
                <div className="flex-1 bg-white p-6">
                    <div className="border py-2">
                        <p>{JSON.stringify(displayContent)}</p>

                        {/* header do mainDisplay */}
                        <div className="flex">
                            <div>
                                <span className="text 2-1 font-medium">{displayContent.name}</span>
                                <span className="">{displayContent.status}</span>
                                <div>
                                    <button className="mx-2" onClick={() => { setModal(true); setModalData(displayContent) }}>Editar</button>
                                </div>
                                <div>
                                    Adiconar Tarefas
                                </div>
                            </div>
                            <div className="hidden md:flex">
                                <span className="">Início: {formatarDataBR(displayContent.startDate)}</span>
                                <span className="">Término Previsto: {formatarDataBR(displayContent.expectedEndDate)}</span>
                            </div>


                        </div>
                        {/* <span className="">{displayContent.startDate}</span>
                    <span className="">{displayContent.expectedEndDate}</span> */}


                        {displayContent.actualCost?.toString()}

                    </div>
                    <div>
                        Segundo conteudo
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