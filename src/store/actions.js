import * as types from "./constants"

export const newpluginxxxx_get__read = (new_param, new_param_2) => ({
  type: types.NEWPLUGINXXXX_GET__READ,
  new_param,
  new_param_2
})

export const newpluginxxxx_get__readSucceeded = (response, starter) => ({
  type: types.NEWPLUGINXXXX_GET__READ_SUCCEEDED,
  response,
  starter
})

export const newpluginxxxx_get__readFailed = (error, starter) => ({
  type: types.NEWPLUGINXXXX_GET__READ_FAILED,
  error,
  starter
})
