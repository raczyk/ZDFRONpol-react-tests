
import { calculator } from "./calculator.solution"

test("is sum function return proper value", () => {
    const { sum } = calculator()
    expect(sum(2, 2)).toBe(4)
})

test("is difference function return proper value", () => {
    const { difference } = calculator()
    expect(difference(4, 2)).toBe(2)
})

test("is product function return proper value", () => {
    const { product } = calculator()
    expect(product(4, 2)).toBe(8)
})

test("is quotient function return proper value", () => {
    const { quotient } = calculator()
    expect(quotient(4, 2)).toBe(2)
})

test("is power function return proper value", () => {
    const { power } = calculator()
    expect(power(4, 2)).toBe(16)
})

test("is element function return proper value", () => {
    const { element } = calculator()
    expect(element(4, 2)).toBe(2)
})

test("is round function return proper value", () => {
    const { round } = calculator()
    expect(round(4.21312342)).toBe(4)
    expect(round(4.61312342)).toBe(5)
})

test("is remainder function return proper value", () => {
    const { remainder } = calculator()
    expect(remainder(13, 5)).toBe(3)
    expect(remainder(1, -2)).toBe(1)
})
