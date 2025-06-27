
export default function StatusGerenciamento({ user, projeto, etapas }) {

    const planejadas = etapas.filter((etapa) => etapa.status === "planejada")
    const emAndamento = etapas.filter((etapa) => etapa.status === "em_andamento")
    const concluidas = etapas.filter((etapa) => etapa.status === "concluido")
    const atrasadas = etapas.filter((etapa) => etapa.status === "atrasada")


    function Table({ array }) {
        console.log(array)
        if (array.length === 0) {
            return <p>Nenhum Item </p>
        } else {
            return (
                <table>
                    <thead>
                        <tr>
                            <td>Nome</td>
                            <td>Previsão</td>
                        </tr>
                    </thead>
                    <tbody>
                        {array.map((item) => {
                            return (
                                <tr key={item.nome_etapa}>
                                    <td>{item.nome_etapa}</td>
                                    <td>{item.data_prevista_fim}</td>

                                </tr>

                            )
                        })}

                    </tbody>
                </table>


            )

        }

    }



    return (
        <>
            <div>
                <div className="row">
                    <div className="col-lg-4">
                        Planejadas
                        <Table array={planejadas} />

                    </div>
                    <div className="col-lg-4">
                        Em Andamento
                        <Table array={emAndamento} />

                    </div>
                    <div className="col-lg-4">
                        Concluidas
                        <Table array={concluidas} /></div>
                    <div className="col-lg-4">
                        Em atraso
                        <Table array={atrasadas} />                         </div>

                </div>

            </div>

        </>

    )
}