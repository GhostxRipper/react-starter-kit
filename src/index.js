import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Match, Miss, Link } from 'react-router'
import { Provider } from 'react-redux'

import { store } from './store'

import Home from './components/Home'

export const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li><Link to="/yolo">Yolo</Link></li>
          <li><Link to="/toto">Toto</Link></li>
        </ul>
        <hr />
        <Match exactly pattern="/" component={Home} />
        <Match exactly pattern="/yolo" render={() => (<div>Yolo</div>)} />
        <Match exactly pattern="/toto" render={() => (<div>Toto</div>)} />
        <Miss
          render={({ location }) => (
            <div>
              Nothing matched
              <pre style={{ display: 'inline' }}>{location.pathname}</pre>.
            </div>)}
        />
      </div>
    </Router>
  </Provider>
)

if (!module.hot) render(<App />, document.getElementById('app'))
