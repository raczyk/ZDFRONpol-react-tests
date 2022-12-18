import { calculator } from './calculator'

test('is sum function return proper value', () => {
    const { sum } = calculator()
    const resultSum = sum(5, 3)
    expect(resultSum).toBe(8)
})

test('is difference function return proper value', () => {
    const cal = calculator()
    const resultDifference = cal.difference(5, 3)
    expect(resultDifference).toBe(2)
})

test('is round function retunr proper  value', () => {
    const { round } = calculator()
    const resultRound = round(2.7668567)
    expect(resultRound).toBe(3)
})

test('is remainder function return proper value', () => {
    const { remainder } = calculator()
    const resultRemainder = remainder(13, 5)
    expect(resultRemainder).toBe(3)
})

test('is exponent function return proper value', () => {
    const { exponent } = calculator()
    const resultExponent = exponent(5, 2)
    expect(resultExponent).toBe(25)
})

// TODO Add tests for all calculator utils
