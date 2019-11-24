import React from 'react'
import { render } from 'utils/test-utils'
import { axe } from 'jest-axe'

import Home from './Home'

test('content is accessible', async () => {
  const { container } = render(<Home />)
  const results = await axe(container)

  expect(results).toHaveNoViolations()
})

test('renders the content', () => {
  const { getByText } = render(<Home />)

  getByText(/a project to invite/i)
})

test('sets the title', () => {
  render(<Home />)

  expect(document.title).toBe('Into Game Design')
})
