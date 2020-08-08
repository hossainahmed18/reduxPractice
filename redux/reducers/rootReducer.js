import postOneReducer from './postOneReducer'
import cakeReducer from './cakeReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
   oneReducer:postOneReducer,
   twoReducer:cakeReducer
})

export default rootReducer