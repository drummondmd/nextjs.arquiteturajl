import { Fragment } from "react"

export default function EtapasProjeto({ etapas }) {
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
                    {etapas.map((etapa, index) => (
                        <Fragment key={etapa.id || `${etapa.nome}-${index}`}>
                            <tr className="text-center">
                                <td className="fw-medium">{etapa.nome}</td>
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
                                <td>{etapa.data_inicio || "-"}</td>
                                <td>{etapa.data_prevista_fim || "-"}</td>
                            </tr>
                            {etapa.observacao && (
                                <tr>
                                    <td colSpan="4" className="bg-light small text-muted px-4 py-2">
                                        <strong>Observações:</strong> {etapa.observacao}
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