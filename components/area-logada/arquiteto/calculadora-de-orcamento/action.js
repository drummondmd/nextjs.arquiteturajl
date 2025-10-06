import formatMoney from "@/lib/utilis/formatMoney";

export default async function calcOrcamento(prev, formData) {

    const entradas = Object.fromEntries(formData.entries());


    ///honorario de base
    let bh = cubFunction(entradas.tipo, entradas.padrao)


    ///indice de complexidade, média das complexidads.
    const complexidadeItens = ['porte-projeto', 'escopo-projeto', 'prazo-projeto', 'controle-custo-projeto', 'intervencao-cliente','grau-detalhamento','aprovacoes']
    const complexidadevalue = complexidadeItens.map((item) => + entradas[item]).reduce((a, c) => c + a, 0) / complexidadeItens.length
    ///fator percentul ajustado para mercado.
    let fpAjustado = {}
    Object.keys(fp).forEach((key) => {
        fpAjustado[key] = fp[key] * (entradas["fator-correcao"] || 1)

    })

    ///fator percentual do projeto em especifico
    function fpCalc (complexidade){
        let fp = ""
        if (complexidade <= 0.85) {
            fp = fpAjustado.baixo
        } else if (complexidade >= 0.86 & complexidade < 1) {
            fp = fpAjustado.medio
        } else if (complexidade >= 1 & complexidade < 1.16) {
            fp = fpAjustado.alto
        } else {
            fp = fpAjustado.especial
        }
        return fp

    }
    const fpProjeto = fpCalc(complexidadevalue)


    const valor = entradas["amb"] *bh * fpProjeto





    return { result: formatMoney(valor)  }
}

///valores "estaticos"

let cub = {
    r1B: 2193.59,
    r1N: 2608.87,
    r1A: 3262.18,
    cal8N: 2510.98,
    cal8A: 2712.08
}

let cubAjustado = {
    r1B: cub.r1B,
    r1N: cub.r1N * 1.5,
    r1A: cub.r1A * 2,
    cal8N: cub.cal8N,
    cal8A: cub.cal8A * 1.5

}

let fp = {
    baixo: 0.0733,
    medio: 0.0839,
    alto: 0.0961,
    especial: 0.11
}

///funções utilitarias
function cubFunction(tipo, padrao) {
    let bh = ""
    if (tipo == "residencial") {
        switch (padrao) {
            case ("baixo"):
                bh = cubAjustado.r1B
                break;
            case ("normal"):
                bh = cubAjustado.r1N
                break;
            case ("alto"):
                bh = cubAjustado.r1A
                break;
        }
    } else if (tipo == "comercial") {
        switch (padrao) {
            case ("normal"):
                bh = cubAjustado.cal8N
                break;
            case ("alto"):
                bh = cubAjustado.cal8A
                break;
        }

    } else {
        console.error("erro")

    }

    return bh

}

