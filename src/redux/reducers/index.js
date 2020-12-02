import { combineReducers } from "redux"

import userReducer from "./Users/userReducer"

const rootReducer = combineReducers({
  userReducer: userReducer
})

export default rootReducer