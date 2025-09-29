import { Label } from "recharts"

/**
 *
 * @param {Array} array - Array que será passado em opçoes no formField
 * @returns {Array} - retorna Array de objetos no formato especificado no form field {label:"", value:""}
 */
export default function transformArrayinOptions(array: string[] | Array<{ id: string, profile: { firstName?: string, lastName?: string } }>): { value: string, label: string }[] {

    const isArrayOfStrings = array.every(elem => typeof elem === "string")

    if (isArrayOfStrings) {
        return array.map((elem) => { return { value: elem, label: elem } })
    } else {
        ///presumir que é objeto, a principio só de cliente, mas depois pode reajustar
        return array.map((elem) => { return { value: elem.id, label: `${elem.profile.firstName} ${elem.profile.lastName} ` } })

    }
}
