/**
 * Formats a number as Brazilian Real currency (R$).
 * @param {number|string} value - The value to format.
 * @returns {string} - Formatted currency string or an error message.
 */
function formatMoney(value) {

    try {
        const number = Number(value);
        if (isNaN(number)) throw new Error('Invalid number');
        return number.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    } catch (error) {
        return '---';
    }
}

export default formatMoney;