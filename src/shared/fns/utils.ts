import { YesNoError } from "../types";

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

export const toLowerCaseYesNoError = (word: string): YesNoError => {
    switch (word) {
        case 'Yes':
        case 'yes':
            return 'yes';
        case 'No':
        case 'no':
            return 'no';
        default:
            return 'error';
    }
}