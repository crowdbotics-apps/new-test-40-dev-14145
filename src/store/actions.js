import * as types from "./constants"

export const newpluginxxxx_post__create = (
  new_param,
  new_param_2,
  new_param_4,
  data
) => ({
  type: types.NEWPLUGINXXXX_POST__CREATE,
  new_param,
  new_param_2,
  new_param_4,
  data
})

export const newpluginxxxx_post__createSucceeded = (response, starter) => ({
  type: types.NEWPLUGINXXXX_POST__CREATE_SUCCEEDED,
  response,
  starter
})

export const newpluginxxxx_post__createFailed = (error, starter) => ({
  type: types.NEWPLUGINXXXX_POST__CREATE_FAILED,
  error,
  starter
})
