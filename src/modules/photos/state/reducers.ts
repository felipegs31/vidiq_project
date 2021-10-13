import { EPhotoTabs } from '../models/EPhotoTabs'
import { IPhotosState, ActionTypes, ActionTypeTS } from './types'
import { isEmpty } from 'lodash'
import { Photo } from '../models/photo'

export const initialState: IPhotosState = {
    photos: [],
	  loading: false,
    loadingNextPage: false,
	  errors: '',
	  page: 0,
	  tab: EPhotoTabs.ALL,
    favorites: {}
}

const fetchPhotos = (state: IPhotosState): IPhotosState => {

  const favoritesLocalStorate = localStorage.getItem('favorites') || '{}'
  const favorites = JSON.parse(favoritesLocalStorate)

  return {
    ...state,
    loading: true,
    favorites,
    errors: ''
  }
}

const fetchPhotosSuccess = (state: IPhotosState, action: ActionTypeTS): IPhotosState => {
  let { photos, appendToArray } = action.payload

  photos.forEach((photo: Photo) => {
    photo.favorite = !isEmpty(state.favorites[photo.id])
  });

  if (appendToArray) {
    photos = [ ...state.photos, ...photos]
  }

  return {
    ...state,
    photos,
    loadingNextPage: false,
    loading: false
  }
}
const fetchPhotosError = (state: IPhotosState, action: ActionTypeTS): IPhotosState => {
  return {
    ...state,
    errors: action.payload,
    loadingNextPage: false,
    loading: false,
  }
}

const nextPagePhotos = (state: IPhotosState): IPhotosState => {

  return {
    ...state,
    loadingNextPage: true,
    page: state.page + 1
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

    localStorage.setItem('favorites', JSON.stringify(favoritesClone))

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

    localStorage.setItem('favorites', JSON.stringify(favoritesClone))

    return {
      ...state,
      favorites: favoritesClone,
      photos: photosClone
    }
  }

  
}


export const photosReducer = (
  state: IPhotosState = initialState,
  action: ActionTypeTS 
): IPhotosState => {
	switch (action.type) {
    case ActionTypes.FETCH_PHOTOS:
      return fetchPhotos(state)
    case ActionTypes.FETCH_PHOTOS_SUCCESS:
			return fetchPhotosSuccess(state, action)
    case ActionTypes.FETCH_PHOTOS_ERROR:
      return fetchPhotosError(state, action)
    case ActionTypes.NEXT_PAGE_PHOTOS:
      return nextPagePhotos(state)
    case ActionTypes.SET_TAB_PHOTOS:
      return setTabPhotos(state, action)
    case ActionTypes.TOGGLE_FAVORITE:
      return toggleFavorite(state, action)
    default:
      return state
	}
}
