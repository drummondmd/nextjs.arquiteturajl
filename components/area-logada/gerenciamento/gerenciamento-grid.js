'use client'

import { useState } from "react"
import TabelaGerenciamento from "./tabela-gerenciamento"
import StatusGerenciamento from "./status"
import HorizontalTab from "../horizontal-tab"
import DetalhadoGerenciamento from "./detalhado"
import { Toaster } from "@/components/ui/sonner"
import { Button } from "../../ui/button"
import Link from "next/link"
import OrcamentoGerenciamento from "./orcamento-gerenciamento"

export default function GerenciamentoGrid({ user, projeto,tipo_usuario }) {

  const [display, setDisplay] = useState("Resumo")
  const arrayOfTabs = [{ nome: "Resumo" }, { nome: "Detalhado" }, { nome: "Status" }, { nome: "Orçamento" }]

  function AddGerenciamento() {
    return (<div>
      <Button asChild variant={"link"}>
        <Link href={`/arquiteto/projetos/add/constructionPhase?projectId=${projeto.id}`}>        Adicionar etapas

        </Link>
      </Button>

    </div>)
  }

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
          {display === "Orçamento" && <OrcamentoGerenciamento projeto={projeto} />}
          {display === "Status" && (
            <StatusGerenciamento
              user={user}
              projeto={projeto}
            />
          )}
          {display === "Detalhado" && <DetalhadoGerenciamento tipo_usuario={tipo_usuario} user={user} projeto={projeto} />}
        </main>
      </div>

    </>


  );

}