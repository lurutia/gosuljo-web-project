import { combineReducers } from 'redux'
import accountReducer from './modules/account/accountSlice'

const rootReducer = combineReducers({
  account: accountReducer,
})

export default rootReducer