import Offline from 'offline-plugin/runtime'
import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { store } from './store'

import Home from './components/Home'
import { Body } from './components/Styled'

if (process.env.NODE_ENV === 'production') Offline.install()

export const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Body>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Body>
    </BrowserRouter>
  </Provider>
)

if (!module.hot) render(<Root />, document.querySelector('react'))
