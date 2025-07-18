'use client'

import { Fragment, useState } from "react"
import classes from "./tabela-gerenciamento.module.css"
import { formatarDataBR } from "@/lib/utilis/formatDate";

export default function TabelaGerenciamento({ user, projeto }) {
    const etapas = projeto.constructionPhases;

    function TableRow({ etapa }) {
        const [expandir, setExpandir] = useState(false);

        return (
            <Fragment key={etapa.id}>
                <tr className={`table-${etapa.status === "concluído" ? "success" : etapa.status === "em andamento" ? "warning" : "secondary"}`}>
                    <td className="text-center">
                        <button className="btn btn-sm btn-outline-secondary" onClick={() => setExpandir(!expandir)}>
                            <i className={`bi ${expandir ? "bi-chevron-double-up" : "bi-chevron-double-down"}`}></i>
                        </button>
                    </td>
                    <td>{etapa.name}</td>
                    <td><span className="badge bg-primary">{etapa.status}</span></td>
                    <td>{formatarDataBR(etapa.startDate)}</td>
                    <td>{formatarDataBR(etapa.expectedEndDate)}</td>
                    <td><ButtonAction /></td>
                </tr>

                {expandir && (
                    <>
                        {etapa.tasks?.length > 0 && (
                            <>
                                <tr className="table-light">
                                    <td colSpan="6"><strong>Tarefas:</strong></td>
                                </tr>
                                {etapa.tasks.map(subetapa => (
                                    <Fragment key={subetapa.id}>
                                        <tr className={`table-${subetapa.status === "concluído" ? "success" : subetapa.status === "em andamento" ? "warning" : "secondary"}`}>
                                            <td></td>
                                            <td>{subetapa.name}</td>
                                            <td><span className="badge bg-secondary">{subetapa.status}</span></td>
                                            <td>{formatarDataBR(subetapa.startDate)}</td>
                                            <td>{formatarDataBR(subetapa.expectedEndDate)}</td>
                                            <td><ButtonAction /></td>
                                        </tr>
                                        {subetapa.notes && (
                                            <tr className="bg-white">
                                                <td></td>
                                                <td colSpan="5" className="text-muted">{subetapa.notes}</td>
                                            </tr>
                                        )}
                                    </Fragment>
                                ))}
                            </>
                        )}
                    </>
                )}
            </Fragment>
        );
    }

    function ButtonAction() {
        return (
            <div className="btn-group" role="group">
                <button className="btn btn-sm btn-outline-success" title="Concluir">
                    <i className="bi bi-check2-circle"></i>
                </button>
                <button className="btn btn-sm btn-outline-warning" title="Iniciar">
                    <i className="bi bi-play-fill"></i>
                </button>
                <button className="btn btn-sm btn-outline-danger" title="Cancelar">
                    <i className="bi bi-x-circle"></i>
                </button>
            </div>
        );
    }

    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
                <thead className="table-dark">
                    <tr>
                        <th style={{ width: "5%" }}></th>
                        <th>Etapa</th>
                        <th>Status</th>
                        <th>Início</th>
                        <th>Previsão de Término</th>
                        <th>Funções</th>
                    </tr>
                </thead>
                <tbody>
                    {etapas.map(etapa => (
                        <TableRow key={etapa.id} etapa={etapa} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

