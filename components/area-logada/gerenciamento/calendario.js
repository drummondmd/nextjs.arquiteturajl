'use client'

import { isSameDay, addDays, addMonths, isBefore, endOfDay, startOfDay, isWithinInterval, isAfter } from "date-fns"

export default function CalendarioGerenciamento({ user, projeto, etapas }) {

    const today = startOfDay(new Date())
    const nextWeek = addDays(today, 7)
    const nextMonth = addMonths(today, 1)

    ///depois selecionar etapas que não foram concluidas, por que se não toda etapa concluida no passado ira dar como em atraso
    ////fazer o push das subetapas no array e analisar junto sem discernimento por ora.
    let etapasConsolidado = [...etapas]

    etapas.forEach(etapa => {
        if (etapa.subEtapas.length > 0) {
            etapa.subEtapas.map((subetapa) => {
                console.log("subetapa", subetapa);
                etapasConsolidado.push(subetapa)
            })
        }

    });

    ///filtar por data e colocar no array
    const tarefasAtrasadas = etapasConsolidado.filter((etapa) => isBefore(etapa.data_prevista_fim, today))
    const tarefasHoje = etapasConsolidado.filter((etapa) => isSameDay(today, etapa.data_prevista_fim))
    const tarefasEssaSemana = etapasConsolidado.filter((etapa) => isWithinInterval(etapa.data_prevista_fim, { start: today, end: nextWeek }))
    const tarefasEsseMes = etapasConsolidado.filter((etapa) => isWithinInterval(etapa.data_prevista_fim, { start: nextWeek, end: nextMonth }))
    const tarefasDepois = etapasConsolidado.filter((etapa) => isAfter(etapa.data_prevista_fim, nextMonth));

    ///construir obj para facilitar renderização

    const todosFiltros = [
        {descricao:"Tarefas atrasadas",array:tarefasAtrasadas},
        {descricao:"Tarefas Hoje",array:tarefasHoje},
        {descricao:"Tarefas Na proxima semana",array:tarefasEssaSemana},
        {descricao:"Tarefas No proximo mes",array:tarefasEsseMes},
        {descricao:"Tarefas Depois",array:tarefasDepois},
    ]



    function Tabela({ array,descricao }) {
        return (
            <div className="col-lg-4">
                <p>{descricao}</p>
                {array.length === 0 ? <p>Nenum item</p>:                <table>
                    <thead>
                        <tr>
                            <td>Item</td>
                            <td>Data Prevista</td>
                        </tr>

                    </thead>
                    <tbody>
                        {array.map((item) => {
                            console.log(item)
                            return (
                                <tr key={item.id}>
                                    <td>{item.nome_etapa || item.nome_subitem}</td>
                                    <td>{item.data_prevista_fim || item.data_fim}</td>

                                </tr>
                            )
                        })}

                    </tbody>
                </table>}

                </div>
                )

}



                return (
                <div>
                    <div className="row">
                        {todosFiltros.map((filtro)=><Tabela array={filtro.array} descricao={filtro.descricao} />)}

                    </div>
                </div>
                )

}