'use client';

import { useState } from "react";
import HorizontalTab from "../horizontal-tab";
import Link from "next/link";
import StatusBadge from "../gerenciamento/statusBadge";

export default function OrcamentoArqGrid({ orcamentos }) {

    const [display, setDisplay] = useState("enviado");

    const arrayOfTabs = [{ nome: "enviado" }, { nome: "aceito" }, { nome: "rejeitado" }, { nome: "cancelado" }]

    const displayTab = orcamentos.filter((orcamento) => orcamento.status === display);

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-0 text-capitalize">Orçamentos</h4>
                <Link href={"/arquiteto/orcamentos/novo-orcamento"}>
                    <button className="btn btn-success btn-sm">
                        <i className="bi bi-plus-lg me-1"></i>Novo Orçamento
                    </button>
                </Link>

            </div>
            <div className="mb-3">
                <HorizontalTab arrayOfTabs={arrayOfTabs} display={display} setDisplay={setDisplay} />
            </div>
            <div className="card shadow-sm">
                <div className="card-body p-0">
                    {displayTab.length === 0 ? (
                        <div className="p-4 text-center text-muted">
                            Nenhum orçamento encontrado.
                        </div>
                    ) : (
                        <div className="table-responsive">
                            <table className="table table-hover table-bordered align-middle mb-0">
                                <thead className="table-light text-center">
                                    <tr>
                                        <th>Nome</th>
                                        <th>Valor</th>
                                        <th>Cliente</th>
                                        <th>Mudar Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayTab.map((orcamento) => (
                                        <tr key={orcamento.id}>
                                            <td>{orcamento.title}</td>
                                            <td>
                                                {orcamento.totalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                            </td>
                                            <td>
                                                {orcamento.client && orcamento.client?.profile.firstName + " " + orcamento.client?.profile.lastName}
                                                {!orcamento.client && "Cliente não definido"}

                                            </td>
                                            <td className="text-center">
                                                <StatusBadge item={orcamento} isDropdown={true} table={"budget"} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}