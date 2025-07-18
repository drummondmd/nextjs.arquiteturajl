import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

/**
 * Formata uma data no padrão brasileiro.
 *
 * @param {Date|string|null|undefined} date - A data a ser formatada
 * @param {string} formato - O formato desejado (padrão: 'dd/MM/yyyy')
 * @returns {string} - A data formatada ou "-" se inválida
 */
export function formatarDataBR(date, formato = 'dd/MM/yyyy') {
  try {
    if (!date) return '-';
    const parsedDate = typeof date === 'string' ? new Date(date) : date;
    if (isNaN(parsedDate.getTime())) return '-';
    return format(parsedDate, formato, { locale: ptBR });
  } catch (e) {
    return '-';
  }
}
