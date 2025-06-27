'use client'

import { useState } from "react"
import TabelaGerenciamento from "./tabela-gerenciamento"
import StatusGerenciamento from "./status"
import CalendarioGerenciamento from "./calendario"

export default function GerenciamentoGrid({user,projeto,etapas}){
    const [display,setDisplay] = useState("tabela")


    return (
        <>
            <div>
                <h1>{projeto.titulo}</h1>
                {/* buscar cliente atraves de midlleware depois */}
                <h5>{projeto.proprietário}</h5>
                <h1>Página de gerenciamento de Obra</h1>
            </div>
            <div>
                <button onClick={() =>setDisplay("tabela")}>Tabela</button>
                <button onClick={() =>setDisplay("status")}>Status</button>
                <button onClick={() =>setDisplay("calendario")}>Calendario</button>
                <button onClick={() =>setDisplay("orcamento")}>Orçamento</button>
                <button>Outro</button>
            </div>
            <div>
                {display == "tabela" && <TabelaGerenciamento user={user} projeto={projeto} etapas={etapas} />}
                {display == "orcamento" && <p>Orçamento</p>}
                {display == "status" && <StatusGerenciamento user={user} projeto={projeto} etapas={etapas} />}
                {display == "calendario" && <CalendarioGerenciamento user={user} projeto={projeto} etapas={etapas} />}


            </div>


        </>
    )
}