import { calculator } from "./calculator"

test("is sum function return proper value", () => {
    const { sum } = calculator()
    const resultSum = sum(5, 3)
    console.log({ resultSum })
    expect(resultSum).toBe(8)
})

test("is difference function return proper value", () => {
    const cal = calculator()
    const resultDifference = cal.difference(5, 3)
    console.log({ resultDifference })
    expect(resultDifference).toBe(2)
})

// TODO Add tests for all calculator utils