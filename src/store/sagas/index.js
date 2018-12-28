import { takeEvery, takeLatest, all, put, call } from 'redux-saga/effects'
import { storageSet, storageDestroy } from '../../utils/index'
// import { Authenticate } from '../../services/chat_service'

import Axios from 'axios'

const sagas = function* sagas(cableService) {
  yield all([

    takeEvery('CREATE_MESSAGE', function* (action) {
      cableService.submit(action)
      yield put({ type: 'TYPE_MESSAGE_INPUT', payload: { value: '' }})
    }),

    takeLatest('CREATE_CONVERSATION', function* (action) {
      yield put({ type: 'SET_CURRENT_CONVERSATION', payload: action.payload })
    }),

    takeLatest('SUBMIT_AUTH', function* (action) {
      try {
        const auth = yield call((data) => Axios.post('http://localhost:3000/authentication', data), action.payload)
        yield put({type: "AUTH_SUCCESS", payload: auth.data })
      } catch (error) {
        yield put({type: "AUTH_ERROR", payload: error.response })
      }
    }),

    takeLatest('VALIDATE_AUTH', function* (action) {
      try {
        yield call((data) => Axios.post('http://localhost:3000/authentication/validation', data), { token: action.payload })

        // State
        yield put({ type: "SET_USER_VALIDATE", payload: true })

        // Socket
        cableService.perform(action.payload)

      } catch (error) {
        yield put({ type: "SET_USER_VALIDATE", payload: false })
      }
    }),

    takeLatest('AUTH_SUCCESS', function* (action) {
      // Browser
      storageSet('CHAT_USER_TOKEN', action.payload.token)
      storageSet('CHAT_USER_DATA', action.payload.data)

      // Socket
      cableService.perform(action.payload.token)

      // State
      yield put({ type: "SET_USER_DATA", payload: { ...action.payload, valid: true }})
    }),

    takeLatest('CREATE_GROUP', function* (action) {
      cableService.submit(action)
    }),

    takeLatest('CREATE_USER', function* (action) {
      try {
        const user = yield call((data) => Axios.post('http://localhost:3000/user', data), action.payload)
        yield put({type: "AUTH_SUCCESS", payload: user.data })
      } catch (error) {
        yield put({type: "AUTH_ERROR", payload: error.response })
      }
    }),

    takeEvery('SET_CURRENT_CONVERSATION', function*(action){
      document.querySelector('.page__wrapper').classList.toggle('page__mobile-menu--open')
      yield put({type: "SET_NAVBAR_OPTION", payload: 'CONVERSATIONS' })
    }),

    takeEvery('LOGOUT', function*(action){
      storageDestroy('CHAT_USER_TOKEN')
      storageDestroy('CHAT_USER_DATA')
    })

  ]);
}

export default sagas