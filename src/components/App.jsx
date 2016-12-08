import React from 'react'
import { BrowserRouter as Router, Match, Miss, Link } from 'react-router'
import { Provider } from 'react-redux'

import { store } from '../store'

import Home from './Home'

export default () => (
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li><Link to="/yolo">Yolo</Link></li>
          <li><Link to="/toto">Toto</Link></li>
        </ul>
        <hr />
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/yolo" render={() => (<div>Yolo</div>)} />
        <Match pattern="/toto" render={() => (<div>Toto</div>)} />
        <Miss
          render={({ location }) => (
            <div>Nothing matched {location.pathname}.</div>
          )}
        />
      </div>
    </Router>
  </Provider>
)
