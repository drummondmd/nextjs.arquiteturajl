'use client'

import CardContainer from "@/components/area-logada/tarefas/cardContainer";
import { useState } from "react";

type Props =
    { splitedProjectPhase: any, splitedProjectPhaseTask: any, splitedConstructionPhase: any, splitedConstructionTask: any }

export default function CardContainerGrid({ splitedProjectPhase, splitedProjectPhaseTask, splitedConstructionPhase, splitedConstructionTask }: Props) {
    const [container1, setContainer1] = useState(true)
    const [container2, setContainer2] = useState(false)
    const [container3, setContainer3] = useState(false)

    return (
        <div>
            <div className="my-2 ml-3">
                <div className="flex gap-2 bg-gray-100 rounded-lg p-2">
                    <button
                        onClick={() => {
                            setContainer1(!container1);
                        }}
                        className={`px-4 py-2 rounded transition-colors ${container1 ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-50"
                            }`}
                    >
                        Etapas de projeto
                    </button>
                    <button
                        onClick={() => {
                            setContainer2(!container2);

                        }}
                        className={`px-4 py-2 rounded transition-colors ${container2 ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-50"
                            }`}
                    >
                        Etapas de Construção
                    </button>
                    <button
                        onClick={() => {
                            setContainer3(!container3);

                        }}
                        className={`px-4 py-2 rounded transition-colors ${container3 ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-50"
                            }`}
                    >
                        Tarefas de Construção
                    </button>
                </div>
            </div>
            <div>
                {container1 && (
                    <>
                        <CardContainer isOneProject={false} title={"Etapas de Projeto"} objectOfArray={splitedProjectPhase} />
                        <div className="py-6"><hr className="border-gray-200" /></div>
                    </>
                )}
                {container2 && (
                    <>
                        <CardContainer isOneProject={false} title={"Etapas de Construção"} objectOfArray={splitedConstructionPhase} />
                        <div className="py-6"><hr className="border-gray-200" /></div>

                    </>
                )}
                {container3 && (
                    <>
                        <CardContainer isOneProject={false} title={"Tarefas de Construção"} objectOfArray={splitedConstructionTask} />


                    </>
                )}
            </div>
        </div>


    )
}

