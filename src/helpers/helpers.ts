export const addMoneySeparator = (amount: string): string => {
    if (!amount) return '';
    return amount.substring(0, amount.length - 2) + "," + amount.substring(amount.length - 2, amount.length);
};

export const generatePrice = (amount: number | null, minAmount: number | null) => {
    if (!amount) return '';
    const amountWithSeparator = addMoneySeparator(amount?.toString());
    const minAmountWithSeparator = addMoneySeparator(minAmount?.toString() ?? '');

    if (minAmountWithSeparator.length) {
        return `${minAmountWithSeparator} - ${amountWithSeparator}`;
    }
    return amountWithSeparator;
};

export const isValidDuration = (value: number) => {
    return value >= 1 && value <= 1440;
};