export const capitalize = (input: string) => {
    return input.length && input[0].toUpperCase() + input.substring(1)
}

export const capitalizeAndSpaceWords = (input: string) => {
    return input.split('').map((letter, i) => {
        if (i === 0) {
          return letter.toUpperCase();
        }
        if (letter.toUpperCase() === letter) {
          return `,${letter}`
        } else {
          return letter;
        }
    }).join('').replace(/,/g, ' ').trim();
}