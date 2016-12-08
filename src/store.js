import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export const store = createStore(() => {}, undefined,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
)
