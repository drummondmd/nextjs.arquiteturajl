import { useState } from "react"

export default function DetalhadoGerenciamento({ projeto, user }) {

    const etapas = projeto.constructionPhases

    if (etapas.length === 0) {
        return <p>Nenhuma etapa registrada</p>
    }

    const inicialDisplay = etapas[0].id || null

    const [display, setDisplay] = useState(inicialDisplay)

    const displayContent = etapas.find((etapa) => etapa.id === display)



    return (
        <div className="row">
            <div className="col-lg-2">
                <ol>
                    {projeto.constructionPhases.map((fase) => <li className="my-2" key={fase.id}><button className="btn btn-secondary" onClick={() => setDisplay(fase.id)}>{fase.name}</button></li>)}
                </ol>
            </div>
            <div className="col-lg-10">
                <p>{displayContent.name}</p>
                <p>{displayContent.status}</p>
                <p>{displayContent.notes}</p>
                <p>{displayContent.budget}</p>
                <p>{displayContent.notes}</p>
                <h4>Tarefas:</h4>
                {displayContent.tasks.map((tarefa)=><p>{JSON.stringify(tarefa)}</p>)}

            </div>

        </div>

    )
}