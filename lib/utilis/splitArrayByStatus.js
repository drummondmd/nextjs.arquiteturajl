import { endOfWeek, isSameMonth, isSameWeek, isToday } from "date-fns";
import convertToLocalDate from "@/lib/utilis/convertToLocalDate"



/**
 *
 * @param {Array} array - array que vai ser dividido
 * @returns {Object} - Objeto separado por status ou data.
 */


export default function splitArrayByStatus(array) {
    const today = new Date()
    let splitedObject = {}


    ///atrasados,concluidos e cancelados
    splitedObject["atrasado"] = array.filter((item) => item.status == "atrasado")
    splitedObject["concluido"] = array.filter((item) => item.status == "concluido")
    splitedObject["cancelado"] = array.filter((item) => item.status == "cancelado")

    //// para hoje (todos que estão em andamento)
    splitedObject["hoje"] = array.filter((item) => item.status == "em_andamento")

    ///os planejados, separar por hoje, semana e mes.
    const planejados = array.filter((item) => item.status == "planejado")

    ///definir objetos vazios para fazer push depois
    splitedObject["semana"] = []
    splitedObject["mes"] = []
    splitedObject["adiante"] = []

    ///forEach dos itens para ver se é hoje,semana ou mes ou adiante
    planejados.forEach(element => {
        // console.log(isSameWeek(today,convertToLocalDate(element.startDate)),element.startDate)
        ///checar se data de inicio ou prevista de fim é hoje, se for colocar no array
        if (isToday(convertToLocalDate(element.startDate)) || isToday(convertToLocalDate(element.expectedEndDate))) {
            splitedObject["hoje"].push(element)
        } else if (isSameWeek(today, convertToLocalDate(element.startDate))) {
            splitedObject["semana"].push(element)

        } else if (isSameMonth(today, convertToLocalDate(element.startDate))) {
            splitedObject["mes"].push(element)
        }
        else {
            splitedObject["adiante"].push(element)
        }

    });

    // splitedArray.push(
    //     {
    //         status: `Hoje - ${formatarDataBR(today)}`,
    //         itens: array.filter((item) => item.status == "em_andamento")
    //     }
    // )

    // /////acrescentar os planejados que estão para iniciar hoje.
    // splitedArray[1].itens.push(
    //     planejados.filter((item) => isToday(item.startDate))
    // )
    // // console.log(planejados.map((item)=> isToday(item.startDate)))





    // ///em andamento ou planejados.

    // splitedArray.push(
    //     {
    //         status: "Planejados -teste",
    //         itens: planejados
    //     }
    // )


    // const enumStatus = ['atrasado', 'planejado', 'em_andamento',]
    // enumStatus.forEach((status) => {
    //     splitedArray.push(
    //         {
    //             status: status,
    //             itens: array.filter((item) => item.status == status)
    //         }
    //     )
    // })
    return splitedObject
}