export const capitalize = (input: string) => {
    return input.length && input[0].toUpperCase() + input.substring(1)
}

export const pascalToTitleCase = (input: string) => {
    return input.split('').map((letter, i) => {
        if (i === 0) {
          return letter.toUpperCase();
        }
        if (letter.toUpperCase() === letter) {
          return ` ${letter}`
        } else {
          return letter;
        }
    }).join('').trim();
}

export const pascalToDashCase = (input: string) => {
    return input.split('').map((letter, i) => {
        if (i === 0) {
          return letter.toUpperCase();
        }
        if (letter.toUpperCase() === letter) {
          return `-${letter}`
        } else {
          return letter;
        }
    }).join('').trim();
}

export const dashCaseToTitleCase = (input: string) => {
    return input.split('-').map(word => capitalize(word)).join(' ');
}