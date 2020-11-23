import * as types from "./constants"

const initialState = { newPluginXXXX: [] }

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.NEWPLUGINXXXX_POST__CREATE:
    case types.NEWPLUGINXXXX_POST__CREATE_SUCCEEDED:
    case types.NEWPLUGINXXXX_POST__CREATE_FAILED:
      return Object.assign({}, state, {
        newPluginXXXX: [...state.newPluginXXXX, action.response]
      })
    default:
      return state
  }
}
