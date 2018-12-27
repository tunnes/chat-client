// Redux
import reducers from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'

// Saga
import sagas from './sagas'
import createSagaMiddleware from 'redux-saga'

// Services
import CableService from '../services/cable_service'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)

const cableService = new CableService(store.dispatch)

sagaMiddleware.run(sagas, cableService)

export default store