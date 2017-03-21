import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer as Hot } from 'react-hot-loader'

import { App } from '../src'

const render = () => {
  ReactDOM.render(<Hot><App /></Hot>, document.querySelector('react'))
}

render()

module.hot.accept('../src', render)
