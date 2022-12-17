import { render, screen } from '@testing-library/react'
import ClickCounter from './ClickCounter'
import userEvent from '@testing-library/user-event'

test('click to the button redirect', () => {
    render(<ClickCounter />)
    const btn = screen.getByText(/click me/i)
    expect(btn).toBeInTheDocument()

    expect(screen.getByText(/click me 0/i)).toBeInTheDocument()

    userEvent.click(btn)

    expect(screen.getByText(/click me 1/i)).toBeInTheDocument()
})
