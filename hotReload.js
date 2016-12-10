import React from 'react'
import ReactDOM from 'react-dom'

/* eslint-disable */
import { AppContainer } from 'react-hot-loader'
/* eslint-enable*/

import { App } from './src'

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('app'),
  )
}

render()

if (module.hot) {
  module.hot.accept('./src', render)
}
