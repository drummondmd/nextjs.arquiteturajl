import { parseISO } from "date-fns";

/**
 * Converte strings no formato yyyy-MM-dd em objetos Date (timezone local)
 * Funciona para objetos ou arrays de objetos
 */
export function convertIsoDatesInArrayObjects(input) {
  if (Array.isArray(input)) {
    return input.map(item => convertIsoDatesInArrayObjects(item));
  }

  if (typeof input === "object" && input !== null) {
    const newObj = {};
    for (const [key, value] of Object.entries(input)) {
      newObj[key] = convertIsoDatesInArrayObjects(value);
    }
    return newObj;
  }

  if (typeof input === "string" && /^\d{4}-\d{2}-\d{2}$/.test(input)) {
    return parseISO(input); // ✅ já converte para timestamp local
  }

  return input;
}
