export function calcularEstimativa(referencia, metragem, checkbox) {

    // const reference = [{ nome: "Alvenaria", cm: 1, cme: 2, re: 3 }, { nome: "Gesso", cm: 2, cme: 4, re: 5 }]
    ///fazer loop dos selecionados
    let calcArray = []
    checkbox.forEach((checked) => {
        referencia.forEach((refObj) => {
            if (refObj.item === checked.nome && checked.valor == true) {
                let newObj = { ...refObj } // cópia segura
                ///fazer calculo
                Object.keys(refObj).forEach((key) => {
                    if (key != "item" && key != "id") {
                        newObj[key] = refObj[key] * metragem
                    }

                })

                ///fazer o push no array do resultado
                calcArray.push(newObj)

            }

        })
    })


    function somarTotal() {
        let soma = { item: "Total", id: "x" }
        let array = Object.keys(referencia[0]).map((elem => {
            if (elem != "item" && elem != "id") {
                ////criar array dos resultados do calcArray
                let arrayOfResults = calcArray.map((arrayItem) => arrayItem[elem])
                let resultado = arrayOfResults.reduce((accum, curr) => accum + curr)

                soma[elem] = resultado
            }


        }))
        return soma
    }

    let soma =   somarTotal()

   return {calcArray,soma}

}