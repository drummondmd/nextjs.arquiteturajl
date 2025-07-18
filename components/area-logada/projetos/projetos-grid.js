'use client'

import { useState } from "react";
import EtapasProjeto from "./etapas";
import HorizontalTab from "../horizontal-tab";
import { useRouter } from "next/navigation";
import EtapasProjetoCliente from "./etapas";
import DocumentosGrid from "@/components/documentos-grid";
import { formatarDataBR } from "@/lib/utilis/formatDate";

export default function ProjetosGrid({ user, projeto, tipo_usuario }) {
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
        {display === "Etapas" && <EtapasProjetoCliente etapas={projeto.designPhases} />}

        {display === "Documentos" && <DocumentosGrid arrayOfDocuments={projeto.documents} role={"cliente"} />}
        {display === "Pagamentos" && (
          <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Status</th>
                  <th>Vencimento</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {projeto.payments.map((payment) => (
                  <tr key={payment.id}>
                    <td>{payment.description}</td>
                    <td>{payment.status}</td>
                    <td>{formatarDataBR(payment.dueDate)}</td>
                    <td>R$ {payment.amount.toLocaleString('pt-BR')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
