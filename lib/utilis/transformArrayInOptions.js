    /**
     *
     * @param {Array} array - Array que será passado em opçoes no formField
     * @returns {Array} - retorna Array de objetos no formato especificado no form field {label:"", value:""}
     */
    export default function transformArrayinOptions(array) {
        return array.map((elem) => { return { value: elem, label: elem } })
    }
