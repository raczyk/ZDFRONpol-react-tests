import React, { ChangeEvent, FormEvent, useState } from 'react'
import InputWarningMessage from '../common/form/InputWarningMessage'
import PageTitle from '../common/PageTitle'

const ContactFormPage2 = () => {
    const initialFormState = {
        firstName: '',
        surname: '',
    }

    const [formState, setFormState] = useState(initialFormState)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputName = event.currentTarget.name
        const newState = {
            ...formState,
            [inputName]: event.currentTarget.value,
        }
        setFormState(newState)
    }

    const fullName = `${formState.firstName} ${formState.surname}`

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        alert('A name was submitted: ' + fullName)
        e.preventDefault()
    }

    const tooFewharactersMessage = 'To few characters!'
    const resetForm = () => setFormState(initialFormState)

    const forbiddenCharacterMessage = 'You cannot use @'
    const textConstainsForbiddenSign = (text: string) => {
        return text.includes('@')
    }

    return (
        <>
            <PageTitle title="Contact from with object state" />
            <br />
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">First Name</label>
                <input
                    id="name"
                    type="text"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleInputChange}
                />
                <InputWarningMessage
                    show={textConstainsForbiddenSign(formState.firstName)}
                    message={forbiddenCharacterMessage}
                />
                <label htmlFor="surname">Surname</label>
                <input
                    id="surname"
                    type="text"
                    name="surname"
                    value={formState.surname}
                    onChange={handleInputChange}
                />
                <InputWarningMessage
                    show={formState.surname.length < 4}
                    message={tooFewharactersMessage}
                />
                <input type="submit" value="Submit" />
            </form>
            <button data-testid="reset" onClick={resetForm}>
                reset
            </button>
        </>
    )
}

export default ContactFormPage2
