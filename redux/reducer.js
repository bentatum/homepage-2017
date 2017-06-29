
import { combineReducers } from 'redux'
import { BREAKPOINTS } from '../theme/config'
import { createResponsiveStateReducer } from 'redux-responsive'

export default combineReducers({
  browser: createResponsiveStateReducer(BREAKPOINTS),
})
