import { photosReducer } from 'modules/photos/state/reducers'
import photosSaga from 'modules/photos/state/sagas'
import { IPhotosState } from 'modules/photos/state/types'
import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { Action, MetaAction, PayloadAction, TypeConstant } from 'typesafe-actions'

// The top-level state object
export interface IApplicationState {
	photos: IPhotosState
}

interface IMeta {
	method: string
	route: string
  	payload?: any
}

export interface IMetaAction extends MetaAction<TypeConstant, IMeta> {}
export interface IReducerAction<TPayload>
	extends Action<TypeConstant>,
    PayloadAction<TypeConstant, TPayload> {}

export const rootReducer = combineReducers<IApplicationState>({
	photos: photosReducer,
})

export function* rootSaga() {
	yield all([
    	fork(photosSaga),
	])
}

