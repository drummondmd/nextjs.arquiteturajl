'use client'

import { formatarDataBR } from "@/lib/utilis/formatDate"
import StatusBadge from "@/components/area-logada/gerenciamento/statusBadge";
import { useState } from "react";

export default function CardTarefas({ title, color, array, displayStatus, collapsedAsDefault, isOneProject }) {

    if (!color) {
        color = "bg-gray-100"
    }

    let initialState = collapsedAsDefault?true:false

    if (!collapsedAsDefault) {

        initialState = array.length > 0 ? false : true

    }




    // 2. Crie um estado para controlar o estado recolhido/expandido
    const [isCollapsed, setIsCollapsed] = useState(initialState)

    // 3. Crie classes dinâmicas para o container principal
    //    - Adiciona a classe 'group' para habilitar as variantes 'group-*'
    //    - Alterna a largura entre 'w-80' (expandido) e 'w-14' (recolhido)
    //    - Adiciona 'transition-all' e 'duration-300' para uma animação suave
    const containerClasses = `
    group flex-shrink-0 bg-opacity-90 rounded-lg
    transition-all duration-300
    ${isCollapsed ? 'w-14 p-0' : 'w-80 p-2'}
    ${isCollapsed ? 'recolhido' : ''}
    ${color}
  `;

    const headerClasses = `
    flex
    group-[.recolhido]:flex-col
        ${isCollapsed ? '' : 'justify-between'}

  `;
    return (
        <div className={containerClasses}>
            {/* CABEÇALHO DA COLUNA */}
            <div className={headerClasses}>

                {/* 4. TÍTULOS - um para cada estado */}
                {/* Título Horizontal (visível quando expandido) */}
                <h2 className="text-base font-bold text-gray-800 mb-4 px-2 group-[.recolhido]:hidden">
                    {title}
                </h2>
                {/* Título Vertical (visível quando recolhido) */}
                <h2 className="hidden text-base font-bold text-gray-800 p-2 [writing-mode:vertical-rl] rotate-180 group-[.recolhido]:flex items-center justify-center group-[.recolhido]:order-last">
                    {title}
                </h2>


                {/* 5. BOTÃO DE TOGGLE */}

                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-1 rounded-full hover:bg-gray-500/20 group-[.recolhido]:order-first"
                >
                    {/* Ícone de Recolher (visível quando expandido) */}
                    <i className="bi bi-arrows-angle-contract block group-[.recolhido]:hidden"></i>
                    {/* Ícone de Expandir (visível quando recolhido) */}
                    <i className="bi bi-arrows-angle-expand hidden group-[.recolhido]:block"></i>
                </button>


            </div>

            {/* 6. CONTEÚDO DA COLUNA (LISTA DE TAREFAS) */}
            {/*    - A animação de "acordeão" é feita com 'max-h' */}
            <div className="overflow-hidden transition-all duration-300 max-h-[80vh] group-[.recolhido]:max-h-0">
                {array.length === 0 && <p className="px-2">Nenhuma tarefa.</p>}
                {array.length > 0 && (
                    <div className="space-y-4">
                        {array.map((elem) => (
                            <div key={elem.id} className="bg-white p-2 rounded-md shadow">
                                <p className="font-medium">{elem.name}  {!isOneProject && `  -  ${elem.project?.title}`}</p>
                                <span className="text-sm text-gray-500">
                                    Prazo: {formatarDataBR(elem.expectedEndDate)}
                                </span>
                                {displayStatus && (
                                    <span className="text-sm mx-1">
                                        <StatusBadge status={elem.status} />
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div >
    );
}
