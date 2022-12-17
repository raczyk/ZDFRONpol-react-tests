import React, { ChangeEvent, FormEvent, useState } from 'react'
import PageTitle from '../common/PageTitle'

const ContactFormPage = () => {
    const [firstName, setFirstName] = useState('')
    const [surname, setSurname] = useState('')

    const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.currentTarget.value)
    }

    const handleSurnameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSurname(event.currentTarget.value)
    }

    const fullName = `${firstName} ${surname}`

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        alert('A name was submitted: ' + fullName)
        e.preventDefault()
    }

    return (
        <>
            <PageTitle title="Form with two states" />
            <br />
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">First Name</label>
                <input
                    id="name"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={handleFirstNameChange}
                />

                <label htmlFor="surname">Surname</label>
                <input
                    id="surname"
                    type="text"
                    name="surname"
                    value={surname}
                    onChange={handleSurnameChange}
                />

                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default ContactFormPage
