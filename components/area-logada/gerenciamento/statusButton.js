'use client'

export default function StatusButton({ clickFunction, obj }) {

    ///determinar se etapa/tarefa
    const tabelaRelacionada = obj.hasOwnProperty("tasks") ? "ConstructionPhase" : "ConstructionTask";
    ///status atual e id do objeto
    const actualStatus = obj.status
    const id = obj.id



    return (
        <div className="btn-group" role="group">
            {actualStatus != 'em_andamento' && actualStatus != 'cancelado' && actualStatus != 'concluido' && (
                <button onClick={clickFunction.bind(null, tabelaRelacionada, id, "em_andamento")} className="btn btn-sm btn-outline-warning" title="Iniciar">
                    <i className="bi bi-play-fill"></i>
                </button>
            )}

            {actualStatus != 'concluido' && actualStatus != 'cancelado' && (
                <>
                    <button onClick={clickFunction.bind(null, tabelaRelacionada, id, "concluido")} className="btn btn-sm btn-outline-success" title="Concluir">
                        <i className="bi bi-check2-circle"></i>
                    </button>
                    <button onClick={clickFunction.bind(null, tabelaRelacionada, id, "cancelado")} className="btn btn-sm btn-outline-danger" title="Cancelar">
                        <i className="bi bi-x-circle"></i>
                    </button>

                </>

            )}
            {actualStatus != 'em_andamento' && actualStatus != 'planejado' && actualStatus != 'atrasado' && (
                <button onClick={clickFunction.bind(null, tabelaRelacionada, id, "em_andamento")} className="btn btn-sm btn-outline-secondary" title="Reiniciar">
                    <i className="bi bi-arrow-clockwise"></i>
                </button>

            )}

        </div>
    );
}