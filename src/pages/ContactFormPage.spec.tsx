import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import ContactFormPage from './ContactFormPage'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

test('renders learn react link', async () => {
    window.alert = jest.fn()

    render(
        <BrowserRouter>
            <ContactFormPage />
        </BrowserRouter>,
    )
    expect(screen.getByText(/form with two states/i)).toBeInTheDocument()
    const nameInput = screen.getByText(/first name/i)
    userEvent.type(nameInput, 'Jan')

    const surnameInput = screen.getByText(/first name/i)
    userEvent.type(surnameInput, 'Kowalski')

    const btnButton = screen.getByRole('button', {
        name: /submit/i,
    })
    userEvent.click(btnButton)

    await waitFor(() => {
        expect(window.alert).toHaveBeenCalledTimes(1)
    })
})
