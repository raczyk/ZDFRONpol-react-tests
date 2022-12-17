import React from 'react'
import {
    render,
    screen,
    waitForElementToBeRemoved,
} from '@testing-library/react'
import EmployeesListPage from './EmployeesListPage'
import { BrowserRouter } from 'react-router-dom'

test('renders learn react link', async () => {
    render(
        <BrowserRouter>
            <EmployeesListPage />
        </BrowserRouter>,
    )
    const loader = screen.getByTestId('loader')

    expect(loader).toBeInTheDocument()

    await waitForElementToBeRemoved(loader)
    expect(screen.getByText(/john doe/i)).toBeInTheDocument()
})
