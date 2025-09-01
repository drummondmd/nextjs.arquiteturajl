import { formatarDataBR } from "@/lib/utilis/formatDate";
import Link from "next/link";
import { Fragment } from "react";

export default function DocumentosGrid({ arrayOfDocuments, role }) {

    console.log(role === "arquiteto")


    if (arrayOfDocuments.length === 0) {
        return (
            <div>
                {role === "arquiteto" && (
                    <Link href={"/arquiteto/documentos/add"}>
                        <button className="btn btn-secondary p-2 mb-2">Adionar novo documento
                        </button>
                    </Link>

                )}
                <p>Nenhum documento anexado.</p>

            </div>

        )
    }

    function Cliente({ arrayOfDocuments }) {

        return (
            <div className="table-responsive mt-4">
                {role === "arquiteto" && (
                    <Link href={"/arquiteto/documentos/add"}>
                        <button className="btn btn-secondary p-2 mb-2">Adionar novo documento
                        </button>
                    </Link>

                )}






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

    return <Cliente arrayOfDocuments={arrayOfDocuments} />
}

