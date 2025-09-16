'use client'
import { formatarDataBR } from "@/lib/utilis/formatDate"
import { ConstructionPhase, ConstructionTask, Project, User } from "@prisma/client"
import { useState } from "react"
import { Toaster } from "sonner"
import Modal from "@/components/ui/modal"
import { EditFormGeneric } from "@/components/area-logada/edit-form-generic";
import Link from "next/link"
import StatusBadge from "./statusBadge"
import formatMoney from "@/lib/utilis/formatMoney"
import { LinkPreview } from "@/components/ui/linkPreview"
import { SquarePen } from "lucide-react"
import { table } from "console"


export default function DetalhadoGerenciamento({ projeto, user, tipo_usuario }: { projeto: any, user: User, tipo_usuario: "cliente" | "arquiteto" }) {


    type ConstructionPhaseAdjusted = ConstructionPhase & { tasks: ConstructionTask[] }
    const etapas: ConstructionPhaseAdjusted[] = projeto.constructionPhases

    if (etapas.length === 0) {
        return <p className="text-center text-gray-500 py-8">Nenhuma etapa registrada</p>
    }

    const inicialDisplay = etapas[0].id

    const [display, setDisplay] = useState(inicialDisplay)
    const [modal, setModal] = useState(false)
    const [modalData, setModalData] = useState({data:{} as ConstructionPhaseAdjusted| ConstructionTask,table:"" as "constructionPhase" | "constructionTask"} )

    const displayContent: ConstructionPhaseAdjusted = etapas.find((etapa) => etapa.id === display) || etapas[0]


    function Tarefas({ tasks }: { tasks: Array<ConstructionTask> }) {

        const length = tasks?.length

        if (length === 0) {
            return <p className="text-gray-500">Nenhuma tarefa registrada até o momento.</p>
        }

        return (
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Tarefas da fase</h3>
                {tasks.map((task: ConstructionTask) => (
                    <div key={task.id} className="border rounded-lg p-4 my-3 bg-gray-50 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
                            <div>
                                <span className="font-medium text-gray-800 mr-2">{task.name}</span>
                                <button title="Editar" onClick={() => { setModal(true); setModalData({data:task,table:"constructionTask"}) }}><SquarePen size={"18"} /></button>



                            </div>
                            <div><StatusBadge isDropdown={true} item={task} table={"constructionTask"} /></div>
                            <p className="text-sm text-gray-500">{formatarDataBR(task.startDate)} <span className="mx-1">→</span> {formatarDataBR(task.expectedEndDate)}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                            <p className="text-sm text-gray-600">{task.notes}</p>
                            <p className="text-sm text-gray-600">Orçamento: {formatMoney(task.budget as unknown as number)}</p>
                        </div>
                        <div>
                            {task.link && <LinkPreview url={task.link} children={task.fornecedor} />}
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <>
            <Modal isOpen={modal} onClose={() => setModal(false)} title={`Editar ${modalData.data.name}`} >
                <EditFormGeneric data={modalData.data} table={modalData.table} />
            </Modal>

            <Toaster richColors />

            <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
                {/* Sidebar */}
                <aside className="bg-white border-r border-gray-200 py-6 px-2 md:w-56 w-full shadow-lg flex flex-col gap-4">
                    <h2 className="text-lg font-semibold mb-4 text-gray-700">Etapas da Obra</h2>
                    <ul className="pl-0 space-y-2 ">
                        {projeto.constructionPhases.map((fase: ConstructionPhase) => (
                            <li className="" key={fase.id}>
                                <button
                                    className={`w-full text-left px-2 py-2 md:rounded transition-colors duration-200
                                        ${display === fase.id
                                            ? "bg-blue-600 text-white font-bold shadow"
                                            : "bg-gray-100 text-gray-800 hover:bg-blue-100"
                                        }`}
                                    onClick={() => setDisplay(fase.id)}
                                >
                                    {fase.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main content */}
                <main className="flex-1 bg-white p-6 md:p-8">
                    <div className="border-b pb-4 mb-4">
                        <div className="flex flex-col">
                            <div className="grid grid-cols-2">
                                <p className="text-xl font-bold text-gray-800 mr-2">{displayContent.name}</p>
                                <div><StatusBadge status={displayContent.status} isDropdown={false} item={undefined} table={""} /></div>
                            </div>
                            <p>{displayContent.notes}</p>
                            {tipo_usuario === "arquiteto" && (
                                <div>
                                    <button className="ml-4 px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition" onClick={() => { setModal(true); setModalData({data:displayContent,table:"constructionPhase"}) }}>Editar</button>
                                    <Link href={`/arquiteto/projetos/${projeto.slug}/gerenciamento-de-obra/addTasks?constructionPhaseId=${displayContent.id}`} className="ml-2 px-3 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 transition">Adicionar Tarefas</Link>
                                </div>
                            )}

                            <div className="flex flex-col md:flex-row gap-2 text-sm text-gray-600 mt-2">
                                <span>Início: {formatarDataBR(displayContent.startDate)}</span>
                                <span>Término Previsto: {formatarDataBR(displayContent.expectedEndDate)}</span>
                            </div>
                        </div>
                    </div>
                    <Tarefas tasks={displayContent.tasks} />
                </main>
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