import { string } from './string'

test('is snakeCase function return proper value', () => {
    const { snakeCase } = string()
    const resultSnakeCase = snakeCase('qwer iuiuie', '+')
    console.log(resultSnakeCase)
    expect(resultSnakeCase).toMatch('qwer+iuiuie')
})

test('is kebabCase function return proper value', () => {
    const stringUtil = string()
    const resultStringUtilKebabCase = stringUtil.kebabCase('a s d q')
    console.log(resultStringUtilKebabCase, 'resultStringUtilKebabCase')
    expect(resultStringUtilKebabCase).toBe('a-s-d-q')
})

test('is studly function return proper value', () => {
    const { studly } = string()
    const resultStudly = studly('a s d')
    console.log({ resultStudly })
    expect(resultStudly).toBe('ASD')
})

test('is textReverse function return proper value', () => {
    const { textReverse } = string()
    const resultReverse = textReverse('asd')
    expect(resultReverse).toBe('dsa')
})
