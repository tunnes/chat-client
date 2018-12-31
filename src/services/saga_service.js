import { put, call } from 'redux-saga/effects'
import { storageSet, storageDestroy } from '../utils/index'

import * as apiService from './api_service'

import * as type from '../constants/action_types'
import * as session from '../constants/session_keys'
import * as navbar from '../constants/navbar_options'


export const createMessage = function* (action, cable) {
  cable.submit(action)
  yield put({ type: type.TYPE_MESSAGE_INPUT, payload: { value: '' } })
}

export const addConversation = function* (action) {
  // THIS MAKES MY JOB AN ASS.
  yield put({ type: type.SET_CURRENT_CONVERSATION, payload: action.payload })
}

export const submitAuth = function* (action) {
  try {
    const auth = yield call(apiService.authenticate, action.payload)
    yield put({ type: type.AUTH_SUCCESS, payload: auth.data })
  } catch (error) {
    yield put({ type: type.AUTH_ERROR, payload: error.response })
  }
}

export const validateAuth = function* (action, cable) {
  try {
    yield call(apiService.validate, { token: action.payload })

    // State
    yield put({ type: type.SET_USER_VALIDATE, payload: true })

    // Socket
    cable.perform(action.payload)

  } catch (error) {
    yield put({ type: type.SET_USER_VALIDATE, payload: false })
  }
}

export const authSuccess = function* (action, cable) {
  // Browser
  storageSet(session.CHAT_USER_TOKEN, action.payload.token)
  storageSet(session.CHAT_USER_DATA, action.payload.data)

  // Socket
  cable.perform(action.payload.token)

  // State
  yield put({ type: type.SET_USER_DATA, payload: { ...action.payload, valid: true }})
}

export const createGroup = (action, cable) => {
  cable.submit(action)
}

export const createUser = function* (action) {
  try {
    const user = yield call(apiService.createUser, action.payload)
    yield put({type: type.AUTH_SUCCESS, payload: user.data })
  } catch (error) {
    yield put({type: type.AUTH_ERROR, payload: error.response })
  }
}

export const setCurrentConversation = function* () {
  document.querySelector('.page__wrapper').classList.toggle('navbar--open')
  yield put({type: type.SET_NAVBAR_OPTION, payload: navbar.CONVERSATIONS })
}

export const logout = (cable) => {
  cable.unsubscribe()
  storageDestroy(session.CHAT_USER_TOKEN)
  storageDestroy(session.CHAT_USER_DATA)
}