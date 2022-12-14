import { string } from "./string.solution"

test("is snakeCase function return proper value", () => {
    const { snakeCase } = string()
    expect(snakeCase("a s d", "_")).toBe("a_s_d")
})

test("is kebabCase function return proper value", () => {
    const { kebabCase } = string()
    expect(kebabCase("a s d")).toBe("a-s-d")
})

test("is studly function return proper value", () => {
    const { studly } = string()
    expect(studly("a s d")).toBe("ASD")
})

test("is ucFirst function return proper value", () => {
    const { ucFirst } = string()
    expect(ucFirst("asd")).toBe("Asd")
})

test("is ucWords function return proper value", () => {
    const { ucWords } = string()
    expect(ucWords("asd 123")).toBe("Asd 123")
})

test("is objectToQueryString function return proper value", () => {
    const obj = {
        page: "1",
        limit: "50"
    }
    const { objectToQueryString } = string()
    expect(objectToQueryString(obj)).toBe("page=1&limit=50")
})

test("is textTruncate function return proper value", () => {
    const txt = "Lorem Ipsum is"
    const { textTruncate } = string()
    expect(textTruncate(txt, 10, "...")).toBe("Lorem I...")
})
test("is textReverse function return proper value", () => {
    const { textReverse } = string()
    expect(textReverse("0987654321")).toBe("1234567890")
})