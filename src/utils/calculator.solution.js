export function calculator() {
    const sum = (a, b) => {
        return a + b
    }
    const difference = (a, b) => {
        return a - b
    }
    const product = (a, b) => {
        return a * b
    }
    const quotient = (a, b) => {
        return a / b
    }

    const power = (a, b) => {
        return Math.pow(a, b)
    }

    const element = (a) => {
        return Math.sqrt(a)
    }

    const round = (a) => {
        return Math.round(a)
    }

    const remainder = (a, b) => {
        return a % b
    }


    return {
        sum,
        difference,
        product,
        quotient,
        power,
        element,
        round,
        remainder
    }
}

