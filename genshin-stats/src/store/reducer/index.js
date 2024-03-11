import { combineReducers } from "redux"
import currentUserReducer from "./getUser"


const rootReducer = combineReducers({
  user: currentUserReducer
})

export default rootReducer

