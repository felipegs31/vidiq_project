import { ActionTypes } from './types'
import { all, fork, takeLatest } from 'redux-saga/effects'
import { handleFetch } from './effects'

/**
 * @desc Watches every specified action and runs effect method and passes action args to it
 */
function* watchFetchRequest(): Generator {
	yield takeLatest([
		ActionTypes.FETCH_PHOTOS,
		ActionTypes.NEXT_PAGE_PHOTOS
	], handleFetch)
}

/**
 * @desc saga init, forks in effects, other sagas
 */
export default function* photosSaga() {
	yield all([
		fork(watchFetchRequest),
	])
}
