import React from 'react'
import { render, screen } from '@testing-library/react'
import HomePageApp from './HomePage'

test('renders learn react link', () => {
    render(<HomePageApp />)
    const linkElement = screen.getByText(/link/i)
    expect(linkElement).toBeInTheDocument()
})
