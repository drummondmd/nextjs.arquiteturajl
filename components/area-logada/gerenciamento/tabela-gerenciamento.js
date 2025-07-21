'use client'

import { Fragment, useState } from "react"
import { formatarDataBR } from "@/lib/utilis/formatDate";
import { toast, Toaster } from "sonner"
import StatusButton from "./statusButton";
import ProgressBar from "./progressBar";
import { updateStatusChange } from "@/actions/update/statusChange";
import setColorByStatus from "@/lib/utilis/colorByStatus";
import StatusBadge from "./statusBadge";


export default function TabelaGerenciamento({ user, projeto }) {
    const etapas = projeto.constructionPhases;


    ////logica do botão
    async function handleButtonClick(tabelaRelacionada, id, status, e) {


        const result = await updateStatusChange(tabelaRelacionada, id, status);
        if (result.success) {
            toast.success(result.message);
        } else {
            toast.error(result.message);
        }


    }

    function TableRow({ etapa }) {
        const [expandir, setExpandir] = useState(false);

        let statusColor  = setColorByStatus(etapa.status)


        return (
            <Fragment key={etapa.id}>
                <tr className={`table-${etapa.status === "concluido" ? "success" : etapa.status === "em andamento" ? "warning" : "secondary"}`}>
                    <td className="text-center">
                        <button className="btn btn-sm btn-outline-secondary" onClick={() => setExpandir(!expandir)}>
                            <i className={`bi ${expandir ? "bi-chevron-double-up" : "bi-chevron-double-down"}`}></i>
                        </button>
                    </td>
                    <td>{etapa.name}</td>
                    <td><StatusBadge status={etapa.status} /></td>
                    <td>{formatarDataBR(etapa.startDate)}</td>
                    <td>{formatarDataBR(etapa.expectedEndDate)}</td>
                    <td><EtapaControl etapa={etapa} /></td>
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
                                            <td><StatusBadge status={subetapa.status} /></td>
                                            <td>{formatarDataBR(subetapa.startDate)}</td>
                                            <td>{formatarDataBR(subetapa.expectedEndDate)}</td>
                                            <td><StatusButton obj={subetapa} clickFunction={handleButtonClick} /></td>
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



    function EtapaControl({ etapa }) {
        const haveTasks = etapa.tasks.length > 0 ? true : false
        if (haveTasks) {
            return <ProgressBar tabelaRelacionada={"ConstructionPhase"} etapaStatus={etapa.status} etapaId={etapa.id} tasks={etapa.tasks} />
        } else {
            return <StatusButton obj={etapa} clickFunction={handleButtonClick} />

        }
    }





    return (
        <div className="table-responsive">
            <Toaster richColors />
            <table className="table table-striped table-hover align-middle">
                <thead className="table-dark">
                    <tr>
                        <th style={{ width: "5%" }}></th>
                        <th>Etapa</th>
                        <th>Status</th>
                        <th>Início</th>
                        <th>Previsão de Término</th>
                        <th>Progresso
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {etapas.map((etapa) => (
                        <TableRow key={etapa.id} etapa={etapa} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

