import { put, select, call } from 'redux-saga/effects'
import * as actions from './actions'
import { photoService } from '../service/photo.service';
import { Photo } from '../models/photo'
import { IApplicationState, IMetaAction } from 'common/state/ducks';
import { ActionTypes } from './types';

/**
 * @desc Business logic of effect.
 */
export function* handleFetch(action: IMetaAction): Generator {
	const page: any = yield select((state: IApplicationState) =>
		state.photos.page);
	
	const appendToArray = action.type === ActionTypes.NEXT_PAGE_PHOTOS

	try {
		const response: any = yield call(photoService.get, page)

		yield put(actions.fetchPhotosSuccess(response.data as Photo[], appendToArray))
	} catch (error) {
		if (error instanceof Error) {
			yield put(actions.fetchPhotosError(error.stack!))
		} else {
			yield put(actions.fetchPhotosError('An unknown error occured.'))
		}
	}
}
