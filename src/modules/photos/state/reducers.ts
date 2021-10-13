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
  return {
    ...state,
    errors: action.payload,
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

const toggleFavorite = (state: IPhotosState, action: ActionTypeTS): IPhotosState => {
  const { photo } = action.payload

  const favoritesClone = { ...state.favorites }
  const photosClone = [ ...state.photos ]

  if (!isEmpty(favoritesClone[photo.id])) {
    // remove favorite
    delete favoritesClone[photo.id];
    const photoIndex = photosClone.findIndex(clone => clone.id === photo.id)
    if (photoIndex > -1) {
      photosClone[photoIndex].favorite = false
    }

    return {
      ...state,
      favorites: favoritesClone,
      photos: photosClone
    }
  } else {
    // add favorite
    favoritesClone[photo.id] = photo
    const photoIndex = photosClone.findIndex(clone => clone.id === photo.id)
    if (photoIndex > -1) {
      photosClone[photoIndex].favorite = true
    }

    return {
      ...state,
      favorites: favoritesClone,
      photos: photosClone
    }
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
    case ActionTypes.TOGGLE_FAVORITE:
      return toggleFavorite(state, action)
    case ActionTypes.ADD_FAVORITE:
      return addFavorite(state, action)
    case ActionTypes.REMOVE_FAVORITE:
      return removeFavorite(state, action)
    default:
      return state
	}
}
