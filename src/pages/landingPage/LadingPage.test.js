import React from 'react'
import { render, screen } from '@testing-library/react'
import LandingPage from './LandingPage'
import { MemoryRouter } from 'react-router-dom'

describe('Render landing page', () => {
    it('render titlge GAME', () => {
        render(
            <MemoryRouter>
                <LandingPage />
            </MemoryRouter>
        )
        const title = screen.getByTestId('title')
        expect(title).toBeInTheDocument()
        expect(title).toHaveTextContent('VIDEO GAME')
    })
})