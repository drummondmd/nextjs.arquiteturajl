    ///util function para transformar string de data um UTC na data atual (brasilia)
    /**
     *
     * @param {string} dadateFromDBteString - Data do banco de dados
     * @returns {date} - Retorna data para ser usada no date-fns, se não tiver definido retorna data de hoje
     */
    export default function convertToLocalDate(dateFromDB) {

        ///today
        const today = new Date()

        ///se data não existir ou qualquer problema na data  considerar como hoje para segurança.
        if (!dateFromDB) {
            return today
        }


        // 1. Extraia os componentes da data em UTC para evitar a conversão de fuso horário.
        const year = dateFromDB.getUTCFullYear(); // ex: 2025
        const month = dateFromDB.getUTCMonth();   // ex: 6 (Julho é o mês 6, pois começa em 0)
        const day = dateFromDB.getUTCDate();     // ex: 19


        return new Date(year, month, day)
    }
