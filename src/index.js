// App
import App from './app'
import React from 'react'
import { render } from 'react-dom'

// Redux
import { Provider } from 'react-redux'

// Store
import store from './store'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
)