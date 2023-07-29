import { isStrongPassword } from './password'

describe('isStrongPassord check is allow strong passwords', () => {
    const allowedPasswords = [
        'Probl#m1',
        'A@!SAfs1',
        'A@!SAfs123',
        'A@#@S!SAfs1',
    ]
    const disAllowedPasswords = ['', '123', 'Dsse', 'dsS!SA1']
    allowedPasswords.forEach(pass => {
        it(`"${pass}" should be  allow `, () => {
            expect(isStrongPassword(pass)).toBeTruthy()
        })
    })
    disAllowedPasswords.forEach(pass => {
        it(`"${pass}" should be disallow`, () => {
            expect(isStrongPassword(pass)).toBeFalsy()
        })
    })
})
