export const capitalize = (input: string) => {
    return input.length && input[0].toUpperCase() + input.substring(1)
}

export const noop = () => {};

export const getPercentValue = (amount: number, percent: number) => {
    return amount *= percent / 100
}

export const getPercentOffValue = (amount: number, percent: number) => {
    return amount *= (1 - (percent / 100));
}

export const getOriginalValue = (amount: number, discount: number) => {
    return (amount * 100) / discount;
}