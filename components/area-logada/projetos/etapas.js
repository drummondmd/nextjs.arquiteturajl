import { formatarDataBR } from "@/lib/utilis/formatDate"
import { Fragment } from "react"

export default function EtapasProjetoCliente({ etapas }) {

    return (

        <div className="container my-4">
            <h5 className="mb-3 fw-semibold">Etapas do Projeto</h5>
            <table className="table table-hover table-bordered border-primary align-middle">
                <thead className="table-primary text-center">
                    <tr>
                        <th>Etapa</th>
                        <th>Status</th>
                        <th>Início Previsto</th>
                        <th>Término Previsto</th>
                    </tr>
                </thead>
                <tbody>
                    {etapas.length === 0 && <tr><td colSpan={"4"}>Nenhuma etapa registrada</td></tr>}
                    {etapas.map((etapa, index) => (
                        <Fragment key={etapa.id || `${etapa.name}-${index}`}>
                            <tr className="text-center">
                                <td className="fw-medium">{etapa.name}</td>
                                <td>
                                    <span
                                        className={`badge rounded-pill ${etapa.status === "Concluído"
                                            ? "bg-success"
                                            : etapa.status === "Em andamento"
                                                ? "bg-warning text-dark"
                                                : "bg-secondary"
                                            }`}
                                    >
                                        {etapa.status}
                                    </span>
                                </td>
                                <td>{formatarDataBR(etapa.startDate) || "-"}</td>
                                <td>{formatarDataBR(etapa.expectedEndDate) || "-"}</td>
                            </tr>
                            {etapa.observacao && (
                                <tr>
                                    <td colSpan="4" className="bg-light small text-muted px-4 py-2">
                                        <strong>Observações:</strong> {etapa.notes}
                                    </td>
                                </tr>
                            )}
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>




    )
}