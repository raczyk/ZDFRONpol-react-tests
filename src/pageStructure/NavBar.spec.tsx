import React from 'react'
import { render, screen } from '@testing-library/react'
import NavBar from './NavBar'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

test('click to the button redirect', () => {
    render(
        <BrowserRouter>
            <NavBar />
        </BrowserRouter>,
    )
    const linkHome = screen.getByText(/home/i)
    expect(linkHome).toBeInTheDocument()

    const employeeList = screen.getByText(/employee list/i)

    console.log(window.location.pathname)

    userEvent.click(employeeList)

    console.log(window.location.pathname)

    expect(window.location.pathname).toBe('/employees-list')
})
