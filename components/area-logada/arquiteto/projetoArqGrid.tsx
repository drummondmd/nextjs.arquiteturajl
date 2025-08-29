'use client';

import { useState } from "react";
import HorizontalTab from "../horizontal-tab";
import Link from "next/link";
import StatusBadge from "../gerenciamento/statusBadge";
import AssingClient from "./assingClient"

export default function ProjetoArqGrid({ projetos }) {

    const [display, setDisplay] = useState("em_andamento");

    const arrayOfTabs = [{ nome: "planejado" }, { nome: "em_andamento" }, { nome: "concluido" }, { nome: "cancelado" }, { nome: "atrasado" }]

    const displayTab = projetos.filter((projeto) => projeto.status === display);




    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-0 text-capitalize">Projetos</h4>
                <Link href={"/arquiteto/projetos/add"}>
                    <button className="btn btn-success btn-sm">
                        <i className="bi bi-plus-lg me-1"></i>Novo Projeto
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
                            Nenhum projeto encontrado.
                        </div>
                    ) : (
                        <div className="table-responsive">
                            <table className="table table-hover table-bordered align-middle mb-0">
                                <thead className="table-light text-center">
                                    <tr>
                                        <th>Nome</th>
                                        <th>Cliente</th>
                                        <th>Status</th>
                                        <th>Acessar detalhes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayTab.map((projeto) => (
                                        <tr key={projeto.id}>
                                            <td>{projeto.title}</td>

                                            <td>
                                                {projeto.client && projeto.client.profile.firstName + " " + projeto.client.profile.lastName}
                                                {!projeto.client && <AssingClient />}
                                            </td>
                                            <td className="text-center">
                                                <StatusBadge item={projeto} isDropdown table={"project"} />

                                            </td>
                                            <td className="text-center">
                                                <Link href={`/arquiteto/projetos/${projeto.slug}`}>
                                                    <button className="btn btn-outline-secondary btn-sm">
                                                        Acessar detalhes
                                                    </button>
                                                </Link>
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