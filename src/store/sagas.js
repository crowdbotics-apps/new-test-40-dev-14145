import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* newpluginxxxx_post__createWorker(action) {
  try {
    const result = yield call(apiService.newpluginxxxx_post__create, action)
    yield put(actions.newpluginxxxx_post__createSucceeded(result, action))
  } catch (err) {
    yield put(actions.newpluginxxxx_post__createFailed(err, action))
  }
}
function* newpluginxxxx_post__createWatcher() {
  yield takeEvery(
    types.NEWPLUGINXXXX_POST__CREATE,
    newpluginxxxx_post__createWorker
  )
}
export default function* rootSaga() {
  const sagas = [newpluginxxxx_post__createWatcher]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
