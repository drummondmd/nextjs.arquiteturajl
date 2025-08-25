import { Label } from "recharts"

/**
 *
 * @param {Array} array - Array que será passado em opçoes no formField
 * @returns {Array} - retorna Array de objetos no formato especificado no form field {label:"", value:""}
 */
export default function transformArrayinOptions(array: string[] | object[]) {
    const arrayType = typeof array[0]
    if (arrayType === "string") {
        return array.map((elem) => { return { value: elem, label: elem } })
    }else{
        ///presumir que é objeto, a principio só de cliente, mas depois pode reajustar
        return array.map((elem)=>{return{value:elem.id,label:`${elem.profile.firstName} ${elem.profile.lastName} `}})

    }
}
