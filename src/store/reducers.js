import * as types from "./constants"

const initialState = { newPluginXXXX: [] }

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.NEWPLUGINXXXX_GET__READ:
    case types.NEWPLUGINXXXX_GET__READ_SUCCEEDED:
    case types.NEWPLUGINXXXX_GET__READ_FAILED:
      return Object.assign({}, state, {
        newPluginXXXX: [...state.newPluginXXXX, action.response]
      })
    default:
      return state
  }
}
