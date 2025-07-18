import { formatarDataBR } from "@/lib/utilis/formatDate";
import { Fragment } from "react";

export default function DocumentosGrid({ arrayOfDocuments, role }) {

    if (arrayOfDocuments.length === 0) {
        return <p>Nenhum documento anexado.</p>
    }

    function Cliente({ arrayOfDocuments }) {

        return (
            <div className="table-responsive mt-4">
                <table className="table table-hover table-bordered align-middle shadow-sm">
                    <thead className="table-primary text-center">
                        <tr>
                            <th>Nome do Arquivo</th>
                            <th>Tipo</th>
                            <th>Data:</th>
                            <th>Baixar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arrayOfDocuments.map((documento, index) => (
                            <Fragment key={documento.id || `${documento.name}-${index}`}>


                                <tr key={documento.id}>
                                    <td className="fw-semibold">{documento.name || '-'}</td>
                                    <td>{documento.type || '-'}</td>
                                    <td className="text-center">{formatarDataBR(documento.uploadedAt)}</td>
                                    <td className="text-center">
                                        {documento.link ? (
                                            <a
                                                href={documento.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-sm btn-outline-primary"
                                            >
                                                Ver Arquivo
                                            </a>
                                        ) : (
                                            <span className="text-muted">Sem arquivo</span>
                                        )}
                                    </td>
                                </tr>
                                {documento.descricao_documento && (
                                    <tr>
                                        <td colSpan="4" className="bg-light small text-muted px-4 py-2">{documento.descricao_documento}</td>
                                    </tr>
                                )
                                }
                            </Fragment>
                        ))}

                    </tbody>
                </table>
            </div>
        );

    }

    function Arquiteto({ arrayOfDocuments }) {


    }


    if (role === "arquiteto") {
        return <Arquiteto arrayOfDocuments={arrayOfDocuments} />
    } else {
        return <Cliente arrayOfDocuments={arrayOfDocuments} />
    }

}