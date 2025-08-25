/**
 *
 * @param {Array} arr - array de numeros para ser comparado
 * @returns {boolean} true or false
 */


export default function isSequential(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return false;
    if (arr[0] != 1) return false;
    if(arr.length ===1 && arr[0] === 1) return true;

    const step = arr[1] - arr[0];

    if (Math.abs(step) !== 1) return false;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + step) {
            return false;
        }

    }

    return true;
}
