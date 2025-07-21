'use client'

import { useState } from "react"
import TabelaGerenciamento from "./tabela-gerenciamento"
import StatusGerenciamento from "./status"
import CalendarioGerenciamento from "./calendario"
import HorizontalTab from "../horizontal-tab"
import DetalhadoGerenciamento from "./detalhado"
import { Toaster } from "@/components/ui/sonner"

export default function GerenciamentoGrid({ user, projeto }) {

  ////se nenhuma fase registrada, mostrar aviso
  if(projeto.constructionPhases.length == 0){
    return <p>Nenhuma obra ainda registrada, contacte arquiteto</p>
  }



  const [display, setDisplay] = useState("Resumo")
  const arrayOfTabs = [{ nome: "Resumo" }, { nome: "Detalhado" }, { nome: "Status" }, { nome: "Calendário" }, { nome: "Orçamento" }]


  return (
    <>
    <Toaster richColors />
      <div className="px-2 py-4">
        <header className="mb-4 border-bottom pb-3">
          <h1 className="display-4">{projeto.title}</h1>
          <h2 className="mt-4 fw-semibold text-muted">Página de gerenciamento de Obra</h2>
        </header>

        <section className="mb-4">
          <HorizontalTab
            arrayOfTabs={arrayOfTabs}
            display={display}
            setDisplay={setDisplay}
          />
        </section>

        <main>
          {display === "Resumo" && (
            <div className="bg-light p-3 rounded shadow-sm">
              <TabelaGerenciamento
                user={user}
                projeto={projeto}
              />
            </div>
          )}
          {display === "Orçamento" && (
            <p className="fs-5 text-secondary">Orçamento</p>
          )}
          {display === "Status" && (
            <StatusGerenciamento
              user={user}
              projeto={projeto}
            />
          )}
          {display === "Calendário" && (
            <CalendarioGerenciamento
              user={user}
              projeto={projeto}
              etapas={projeto.constructionPhases}
            />
          )}
          {display === "Detalhado" && <DetalhadoGerenciamento user={user} projeto={projeto} />}
        </main>
      </div>

    </>


  );

}