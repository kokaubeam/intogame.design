import React, { useEffect } from 'react'
import { Container, Heading } from './styles'

export const HomePage = () => {
  useEffect(() => {
    document.title = 'Into Game Design'
  })

  return (
    <Container data-testid='home'>
      <Heading>Into Game Design</Heading>

      <p>
        A project to invite those with the desire to create interactive media
        into the craft of game design.
      </p>
    </Container>
  )
}

export default HomePage
