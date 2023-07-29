import {
    render,
    screen,
    waitForElementToBeRemoved,
} from '@testing-library/react'
import EmployeesListPage from './EmployeesListPage'
import { BrowserRouter } from 'react-router-dom'

test('employee data has been fetched properly', async () => {
    render(
        <BrowserRouter>
            <EmployeesListPage></EmployeesListPage>,
        </BrowserRouter>,
    )
    expect(screen.getByText(/emloyee list/i)).toBeInTheDocument()
    const loader = screen.getByTestId('loader')
    await waitForElementToBeRemoved(loader)
    const productionWorkerText = screen.getAllByText('Production worker')
    console.log(productionWorkerText)

    expect(productionWorkerText.length).toBe(2)
}, 10000)
