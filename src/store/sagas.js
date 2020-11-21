import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* newpluginxxxx_get__readWorker(action) {
  try {
    const result = yield call(apiService.newpluginxxxx_get__read, action)
    yield put(actions.newpluginxxxx_get__readSucceeded(result, action))
  } catch (err) {
    yield put(actions.newpluginxxxx_get__readFailed(err, action))
  }
}
function* newpluginxxxx_get__readWatcher() {
  yield takeEvery(types.NEWPLUGINXXXX_GET__READ, newpluginxxxx_get__readWorker)
}
export default function* rootSaga() {
  const sagas = [newpluginxxxx_get__readWatcher]
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
