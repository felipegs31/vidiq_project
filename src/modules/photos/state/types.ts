import { Action, PayloadAction, TypeConstant } from 'typesafe-actions'
import { EPhotoTabs } from '../models/EPhotoTabs'
import { Photo } from '../models/photo'

export const ActionTypes = {
	FETCH_PHOTOS: '@@photos/FETCH_PHOTOS',
	FETCH_PHOTOS_SUCCESS: '@@photos/FETCH_PHOTOS_SUCCESS',
	FETCH_PHOTOS_ERROR: '@@photos/FETCH_PHOTOS_ERROR',

	SET_PAGE_PHOTOS: '@@photos/SET_PAGE_PHOTOS',

	ADD_FAVORITE: '@@photos/ADD_FAVORITE',
	TOGGLE_FAVORITE: '@@photos/TOGGLE_FAVORITE',
	REMOVE_FAVORITE: '@@photos/REMOVE_FAVORITE',

	SET_TAB_PHOTOS: '@@photos/SET_TAB_PHOTOS',

	FETCH_FAVORITE_PHOTOS: '@@photos/FETCH_FAVORITE_PHOTOS',
}

export interface IPhotosState {
	readonly photos: Photo[]
	readonly loading: boolean
	readonly errors: string
	readonly page: number
	readonly limit: number
	readonly tab: EPhotoTabs,
	readonly favorites: { [id: string] : Photo } 
}

export type ActionTypeTS =
	Action<TypeConstant> &
	PayloadAction<TypeConstant, any>
	