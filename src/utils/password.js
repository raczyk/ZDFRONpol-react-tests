export function isStrongPassword(password) {
    return password.length >= 6 && /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/.test(password)
}