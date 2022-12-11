import { isStrongPassword } from "./password"

test("is isStrongPassword return false", () => {
    const password = isStrongPassword("123")
    expect(password).toBeFalsy()
})

test("is isStrongPassword return true", () => {
    const password = isStrongPassword("Probl#m1")
    console.log(password)
    expect(password).toBe(true)
})

test("is isStrongPassword has to be minimum 6 characters", () => {
    expect(isStrongPassword('A@!SAfs1')).toBe(true)
})

describe("isStrongPassword check is allow strong passwords", () => {
    const allowedPasswords = ["Probl#m1", "A@!SAfs1", "A@!SAfs134", "A!@#@SAfs1"]
    const disAllowedPasswords = ['', '123', '1234567', '!@#@', "DSE23@"]
    allowedPasswords.forEach((pass) => {
        console.log({ pass })
        it(`"${pass}" should be allow`, () => {
            expect(isStrongPassword(pass)).toBeTruthy()
        })
    })

    disAllowedPasswords.forEach((pass) => {
        console.log({ pass })
        it(`"${pass}" should be disallow`, () => {
            expect(isStrongPassword(pass)).toBeFalsy()
        })
    })

})
