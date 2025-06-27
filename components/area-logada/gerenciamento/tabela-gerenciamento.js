'use client'

import { Fragment, useState } from "react"
import classes from "./tabela-gerenciamento.module.css"

export default function TabelaGerenciamento({ user, etapas, projeto }) {

    function TableRow({ etapa }) {
        const [expandir, setExpandir] = useState(false)

        return (
            <Fragment key={etapa.id} >
                {/* etapas,detalheas,subetapas e detalhes de subetapas */}
                <tr className={`${classes[etapa.status]}`}>
                    <td><button onClick={() => setExpandir(!expandir)}>Expandir</button></td>
                    <td>{etapa.nome_etapa}</td>
                    <td>{etapa.status}</td>
                    <td>{etapa.data_inicio}</td>
                    <td>{etapa.data_prevista_fim}</td>
                    <td><button>Finalizar</button><button>Em andamento</button><button>cancelar</button></td>
                </tr>
                {expandir &&
                    <>
                        {etapa.observacoes && <tr style={{backgroundColor:"grey"}}><td colSpan={"6"}>Observação:{etapa.observacoes}</td></tr>}
                        {etapa.orcamento && <tr style={{backgroundColor:"grey"}}><td colSpan={"6"}>Orçamento: {etapa.orcamento}</td></tr>}
                        {etapa.subEtapas.length > 0 &&
                            <Fragment>
                                <tr><td colSpan={"2"}><strong>Subetapas:</strong></td></tr>
                                {etapa.subEtapas.map((subetapa) => {
                                    return (
                                        <Fragment key={subetapa.id}>
                                            <tr className={classes[subetapa.status]}>
                                                <td style={{backgroundColor:"white"}}></td>
                                                <td>{subetapa.nome_subitem}</td>
                                                <td>{subetapa.status}</td>
                                                <td>{subetapa.data_inicio}</td>
                                                <td>{subetapa.data_prevista_fim}</td>
                                                <td>Funções</td>
                                            </tr>
                                            <tr className={classes[subetapa.status]}>
                                                <td style={{backgroundColor:"white"}}></td>
                                                <td colSpan={"6"}>{subetapa.observacoes}</td>

                                            </tr>
                                        </Fragment>
                                    )

                                })}
                            </Fragment>
                        }







                    </>
                }
                <tr><td></td></tr>






            </Fragment>

        )






    }

    return (
        <div>
            <table className="" cellPadding={"10"} style={{borderCollapse:"separate",borderSpacing:"1px"}}>
                <thead>
                    <tr>
                        <td></td>
                        <td>Etapa:</td>
                        <td>Status</td>
                        <td>Data Inicio</td>
                        <td>Data Prevista de Finalização </td>
                        <td>Funções</td>
                    </tr>
                </thead>
                <tbody>


                    {etapas.map((etapa, index) => <TableRow key={etapa.id} etapa={etapa} />)}


                </tbody>




            </table>
        </div>
    )
}