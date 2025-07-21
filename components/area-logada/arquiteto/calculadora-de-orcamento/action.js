import formatMoney from "@/lib/utilis/formatMoney";

export default async function calcOrcamento(prev, formData) {

    const entradas = Object.fromEntries(formData.entries());
    console.log(entradas)


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
        console.log("erro")

    }

    return bh

}





/*

//bh
let bh = cubFunction(tipo, padrao);

//complexidade projeeto
let compProjetoArray = $(".comp-projeto option:selected").toArray().map(elem => + elem.value)
let soma = 0
for (let i = 0; i < compProjetoArray.length; i++) {
    soma += compProjetoArray[i]
}
let compProjeto = soma / 5

///ambientes

let ambientesArray = $(".amb-nome").toArray().map((elem, index) => elem.value)
let ambientesObj = []

ambientesArray.forEach((elem, index) => {
    ambientesObj.push(
        {
            nome: elem,
            metro: +$(".amb-m2").toArray()[index].value,
            detalhamento: + $(".comp-amb-det").toArray()[index].value,
            aprovacao: +$(".comp-amb-aprov").toArray()[index].value,

        }
    )

})

/// acrescentando fp,preco a cada ambiente

ambientesObj.forEach((elem, index) => {
    let soma1 = (elem.detalhamento + elem.aprovacao) / 2;
    let soma2 = (soma1 + compProjeto) / 2;
    elem.complexidade = soma1;
    elem.complexidadeCombinada = soma2;
    let fp = fpFunction(soma2);
    elem.preco = bh * elem.metro * fp
})

///printando resultado e somando valores de ambiente.
///somando preço de ambientes


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

let ajusteMercado = 0.2
let fpAjustado = {
    baixo: fp.baixo * ajusteMercado,
    medio: fp.medio * ajusteMercado,
    alto: fp.alto * ajusteMercado,
    especial: fp.especial * ajusteMercado
}

//fator de ajuste


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
        console.log("erro")

    }

    return bh

}

function fpFunction(complexidade) {
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

*/