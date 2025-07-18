'use client'

import { useRouter } from "next/navigation"
import { format } from "date-fns";
import { formatarDataBR } from "@/lib/utilis/formatDate";


export default function TableOrcamentos({ user, tipo_usuario }) {
    const itens = user.budgets


    const router = useRouter()

    function TableCliente({ orcamentos }) {
        return (
            <div className="table-responsive mt-4">
                <table className="table table-hover table-bordered align-middle shadow-sm">
                    <thead className="table-primary text-center">
                        <tr>
                            <th>Título</th>
                            <th>Versão</th>
                            <th>Descrição</th>
                            <th>Data de Envio</th>
                            <th>Status</th>
                            <th>Arquivo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orcamentos.map((orcamento) => (
                            <tr key={orcamento.id}>
                                <td className="fw-semibold">{orcamento.title || '-'}</td>
                                <td>{orcamento.version|| '-'}</td>

                                <td>{orcamento.summary || '-'}</td>
                                <td>{formatarDataBR(orcamento.sentAt)}</td>
                                <td>
                                    <span className="badge bg-secondary">{orcamento.status}</span>
                                </td>
                                <td>
                                    {orcamento.arquivo_url ? (
                                        <a
                                            href={orcamento.arquivo_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-sm btn-outline-primary"
                                        >
                                            Ver PDF
                                        </a>
                                    ) : (
                                        <span className="text-muted">Sem arquivo</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }


    function TableArquiteto({ orcamentos }) {

    }

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold">Orçamentos</h2>
                <button onClick={() => router.back()} className="btn btn-secondary btn-sm">Voltar</button>
            </div>
            {itens.length === 0 && <p>Nenhum orçamento registrado</p> }
            {tipo_usuario === "cliente" && itens.length>0 && <TableCliente orcamentos={itens} />}

        </div>
    )
}