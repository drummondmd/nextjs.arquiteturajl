'use client'

export default function CalculadoraDeOrcamentoGrid() {





    return (
        <div className="flex mx-auto my-4 ">

            <div className="col" id="novo-orcamento">
                <div className="container-fluid">
                    <p className="font-semibold">Calculadora de Orçamento</p>

                    <form id="orcamento-form">
                        <div className="row">
                            <div className="form-group col-md-3 ">
                                <label htmlFor="tipo">Tipo de Estabelecimento</label>
                                <select id="tipo" className="form-select mb-3" defaultValue={"residencial"}>
                                    <option value="residencial">Residencial</option>
                                    <option value="comercial">Comercial</option>
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="padrao">Padrão de construção:</label>
                                <select id="padrao" className="form-select mb-3" defaultValue={"normal"}>
                                    <option value="baixo">Baixo padrão</option>
                                    <option value="normal">Normal</option>
                                    <option value="alto">Alto padrão</option>
                                </select>
                            </div>

                        </div>
                        <hr></hr>


                        <p>Grau de Complexidade do projeto:</p>
                        <div className="row mt-4">
                            <div className="form-group col-md-2">
                                <label htmlFor="porte-projeto">Porte do Projeto:</label>
                                <select name="" id="porte-projeto" className="comp-projeto form-select" defaultValue={"1"}>
                                    <option value="0.7">Baixo</option>
                                    <option value="1" >Normal</option>
                                    <option value="1.3">Alto</option>
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="escopo-projeto">Indefinição de Escopo</label>
                                <select name="" id="escopo-projeto" className="comp-projeto form-select" defaultValue={"1"}>
                                    <option value="0.7">Baixo</option>
                                    <option value="1" >Normal</option>
                                    <option value="1.3">Alto</option>
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="prazo-projeto">Indefinição de Prazo</label>
                                <select name="" id="prazo-projeto" className="comp-projeto form-select" defaultValue={"1"}>
                                    <option value="0.7">Baixo</option>
                                    <option value="1" >Normal</option>
                                    <option value="1.3">Alto</option>
                                </select>
                            </div>
                            <div className="row mt-2 align-items-end">
                                <div className="form-group col-md-2">
                                    <label htmlFor="grau-custo-projeto">Controle de custo</label>
                                    <select name="" id="grau-custo-projeto" className="comp-projeto form-select" defaultValue={"1"}>
                                        <option value="0.7">Baixo</option>
                                        <option value="1" >Normal</option>
                                        <option value="1.3">Alto</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="grau-intervencao-projeto">Intervenção do Cliente:</label>
                                    <select name="" id="grau-custo-projeto" className="comp-projeto form-select" defaultValue={"1"}>
                                        <option value="0.7">Baixo</option>
                                        <option value="1" >Normal</option>
                                        <option value="1.3">Alto</option>
                                    </select>
                                </div>



                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-8 m-4">
                                <hr />
                            </div>
                        </div>

                        <div className="row align-items-end">
                            <div className="form-group col-md-4">
                                <label className="form-label" htmlFor="number">Metragem:</label>
                                <input className="form-control" type="number"
                                    placeholder="M2 do espaço, se descoberto colocar 1/4" id="amb" min="1" max="999" />
                            </div>
                        </div>



                        <div className="row">
                            <div className="col-md-10 m-4">
                                <hr />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <label className="form-label" htmlFor="grau-detalhamento-${i + 1}">Grau de
                                    detalhamento</label>
                                <select className="form-control comp-amb-det" name="" id="grau-detalhamento-${i + 1}" defaultValue={"1"}>
                                    <option value="0.7">Baixo</option>
                                    <option value="1" >Normal</option>
                                    <option value="1.3">Alto</option>
                                </select>
                            </div>
                            <div className="col">
                                <label className="form-label" htmlFor="necessidade-aprovacao-${i + 1}">Qnt. de
                                    aprovações</label>
                                <select className="form-control comp-amb-aprov" name="" id="necessidade-aprovacao-${i + 1}" defaultValue={"1"}>
                                    <option value="0.7">Baixo</option>
                                    <option value="1" >Normal</option>
                                    <option value="1.3">Alto</option>
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-8 m-4">
                                <hr />
                            </div>

                        </div>

                    </form>
                    <div>
                        <button className="btn btn-primary" id="calcular-orcamento">Calcular Orçamento</button>
                    </div>
                </div>
            </div >
        </div>
    )

}