export function string() {
    const snakeCase = (string, glue = '_') => {
        return string
            .replace(/\W+/g, ' ')
            .split(/ |\B(?=[A-Z])/)
            .map(word => word.toLowerCase())
            .join(glue)
    }

    const kebabCase = string => {
        return snakeCase(string, '-')
    }

    const studly = string => {
        string = String(string).replace('-', ' ')
        string = string.replace('_', ' ')
        return string
            .split(' ')
            .map(str => str[0].toUpperCase() + str.substr(1).toLowerCase())
            .join('')
    }

    const ucFirst = string => {
        if (string) {
            return String(string)[0].toUpperCase() + String(string).substring(1)
        }
    }
    const ucWords = string => {
        return String(string)
            .toLowerCase()
            .replace(/\b[a-z]/g, l => l.toUpperCase())
    }

    const objectToQueryString = obj => {
        return Object.keys(obj)
            .reduce((carry, key) => {
                if (obj[key] || obj[key] === 0) {
                    return carry + `${key}=${obj[key]}&`
                }
                return carry
            }, '')
            .replace(/&+$/, '')
    }

    const textTruncate = (str, length = null, ending = null) => {
        if (length == null) {
            length = 50
        }
        if (ending == null) {
            ending = '...'
        }
        if (str.length > length) {
            return str.substring(0, length - ending.length) + ending
        } else {
            return str
        }
    }

    // TODO: 1. Add reverse character


    return {
        arguments,
        kebabCase,
        objectToQueryString,
        ucWords,
        textTruncate,
        snakeCase,
        studly,
        ucFirst,
    }
}

// TODO Add test string.spec.js file with  all  string test cases
