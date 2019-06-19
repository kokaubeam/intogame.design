import React from 'react'
import { renderWithRouter } from 'utils/test-utils'

import { App } from './App'
test('renders home by default', () => {
  const { getByTestId, queryByTestId } = renderWithRouter(<App />)

  getByTestId('home')
  expect(queryByTestId('not-found')).not.toBeInTheDocument()
})

test("renders Not Found for routes that don't exist", () => {
  const { getByTestId, queryByTestId } = renderWithRouter(<App />, {
    route: '/does-not-exist',
  })

  expect(queryByTestId('home')).not.toBeInTheDocument()
  getByTestId('not-found')
})
