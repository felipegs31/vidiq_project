import { put, select } from 'redux-saga/effects'
import * as actions from './actions'
import { photoService } from '../service/photo.service';
import { Photo } from '../models/photo'
import { IApplicationState } from 'common/state/ducks';

/**
 * @desc Business logic of effect.
 */
export function* handleFetch(): Generator {
  const page: any = yield select((state: IApplicationState) =>
    state.photos.page);

	try {
		const response =  yield photoService.get(page)
    yield put(actions.fetchPhotosSuccess(response as Photo[]))
	} catch (error) {
		if (error instanceof Error) {
			yield put(actions.fetchPhotosError(error.stack!))
		} else {
			yield put(actions.fetchPhotosError('An unknown error occured.'))
		}
	}
}
