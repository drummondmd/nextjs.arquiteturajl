export default function normalizePrismaData(data) {
    if (Array.isArray(data)) {
        return data.map(normalizePrismaData);
    }

    if (data && typeof data === 'object') {
        const normalized = {};
        for (const key in data) {
            const value = data[key];

            if (value && typeof value === 'object' && 'toNumber' in value) {
                // Prisma Decimal
                normalized[key] = value.toNumber();
            } else if (value instanceof Date) {
                // Mantém a data como Date
                normalized[key] = value;
            } else {
                normalized[key] = normalizePrismaData(value);
            }
        }
        return normalized;
    }

    return data;
}