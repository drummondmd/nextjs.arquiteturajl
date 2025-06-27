'use client'

import { useState } from "react";
import EtapasProjeto from "./etapas";
import HorizontalTab from "../horizontal-tab";
import { useRouter } from "next/navigation";

export default function ProjetosGrid({ user, projeto, etapas }) {
  const router = useRouter()

  const [display, setDisplay] = useState("Etapas");

  const arrayOfTabs = [
    { nome: "Etapas", isLink: false },
    { nome: "Orçamentos", isLink: false },
    {
      nome: "Gerenciamento de Obra",
      isLink: true,
      href: `/cliente/projetos/${projeto.slug}/gerenciamento-de-obra`,
    },
  ];



  return (
    <div className="container py-4">
      <div className="mb-3">
        <h1 className="display-5 fw-semibold">{projeto.titulo}</h1>
        <p className="text-muted mb-1">
          {projeto.endereco} - {projeto.cidade}
        </p>
        <p>
          <strong>Status:</strong> {projeto.status}
        </p>
        <button onClick={() => router.back()} className="btn btn-secondary btn-sm">
          Voltar
        </button>
      </div>

      <HorizontalTab display={display} arrayOfTabs={arrayOfTabs} setDisplay={setDisplay} />

      <div className="mt-4">
        {display === "Etapas" && <EtapasProjeto etapas={etapas} />}

        {display === "Orçamentos" && (
          <div className="border rounded p-3 bg-light">
            <p><strong>Previsto:</strong> R$ {projeto.orcamento_inicial?.toLocaleString('pt-BR')}</p>
            <p><strong>Ajustado:</strong> R$ {projeto.orcamento_previsto?.toLocaleString('pt-BR')}</p>
            <p><strong>Realizado:</strong> R$ {projeto.orcamento_realizado?.toLocaleString('pt-BR')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
