import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === `OPEN_MOBILE_SIDEBAR`) {
    return Object.assign({}, state, {
      hambState: !state.hambState,
    })
  }
  return state
}

const blogStatus = { hambState: false }

const createStore = () => reduxCreateStore(reducer, blogStatus)
export default createStore
