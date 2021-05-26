import React from 'react'
import { Route, Switch } from 'react-router';
import { createGlobalStyle } from 'styled-components'

import SearchPage from './pages/SearchPage/SearchPage';
import OffersPage from './pages/OffersPage/OffersPage';
import {
  PATH_START,
  PATH_OFFERS,
} from './routes';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
  }
`

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <GlobalStyle />
        <Switch>
          <Route exact path={PATH_START} render={() => (<SearchPage />)} />
          <Route path={PATH_OFFERS} render={() => (<OffersPage />)} />
        </Switch>
      </div>
    )
  }
}

export default App
