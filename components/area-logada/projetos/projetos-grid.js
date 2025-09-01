'use client'

import { useState } from "react";
import EtapasProjeto from "./etapas";
import HorizontalTab from "../horizontal-tab";
import { useRouter } from "next/navigation";
import EtapasProjetoCliente from "./etapas";
import DocumentosGrid from "@/components/documentos-grid";
import { formatarDataBR } from "@/lib/utilis/formatDate";
import PagamentosEmProjeto from "./pagamentos"

export default function ProjetosGrid({ user, projeto, tipo_usuario }) {
  console.log(tipo_usuario)
  const router = useRouter()

  const [display, setDisplay] = useState("Etapas");

  const arrayOfTabs = [
    { nome: "Etapas", isLink: false },

    { nome: "Documentos", isLink: false },
    { nome: "Pagamentos", isLink: false }, {
      nome: "Gerenciamento de Obra",
      isLink: true,
      href: `/${tipo_usuario}/projetos/${projeto.slug}/gerenciamento-de-obra`,
    },

  ];



  return (
    <div className="container py-4">
      <div className="mb-3">
        <h1 className="display-5 fw-semibold">{projeto.title}</h1>
        <p className="text-muted mb-1">
          {projeto.details.neighborhood} - {projeto.details.city}
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
        {display === "Etapas" && <EtapasProjetoCliente role={tipo_usuario || "cliente"} etapas={projeto.designPhases} projectId={projeto.id} />}

        {display === "Documentos" && <DocumentosGrid arrayOfDocuments={projeto.documents} role={tipo_usuario || "cliente"} />}
        {display === "Pagamentos" && <PagamentosEmProjeto payments={projeto.payments} role={tipo_usuario} projectId={projeto.id} />}
      </div>
    </div>
  );
}
