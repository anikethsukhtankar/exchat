import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import messages from './messages'
import channels from './channels'
import session from './session'
import local from './local'
import errors from './errors'

const rootReducer = combineReducers({
  messages,
  channels,
  session,
  local,
  errors,
  routing: routerReducer
})

export default rootReducer
