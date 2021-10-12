import { EPhotoTabs } from '../models/EPhotoTabs'
import { IPhotosState, ActionTypes, ActionTypeTS } from './types'
import { isEmpty } from 'lodash'

const initialState: IPhotosState = {
    photos: [],
	  loading: false,
	  errors: '',
	  page: 1,
	  limit: 10,
	  tab: EPhotoTabs.ALL,
    favorites: {}
}

const fetchPhotos = (state: IPhotosState): IPhotosState => {
  return {
    ...state,
    loading: true,
    errors: ''
  }
}

const fetchPhotosSuccess = (state: IPhotosState, action: ActionTypeTS): IPhotosState => {
  const { photos } = action.payload
  return {
    ...state,
    photos,
    loading: false
  }
}
const fetchPhotosError = (state: IPhotosState, action: ActionTypeTS): IPhotosState => {
  const { errors } = action.payload
  return {
    ...state,
    errors,
    loading: false,
  }
}

const setPagePhotos = (state: IPhotosState, action: ActionTypeTS): IPhotosState => {
  const { page } = action.payload
  return {
    ...state,
    loading: true,
    page
  }
}


const setTabPhotos = (state: IPhotosState, action: ActionTypeTS): IPhotosState => {
  const { tab } = action.payload
  return {
    ...state,
    tab
  }
}

const addFavorite = (state: IPhotosState, action: ActionTypeTS): IPhotosState => {
  const { photo } = action.payload

  const favoritesClone = { ...state.favorites }
  if (!isEmpty(favoritesClone[photo.id])) {
    return {
      ...state
    }
  }

  favoritesClone[photo.id] = photo

  return {
    ...state,
    favorites: favoritesClone
  }
}

const removeFavorite = (state: IPhotosState, action: ActionTypeTS): IPhotosState => {
  const { photo } = action.payload

  const favoritesClone = { ...state.favorites }
  if (isEmpty(favoritesClone[photo.id])) {
    return {
      ...state
    }
  }

  delete favoritesClone[photo.id];

  return {
    ...state,
    favorites: favoritesClone
  }
}


export const photosReducer = (state: IPhotosState = initialState,
  action: ActionTypeTS): IPhotosState => {
	switch (action.type) {
    case ActionTypes.FETCH_PHOTOS:
      return fetchPhotos(state)
    case ActionTypes.FETCH_PHOTOS_SUCCESS:
			return fetchPhotosSuccess(state, action)
    case ActionTypes.FETCH_PHOTOS_ERROR:
      return fetchPhotosError(state, action)
    case ActionTypes.SET_PAGE_PHOTOS:
      return setPagePhotos(state, action)
    case ActionTypes.SET_TAB_PHOTOS:
      return setTabPhotos(state, action)
    case ActionTypes.ADD_FAVORITE:
      return addFavorite(state, action)
    case ActionTypes.REMOVE_FAVORITE:
      return removeFavorite(state, action)
    default:
      return state
	}
}
