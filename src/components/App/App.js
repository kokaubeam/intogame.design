import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../Home'
import NotFound from '../NotFound'

import { Container } from './styles'

export const App = () => {
  return (
    <Container>
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  )
}

export default App
