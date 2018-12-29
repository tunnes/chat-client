import { takeEvery, takeLatest, all } from 'redux-saga/effects'

import * as type from '../../constants/action_types'
import * as sagaService from '../../services/saga_service'

const sagas = function* sagas(cableService) {
  yield all([
    takeEvery(type.CREATE_MESSAGE,
      action => sagaService.createMessage(action, cableService)
    ),

    takeLatest(type.CREATE_CONVERSATION,
      action => sagaService.createConversation(action)
    ),

    takeLatest(type.SUBMIT_AUTH,
      action => sagaService.submitAuth(action)
    ),

    takeLatest(type.VALIDATE_AUTH,
      action => sagaService.validateAuth(action, cableService)
    ),

    takeLatest(type.AUTH_SUCCESS,
      action => sagaService.authSuccess(action, cableService)
    ),

    takeLatest(type.CREATE_GROUP,
      action => sagaService.createGroup(action, cableService)
    ),

    takeLatest(type.CREATE_USER,
      action => sagaService.createUser(action)
    ),

    takeEvery(type.SET_CURRENT_CONVERSATION,
      () => sagaService.setCurrentConversation()
    ),

    takeEvery(type.LOGOUT,
      () => sagaService.logout()
    )
  ])
}

export default sagas